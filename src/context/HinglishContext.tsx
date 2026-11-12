import React, { createContext, useContext, useState, useEffect } from 'react';

interface HinglishContextType {
  isHinglish: boolean;
  toggleHinglish: () => void;
  t: (en: string, hinglish: string) => string;
}

const HinglishContext = createContext<HinglishContextType | undefined>(undefined);

export const HinglishProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHinglish, setIsHinglish] = useState(() => {
    return localStorage.getItem('finquest_hinglish') === 'true';
  });

  const toggleHinglish = () => {
    setIsHinglish(prev => {
      const next = !prev;
      localStorage.setItem('finquest_hinglish', String(next));
      return next;
    });
  };

  // Helper function to pick English or Hinglish string
  const t = (en: string, hinglish: string) => {
    return isHinglish ? hinglish : en;
  };

  return (
    <HinglishContext.Provider value={{ isHinglish, toggleHinglish, t }}>
      {children}
    </HinglishContext.Provider>
  );
};

export const useHinglish = () => {
  const context = useContext(HinglishContext);
  if (!context) {
    throw new Error('useHinglish must be used within a HinglishProvider');
  }
  return context;
};
