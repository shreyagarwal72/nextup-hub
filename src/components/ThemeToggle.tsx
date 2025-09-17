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
      className="glass-pro border-primary/30 hover:bg-primary/20 transition-all duration-300 rounded-full w-12 h-12 relative overflow-hidden"
    >
      <div className="relative w-6 h-6">
        <Sun className={`h-5 w-5 absolute top-0.5 left-0.5 transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        }`} />
        <Moon className={`h-5 w-5 absolute top-0.5 left-0.5 transition-all duration-300 ${
          theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        }`} />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}