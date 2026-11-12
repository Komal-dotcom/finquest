import React from 'react';
import { Flame, Trophy, Award, Sparkles, LogOut, User as UserIcon, BookOpen, BarChart2, MessageSquare, Layout } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { Logo } from './Logo';

interface NavbarProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();
  const { isHinglish, toggleHinglish, t } = useHinglish();

  if (!user) return null;

  return (
    <header className="sticky top-0 z-50 bg-[#070d24]/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab && setActiveTab('dashboard')}
          className="cursor-pointer"
        >
          <Logo size="md" showText={true} />
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm">
          <button
            onClick={() => setActiveTab && setActiveTab('dashboard')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              activeTab === 'dashboard'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab && setActiveTab('lessons')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              activeTab === 'lessons' || activeTab === 'lesson-detail'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('Lessons', 'Seekho')}</span>
          </button>

          <button
            onClick={() => setActiveTab && setActiveTab('tracker')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              activeTab === 'tracker'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>{t('Goal Tracker', 'Goal Meter')}</span>
          </button>

          <button
            onClick={() => setActiveTab && setActiveTab('leaderboard')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
              activeTab === 'leaderboard'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Leaderboard</span>
          </button>
        </nav>

        {/* Right Action Widgets: Streak 🔥, XP ⚡, Hinglish Toggle, Profile */}
        <div className="flex items-center space-x-2.5">
          
          {/* Streak Flame 🔥 */}
          <div 
            title={t('Your daily active streak!', 'Aapki daily active streak!')}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full hover:scale-105 transition-transform"
          >
            <span className="text-orange-500 text-sm">🔥</span>
            <span className="text-xs font-extrabold text-orange-500 uppercase tracking-wide">
              {user.streak} DAY STREAK
            </span>
          </div>

          {/* XP Badge ⚡ */}
          <div className="hidden sm:flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-bold text-white/80">
              {user.xp} XP
            </span>
          </div>

          {/* Hinglish Toggle Switch */}
          <button
            onClick={toggleHinglish}
            title={t('Switch to Hinglish Mode', 'Switch to English Mode')}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all ${
              isHinglish
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
            }`}
          >
            {isHinglish ? '🇮🇳 Hinglish' : '🇬🇧 EN'}
          </button>

          {/* Logout Button */}
          <button
            onClick={logout}
            title="Logout"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
