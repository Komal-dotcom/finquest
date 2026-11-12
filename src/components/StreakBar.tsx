import React from 'react';
import { Flame, Award, ShieldAlert, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';

export const StreakBar: React.FC = () => {
  const { user } = useAuth();
  const { t } = useHinglish();

  if (!user) return null;

  const streak = user.streak;

  let milestoneMsg = t("Keep learning every day to grow your streak! 🔥", "Roj seekhte raho aur streak badhao! 🔥");
  if (streak >= 30) {
    milestoneMsg = t("Legend status! 🌟 You are an unstoppable financial guru!", "Legend status! 🌟 Aap unstoppable financial guru ho!");
  } else if (streak >= 7) {
    milestoneMsg = t("One week strong! 🏆 You're building a massive wealth habit!", "Ek hafte ki streak strong! 🏆 Wealth habit ban rahi hai!");
  } else if (streak >= 3) {
    milestoneMsg = t("You're on a roll! 🔥 Keep this momentum going!", "Aapki streak strong ho rahi hai! 🔥 Momentum maintain rakho!");
  }

  return (
    <div className="bg-gradient-to-br from-pink-500/10 via-orange-500/10 to-transparent bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl flex items-center justify-between relative overflow-hidden backdrop-blur-sm">
      <div className="flex items-center space-x-3.5 z-10">
        <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/20">
          🔥
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-bold text-white text-base">
              {streak} {t('DAY STREAK', 'DINO KI STREAK')}
            </h4>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase tracking-wider">
              Active
            </span>
          </div>
          <p className="text-xs text-white/60 font-medium mt-0.5">
            {milestoneMsg}
          </p>
        </div>
      </div>

      <div className="hidden sm:flex items-center space-x-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
        <Sparkles className="w-4 h-4 text-orange-400" />
        <span className="text-xs font-bold text-orange-400">
          +10 XP {t('Daily Check-in', 'Daily Bonus')}
        </span>
      </div>
    </div>
  );
};
