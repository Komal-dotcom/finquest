import React, { useState } from 'react';
import { Target, CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import { DailyChallenge } from '../types';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { api } from '../utils/api';

interface DailyChallengeCardProps {
  challenge: DailyChallenge;
}

export const DailyChallengeCard: React.FC<DailyChallengeCardProps> = ({ challenge }) => {
  const { user, updateUserLocal, triggerXpToast } = useAuth();
  const { t } = useHinglish();
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  const isCompleted = user.completedChallenges?.includes(challenge.id);

  const handleClaim = async () => {
    if (isCompleted || loading) return;
    setLoading(true);
    try {
      const res = await api.completeDailyChallenge(challenge.id);
      updateUserLocal(res.user);
      triggerXpToast(res.xpEarned);
    } catch (err) {
      console.error('Failed to complete challenge:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-white flex items-center gap-2 text-sm">
          <Target className="w-4 h-4 text-orange-400" />
          <span>{t('Daily Challenge', 'Daily Challenge')}</span>
        </h3>
        <span className="text-xs font-bold text-white/40">+25 XP</span>
      </div>

      <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/10">
        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-xl flex-shrink-0">
          🍱
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white">
            {t(challenge.text, challenge.textHinglish)}
          </p>
          <p className="text-xs text-white/50 italic">
            {t('Paise bachao, sehat banao!', 'Paise bachao, sehat banao!')}
          </p>
        </div>

        <button
          disabled={isCompleted || loading}
          onClick={handleClaim}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            isCompleted
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'bg-white text-black hover:bg-white/90 uppercase tracking-widest text-[11px] font-extrabold shadow-md'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Done (+25 XP)</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{loading ? 'Claiming...' : 'Complete'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
