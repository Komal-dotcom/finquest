import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageSquare, Send, X, Sparkles, User as UserIcon, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';
import { useHinglish } from '../context/HinglishContext';
import { api } from '../utils/api';
import { Logo } from './Logo';

export const FinBotDrawer: React.FC = () => {
  const { t } = useHinglish();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'bot',
      text: t(
        "Namaste! I'm FinBot 🤖, your AI financial advisor. Ask me anything about money, budgeting, SIPs, or taxes!",
        "Namaste! Main hu FinBot 🤖, apka personal AI money dost. Pucho paise, SIP ya budgeting se judi koi bhi baat!"
      ),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputMsg).trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMsg('');
    setLoading(true);

    try {
      const res = await api.sendChatMessage(query);
      const botMsg: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: res.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: 'bot-err-' + Date.now(),
        sender: 'bot',
        text: "FinBot is taking a short breather ☕. Please try again!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    t("Can I afford an iPhone?", "Kya main iPhone afford kar sakta hu?"),
    t("How much should I save per month?", "Mahine me kitna save karu?"),
    t("What is SIP?", "SIP kya hoti hai?"),
    t("Explain 80C in simple words", "Section 80C simple me batao")
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-16 sm:bottom-8 right-6 z-40 flex items-center space-x-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-2xl shadow-blue-500/30 border border-cyan-300/30 hover:scale-105 transition-all group"
      >
        <div className="w-7 h-7 rounded-full bg-[#070d24] flex items-center justify-center">
          <Bot className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
        </div>
        <span>{t('Ask FinBot AI 🤖', 'FinBot AI Se Pucho 🤖')}</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-end">
          <div className="w-full max-w-md bg-[#070d24] border-l border-white/10 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Logo size="sm" showText={false} />
                <div>
                  <h3 className="font-bold text-white text-base flex items-center space-x-2">
                    <span>FinBot AI</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Active
                    </span>
                  </h3>
                  <p className="text-[11px] text-white/50">
                    {t('Your Personal Money Advisor', 'Apka Personal Money Dost')}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-3 bg-white/5 border-b border-white/10 flex items-center space-x-2 overflow-x-auto no-scrollbar">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p)}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 text-xs font-semibold border border-white/10 transition-colors whitespace-nowrap"
                >
                  💡 {p}
                </button>
              ))}
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex items-start space-x-2.5 ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-xs font-medium leading-relaxed shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none'
                        : 'bg-white/10 border border-white/10 text-white rounded-tl-none whitespace-pre-line'
                    }`}
                  >
                    {msg.text}
                    <div className="text-[9px] text-white/40 text-right mt-1 font-sans">
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 flex-shrink-0 mt-0.5">
                      <UserIcon className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center space-x-2 text-xs text-cyan-300 bg-white/5 p-3 rounded-2xl max-w-[200px] border border-white/10">
                  <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
                  <span>FinBot is thinking...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-[#070d24]">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  placeholder={t('Ask a money question...', 'Paise ka koi bhi sawal pucho...')}
                  value={inputMsg}
                  onChange={e => setInputMsg(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  disabled={loading || !inputMsg.trim()}
                  className="p-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md disabled:opacity-50 transition-transform hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
