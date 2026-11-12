import React, { useState, useEffect } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { QuizCard } from '../components/QuizCard';
import { Lesson } from '../types';
import { api } from '../utils/api';
import { useHinglish } from '../context/HinglishContext';

interface QuizProps {
  lessonId: string;
  onNavigate: (page: string, params?: any) => void;
}

export const Quiz: React.FC<QuizProps> = ({ lessonId, onNavigate }) => {
  const { t } = useHinglish();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getLessons().then(res => {
      const found = res.lessons.find(l => l.id === lessonId) || res.lessons[0];
      setLesson(found);
    }).catch(console.error).finally(() => setLoading(false));
  }, [lessonId]);

  if (loading || !lesson) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      
      {/* Back Button */}
      <button
        onClick={() => onNavigate('lesson-detail', { id: lesson.id })}
        className="flex items-center space-x-2 text-xs font-bold text-white/50 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t('Back to Lesson', 'Lesson Par Wapas Jao')}</span>
      </button>

      <div className="text-center space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
          {t('Knowledge Check', 'Gyaan Pariksha')}
        </span>
        <h1 className="text-2xl font-bold text-white">
          {t(lesson.title, lesson.titleHinglish)} - Quiz 🧠
        </h1>
      </div>

      <QuizCard
        lessonId={lesson.id}
        questions={lesson.quiz}
        onComplete={xp => onNavigate('lessons')}
      />

    </div>
  );
};
