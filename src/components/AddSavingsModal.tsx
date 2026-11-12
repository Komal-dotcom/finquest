import React, { useState } from 'react';
import { X, PlusCircle, Sparkles, Target, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { api } from '../utils/api';

interface AddSavingsModalProps {
  initialType?: 'shortTerm' | 'longTerm';
  initialGoalId?: string;
  onClose: () => void;
}

export const AddSavingsModal: React.FC<AddSavingsModalProps> = ({ initialType = 'shortTerm', initialGoalId, onClose }) => {
  const { user, updateUserLocal, triggerXpToast } = useAuth();
  const { t } = useHinglish();

  // Gather all user goals
  const allUserGoals = React.useMemo(() => {
    if (!user || !user.goals) return [];
    const list: Array<{ id: string; name: string; type: 'shortTerm' | 'longTerm'; target: number; current: number }> = [];
    if (user.goals.shortTerm) {
      list.push({
        id: user.goals.shortTerm.id || 'st-primary',
        name: user.goals.shortTerm.name,
        type: 'shortTerm',
        target: user.goals.shortTerm.targetAmount,
        current: user.goals.shortTerm.currentAmount
      });
    }
    if (user.goals.longTerm) {
      list.push({
        id: user.goals.longTerm.id || 'lt-primary',
        name: user.goals.longTerm.name,
        type: 'longTerm',
        target: user.goals.longTerm.targetAmount,
        current: user.goals.longTerm.currentAmount
      });
    }
    if (user.goals.additionalGoals) {
      user.goals.additionalGoals.forEach(g => {
        list.push({
          id: g.id,
          name: g.name,
          type: g.type,
          target: g.targetAmount,
          current: g.currentAmount
        });
      });
    }
    return list;
  }, [user]);

  const [selectedGoalId, setSelectedGoalId] = useState<string>(
    initialGoalId || (allUserGoals.find(g => g.type === initialType)?.id) || (allUserGoals[0]?.id || '')
  );
  const [goalType, setGoalType] = useState<'shortTerm' | 'longTerm'>(initialType);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSelectGoal = (id: string) => {
    setSelectedGoalId(id);
    const matched = allUserGoals.find(g => g.id === id);
    if (matched) setGoalType(matched.type);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const num = Number(amount);
    if (!num || num <= 0) {
      setError(t('Please enter a valid savings amount', 'Sahi amount dalo'));
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await api.addSavings({
        goalType,
        goalId: selectedGoalId || undefined,
        amount: num,
        note: note || 'Savings deposit'
      });

      updateUserLocal(res.user);
      triggerXpToast(res.xpEarned);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to add savings');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#070d24]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#070d24] border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center space-x-2.5 mb-6">
          <div className="p-2.5 rounded-xl bg-blue-500/20 border border-cyan-500/30 text-cyan-400">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">
              {t('Add Goal Savings', 'Bachat Entry Dalo')}
            </h3>
            <p className="text-xs text-white/50">
              {t('Log your daily savings & earn +20 XP!', 'Paise bachto aur +20 XP pao!')}
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Goal Select Selector */}
          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
              {t('Select Target Goal', 'Kiske Liye Bachat Kar Rahe Ho?')}
            </label>
            {allUserGoals.length > 0 ? (
              <select
                value={selectedGoalId}
                onChange={e => handleSelectGoal(e.target.value)}
                className="w-full bg-[#0d1636] border border-white/20 rounded-xl py-3 px-3 text-white text-xs font-bold focus:outline-none focus:border-cyan-500"
              >
                {allUserGoals.map(g => (
                  <option key={g.id} value={g.id} className="bg-[#070d24] text-white py-2">
                    {g.type === 'shortTerm' ? '🎯 Short-Term' : '📈 Long-Term'}: {g.name} (₹{g.current.toLocaleString('en-IN')} / ₹{g.target.toLocaleString('en-IN')})
                  </option>
                ))}
              </select>
            ) : (
              <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setGoalType('shortTerm')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
                    goalType === 'shortTerm'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>{t('Short-Term', 'Short-Term')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setGoalType('longTerm')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
                    goalType === 'longTerm'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{t('Long-Term', 'Long-Term')}</span>
                </button>
              </div>
            )}
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
              {t('Amount Saved (₹)', 'Bachat Ki Rashi (₹)')}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-white/40 text-base">₹</span>
              <input
                type="number"
                required
                placeholder="500"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-9 pr-4 text-white font-bold text-base placeholder-white/30 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Note Input */}
          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
              {t('Optional Note', 'Chota Note (Optional)')}
            </label>
            <input
              type="text"
              placeholder={t('e.g., Saved on coffee, Piggy bank transfer', 'jaise: Chai ke bache hue paise')}
              value={note}
              onChange={e => setNote(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-white text-xs placeholder-white/30 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Quick Buttons */}
          <div className="flex items-center space-x-2 pt-1">
            {[100, 500, 1000, 2000].map(val => (
              <button
                key={val}
                type="button"
                onClick={() => setAmount(String(val))}
                className="flex-1 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-bold text-xs transition-colors"
              >
                +₹{val}
              </button>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all mt-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>{loading ? t('Saving...', 'Save ho raha hai...') : t('Confirm Savings (+20 XP)', 'Savings Confirm Karo (+20 XP)')}</span>
          </button>

        </form>

      </div>
    </div>
  );
};
