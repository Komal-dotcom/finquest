import fs from 'fs';
import path from 'path';
import { User, Lesson, LeaderboardUser, DailyChallenge, LevelTitle, SavingsTransaction } from '../src/types';
import { INITIAL_LESSONS, INITIAL_LEADERBOARD_USERS, INITIAL_DAILY_CHALLENGES } from '../src/data/initialData';
import { getEmojiAvatarSvg } from '../src/utils/avatar';
import { firestoreDb } from './firebase';

interface DbSchema {
  users: User[];
  lessons: Lesson[];
  dailyChallenges: DailyChallenge[];
  leaderboard: LeaderboardUser[];
  savingsTransactions: SavingsTransaction[];
}

const DB_FILE_PATH = path.join(process.cwd(), 'data', 'db.json');

// Calculate level title based on XP rules
export function calculateLevelTitle(xp: number): LevelTitle {
  if (xp >= 1001) return 'Wealth Builder 🌟';
  if (xp >= 501) return 'Investor 📈';
  if (xp >= 201) return 'Saver 💰';
  return 'Beginner 💼';
}

class JsonDatabase {
  private data: DbSchema = {
    users: [],
    lessons: [],
    dailyChallenges: [],
    leaderboard: [],
    savingsTransactions: []
  };

  constructor() {
    this.init();
  }

  private async init() {
    try {
      const dataDir = path.dirname(DB_FILE_PATH);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      if (fs.existsSync(DB_FILE_PATH)) {
        const fileContent = fs.readFileSync(DB_FILE_PATH, 'utf-8');
        this.data = JSON.parse(fileContent);
        if (!this.data.lessons || this.data.lessons.length < INITIAL_LESSONS.length) {
          this.data.lessons = INITIAL_LESSONS;
          this.save();
        }
      } else {
        this.seedInitialData();
      }

      // Sync data from Firestore if available
      await this.syncFromFirestore();
    } catch (err) {
      console.error('Error initializing DB, falling back to initial seed:', err);
      this.seedInitialData();
    }
  }

  public async syncFromFirestore() {
    if (!firestoreDb) return;

    try {
      // 1. Fetch Users
      const usersSnap = await firestoreDb.collection('users').get();
      if (!usersSnap.empty) {
        const firestoreUsers: User[] = [];
        usersSnap.forEach(doc => {
          firestoreUsers.push(doc.data() as User);
        });
        if (firestoreUsers.length > 0) {
          // Merge or replace users
          for (const fu of firestoreUsers) {
            const idx = this.data.users.findIndex(u => u.id === fu.id);
            if (idx >= 0) {
              this.data.users[idx] = { ...this.data.users[idx], ...fu };
            } else {
              this.data.users.push(fu);
            }
          }
        }
      } else {
        // Firestore users collection is empty -> push local seed users to Firestore
        for (const user of this.data.users) {
          await firestoreDb.collection('users').doc(user.id).set(user, { merge: true });
        }
      }

      // 2. Fetch Savings Transactions
      const txSnap = await firestoreDb.collection('savingsTransactions').get();
      if (!txSnap.empty) {
        const txs: SavingsTransaction[] = [];
        txSnap.forEach(doc => txs.push(doc.data() as SavingsTransaction));
        this.data.savingsTransactions = txs;
      }

      this.save();
      console.log('✅ Firestore sync complete! Users loaded:', this.data.users.length);
    } catch (err: any) {
      console.log('ℹ️ Local storage mode active (using data/db.json).');
    }
  }

