import React, { useState } from 'react';
import { Trophy, ArrowRight, Lock, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useHinglish } from '../context/HinglishContext';
import { Logo } from '../components/Logo';

interface LoginProps {
  onNavigate: (page: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onNavigate }) => {
  const { login } = useAuth();
  const { t } = useHinglish();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      onNavigate('dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoUser = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('password123');
  };

  return (
    <div className="min-h-screen bg-[#070d24] text-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl z-10 backdrop-blur-md">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div 
            onClick={() => onNavigate('home')}
            className="flex justify-center mb-3 cursor-pointer"
          >
            <Logo size="lg" showText={false} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {t('Welcome Back to FinQuest', 'FinQuest Me Wapas Aao')}
          </h2>
          <p className="text-xs text-white/50 mt-1">
            {t('Sign in to continue your daily financial streak!', 'Apni daily financial streak continue karo!')}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="rahul@finquest.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-white/70 mb-1.5 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-cyan-500 font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all"
          >
            <span>{loading ? t('Signing in...', 'Login ho raha hai...') : t('Sign In', 'Sign In')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>

        {/* Demo Users Quick Login */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-[11px] font-bold text-white/40 mb-2 uppercase tracking-wider">
            {t('Quick Demo Users (Click to auto-fill):', 'Demo User Se Login Karo:')}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => fillDemoUser('rahul@finquest.com')}
              className="flex-1 py-2 px-2 bg-white/5 border border-white/10 hover:border-cyan-500/50 rounded-lg text-[10px] font-bold text-cyan-300 transition-colors"
            >
              Rahul (Saver 💰)
            </button>
            <button
              onClick={() => fillDemoUser('pooja@finquest.com')}
              className="flex-1 py-2 px-2 bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-lg text-[10px] font-bold text-blue-300 transition-colors"
            >
              Pooja (Investor 📈)
            </button>
          </div>
        </div>

        {/* Switch to Signup */}
        <p className="text-center text-xs text-white/50 mt-6">
          {t("Don't have an account?", "Account nahi hai?")}{' '}
          <button
            onClick={() => onNavigate('signup')}
            className="text-cyan-400 font-bold hover:underline"
          >
            {t('Create Free Account', 'Naya Account Banao')}
          </button>
        </p>

      </div>
    </div>
  );
};
