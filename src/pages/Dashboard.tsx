import React, { useState, useEffect } from 'react';
import { BookOpen, Trophy, BarChart2, Flame, Sparkles, ArrowRight, Target, Zap, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { XPBar } from '../components/XPBar';
import { StreakBar } from '../components/StreakBar';
import { GoalMeter } from '../components/GoalMeter';
import { DailyChallengeCard } from '../components/DailyChallengeCard';
import { LessonCard } from '../components/LessonCard';
import { AddSavingsModal } from '../components/AddSavingsModal';
import { AddGoalModal } from '../components/AddGoalModal';
import { Lesson, DailyChallenge, FinancialGoal } from '../types';
import { api } from '../utils/api';

interface DashboardProps {
  onNavigate: (page: string, params?: any) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const { t } = useHinglish();

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [savingsModalOpen, setSavingsModalOpen] = useState(false);
  const [savingsModalType, setSavingsModalType] = useState<'shortTerm' | 'longTerm'>('shortTerm');
  const [selectedGoalId, setSelectedGoalId] = useState<string | undefined>(undefined);

  const [addGoalModalOpen, setAddGoalModalOpen] = useState(false);

  useEffect(() => {
    api.getLessons().then(res => setLessons(res.lessons)).catch(console.error);
  }, []);

  if (!user) return null;

  // Find today's recommended lesson (first incomplete lesson)
  const completed = user.completedLessons || [];
  const todaysLesson = lessons.find(l => !completed.includes(l.id)) || lessons[0];

  // Daily challenge rotation
  const dailyChallenge: DailyChallenge = {
    id: 'ch-1',
    text: 'Avoid food delivery today 🍱',
    textHinglish: 'Aaj online food order mat karo 🍱',
    xpReward: 25
  };

  const handleOpenSavingsModal = (type: 'shortTerm' | 'longTerm', goalId?: string) => {
    setSavingsModalType(type);
    setSelectedGoalId(goalId);
    setSavingsModalOpen(true);
  };

  // Compile list of all goals to display
  const displayGoals: FinancialGoal[] = [];
  if (user.goals) {
    if (user.goals.shortTerm) displayGoals.push(user.goals.shortTerm);
    if (user.goals.longTerm) displayGoals.push(user.goals.longTerm);
    if (user.goals.additionalGoals) {
      user.goals.additionalGoals.forEach(g => displayGoals.push(g));
    }
  }

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Profile & Welcome Header */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border border-white/20 shadow-lg shadow-purple-500/20"
            />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                {user.name}
              </h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {user.levelTitle}
              </span>
            </div>
            <p className="text-xs text-white/50 mt-1">
              {t('Welcome back! Today is a great day to grow your wealth.', 'Swagat hai! Aaj ka din bachat ke liye best hai.')}
            </p>
          </div>
        </div>

        {/* Quick Action Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => onNavigate('lessons')}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-lg shadow-purple-500/20 transition-all hover:scale-105"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t('Lessons', 'Seekho')}</span>
          </button>

          <button
            onClick={() => onNavigate('tracker')}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all hover:scale-105"
          >
            <BarChart2 className="w-4 h-4 text-pink-400" />
            <span>{t('Goal Tracker', 'Goal Meter')}</span>
          </button>

          <button
            onClick={() => onNavigate('leaderboard')}
            className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all hover:scale-105"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{t('Ranks', 'Leaderboard')}</span>
          </button>
        </div>

      </div>

      {/* Gamification Stats: Streak + XP Gauge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StreakBar />
        <XPBar />
      </div>

      {/* Daily Challenge Card */}
      <DailyChallengeCard challenge={dailyChallenge} />

      {/* Today's Recommended Lesson */}
      {todaysLesson && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-pink-400">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-400">
                  {t("Today's Quest", 'Aaj Ka Quest')}
                </span>
                <h2 className="font-bold text-white text-lg">
                  {t("Continue Today's Lesson", "Aaj Ka Lesson Complete Karo!")}
                </h2>
              </div>
            </div>

            <button
              onClick={() => onNavigate('lessons')}
              className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center space-x-1 uppercase tracking-wider"
            >
              <span>{t(`View All (${lessons.length})`, `Sabhi Dekho (${lessons.length})`)}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <LessonCard
            lesson={todaysLesson}
            isCompleted={completed.includes(todaysLesson.id)}
            onOpen={id => onNavigate('lesson-detail', { id })}
          />
        </div>
      )}

      {/* Financial Goals Overview Section */}
      {user.goals ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <Target className="w-5 h-5 text-pink-400" />
              <span>{t('Your Financial Goal Meters', 'Aapke Goal Meters')}</span>
            </h2>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => setAddGoalModalOpen(true)}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 uppercase tracking-wider"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t('Add Goal', '+ Goal Dalo')}</span>
              </button>

              <button
                onClick={() => onNavigate('tracker')}
                className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center space-x-1 uppercase tracking-wider"
              >
                <span>{t('All Tracker Goals', 'Sabhi Goals')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {displayGoals.map((goal, idx) => (
              <GoalMeter
                key={goal.id || `dash-goal-${idx}`}
                goal={goal}
                type={goal.type || 'shortTerm'}
                onAddSavings={handleOpenSavingsModal}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3 backdrop-blur-md">
          <h3 className="text-base font-bold text-white">
            {t('Set Your Financial Goals to Start Meter Tracking!', 'Goal setup karke meter start karo!')}
          </h3>
          <button
            onClick={() => onNavigate('goal-setup')}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20"
          >
            {t('Setup Goals Now (+30 XP)', 'Goal Setup Karo (+30 XP)')}
          </button>
        </div>
      )}

      {/* Modal for adding savings */}
      {savingsModalOpen && (
        <AddSavingsModal
          initialType={savingsModalType}
          initialGoalId={selectedGoalId}
          onClose={() => setSavingsModalOpen(false)}
        />
      )}

      {/* Modal for adding a new goal */}
      {addGoalModalOpen && (
        <AddGoalModal
          initialType="shortTerm"
          onClose={() => setAddGoalModalOpen(false)}
        />
      )}

    </div>
  );
};
