export type LevelTitle = 'Beginner 💼' | 'Saver 💰' | 'Investor 📈' | 'Wealth Builder 🌟';

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadlineMonths: number;
  type: 'shortTerm' | 'longTerm';
  category?: string;
  createdAt?: string;
}

export interface UserGoals {
  shortTerm: FinancialGoal;
  longTerm: FinancialGoal;
  additionalGoals?: FinancialGoal[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  city?: string;
  monthlyIncome?: number;
  avatar: string;
  levelTitle: LevelTitle;
  xp: number;
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  goals?: UserGoals;
  completedLessons: string[]; // lesson IDs
  quizScores: Record<string, number>; // lessonId -> score (0-3)
  completedChallenges: string[]; // challenge IDs completed today
  createdAt: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionHinglish?: string;
  options: string[];
  optionsHinglish?: string[];
  correctAnswerIndex: number;
  explanation: string;
  explanationHinglish?: string;
}

export interface Lesson {
  id: string;
  title: string;
  titleHinglish: string;
  category: 'Budgeting' | 'Saving' | 'Investing' | 'Tax' | 'Insurance' | 'Goals' | 'Security' | 'Debt' | 'Real Estate' | 'Crypto' | 'Career' | 'Retirement' | 'Entrepreneurship' | 'Banking' | 'Economics';
  readTime: string;
  xpReward: number;
  order: number;
  content: string[];
  contentHinglish: string[];
  takeaways: string[];
  takeawaysHinglish: string[];
  quiz: QuizQuestion[];
}

export interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  xp: number;
  streak: number;
  levelTitle: LevelTitle;
  isCurrentUser?: boolean;
}

export interface DailyChallenge {
  id: string;
  text: string;
  textHinglish: string;
  xpReward: number;
  completed?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface SavingsTransaction {
  id: string;
  userId: string;
  goalType: 'shortTerm' | 'longTerm';
  goalId?: string;
  amount: number;
  note?: string;
  date: string;
}
