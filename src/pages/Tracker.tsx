import React, { useState } from 'react';
import { BarChart2, PlusCircle, Target, TrendingUp, Sparkles, Plus, Wallet } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { GoalMeter } from '../components/GoalMeter';
import { AddSavingsModal } from '../components/AddSavingsModal';
import { AddGoalModal } from '../components/AddGoalModal';
import { api } from '../utils/api';
import { FinancialGoal } from '../types';

interface TrackerProps {
  onNavigate: (page: string) => void;
}

export const Tracker: React.FC<TrackerProps> = ({ onNavigate }) => {
  const { user, updateUserLocal } = useAuth();
  const { t } = useHinglish();

  const [savingsModalOpen, setSavingsModalOpen] = useState(false);
  const [savingsModalType, setSavingsModalType] = useState<'shortTerm' | 'longTerm'>('shortTerm');
  const [selectedGoalId, setSelectedGoalId] = useState<string | undefined>(undefined);

  const [addGoalModalOpen, setAddGoalModalOpen] = useState(false);
  const [addGoalType, setAddGoalType] = useState<'shortTerm' | 'longTerm'>('shortTerm');

  if (!user) return null;

  const handleOpenSavingsModal = (type: 'shortTerm' | 'longTerm', goalId?: string) => {
    setSavingsModalType(type);
    setSelectedGoalId(goalId);
    setSavingsModalOpen(true);
  };

  const handleOpenAddGoalModal = (type: 'shortTerm' | 'longTerm' = 'shortTerm') => {
    setAddGoalType(type);
    setAddGoalModalOpen(true);
  };

  const handleDeleteGoal = async (goalId: string) => {
    if (!window.confirm(t('Are you sure you want to remove this goal?', 'Kya aap is goal ko hatana chahte hain?'))) {
      return;
    }
    try {
      const res = await api.deleteGoal(goalId);
      updateUserLocal(res.user);
    } catch (err) {
      console.error(err);
    }
  };

  // Compile all short-term & long-term goals
  const shortTermGoals: FinancialGoal[] = [];
  const longTermGoals: FinancialGoal[] = [];

  if (user.goals) {
    if (user.goals.shortTerm) shortTermGoals.push(user.goals.shortTerm);
    if (user.goals.longTerm) longTermGoals.push(user.goals.longTerm);

    if (user.goals.additionalGoals) {
      user.goals.additionalGoals.forEach(g => {
        if (g.type === 'shortTerm') shortTermGoals.push(g);
        else longTermGoals.push(g);
      });
    }
  }

  // Calculate totals
  const allGoals = [...shortTermGoals, ...longTermGoals];
  const totalSaved = allGoals.reduce((sum, g) => sum + (g.currentAmount || 0), 0);
  const totalTarget = allGoals.reduce((sum, g) => sum + (g.targetAmount || 0), 0);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center space-x-2">
            <BarChart2 className="w-7 h-7 text-pink-400" />
            <span>{t('FinQuest Money Tracker', 'FinQuest Money Tracker')}</span>
          </h1>
          <p className="text-xs text-white/50 mt-1">
            {t('Manage short & long-term financial goals, add new targets, deposit savings & earn +20 XP!', 'Apne sabhi short & long-term goals manage karo aur deposit par +20 XP kamao!')}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOpenAddGoalModal('shortTerm')}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all"
          >
            <Plus className="w-4 h-4 text-cyan-400" />
            <span>{t('+ New Goal (+30 XP)', '+ Naya Goal (+30 XP)')}</span>
          </button>

          <button
            onClick={() => handleOpenSavingsModal('shortTerm')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 flex items-center justify-center space-x-1.5 transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{t('Deposit Savings (+20 XP)', 'Bachat Dalo (+20 XP)')}</span>
          </button>
        </div>
      </div>

      {/* Overview Stats Bar */}
      {allGoals.length > 0 && (
        <div className="bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40 border border-white/10 rounded-2xl p-5 shadow-xl backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-300">
                {t('Total Active Goals Progress', 'Kul Bachat Progress')}
              </span>
              <div className="text-xl font-extrabold text-white">
                {formatINR(totalSaved)} <span className="text-xs text-white/50 font-normal">/ {formatINR(totalTarget)} target</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-cyan-400">
                {t('Active Goals Count', 'Active Goals')}
              </span>
              <div className="text-lg font-bold text-white">
                {shortTermGoals.length} Short-Term • {longTermGoals.length} Long-Term
              </div>
            </div>
            <button
              onClick={() => handleOpenAddGoalModal('shortTerm')}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 font-bold text-xs flex items-center space-x-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{t('Add Goal', 'Goal Add Karo')}</span>
            </button>
          </div>
        </div>
      )}

      {/* Goal Meters Grid */}
      {user.goals ? (
        <div className="space-y-8">
          
          {/* Short-Term Goals Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>{t('Short-Term Goals', 'Short-Term Goals')} ({shortTermGoals.length})</span>
              </h2>

              <button
                onClick={() => handleOpenAddGoalModal('shortTerm')}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 uppercase tracking-wider"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t('Add Short-Term Goal', '+ Short-Term Goal')}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shortTermGoals.map((goal, idx) => (
                <GoalMeter
                  key={goal.id || `st-${idx}`}
                  goal={goal}
                  type="shortTerm"
                  onAddSavings={handleOpenSavingsModal}
                  onDeleteGoal={goal.id && !goal.id.includes('demo') && goal !== user.goals?.shortTerm ? handleDeleteGoal : undefined}
                />
              ))}
            </div>
          </div>

          {/* Long-Term Goals Section */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span>{t('Long-Term Wealth Goals', 'Long-Term Goals')} ({longTermGoals.length})</span>
              </h2>

              <button
                onClick={() => handleOpenAddGoalModal('longTerm')}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center space-x-1 uppercase tracking-wider"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t('Add Long-Term Goal', '+ Long-Term Goal')}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {longTermGoals.map((goal, idx) => (
                <GoalMeter
                  key={goal.id || `lt-${idx}`}
                  goal={goal}
                  type="longTerm"
                  onAddSavings={handleOpenSavingsModal}
                  onDeleteGoal={goal.id && !goal.id.includes('demo') && goal !== user.goals?.longTerm ? handleDeleteGoal : undefined}
                />
              ))}
            </div>
          </div>

        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4 backdrop-blur-md">
          <h3 className="text-lg font-bold text-white">
            {t('No financial goals configured yet!', 'Pehle goal setup karo!')}
          </h3>
          <button
            onClick={() => onNavigate('goal-setup')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20"
          >
            {t('Setup Goals Now (+30 XP)', 'Goal Setup Karo (+30 XP)')}
          </button>
        </div>
      )}

      {/* Motivational Advice Banner */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-4 backdrop-blur-md">
        <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-pink-400 flex-shrink-0">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <h4 className="font-bold text-white text-sm">
            {t('Pro Saving Tip', 'Pro Bachat Tip 💡')}
          </h4>
          <p className="text-xs text-white/70 mt-0.5 leading-relaxed">
            {t(
              'Automate your 20% savings on payday before spending on wants! Having multiple categorized short & long-term goals keeps you motivated and disciplined.',
              'Salary aate hi 20% bachat account me pehle daal do! Chote short & long-term targets aapko systematic rakhte hain.'
            )}
          </p>
        </div>
      </div>

      {savingsModalOpen && (
        <AddSavingsModal
          initialType={savingsModalType}
          initialGoalId={selectedGoalId}
          onClose={() => setSavingsModalOpen(false)}
        />
      )}

      {addGoalModalOpen && (
        <AddGoalModal
          initialType={addGoalType}
          onClose={() => setAddGoalModalOpen(false)}
        />
      )}

    </div>
  );
};
