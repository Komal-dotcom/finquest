import React from 'react';
import { Check, Lock, Star, Play, Sparkles, BookOpen, Award } from 'lucide-react';
import { Lesson } from '../types';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';

interface ProgressMapProps {
  lessons: Lesson[];
  onSelectLesson: (lessonId: string) => void;
}

export const ProgressMap: React.FC<ProgressMapProps> = ({ lessons, onSelectLesson }) => {
  const { user } = useAuth();
  const { t } = useHinglish();

  if (!user || lessons.length === 0) return null;

  const completed = user.completedLessons || [];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
      
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>{t('FinQuest Learning Path', 'FinQuest Learning Path')}</span>
          </h2>
          <p className="text-xs text-white/50 mt-1">
            {t('Budgeting → Saving → Investing → Tax → Insurance', 'Budgeting → Saving → Investing → Tax → Insurance')}
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
          <Award className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold text-purple-300">
            {completed.length} / {lessons.length} {t('Completed', 'Poore')}
          </span>
        </div>
      </div>

      {/* Path Nodes Visual */}
      <div className="relative max-w-md mx-auto py-4 flex flex-col items-center space-y-10">
        
        {/* Background Connecting Line */}
        <div className="absolute top-10 bottom-10 left-1/2 w-1.5 bg-white/10 -translate-x-1/2 rounded-full z-0" />

        {lessons.map((lesson, idx) => {
          const isCompleted = completed.includes(lesson.id);
          const isUnlocked = idx === 0 || isCompleted || completed.includes(lessons[idx - 1].id);
          const isCurrentActive = isUnlocked && !isCompleted;

          // S-curve offset layout for Duolingo feel
          const offsets = ['translate-x-0', '-translate-x-12', 'translate-x-12', '-translate-x-16', 'translate-x-16'];
          const offsetClass = offsets[idx % offsets.length];

          return (
            <div key={lesson.id} className={`relative z-10 flex flex-col items-center ${offsetClass}`}>
              
              {/* Node Button with 3D Border Bottom */}
              <button
                disabled={!isUnlocked}
                onClick={() => isUnlocked && onSelectLesson(lesson.id)}
                className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-xl transition-all duration-300 shadow-lg relative group ${
                  isCompleted
                    ? 'bg-gradient-to-b from-green-400 to-green-600 border-b-8 border-green-700 text-white cursor-pointer hover:scale-105'
                    : isCurrentActive
                    ? 'w-20 h-20 bg-gradient-to-b from-purple-500 to-purple-700 border-b-8 border-purple-900 text-white shadow-xl shadow-purple-500/30 cursor-pointer animate-pulse hover:scale-105'
                    : 'bg-white/10 border-b-8 border-white/20 text-white/40 cursor-not-allowed'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-8 h-8 stroke-[3]" />
                ) : isCurrentActive ? (
                  <Play className="w-8 h-8 fill-white ml-1" />
                ) : (
                  <Lock className="w-6 h-6" />
                )}

                {/* Level Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0a0118] border border-white/20 flex items-center justify-center text-[10px] font-bold text-amber-400 shadow">
                  #{lesson.order}
                </div>
              </button>

              {/* Title label below node */}
              <div className="mt-2 text-center max-w-[140px]">
                <span className={`text-xs font-bold block truncate ${
                  isCompleted ? 'text-emerald-400' : isCurrentActive ? 'text-pink-400 font-extrabold' : 'text-white/40'
                }`}>
                  {t(lesson.title, lesson.titleHinglish)}
                </span>
                <span className="text-[10px] text-white/40 font-medium">
                  {lesson.category} • +{lesson.xpReward} XP
                </span>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};