  public seedInitialData() {
    this.data.lessons = INITIAL_LESSONS;
    this.data.dailyChallenges = INITIAL_DAILY_CHALLENGES;
    this.data.leaderboard = INITIAL_LEADERBOARD_USERS;

    // Seed 2 default sample users for testing/demo
    const demoUser1: User = {
      id: 'demo-user-1',
      name: 'Rahul Sharma',
      email: 'rahul@finquest.com',
      city: 'Mumbai',
      monthlyIncome: 45000,
      avatar: getEmojiAvatarSvg('😎', '#2563eb'),
      levelTitle: 'Saver 💰',
      xp: 320,
      streak: 7,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedLessons: ['lesson-1', 'lesson-2'],
      quizScores: { 'lesson-1': 3, 'lesson-2': 2 },
      completedChallenges: ['ch-1'],
      createdAt: new Date().toISOString(),
      goals: {
        shortTerm: {
          id: 'st-demo-1',
          name: 'Save ₹10,000 for Emergency Fund',
          targetAmount: 10000,
          currentAmount: 3200,
          deadlineMonths: 3,
          type: 'shortTerm',
          category: 'Emergency Fund',
          createdAt: new Date().toISOString()
        },
        longTerm: {
          id: 'lt-demo-1',
          name: 'Build ₹5 Lakh Investment Portfolio',
          targetAmount: 500000,
          currentAmount: 85000,
          deadlineMonths: 24,
          type: 'longTerm',
          category: 'Investment Portfolio',
          createdAt: new Date().toISOString()
        },
        additionalGoals: [
          {
            id: 'st-demo-2',
            name: 'New Smartphone Purchase',
            targetAmount: 25000,
            currentAmount: 12000,
            deadlineMonths: 4,
            type: 'shortTerm',
            category: 'Gadget / Shopping',
            createdAt: new Date().toISOString()
          }
        ]
      }
    };

    const demoUser2: User = {
      id: 'demo-user-2',
      name: 'Pooja Verma',
      email: 'pooja@finquest.com',
      city: 'Delhi',
      monthlyIncome: 60000,
      avatar: getEmojiAvatarSvg('🤩', '#ec4899'),
      levelTitle: 'Investor 📈',
      xp: 650,
      streak: 12,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedLessons: ['lesson-1', 'lesson-2', 'lesson-3', 'lesson-4'],
      quizScores: { 'lesson-1': 3, 'lesson-2': 3, 'lesson-3': 3, 'lesson-4': 2 },
      completedChallenges: ['ch-2', 'ch-3'],
      createdAt: new Date().toISOString(),
      goals: {
        shortTerm: {
          id: 'demo2-st',
          name: 'Buy new work laptop',
          targetAmount: 60000,
          currentAmount: 25000,
          deadlineMonths: 6,
          type: 'shortTerm',
          createdAt: new Date().toISOString()
        },
        longTerm: {
          id: 'demo2-lt',
          name: 'Ghar ke liye Down Payment (₹10 Lakh)',
          targetAmount: 1000000,
          currentAmount: 320000,
          deadlineMonths: 36,
          type: 'longTerm',
          createdAt: new Date().toISOString()
        }
      }
    };

    this.data.users = [demoUser1, demoUser2];
    this.save();
  }

  public save() {
    try {
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to persist DB to file:', err);
    }
  }

  // User Operations
  public findUserByEmail(email: string): User | undefined {
    return this.data.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  }

  public findUserById(id: string): User | undefined {
    return this.data.users.find(u => u.id === id);
  }

  public createUser(user: User): User {
    this.data.users.push(user);
    this.save();

    // Persist async to Firestore
    if (firestoreDb) {
      firestoreDb.collection('users').doc(user.id).set(user, { merge: true })
        .catch(() => {});
    }

    return user;
  }

  public updateUser(id: string, updates: Partial<User>): User | null {
    const idx = this.data.users.findIndex(u => u.id === id);
    if (idx === -1) return null;

    const existing = this.data.users[idx];
    const updatedUser: User = {
      ...existing,
      ...updates
    };

    // Update level title dynamically based on updated XP
    updatedUser.levelTitle = calculateLevelTitle(updatedUser.xp);

    this.data.users[idx] = updatedUser;
    this.save();

    // Persist async to Firestore
    if (firestoreDb) {
      firestoreDb.collection('users').doc(id).set(updatedUser, { merge: true })
        .catch(() => {});
    }

    return updatedUser;
  }

  // Streak update logic
  public checkAndUpdateStreak(userId: string): User | null {
    const user = this.findUserById(userId);
    if (!user) return null;

    const todayStr = new Date().toISOString().split('T')[0];
    if (user.lastActiveDate === todayStr) {
      return user; // Already active today
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    let newStreak = user.streak;
    if (user.lastActiveDate === yesterdayStr) {
      newStreak += 1;
    } else {
      newStreak = 1; // Reset to 1 day streak
    }

    // Award +10 XP for daily activity check
    const newXp = user.xp + 10;

    return this.updateUser(userId, {
      streak: newStreak,
      lastActiveDate: todayStr,
      xp: newXp
    });
  }

  // Lesson Operations
  public getLessons(): Lesson[] {
    return this.data.lessons;
  }

  public getLessonById(id: string): Lesson | undefined {
    return this.data.lessons.find(l => l.id === id);
  }

  // Leaderboard Operations
  public getLeaderboard(currentUserId?: string): LeaderboardUser[] {
    // Combine all real users + seed leaderboard users
    const allEntries: LeaderboardUser[] = this.data.users.map(u => ({
      rank: 0,
      id: u.id,
      name: u.name,
      avatar: u.avatar,
      xp: u.xp,
      streak: u.streak,
      levelTitle: u.levelTitle,
      isCurrentUser: u.id === currentUserId
    }));

    // Add initial dummy users if not present
    for (const lbUser of this.data.leaderboard) {
      if (!allEntries.some(e => e.id === lbUser.id)) {
        allEntries.push({ ...lbUser, isCurrentUser: lbUser.id === currentUserId });
      }
    }

    // Sort descending by XP
    allEntries.sort((a, b) => b.xp - a.xp);

    // Assign ranks
    return allEntries.slice(0, 10).map((item, index) => ({
      ...item,
      rank: index + 1
    }));
  }

  // Savings Transactions
  public addSavingsTransaction(tx: SavingsTransaction) {
    this.data.savingsTransactions.push(tx);
    this.save();

    // Persist async to Firestore
    if (firestoreDb) {
      firestoreDb.collection('savingsTransactions').doc(tx.id).set(tx, { merge: true })
        .catch(() => {});
    }
  }
}

export const db = new JsonDatabase();
