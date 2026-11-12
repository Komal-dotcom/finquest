import React, { useState } from 'react';
import { X, Target, TrendingUp, Sparkles, PlusCircle, Shield, Laptop, Plane, Briefcase, Car, GraduationCap, Compass } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { api } from '../utils/api';

interface AddGoalModalProps {
  initialType?: 'shortTerm' | 'longTerm';
  onClose: () => void;
}

const CATEGORIES = [
  { id: 'Emergency Fund', name: 'Emergency Fund', nameHinglish: 'Emergency Fund', icon: Shield, bg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  { id: 'Gadget / Shopping', name: 'Gadget / Shopping', nameHinglish: 'Gadget & Shopping', icon: Laptop, bg: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  { id: 'Travel / Vacation', name: 'Travel / Vacation', nameHinglish: 'Ghumna / Travel', icon: Plane, bg: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
  { id: 'Investment Portfolio', name: 'Investment / Stocks', nameHinglish: 'Mutual Fund & Stocks', icon: Briefcase, bg: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  { id: 'House / Car', name: 'Car / House Asset', nameHinglish: 'Gadi ya Ghar', icon: Car, bg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
  { id: 'Education', name: 'Education & Upskilling', nameHinglish: 'Padhai & Courses', icon: GraduationCap, bg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' },
  { id: 'Other', name: 'Other Goal', nameHinglish: 'Kuch Aur', icon: Compass, bg: 'bg-pink-500/20 text-pink-300 border-pink-500/30' }
];

const PRESETS = [
  { name: 'Emergency Fund 🛡️', target: 50000, months: 6, type: 'shortTerm', category: 'Emergency Fund' },
  { name: 'Goa Vacation Trip ✈️', target: 20000, months: 4, type: 'shortTerm', category: 'Travel / Vacation' },
  { name: 'New Smartphone / Laptop 💻', target: 75000, months: 8, type: 'shortTerm', category: 'Gadget / Shopping' },
  { name: 'Car Down Payment 🚘', target: 250000, months: 24, type: 'longTerm', category: 'House / Car' },
  { name: 'Gold & Mutual Funds 📈', target: 150000, months: 18, type: 'longTerm', category: 'Investment Portfolio' }
];

export const AddGoalModal: React.FC<AddGoalModalProps> = ({ initialType = 'shortTerm', onClose }) => {
  const { updateUserLocal, triggerXpToast } = useAuth();
  const { t } = useHinglish();

  const [type, setType] = useState<'shortTerm' | 'longTerm'>(initialType);
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [deadlineMonths, setDeadlineMonths] = useState(type === 'shortTerm' ? '6' : '24');
  const [category, setCategory] = useState(type === 'shortTerm' ? 'Gadget / Shopping' : 'Investment Portfolio');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleApplyPreset = (preset: typeof PRESETS[0]) => {
    setName(preset.name);
    setTargetAmount(String(preset.target));
    setDeadlineMonths(String(preset.months));
    setType(preset.type as 'shortTerm' | 'longTerm');
    setCategory(preset.category);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numTarget = Number(targetAmount);
    const numMonths = Number(deadlineMonths);

    if (!name.trim()) {
      setError(t('Please enter a goal title', 'Goal ka naam dalo'));
      return;
    }
    if (!numTarget || numTarget <= 0) {
      setError(t('Please enter a valid target amount', 'Sahi target amount dalo'));
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await api.addGoal({
        name,
        targetAmount: numTarget,
        deadlineMonths: numMonths || 6,
        type,
        category
      });

      updateUserLocal(res.user);
      triggerXpToast(res.xpEarned || 30);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to create goal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#070d24]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#070d24] border border-white/10 rounded-2xl p-6 w-full max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center space-x-3 mb-5">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-purple-500/30 to-pink-500/30 border border-pink-500/30 text-pink-400">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-white text-xl">
              {t('Add New Goal', 'Naya Goal Add Karo 🎯')}
            </h3>
            <p className="text-xs text-white/50">
              {t('Set a new financial target & earn +30 XP bonus!', 'Naya target set karke +30 XP kamao!')}
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            {error}
          </div>
        )}

        {/* Preset Quick Buttons */}
        <div className="mb-5">
          <label className="block text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 mb-2">
            {t('Popular Quick Goal Presets ⚡', 'Popular Goal Ideas ⚡')}
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {PRESETS.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyPreset(p)}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-bold flex-shrink-0 transition-colors whitespace-nowrap"
              >
                {p.name} (₹{(p.target / 1000).toFixed(0)}k)
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Goal Duration Type */}
          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
              {t('Goal Horizon / Duration', 'Goal Type (Kitne samay me?)')}
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setType('shortTerm');
                  setDeadlineMonths('6');
                }}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
                  type === 'shortTerm'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-500 text-white shadow-lg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <Target className="w-4 h-4" />
                <span>{t('Short-Term (< 1 Yr)', 'Short-Term (< 1 Saal)')}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setType('longTerm');
                  setDeadlineMonths('24');
                }}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
                  type === 'longTerm'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>{t('Long-Term (1-5 Yrs)', 'Long-Term (1-5 Saal)')}</span>
              </button>
            </div>
          </div>

          {/* Goal Name */}
          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
              {t('Goal Name', 'Goal Ka Title')}
            </label>
            <input
              type="text"
              required
              placeholder={type === 'shortTerm' ? 'e.g. Goa Trip, Buy iPad Pro, Emergency Fund' : 'e.g. Mutual Fund Portfolio, Car Purchase'}
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-xs placeholder-white/30 focus:outline-none focus:border-cyan-500 font-semibold"
            />
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
              {t('Category', 'Category Chuno')}
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => {
                const Icon = cat.icon;
                const isSelected = category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center space-x-1.5 transition-all ${
                      isSelected
                        ? cat.bg + ' ring-2 ring-cyan-400/50'
                        : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{t(cat.name, cat.nameHinglish)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Target Amount & Deadline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
                {t('Target Amount (₹)', 'Target Amount (₹)')}
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 font-bold">₹</span>
                <input
                  type="number"
                  required
                  placeholder="25000"
                  value={targetAmount}
                  onChange={e => setTargetAmount(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-8 pr-3 text-white text-sm font-bold placeholder-white/30 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">
                {t('Deadline (Months)', 'Deadline (Mahine)')}
              </label>
              <input
                type="number"
                required
                placeholder="6"
                value={deadlineMonths}
                onChange={e => setDeadlineMonths(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white text-sm font-bold placeholder-white/30 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 flex items-center justify-center space-x-2 transition-all mt-4"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>{loading ? t('Creating Goal...', 'Goal save ho raha hai...') : t('Create Goal (+30 XP)', 'Goal Create Karo (+30 XP)')}</span>
          </button>

        </form>

      </div>
    </div>
  );
};
