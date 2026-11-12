import React from 'react';
import { Sparkles, Trophy, Shield, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';

export const XPBar: React.FC = () => {
  const { user } = useAuth();
  const { t } = useHinglish();

  if (!user) return null;

  const currentXp = user.xp;
  let prevLevelThreshold = 0;
  let nextLevelThreshold = 200;

  if (currentXp >= 1001) {
    prevLevelThreshold = 1001;
    nextLevelThreshold = 2000;
  } else if (currentXp >= 501) {
    prevLevelThreshold = 501;
    nextLevelThreshold = 1000;
  } else if (currentXp >= 201) {
    prevLevelThreshold = 201;
    nextLevelThreshold = 500;
  }

  const xpInCurrentLevel = Math.max(0, currentXp - prevLevelThreshold);
  const totalLevelXpNeeded = Math.max(1, nextLevelThreshold - prevLevelThreshold);
  const percentage = Math.min(100, Math.round((xpInCurrentLevel / totalLevelXpNeeded) * 100));

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Zap className="w-5 h-5 text-purple-300" />
          </div>
          <div>
            <div className="text-xs text-white/50 font-bold uppercase tracking-wider">
              {user.levelTitle} 💰
            </div>
            <div className="text-sm font-bold text-white flex items-center space-x-1.5">
              <span>{currentXp} / {nextLevelThreshold} XP</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs font-bold text-pink-400">
            {percentage}% Progress
          </div>
          <div className="text-[10px] text-white/40">
            {nextLevelThreshold - currentXp > 0
              ? `${nextLevelThreshold - currentXp} XP ${t('to Next Level', 'agle level ke liye')}`
              : t('MAX LEVEL! 🌟', 'MAX LEVEL! 🌟')}
          </div>
        </div>
      </div>

      {/* Animated XP Meter */}
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5 relative">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700 ease-out shadow-lg shadow-purple-500/30"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between items-center mt-2 text-[10px] font-bold text-white/40 uppercase tracking-wider">
        <span>{prevLevelThreshold} XP</span>
        <span className="text-purple-300 font-bold">{percentage}%</span>
        <span>{nextLevelThreshold} XP</span>
      </div>
    </div>
  );
};
