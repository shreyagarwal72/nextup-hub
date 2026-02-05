import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type DesignMode = 'alpha' | 'beta';

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  designMode: DesignMode;
  setDesignMode: (mode: DesignMode) => void;
  toggleDesignMode: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'nextup-theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [designMode, setDesignModeState] = useState<DesignMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('nextup-design-mode') as DesignMode) || 'alpha';
    }
    return 'alpha';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'm3-expressive');
    root.classList.add(theme);
    if (designMode === 'beta') {
      root.classList.add('m3-expressive');
    }
  }, [theme, designMode]);

  const value: ThemeProviderContextType = {
    theme,
    setTheme: (t: Theme) => {
      localStorage.setItem(storageKey, t);
      setThemeState(t);
    },
    toggleTheme: () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem(storageKey, newTheme);
      setThemeState(newTheme);
    },
    designMode,
    setDesignMode: (mode: DesignMode) => {
      localStorage.setItem('nextup-design-mode', mode);
      setDesignModeState(mode);
    },
    toggleDesignMode: () => {
      const newMode = designMode === 'alpha' ? 'beta' : 'alpha';
      localStorage.setItem('nextup-design-mode', newMode);
      setDesignModeState(newMode);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
