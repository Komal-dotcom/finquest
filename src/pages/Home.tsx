import React from 'react';
import { Trophy, Flame, Sparkles, Target, Zap, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';
import { useHinglish } from '../context/HinglishContext';
import { Logo } from '../components/Logo';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t } = useHinglish();

  return (
    <div className="min-h-screen bg-[#070d24] text-white flex flex-col justify-between p-6 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Brand */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between z-10 py-2">
        <div className="cursor-pointer">
          <Logo size="md" showText={true} />
        </div>

        <button
          onClick={() => onNavigate('login')}
          className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-white transition-all uppercase tracking-wider"
        >
          {t('Sign In', 'Login Karo')}
        </button>
      </header>

      {/* Hero Body */}
      <main className="max-w-3xl mx-auto text-center my-auto py-12 z-10 space-y-8">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 shadow-lg">
          <span className="text-orange-500 text-sm">🔥</span>
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
            {t('Gamified Financial Literacy', 'Gamified Financial Literacy')}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {t('Master Money Like Playing a ', 'Paise Ko Gamify Karke ')}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            {t('Video Game 🎮', 'Seekho 🎮')}
          </span>
        </h1>

        <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          {t(
            'Bite-sized financial lessons, 3-min quizzes, streak flames 🔥, goal meters, and AI FinBot. Build wealth habits effortlessly.',
            'Chote-chote lessons, 3-min quizzes, streak flames 🔥, goal meters aur FinBot AI. Paise ki samjh aasaan bhasa me!'
          )}
        </p>

        {/* Feature Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto pt-2">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
            <Zap className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-white">10+ Lessons</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
            <span className="text-xl mb-1 block">🔥</span>
            <span className="text-xs font-bold text-white">Daily Streaks</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
            <Target className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-white">Goal Progress</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-blue-400 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-white">FinBot AI</span>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('signup')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all hover:scale-105"
          >
            <span>{t('Start FinQuest Free', 'Free Account Banao')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('login')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all"
          >
            {t('I Already Have an Account', 'Login Karo')}
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-white/40 py-4 z-10 uppercase tracking-widest font-semibold">
        © 2026 FinQuest • {t('Financial Literacy for Young Indians', 'Young India Ke Liye Financial Literacy')}
      </footer>

    </div>
  );
};
