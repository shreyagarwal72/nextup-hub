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
      className="glass-pro border-primary/30 hover:bg-primary/20 transition-elastic rounded-full w-12 h-12"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
      ) : (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}