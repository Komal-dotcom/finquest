import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Sparkles, CheckCircle2, BookOpen, Trophy, Play } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { Lesson } from '../types';
import { api } from '../utils/api';

interface LessonDetailProps {
  lessonId: string;
  onNavigate: (page: string, params?: any) => void;
}

export const LessonDetail: React.FC<LessonDetailProps> = ({ lessonId, onNavigate }) => {
  const { user, updateUserLocal, triggerXpToast } = useAuth();
  const { isHinglish, t } = useHinglish();

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);

  useEffect(() => {
    api.getLessons().then(res => {
      const found = res.lessons.find(l => l.id === lessonId) || res.lessons[0];
      setLesson(found);
    }).catch(console.error).finally(() => setLoading(false));
  }, [lessonId]);

  if (!user || loading || !lesson) return null;

  const isCompleted = user.completedLessons?.includes(lesson.id);

  const handleMarkComplete = async () => {
    if (completing || isCompleted) return;
    setCompleting(true);
    try {
      const res = await api.completeLesson(lesson.id);
      updateUserLocal(res.user);
      triggerXpToast(res.xpEarned);
    } catch (err) {
      console.error('Failed to complete lesson:', err);
    } finally {
      setCompleting(false);
    }
  };

  const paragraphs = isHinglish ? lesson.contentHinglish : lesson.content;
  const takeaways = isHinglish ? lesson.takeawaysHinglish : lesson.takeaways;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      
      {/* Back Button */}
      <button
        onClick={() => onNavigate('lessons')}
        className="flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t('Back to Lessons', 'Sabhi Lessons')}</span>
      </button>

      {/* Main Content Box */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-md">
        
        {/* Header Metadata */}
        <div className="space-y-3 pb-4 border-b border-white/10">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {lesson.category}
            </span>

            <div className="flex items-center space-x-3 text-xs font-bold text-white/50">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-white/40" />
                <span>{lesson.readTime}</span>
              </span>
              <span className="text-purple-300 font-extrabold bg-purple-500/20 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                +{lesson.xpReward} XP
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {t(lesson.title, lesson.titleHinglish)}
          </h1>
        </div>

        {/* Paragraphs */}
        <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed font-medium">
          {paragraphs.map((para, idx) => (
            <p key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
              {para}
            </p>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <h3 className="text-sm font-bold text-amber-400 flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{t('Key Takeaways 💡', 'Mukhy Baatein 💡')}</span>
          </h3>

          <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-semibold">
            {takeaways.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-pink-400 font-bold">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <button
            onClick={handleMarkComplete}
            disabled={isCompleted || completing}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t('Completed (+50 XP Earned)', 'Complete Ho Gaya (+50 XP)')}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>{completing ? t('Saving...', 'Save ho raha hai...') : t('Mark as Complete (+50 XP)', 'Lesson Complete Karo (+50 XP)')}</span>
              </>
            )}
          </button>

          <button
            onClick={() => onNavigate('quiz', { lessonId: lesson.id })}
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 flex items-center justify-center space-x-2 transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{t('Take 3-Min Quiz (+90 XP)', '3-Min Quiz Do (+90 XP)')}</span>
          </button>

        </div>

      </div>

    </div>
  );
};
