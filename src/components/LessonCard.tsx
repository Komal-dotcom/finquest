import React from 'react';
import { Clock, Sparkles, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { Lesson } from '../types';
import { useHinglish } from '../context/HinglishContext';

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  onOpen: (id: string) => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, isCompleted, onOpen }) => {
  const { t } = useHinglish();

  return (
    <div 
      onClick={() => onOpen(lesson.id)}
      className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden backdrop-blur-sm ${
        isCompleted
          ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/60'
          : 'bg-white/5 border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-purple-300 border border-white/10">
            {lesson.category}
          </span>

          <div className="flex items-center space-x-1.5 text-xs font-semibold">
            {isCompleted ? (
              <span className="flex items-center space-x-1 text-emerald-400 font-bold bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{t('Completed', 'Completed')}</span>
              </span>
            ) : (
              <span className="flex items-center space-x-1 text-purple-300 font-bold bg-purple-500/20 px-2.5 py-1 rounded-full border border-purple-500/30">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>+{lesson.xpReward} XP</span>
              </span>
            )}
          </div>
        </div>

        <h3 className="font-bold text-white text-base group-hover:text-pink-400 transition-colors line-clamp-2">
          {t(lesson.title, lesson.titleHinglish)}
        </h3>

        <p className="text-xs text-white/50 mt-2 line-clamp-2">
          {lesson.content[0]}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
        <span className="flex items-center space-x-1">
          <Clock className="w-3.5 h-3.5 text-white/40" />
          <span>{lesson.readTime}</span>
        </span>

        <span className="text-pink-400 font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform uppercase tracking-wider text-[11px]">
          <span>{isCompleted ? t('Review', 'Dohrao') : t('Start', 'Shuru')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
