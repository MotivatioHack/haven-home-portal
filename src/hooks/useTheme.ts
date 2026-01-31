import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('society-theme');
      // Fallback to dark if rainbow was stored, otherwise use saved or light
      if (saved === 'rainbow') return 'dark';
      if (saved === 'dark') return 'dark';
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('society-theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};
