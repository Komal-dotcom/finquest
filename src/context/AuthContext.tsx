import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { api, getAuthToken, removeAuthToken } from '../utils/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<User>;
  signup: (data: { name: string; email: string; password: string; city?: string; monthlyIncome?: number }) => Promise<User>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  updateUserLocal: (updated: User) => void;
  xpToast: number | null;
  triggerXpToast: (xp: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [xpToast, setXpToast] = useState<number | null>(null);

  const triggerXpToast = (xp: number) => {
    if (xp <= 0) return;
    setXpToast(xp);
    setTimeout(() => {
      setXpToast(null);
    }, 2500);
  };

  const refreshUser = async () => {
    if (!getAuthToken()) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      const res = await api.getMe();
      setUser(res.user);
    } catch (err) {
      console.error('Session expired or error fetching profile:', err);
      removeAuthToken();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (email: string, pass: string) => {
    const res = await api.login({ email, password: pass });
    setUser(res.user);
    return res.user;
  };

  const signup = async (data: { name: string; email: string; password: string; city?: string; monthlyIncome?: number }) => {
    const res = await api.signup(data);
    setUser(res.user);
    return res.user;
  };

  const logout = () => {
    removeAuthToken();
    setUser(null);
  };

  const updateUserLocal = (updated: User) => {
    setUser(updated);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      signup,
      logout,
      refreshUser,
      updateUserLocal,
      xpToast,
      triggerXpToast
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
