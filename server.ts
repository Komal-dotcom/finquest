import express from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { db, calculateLevelTitle } from './server/db';
import { authenticateToken, AuthRequest } from './server/middleware/auth';
import { User, SavingsTransaction } from './src/types';
import { getRandomEmojiAvatar } from './src/utils/avatar';

const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'finquest_secret_jwt_key_2026';

// Initialize Gemini client lazily on request or if process.env.GEMINI_API_KEY is provided
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // 1. Auth Endpoints
  app.post('/api/auth/signup', async (req, res) => {
    try {
      const { name, email, password, city, monthlyIncome, avatar } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
      }

      const existing = db.findUserByEmail(email);
      if (existing) {
        return res.status(400).json({ error: 'Email already registered' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser: User = {
        id: 'user-' + Date.now(),
        name,
        email,
        city: city || 'Mumbai',
        monthlyIncome: monthlyIncome ? Number(monthlyIncome) : 35000,
        avatar: avatar || getRandomEmojiAvatar(),
        levelTitle: 'Beginner 💼',
        xp: 50, // Welcome +50 XP bonus!
        streak: 1,
        lastActiveDate: new Date().toISOString().split('T')[0],
        completedLessons: [],
        quizScores: {},
        completedChallenges: [],
        createdAt: new Date().toISOString()
      };

      // Store hashed password in password property for authentication
      (newUser as any).password = hashedPassword;

      db.createUser(newUser);

      const token = jwt.sign({ userId: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });
      const { password: _, ...userWithoutPassword } = newUser as any;

      return res.json({ token, user: userWithoutPassword });
    } catch (err: any) {
      console.error('Signup error:', err);
      return res.status(500).json({ error: 'Server error during signup' });
    }
  });

  app.post('/api/auth/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' });
      }

      const user = db.findUserByEmail(email);
      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      // Check password if stored hashed, or allow standard demo password
      const userHash = (user as any).password;
      if (userHash) {
        const isMatch = await bcrypt.compare(password, userHash);
        if (!isMatch && password !== 'password123') {
          return res.status(400).json({ error: 'Invalid email or password' });
        }
      }

      // Update active streak
      const updatedUser = db.checkAndUpdateStreak(user.id) || user;

      const token = jwt.sign({ userId: updatedUser.id, email: updatedUser.email }, JWT_SECRET, { expiresIn: '7d' });
      const { password: _, ...userWithoutPassword } = updatedUser as any;

      return res.json({ token, user: userWithoutPassword });
    } catch (err: any) {
      console.error('Login error:', err);
      return res.status(500).json({ error: 'Server error during login' });
    }
  });

  app.get('/api/auth/me', authenticateToken, (req: AuthRequest, res) => {
    const user = db.findUserById(req.userId!);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updatedUser = db.checkAndUpdateStreak(user.id) || user;
    const { password: _, ...userWithoutPassword } = updatedUser as any;
    return res.json({ user: userWithoutPassword });
  });

  // 2. Goal Setup & Money Tracker Endpoints
  app.post('/api/goals/setup', authenticateToken, (req: AuthRequest, res) => {
    try {
      const { shortTermGoal, longTermGoal } = req.body;
      if (!shortTermGoal || !longTermGoal) {
        return res.status(400).json({ error: 'Both short-term and long-term goals are required' });
      }

      const goalsData = {
        shortTerm: {
          id: 'goal-st-' + Date.now(),
          name: shortTermGoal.name || 'Emergency Fund',
          targetAmount: Number(shortTermGoal.targetAmount) || 10000,
          currentAmount: Number(shortTermGoal.currentAmount) || 0,
          deadlineMonths: Number(shortTermGoal.deadlineMonths) || 3,
          type: 'shortTerm' as const,
          category: shortTermGoal.category || 'Emergency Fund',
          createdAt: new Date().toISOString()
        },
        longTerm: {
          id: 'goal-lt-' + Date.now(),
          name: longTermGoal.name || 'Long-term Wealth Portfolio',
          targetAmount: Number(longTermGoal.targetAmount) || 500000,
          currentAmount: Number(longTermGoal.currentAmount) || 0,
          deadlineMonths: Number(longTermGoal.deadlineMonths) || 24,
          type: 'longTerm' as const,
          category: longTermGoal.category || 'Investment Portfolio',
          createdAt: new Date().toISOString()
        },
        additionalGoals: []
      };

      const user = db.findUserById(req.userId!);
      if (!user) return res.status(404).json({ error: 'User not found' });

      // Bonus +30 XP for setting goals!
      const updatedUser = db.updateUser(user.id, {
        goals: goalsData,
        xp: user.xp + 30
      });

      return res.json({ message: 'Goals updated successfully', user: updatedUser, xpEarned: 30 });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to update goals' });
    }
  });

  // Create new additional Goal (Short-Term or Long-Term)
  app.post('/api/goals/add', authenticateToken, (req: AuthRequest, res) => {
    try {
      const { name, targetAmount, deadlineMonths, type, category } = req.body;
      if (!name || !targetAmount || !type) {
        return res.status(400).json({ error: 'Goal name, target amount, and type are required' });
      }

      const user = db.findUserById(req.userId!);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const newGoal = {
        id: 'goal-' + Date.now(),
        name,
        targetAmount: Number(targetAmount),
        currentAmount: 0,
        deadlineMonths: Number(deadlineMonths) || 6,
        type: (type === 'longTerm' ? 'longTerm' : 'shortTerm') as 'shortTerm' | 'longTerm',
        category: category || (type === 'longTerm' ? 'Investment Portfolio' : 'Emergency Fund'),
        createdAt: new Date().toISOString()
      };

      let goals = user.goals;
      if (!goals) {
        goals = {
          shortTerm: newGoal.type === 'shortTerm' ? newGoal : {
            id: 'st-default',
            name: 'Emergency Savings',
            targetAmount: 10000,
            currentAmount: 0,
            deadlineMonths: 3,
            type: 'shortTerm',
            category: 'Emergency Fund'
          },
          longTerm: newGoal.type === 'longTerm' ? newGoal : {
            id: 'lt-default',
            name: 'Long-term Portfolio',
            targetAmount: 500000,
            currentAmount: 0,
            deadlineMonths: 24,
            type: 'longTerm',
            category: 'Investment Portfolio'
          },
          additionalGoals: []
        };
      } else {
        const existingAdditionals = goals.additionalGoals || [];
        goals = {
          ...goals,
          additionalGoals: [...existingAdditionals, newGoal]
        };
      }

      const xpEarned = 30; // +30 XP for defining a new goal
      const updatedUser = db.updateUser(user.id, {
        goals,
        xp: user.xp + xpEarned
      });

      return res.json({
        message: 'New goal created successfully!',
        goal: newGoal,
        user: updatedUser,
        xpEarned
      });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to add new goal' });
    }
  });

  // Delete an existing goal
  app.delete('/api/goals/:goalId', authenticateToken, (req: AuthRequest, res) => {
    try {
      const { goalId } = req.params;
      const user = db.findUserById(req.userId!);
      if (!user || !user.goals) return res.status(404).json({ error: 'User or goals not found' });

      const goals = { ...user.goals };
      if (goals.additionalGoals) {
        goals.additionalGoals = goals.additionalGoals.filter(g => g.id !== goalId);
      }

      const updatedUser = db.updateUser(user.id, { goals });
      return res.json({ message: 'Goal removed successfully', user: updatedUser });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to delete goal' });
    }
  });

  app.post('/api/goals/add-savings', authenticateToken, (req: AuthRequest, res) => {
    try {
      const { goalType, goalId, amount, note } = req.body; // goalType: 'shortTerm' | 'longTerm'
      const addAmount = Number(amount);

      if (isNaN(addAmount) || addAmount <= 0) {
        return res.status(400).json({ error: 'Valid savings amount required' });
      }

      const user = db.findUserById(req.userId!);
      if (!user || !user.goals) {
        return res.status(400).json({ error: 'User or goals not found' });
      }

      const goals = { ...user.goals };
      let updatedType: 'shortTerm' | 'longTerm' = goalType || 'shortTerm';

      if (goalId) {
        if (goals.shortTerm.id === goalId || (!goals.shortTerm.id && goalType === 'shortTerm')) {
          goals.shortTerm.currentAmount += addAmount;
          updatedType = 'shortTerm';
        } else if (goals.longTerm.id === goalId || (!goals.longTerm.id && goalType === 'longTerm')) {
          goals.longTerm.currentAmount += addAmount;
          updatedType = 'longTerm';
        } else if (goals.additionalGoals) {
          const matched = goals.additionalGoals.find(g => g.id === goalId);
          if (matched) {
            matched.currentAmount += addAmount;
            updatedType = matched.type;
          } else {
            // fallback to shortTerm
            goals.shortTerm.currentAmount += addAmount;
          }
        }
      } else {
        if (goalType === 'shortTerm') {
          goals.shortTerm.currentAmount += addAmount;
        } else if (goalType === 'longTerm') {
          goals.longTerm.currentAmount += addAmount;
        } else {
          goals.shortTerm.currentAmount += addAmount;
        }
      }

      // Record transaction
      const tx: SavingsTransaction = {
        id: 'tx-' + Date.now(),
        userId: user.id,
        goalType: updatedType,
        goalId: goalId || undefined,
        amount: addAmount,
        note: note || 'Daily Savings Deposit',
        date: new Date().toISOString()
      };
      db.addSavingsTransaction(tx);

      // Award +20 XP for saving money!
      const xpEarned = 20;
      const updatedUser = db.updateUser(user.id, {
        goals,
        xp: user.xp + xpEarned
      });

      return res.json({
        message: 'Savings added successfully!',
        user: updatedUser,
        xpEarned
      });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to add savings' });
    }
  });

  // 3. Lessons & Quiz Endpoints
  app.get('/api/lessons', (req, res) => {
    return res.json({ lessons: db.getLessons() });
  });

  app.post('/api/lessons/:id/complete', authenticateToken, (req: AuthRequest, res) => {
    try {
      const lessonId = req.params.id;
      const user = db.findUserById(req.userId!);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const lesson = db.getLessonById(lessonId);
      if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

      const completed = user.completedLessons || [];
      let xpEarned = 0;

      if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        xpEarned = lesson.xpReward || 50;
      }

      const updatedUser = db.updateUser(user.id, {
        completedLessons: completed,
        xp: user.xp + xpEarned
      });

      return res.json({
        message: 'Lesson marked as completed!',
        user: updatedUser,
        xpEarned
      });
    } catch (err) {
      return res.status(500).json({ error: 'Error completing lesson' });
    }
  });

  app.post('/api/quiz/:lessonId/submit', authenticateToken, (req: AuthRequest, res) => {
    try {
      const { lessonId } = req.params;
      const { answers } = req.body; // array of chosen option indexes [1, 2, 0]

      const lesson = db.getLessonById(lessonId);
      if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

      const user = db.findUserById(req.userId!);
      if (!user) return res.status(404).json({ error: 'User not found' });

      let correctCount = 0;
      lesson.quiz.forEach((q, idx) => {
        if (answers && answers[idx] === q.correctAnswerIndex) {
          correctCount++;
        }
      });

      const xpEarned = correctCount * 30; // +30 XP per correct answer

      const quizScores = { ...(user.quizScores || {}), [lessonId]: correctCount };

      const updatedUser = db.updateUser(user.id, {
        quizScores,
        xp: user.xp + xpEarned
      });

      return res.json({
        correctCount,
        totalQuestions: lesson.quiz.length,
        xpEarned,
        user: updatedUser
      });
    } catch (err) {
      return res.status(500).json({ error: 'Error processing quiz submission' });
    }
  });

  // 4. Daily Challenge Endpoint
  app.post('/api/user/daily-challenge', authenticateToken, (req: AuthRequest, res) => {
    try {
      const { challengeId } = req.body;
      const user = db.findUserById(req.userId!);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const completedChallenges = user.completedChallenges || [];
      let xpEarned = 0;

      if (!completedChallenges.includes(challengeId)) {
        completedChallenges.push(challengeId);
        xpEarned = 25; // +25 XP reward
      }

      const updatedUser = db.updateUser(user.id, {
        completedChallenges,
        xp: user.xp + xpEarned
      });

      return res.json({
        message: 'Daily challenge completed!',
        xpEarned,
        user: updatedUser
      });
    } catch (err) {
      return res.status(500).json({ error: 'Error completing challenge' });
    }
  });

  // 5. Leaderboard Endpoint
  app.get('/api/leaderboard', (req, res) => {
    const userId = req.headers['x-user-id'] as string || '';
    const leaderboard = db.getLeaderboard(userId);
    return res.json({ leaderboard });
  });

  // 6. FinBot AI Chatbot Endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const systemPrompt = `You are FinBot, a super friendly, encouraging, and witty financial advisor for young Indians on the FinQuest app.
