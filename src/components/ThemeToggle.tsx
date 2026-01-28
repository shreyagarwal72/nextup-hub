import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="liquid-glass h-10 w-10 rounded-xl transition-all duration-300 relative overflow-hidden hover:scale-105"
    >
      <Sun className={`h-5 w-5 absolute transition-all duration-500 text-amber-500 ${
        theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
      }`} />
      <Moon className={`h-5 w-5 absolute transition-all duration-500 text-primary ${
        theme === 'light' ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
      }`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
