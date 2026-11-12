import React from 'react';
import { PiggyBank, Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg text-lg',
    md: 'w-10 h-10 rounded-xl text-xl',
    lg: 'w-14 h-14 rounded-2xl text-3xl',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`relative flex items-center justify-center bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-lg shadow-blue-500/30 border border-cyan-300/30 group hover:scale-105 transition-all duration-300 ${sizeClasses[size]}`}>
        {/* Cute Sparkle overlay */}
        <PiggyBank className={`${iconSizes[size]} text-white transform -rotate-6 transition-transform group-hover:rotate-0`} />
        <Sparkles className="w-2.5 h-2.5 text-cyan-200 absolute -top-1 -right-1 animate-pulse" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center space-x-1.5">
            <span className="text-xl sm:text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-200">
              FinQuest
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
