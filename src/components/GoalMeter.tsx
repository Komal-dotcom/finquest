import React from 'react';
import { Target, PlusCircle, TrendingUp, Calendar, Trash2 } from 'lucide-react';
import { FinancialGoal } from '../types';
import { useHinglish } from '../context/HinglishContext';

interface GoalMeterProps {
  goal: FinancialGoal;
  type: 'shortTerm' | 'longTerm';
  onAddSavings: (type: 'shortTerm' | 'longTerm', goalId?: string) => void;
  onDeleteGoal?: (goalId: string) => void;
}

export const GoalMeter: React.FC<GoalMeterProps> = ({ goal, type, onAddSavings, onDeleteGoal }) => {
  const { t } = useHinglish();

  const current = goal.currentAmount || 0;
  const target = Math.max(1, goal.targetAmount || 10000);
  const percentage = Math.min(100, Math.round((current / target) * 100));
  const remaining = Math.max(0, target - current);

  // Format currency in Indian format ₹1,00,000
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Projected completion calculation
  const monthsLeft = goal.deadlineMonths || 3;
  const createdDate = goal.createdAt ? new Date(goal.createdAt) : new Date();
  const projectedDate = new Date(createdDate);
  projectedDate.setMonth(projectedDate.getMonth() + monthsLeft);
  const formattedDateStr = projectedDate.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });

  const isShortTerm = type === 'shortTerm' || goal.type === 'shortTerm';

  if (isShortTerm) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl relative overflow-hidden flex flex-col justify-between backdrop-blur-sm group hover:border-white/20 transition-all">
        
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
              <Target className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">
                  {t('Short-Term Goal', 'Short-Term Goal')}
                </span>
                {goal.category && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-white/70 font-medium">
                    {goal.category}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white text-base line-clamp-1 mt-0.5">
                {goal.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-cyan-400 font-mono font-bold">
              {percentage}%
            </span>
            {onDeleteGoal && goal.id && (
              <button
                onClick={() => onDeleteGoal(goal.id)}
                title="Delete goal"
                className="p-1 rounded-lg text-white/30 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Circular Progress Display */}
        <div className="flex items-center space-x-5 my-2">
          <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                className="text-white/10"
                fill="transparent"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (percentage / 100) * 251.2}
                strokeLinecap="round"
                fill="transparent"
                className="text-cyan-400 transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute text-center">
              <div className="text-xs font-bold text-white">{formatINR(current)}</div>
              <div className="text-[10px] text-white/40 uppercase font-semibold">{t('Saved', 'Bachaye')}</div>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div>
              <p className="font-bold text-sm text-white line-clamp-1">{goal.name}</p>
              <p className="text-xs text-white/50 mb-2">Target: <span className="text-white font-semibold">{formatINR(target)}</span></p>
            </div>

            <button
              onClick={() => onAddSavings('shortTerm', goal.id)}
              className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all shadow-md shadow-cyan-500/20"
            >
              + Add Savings (+20 XP)
            </button>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
          <span className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Target: {formattedDateStr}</span>
          </span>
          <span className="text-cyan-300 font-semibold">{remaining > 0 ? `${formatINR(remaining)} away` : 'Achieved! 🎉'}</span>
        </div>

      </div>
    );
  }

  // Long Term Progress Card
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl relative overflow-hidden flex flex-col justify-between backdrop-blur-sm group hover:border-white/20 transition-all">
      
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2.5 rounded-xl bg-blue-500/20 border border-blue-500/30">
            <TrendingUp className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-400">
                {t('Long-Term Wealth Goal', 'Long-Term Goal')}
              </span>
              {goal.category && (
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/10 text-white/70 font-medium">
                  {goal.category}
                </span>
              )}
            </div>
            <h3 className="font-bold text-white text-base line-clamp-1 mt-0.5">
              {goal.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-blue-400 font-mono font-bold">
            {percentage}%
          </span>
          {onDeleteGoal && goal.id && (
            <button
              onClick={() => onDeleteGoal(goal.id)}
              title="Delete goal"
              className="p-1 rounded-lg text-white/30 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Progress numbers */}
      <div className="space-y-3 my-2">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs text-white/50">{t('Current Savings', 'Abhi Tak Ki Bachat')}</span>
            <div className="text-xl font-bold text-white">
              {formatINR(current)}
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-white/50">{t('Target', 'Target')}</span>
            <div className="text-sm font-bold text-blue-300">
              {formatINR(target)}
            </div>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000 ease-out shadow-md shadow-blue-500/30"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <button
          onClick={() => onAddSavings('longTerm', goal.id)}
          className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 mt-2"
        >
          + Add Savings (+20 XP)
        </button>
      </div>

      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
        <span className="flex items-center space-x-1">
          <Calendar className="w-3.5 h-3.5 text-blue-400" />
          <span>Target: <strong className="text-white font-medium">{formattedDateStr}</strong></span>
        </span>
        <span className="text-blue-300 font-semibold">{remaining > 0 ? `${formatINR(remaining)} remaining` : 'Achieved! 🎉'}</span>
      </div>

    </div>
  );
};
