import React, { useState } from 'react';
import { Trophy, ArrowRight, Lock, Mail, User, MapPin, IndianRupee, Sparkles, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { Logo } from '../components/Logo';
import { EMOJI_AVATARS, getEmojiAvatarSvg, getRandomEmojiAvatar } from '../utils/avatar';

interface SignupProps {
  onNavigate: (page: string) => void;
}

export const Signup: React.FC<SignupProps> = ({ onNavigate }) => {
  const { signup } = useAuth();
  const { t } = useHinglish();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>(0);
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const currentAvatarUrl = customAvatar || getEmojiAvatarSvg(
    EMOJI_AVATARS[selectedAvatarIndex].emoji,
    EMOJI_AVATARS[selectedAvatarIndex].bg
  );

  const handleRandomizeAvatar = () => {
    const randomIndex = Math.floor(Math.random() * EMOJI_AVATARS.length);
    setSelectedAvatarIndex(randomIndex);
    setCustomAvatar(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signup({
        name,
        email,
        password,
        city: city || 'Mumbai',
        monthlyIncome: monthlyIncome ? Number(monthlyIncome) : 35000,
        avatar: currentAvatarUrl
      });
      // Redirect directly to Goal Setup screen after signup
      onNavigate('goal-setup');
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070d24] text-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl z-10 backdrop-blur-md">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div 
            onClick={() => onNavigate('home')}
            className="flex justify-center mb-3 cursor-pointer"
          >
            <Logo size="lg" showText={false} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {t('Join FinQuest Today', 'FinQuest Par Account Banao')}
          </h2>
          <p className="text-xs text-white/50 mt-1">
            {t('Start your financial journey & earn +50 XP Welcome Bonus!', '+50 XP Welcome Bonus ke sath start karo!')}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          
          {/* Face Emoji Avatar Picker */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
            <label className="block text-[11px] font-bold text-white/70 mb-2 uppercase tracking-wider">
              {t('Choose Your Avatar 🎭', 'Apna Face Avatar Chuno 🎭')}
            </label>
            <div className="flex items-center justify-center space-x-3 mb-2">
              <img
                src={currentAvatarUrl}
                alt="Selected Avatar"
                className="w-14 h-14 rounded-full border-2 border-cyan-400 shadow-md shadow-cyan-500/20 object-cover"
              />
              <button
                type="button"
                onClick={handleRandomizeAvatar}
                className="px-3 py-1.5 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 rounded-lg text-cyan-300 text-xs font-bold flex items-center space-x-1 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t('Shuffle', 'Random')}</span>
              </button>
            </div>
            
            {/* Quick Face Emoji Badges */}
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {EMOJI_AVATARS.slice(0, 8).map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedAvatarIndex(idx);
                    setCustomAvatar(null);
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-transform ${
                    selectedAvatarIndex === idx && !customAvatar
                      ? 'scale-125 border-2 border-cyan-400 shadow-md shadow-cyan-500/30'
                      : 'opacity-70 hover:opacity-100 hover:scale-110'
                  }`}
                  style={{ backgroundColor: item.bg }}
                >
                  {item.emoji}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">{t('Full Name', 'Aapka Naam')}</label>
            <div className="relative">
              <User className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Aarav Sharma"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="aarav@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">{t('City', 'Sheher')}</label>
              <div className="relative">
                <MapPin className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Mumbai"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-white/70 mb-1 uppercase tracking-wider">{t('Income (₹/mo)', 'Monthly Income')}</label>
              <div className="relative">
                <IndianRupee className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  placeholder="45000"
                  value={monthlyIncome}
                  onChange={e => setMonthlyIncome(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 font-medium"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all mt-2"
          >
            <span>{loading ? t('Creating account...', 'Account ban raha hai...') : t('Continue to Goal Setup 🎯', 'Goal Setup Par Jao 🎯')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>

        <p className="text-center text-xs text-white/50 mt-6">
          {t('Already have an account?', 'Pehle se account hai?')}{' '}
          <button
            onClick={() => onNavigate('login')}
            className="text-cyan-400 font-bold hover:underline"
          >
            {t('Sign In', 'Login Karo')}
          </button>
        </p>

      </div>
    </div>
  );
};