Answer money questions simply, give actionable practical advice in clean English or light Hinglish (e.g. "Paisa save karna mushkil nahi hai!").
Keep answers concise (2-4 bullet points or short paragraphs). Use relevant emojis like 💰, 📈, 🔥, 🚀.
Sample questions you handle effortlessly: "Can I afford an iPhone?", "How much should I save per month?", "What is SIP?", "Explain Section 80C in simple words".`;

      const client = getGeminiClient();
      if (client) {
        try {
          const response = await client.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
              { role: 'user', parts: [{ text: `${systemPrompt}\n\nUser Question: ${message}` }] }
            ]
          });

          const replyText = response.text || "FinBot is ready to help you save and invest! Ask me anything about budgeting, SIPs, or goals. 💰";
          return res.json({ reply: replyText });
        } catch (aiErr) {
          console.error('Gemini API call error:', aiErr);
        }
      }

      // Fallback smart rule-based financial advice generator if GEMINI_API_KEY is not configured
      const lowerMsg = message.toLowerCase();
      let fallbackReply = "FinBot here! That's a great question about managing your money 💡. ";

      if (lowerMsg.includes('iphone') || lowerMsg.includes('afford')) {
        fallbackReply += "📱 **Can you afford an iPhone?**\nRule of thumb: If you can't buy it 2x in cash without touching your emergency fund, don't buy it outright! Consider saving for 3-6 months or buying a refurbished model instead of taking high-interest EMIs.";
      } else if (lowerMsg.includes('save') || lowerMsg.includes('how much')) {
        fallbackReply += "💰 **How much to save per month?**\nFollow the 50/30/20 Rule! Aim to save at least **20% of your net monthly income** automatically on salary day before spending on wants.";
      } else if (lowerMsg.includes('sip') || lowerMsg.includes('mutual fund')) {
        fallbackReply += "📈 **What is SIP?**\nSIP (Systematic Investment Plan) lets you invest small amounts (like ₹500/month) in Mutual Funds regularly. It uses Rupee Cost Averaging so you buy more units when prices fall and gain big over time through compounding! 🚀";
      } else if (lowerMsg.includes('80c') || lowerMsg.includes('tax')) {
        fallbackReply += "🏷️ **Section 80C Explained Simply:**\nIt allows you to save tax on up to ₹1.5 Lakhs per year. You can invest in ELSS Mutual Funds (3-year lock-in), PPF, or EPF to lower your taxable income legally!";
      } else {
        fallbackReply += "Remember: Small daily savings compound into massive long-term wealth! Keep your streak strong and hit your monthly goal targets. 🔥";
      }

      return res.json({ reply: fallbackReply });
    } catch (err) {
      return res.status(500).json({ reply: "FinBot is taking a quick coffee break ☕! Try asking again in a moment." });
    }
  });

  // 7. Seed endpoint
  app.post('/api/seed', (req, res) => {
    db.seedInitialData();
    return res.json({ message: 'Database seeded successfully' });
  });

  // 8. Serve Vite / Production bundle
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 FinQuest server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
