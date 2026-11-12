import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, HelpCircle, Trophy, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../types';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { api } from '../utils/api';

interface QuizCardProps {
  lessonId: string;
  questions: QuizQuestion[];
  onComplete: (xpEarned: number) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ lessonId, questions, onComplete }) => {
  const { updateUserLocal, triggerXpToast } = useAuth();
  const { t } = useHinglish();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [currentSelected, setCurrentSelected] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultScore, setResultScore] = useState<{ correct: number; total: number; xp: number } | null>(null);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setCurrentSelected(idx);
    setIsAnswered(true);

    const updated = [...selectedAnswers, idx];
    setSelectedAnswers(updated);
  };

  const handleNextQuestion = async () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setCurrentSelected(null);
      setIsAnswered(false);
    } else {
      // Submit Quiz to API
      setIsSubmitting(true);
      try {
        const res = await api.submitQuiz(lessonId, selectedAnswers);
        setResultScore({
          correct: res.correctCount,
          total: res.totalQuestions,
          xp: res.xpEarned
        });
        updateUserLocal(res.user);
        triggerXpToast(res.xpEarned);

        if (res.correctCount > 0) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      } catch (err) {
        console.error('Failed to submit quiz:', err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (resultScore) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center max-w-lg mx-auto shadow-2xl space-y-6 backdrop-blur-md">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-1 shadow-lg shadow-purple-500/20">
          <div className="w-full h-full bg-[#0a0118] rounded-full flex items-center justify-center">
            <Trophy className="w-10 h-10 text-amber-400" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            {t('Quiz Completed!', 'Quiz Poora Hua!')}
          </h2>
          <p className="text-white/70 text-sm mt-1">
            {t(`You scored ${resultScore.correct} out of ${resultScore.total}!`, `Aapne ${resultScore.total} me se ${resultScore.correct} sahi kiye!`)}
          </p>
        </div>

        <div className="bg-purple-500/20 border border-purple-500/30 p-4 rounded-xl flex items-center justify-center space-x-2">
          <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
          <span className="text-xl font-bold text-purple-300">
            +{resultScore.xp} XP {t('Earned!', 'Mil Gaye!')}
          </span>
        </div>

        <button
          onClick={() => onComplete(resultScore.xp)}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-purple-500/20 transition-all"
        >
          {t('Continue Learning', 'Aage Badho')}
        </button>
      </div>
    );
  }

  const isCorrect = currentSelected === currentQ.correctAnswerIndex;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto backdrop-blur-md">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
        <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">
          {t('Question', 'Sawal')} {currentIndex + 1} / {questions.length}
        </span>
        <div className="flex items-center space-x-1 text-amber-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>+30 XP {t('per correct', 'sahi par')}</span>
        </div>
      </div>

      {/* Question */}
      <h3 className="text-lg font-bold text-white mb-6">
        {t(currentQ.question, currentQ.questionHinglish || currentQ.question)}
      </h3>

      {/* MCQ Options */}
      <div className="space-y-3">
        {currentQ.options.map((opt, idx) => {
          const optText = currentQ.optionsHinglish && currentQ.optionsHinglish[idx]
            ? t(opt, currentQ.optionsHinglish[idx])
            : opt;

          let btnClass = 'bg-white/5 border-white/10 text-white hover:bg-white/10';

          if (isAnswered) {
            if (idx === currentQ.correctAnswerIndex) {
              btnClass = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-500/10';
            } else if (idx === currentSelected) {
              btnClass = 'bg-rose-500/20 border-rose-500/50 text-rose-300 shadow-lg shadow-rose-500/10';
            } else {
              btnClass = 'bg-white/5 border-white/5 text-white/30 opacity-50';
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              className={`w-full p-4 rounded-xl border text-left font-bold text-sm flex items-center justify-between transition-all ${btnClass}`}
            >
              <span>{optText}</span>
              {isAnswered && idx === currentQ.correctAnswerIndex && (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 ml-2" />
              )}
              {isAnswered && idx === currentSelected && idx !== currentQ.correctAnswerIndex && (
                <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 ml-2" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner after answering */}
      {isAnswered && (
        <div className={`mt-6 p-4 rounded-xl border ${
          isCorrect ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-200' : 'bg-rose-500/20 border-rose-500/30 text-rose-200'
        }`}>
          <div className="flex items-center space-x-2 font-bold text-sm mb-1">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>{t('Correct Answer! +30 XP', 'Sahi Jawab! +30 XP')}</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-400" />
                <span>{t('Incorrect Choice', 'Galat Jawab')}</span>
              </>
            )}
          </div>
          <p className="text-xs text-white/80 mt-1">
            {t(currentQ.explanation, currentQ.explanationHinglish || currentQ.explanation)}
          </p>
        </div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <button
          onClick={handleNextQuestion}
          disabled={isSubmitting}
          className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 flex items-center justify-center space-x-2 transition-all"
        >
          <span>{currentIndex + 1 === questions.length ? t('Submit Quiz', 'Quiz Submit Karo') : t('Next Question', 'Agle Sawal Par Jao')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}

    </div>
  );
};
