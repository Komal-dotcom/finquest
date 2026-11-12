import { User, Lesson, LeaderboardUser, UserGoals } from '../types';

const TOKEN_KEY = 'finquest_jwt_token';

export function getAuthToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAuthToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeAuthToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {})
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(endpoint, {
    ...options,
    headers
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'API Request failed');
  }

  return data;
}

export const api = {
  // Auth
  async signup(data: { name: string; email: string; password: string; city?: string; monthlyIncome?: number }) {
    const res = await apiFetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    if (res.token) setAuthToken(res.token);
    return res as { token: string; user: User };
  },

  async login(data: { email: string; password: string }) {
    const res = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    if (res.token) setAuthToken(res.token);
    return res as { token: string; user: User };
  },

  async getMe() {
    return apiFetch('/api/auth/me') as Promise<{ user: User }>;
  },

  // Goals
  async setupGoals(goals: { shortTermGoal: any; longTermGoal: any }) {
    return apiFetch('/api/goals/setup', {
      method: 'POST',
      body: JSON.stringify(goals)
    }) as Promise<{ message: string; user: User; xpEarned: number }>;
  },

  async addGoal(data: { name: string; targetAmount: number; deadlineMonths: number; type: 'shortTerm' | 'longTerm'; category?: string }) {
    return apiFetch('/api/goals/add', {
      method: 'POST',
      body: JSON.stringify(data)
    }) as Promise<{ message: string; goal: any; user: User; xpEarned: number }>;
  },

  async deleteGoal(goalId: string) {
    return apiFetch(`/api/goals/${goalId}`, {
      method: 'DELETE'
    }) as Promise<{ message: string; user: User }>;
  },

  async addSavings(data: { goalType?: 'shortTerm' | 'longTerm'; goalId?: string; amount: number; note?: string }) {
    return apiFetch('/api/goals/add-savings', {
      method: 'POST',
      body: JSON.stringify(data)
    }) as Promise<{ message: string; user: User; xpEarned: number }>;
  },

  // Lessons
  async getLessons() {
    return apiFetch('/api/lessons') as Promise<{ lessons: Lesson[] }>;
  },

  async completeLesson(lessonId: string) {
    return apiFetch(`/api/lessons/${lessonId}/complete`, {
      method: 'POST'
    }) as Promise<{ message: string; user: User; xpEarned: number }>;
  },

  // Quiz
  async submitQuiz(lessonId: string, answers: number[]) {
    return apiFetch(`/api/quiz/${lessonId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers })
    }) as Promise<{ correctCount: number; totalQuestions: number; xpEarned: number; user: User }>;
  },

  // Daily Challenge
  async completeDailyChallenge(challengeId: string) {
    return apiFetch('/api/user/daily-challenge', {
      method: 'POST',
      body: JSON.stringify({ challengeId })
    }) as Promise<{ message: string; xpEarned: number; user: User }>;
  },

  // Leaderboard
  async getLeaderboard(currentUserId?: string) {
    const token = getAuthToken();
    const headers: Record<string, string> = {};
    if (currentUserId) headers['x-user-id'] = currentUserId;

    return apiFetch('/api/leaderboard', { headers }) as Promise<{ leaderboard: LeaderboardUser[] }>;
  },

  // Chatbot
  async sendChatMessage(message: string) {
    return apiFetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message })
    }) as Promise<{ reply: string }>;
  }
};
