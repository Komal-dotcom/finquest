import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { ProgressMap } from '../components/ProgressMap';
import { LessonCard } from '../components/LessonCard';
import { Lesson } from '../types';
import { api } from '../utils/api';

interface LessonsProps {
  onNavigate: (page: string, params?: any) => void;
}

export const Lessons: React.FC<LessonsProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const { t } = useHinglish();

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    api.getLessons().then(res => setLessons(res.lessons)).catch(console.error);
  }, []);

  if (!user) return null;

  const completed = user.completedLessons || [];

  const categories = ['All', 'Budgeting', 'Saving', 'Investing', 'Tax', 'Insurance', 'Goals', 'Security', 'Debt', 'Real Estate', 'Crypto', 'Career', 'Retirement', 'Entrepreneurship', 'Banking', 'Economics'];

  const filteredLessons = lessons.filter(l => {
    if (selectedCategory === 'All') return true;
    return l.category === selectedCategory;
  });

  return (
    <div className="space-y-8 pb-12">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center space-x-2">
          <BookOpen className="w-7 h-7 text-pink-400" />
          <span>{t('FinQuest Financial Academy', 'FinQuest Academy')}</span>
        </h1>
        <p className="text-xs text-white/50 mt-1">
          {t(`Master ${lessons.length || 18} core financial topics. Earn +50 XP on completion and unlock MCQs!`, `${lessons.length || 18} core topics seekho. +50 XP kamao aur quiz unlocked karo!`)}
        </p>
      </div>

      {/* Interactive Duolingo Tree Path */}
      <ProgressMap
        lessons={lessons}
        onSelectLesson={id => onNavigate('lesson-detail', { id })}
      />

      {/* Category Filter Pills */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">
            {t(`All Lessons (${lessons.length})`, `Sabhi Lessons (${lessons.length})`)}
          </h2>
          <div className="flex items-center space-x-1 text-xs text-white/50">
            <Filter className="w-3.5 h-3.5" />
            <span>{t('Filter by Category', 'Category Filter')}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap uppercase tracking-wider ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLessons.map(lesson => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isCompleted={completed.includes(lesson.id)}
              onOpen={id => onNavigate('lesson-detail', { id })}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
