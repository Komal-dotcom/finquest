import React, { useState, useEffect } from 'react';
import { Trophy, Flame, Sparkles, Award, Shield, User as UserIcon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { LeaderboardUser } from '../types';
import { api } from '../utils/api';

export const Leaderboard: React.FC = () => {
  const { user } = useAuth();
  const { t } = useHinglish();

  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    api.getLeaderboard(user.id)
      .then(res => setLeaderboard(res.leaderboard))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user]);

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-14 h-14 mx-auto bg-gradient-to-tr from-purple-600 to-pink-500 rounded-xl flex items-center justify-center font-black text-2xl italic text-white shadow-xl shadow-purple-500/20">
          FQ
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          {t('FinQuest Champions Leaderboard', 'FinQuest Leaderboard')}
        </h1>
        <p className="text-xs text-white/50 max-w-md mx-auto">
          {t('Top 10 financial wizards ranked by total XP earned!', 'Sabse ziada XP wale Top 10 Financial Champions!')}
        </p>
      </div>

      {/* Leaderboard Table Box */}
      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
        
        <div className="p-4 bg-white/5 border-b border-white/10 grid grid-cols-12 text-[11px] font-bold uppercase text-white/50 tracking-wider">
          <div className="col-span-2 text-center">Rank</div>
          <div className="col-span-5">{t('User', 'User')}</div>
          <div className="col-span-3 text-center">{t('Streak', 'Streak')}</div>
          <div className="col-span-2 text-right">{t('XP', 'XP')}</div>
        </div>

        {loading ? (
          <div className="p-8 text-center text-xs text-purple-300">
            Loading leaderboard standings...
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {leaderboard.map((item) => {
              const isMe = item.isCurrentUser || item.id === user.id;

              let rankBadge = `#${item.rank}`;
              let rankColor = 'text-white/50';

              if (item.rank === 1) {
                rankBadge = '🥇 1st';
                rankColor = 'text-amber-400 font-bold text-sm';
              } else if (item.rank === 2) {
                rankBadge = '🥈 2nd';
                rankColor = 'text-white font-bold text-sm';
              } else if (item.rank === 3) {
                rankBadge = '🥉 3rd';
                rankColor = 'text-amber-600 font-bold text-sm';
              }

              return (
                <div
                  key={item.id}
                  className={`grid grid-cols-12 items-center p-4 transition-colors ${
                    isMe
                      ? 'bg-purple-500/10 border-l-4 border-l-pink-500 font-bold'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {/* Rank */}
                  <div className={`col-span-2 text-center font-bold ${rankColor}`}>
                    {rankBadge}
                  </div>

                  {/* User Profile */}
                  <div className="col-span-5 flex items-center space-x-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/20 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center space-x-1.5">
                        <span className={`text-xs font-bold truncate ${isMe ? 'text-pink-400' : 'text-white'}`}>
                          {item.name}
                        </span>
                        {isMe && (
                          <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                            YOU
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-white/40 block truncate">
                        {item.levelTitle}
                      </span>
                    </div>
                  </div>

                  {/* Streak */}
                  <div className="col-span-3 text-center flex items-center justify-center space-x-1 text-orange-400 text-xs font-bold">
                    <span>🔥 {item.streak}d</span>
                  </div>

                  {/* XP */}
                  <div className="col-span-2 text-right font-extrabold text-xs text-pink-400">
                    {item.xp} XP
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
};
