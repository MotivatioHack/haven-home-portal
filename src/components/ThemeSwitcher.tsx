import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
      <button
        onClick={() => toggleTheme('light')}
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === 'light' 
            ? 'bg-card text-primary shadow-sm' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Light theme"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => toggleTheme('dark')}
        className={`p-2 rounded-full transition-all duration-200 ${
          theme === 'dark' 
            ? 'bg-card text-primary shadow-sm' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Dark theme"
      >
        <Moon className="w-4 h-4" />
      </button>
    </div>
  );
};
