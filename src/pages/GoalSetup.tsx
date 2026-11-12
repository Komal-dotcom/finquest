import React, { useState } from 'react';
import { Target, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { api } from '../utils/api';

interface GoalSetupProps {
  onNavigate: (page: string) => void;
}

export const GoalSetup: React.FC<GoalSetupProps> = ({ onNavigate }) => {
  const { user, updateUserLocal, triggerXpToast } = useAuth();
  const { t } = useHinglish();

  const [stName, setStName] = useState('Save ₹10,000 for Emergency Fund');
  const [stAmount, setStAmount] = useState('10000');
  const [stMonths, setStMonths] = useState('3');

  const [ltName, setLtName] = useState('Build ₹5 Lakh Investment Portfolio');
  const [ltAmount, setLtAmount] = useState('500000');
  const [ltMonths, setLtMonths] = useState('24');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await api.setupGoals({
        shortTermGoal: {
          name: stName,
          targetAmount: Number(stAmount),
          deadlineMonths: Number(stMonths)
        },
        longTermGoal: {
          name: ltName,
          targetAmount: Number(ltAmount),
          deadlineMonths: Number(ltMonths)
        }
      });

      updateUserLocal(res.user);
      triggerXpToast(res.xpEarned || 30);
      onNavigate('dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to save goals.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070d24] text-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl z-10 space-y-6 backdrop-blur-md">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('Goal Setup • Step 2 of 2', 'Goal Setup • Step 2')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t('What Are Your Financial Dreams? 🎯', 'Aapke Financial Goals Kya Hain? 🎯')}
          </h2>
          <p className="text-xs text-white/50 max-w-md mx-auto">
            {t('Setting clear financial goals gives direction to your savings and unlocks your personalized quest line!', 'Clear goals set karne se bachat ka tarika milta hai!')}
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* 1. Short Term Goal Box */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-lg bg-blue-500/20 border border-cyan-500/30 text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  1. {t('Short-Term Financial Goal', 'Short-Term Goal (Chota Target)')}
                </h3>
                <p className="text-[11px] text-white/50">
                  {t('Achievable in under 12 months (e.g. Save ₹10,000 in 3 months)', '12 mahine se kam ka goal (jaise: ₹10,000 emergency fund)')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-3">
                <label className="block text-[11px] font-bold text-white/70 mb-1 uppercase tracking-wider">{t('Goal Name', 'Goal Ka Naam')}</label>
                <input
                  type="text"
                  required
                  placeholder="Save ₹10,000 for Emergency Fund"
                  value={stName}
                  onChange={e => setStName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/70 mb-1 uppercase tracking-wider">{t('Target Amount (₹)', 'Target Amount (₹)')}</label>
                <input
                  type="number"
                  required
                  placeholder="10000"
                  value={stAmount}
                  onChange={e => setStAmount(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-white/70 mb-1 uppercase tracking-wider">{t('Deadline (Months)', 'Deadline (Mahine)')}</label>
                <input
                  type="number"
                  required
                  placeholder="3"
                  value={stMonths}
                  onChange={e => setStMonths(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* 2. Long Term Goal Box */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  2. {t('Long-Term Financial Goal', 'Long-Term Goal (Bada Target)')}
                </h3>
                <p className="text-[11px] text-white/50">
                  {t('Achievable in 1 to 5 years (e.g. Build ₹5 Lakh wealth fund)', '1 se 5 saal ka goal (jaise: ₹5 Lakh wealth investment)')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-3">
                <label className="block text-[11px] font-bold text-white/70 mb-1 uppercase tracking-wider">{t('Goal Name', 'Goal Ka Naam')}</label>
                <input
                  type="text"
                  required
                  placeholder="Build ₹5 Lakh Emergency Fund in 2 years"
                  value={ltName}
                  onChange={e => setLtName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/70 mb-1 uppercase tracking-wider">{t('Target Amount (₹)', 'Target Amount (₹)')}</label>
                <input
                  type="number"
                  required
                  placeholder="500000"
                  value={ltAmount}
                  onChange={e => setLtAmount(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-white/70 mb-1 uppercase tracking-wider">{t('Deadline (Months)', 'Deadline (Mahine)')}</label>
                <input
                  type="number"
                  required
                  placeholder="24"
                  value={ltMonths}
                  onChange={e => setLtMonths(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all"
          >
            <span>{loading ? t('Saving Goals...', 'Save ho raha hai...') : t('Save Goals & Launch Dashboard (+30 XP)', 'Goals Save Karo & Start Quest (+30 XP)')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

        </form>

      </div>
    </div>
  );
};
