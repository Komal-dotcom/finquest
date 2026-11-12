import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { HinglishProvider, useHinglish } from './context/HinglishContext';
import { Navbar } from './components/Navbar';
import { FinBotDrawer } from './components/FinBotDrawer';

// Pages
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { GoalSetup } from './pages/GoalSetup';
import { Dashboard } from './pages/Dashboard';
import { Lessons } from './pages/Lessons';
import { LessonDetail } from './pages/LessonDetail';
import { Quiz } from './pages/Quiz';
import { Tracker } from './pages/Tracker';
import { Leaderboard } from './pages/Leaderboard';
import { Sparkles, Trophy, Flame } from 'lucide-react';

const MainApp: React.FC = () => {
  const { user, isLoading, xpToast } = useAuth();
  const { t } = useHinglish();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageParams, setPageParams] = useState<any>({});

  const handleNavigate = (page: string, params?: any) => {
    setCurrentPage(page);
    if (params) setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user is logged in and still on home/login/signup, auto-direct to dashboard
  React.useEffect(() => {
    if (user && (currentPage === 'home' || currentPage === 'login' || currentPage === 'signup')) {
      setCurrentPage('dashboard');
    } else if (!user && (currentPage !== 'home' && currentPage !== 'login' && currentPage !== 'signup')) {
      setCurrentPage('home');
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#070d24] text-white flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 animate-spin">
          <div className="w-full h-full bg-[#070d24] rounded-[14px]"></div>
        </div>
        <p className="text-xs font-bold text-cyan-300/80 tracking-widest uppercase">Loading FinQuest...</p>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      case 'signup':
        return <Signup onNavigate={handleNavigate} />;
      case 'goal-setup':
        return <GoalSetup onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'lessons':
        return <Lessons onNavigate={handleNavigate} />;
      case 'lesson-detail':
        return <LessonDetail lessonId={pageParams.id || 'l-1'} onNavigate={handleNavigate} />;
      case 'quiz':
        return <Quiz lessonId={pageParams.lessonId || 'l-1'} onNavigate={handleNavigate} />;
      case 'tracker':
        return <Tracker onNavigate={handleNavigate} />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  const showHeaderAndFooter = user && !['home', 'login', 'signup'].includes(currentPage);

  return (
    <div className="min-h-screen bg-[#070d24] text-white font-sans flex flex-col selection:bg-blue-600 selection:text-white relative">
      
      {/* Global XP Toast Notification */}
      {xpToast && (
        <div className="fixed top-20 right-6 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 text-white px-5 py-3 rounded-2xl shadow-2xl shadow-blue-500/40 border border-cyan-300/30 flex items-center space-x-2 animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="font-extrabold text-sm tracking-wide">+{xpToast} XP EARNED! 🎉</span>
        </div>
      )}

      {/* Top Sticky Navigation */}
      {showHeaderAndFooter && (
        <Navbar
          activeTab={currentPage}
          setActiveTab={(tab) => handleNavigate(tab)}
        />
      )}

      {/* Main Content Area */}
      <main className={`flex-1 ${showHeaderAndFooter ? 'max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8' : ''}`}>
        {renderPage()}
      </main>

      {/* FinBot AI Floating Drawer */}
      {user && <FinBotDrawer />}

      {/* Sophisticated Dark Bottom Quick Bar */}
      {showHeaderAndFooter && (
        <footer className="h-12 bg-[#091132] border-t border-white/10 flex items-center justify-center gap-6 sm:gap-10 text-[11px] font-extrabold text-white/50 uppercase tracking-[0.2em] z-30 sticky bottom-0 backdrop-blur-md">
          <button
            onClick={() => handleNavigate('dashboard')}
            className={`h-full flex items-center px-3 border-b-2 transition-all ${
              currentPage === 'dashboard' ? 'text-white border-cyan-400' : 'border-transparent hover:text-white'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => handleNavigate('lessons')}
            className={`h-full flex items-center px-3 border-b-2 transition-all ${
              currentPage === 'lessons' || currentPage === 'lesson-detail' ? 'text-white border-cyan-400' : 'border-transparent hover:text-white'
            }`}
          >
            Lessons
          </button>
          <button
            onClick={() => handleNavigate('tracker')}
            className={`h-full flex items-center px-3 border-b-2 transition-all ${
              currentPage === 'tracker' ? 'text-white border-cyan-400' : 'border-transparent hover:text-white'
            }`}
          >
            Tracker
          </button>
          <button
            onClick={() => handleNavigate('leaderboard')}
            className={`h-full flex items-center px-3 border-b-2 transition-all ${
              currentPage === 'leaderboard' ? 'text-white border-cyan-400' : 'border-transparent hover:text-white'
            }`}
          >
            Leaderboard
          </button>
        </footer>
      )}

    </div>
  );
};

export default function App() {
  return (
    <HinglishProvider>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </HinglishProvider>
  );
}

