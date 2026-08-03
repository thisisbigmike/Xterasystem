'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  themeMode: 'light',
  setThemeMode: () => {},
});

export function ThemeProvider({ children }) {
  const [themeMode, setThemeModeState] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('xtera_theme_mode') || 'light';
    setThemeModeState(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const systemQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function updateThemeUI(mode) {
      const isDark = mode === 'dark' || (mode === 'system' && systemQuery.matches);
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }

    updateThemeUI(themeMode);
    localStorage.setItem('xtera_theme_mode', themeMode);

    const handleSystemChange = () => {
      if (themeMode === 'system') {
        updateThemeUI('system');
      }
    };

    systemQuery.addEventListener('change', handleSystemChange);
    return () => systemQuery.removeEventListener('change', handleSystemChange);
  }, [themeMode, mounted]);

  const setThemeMode = (mode) => {
    setThemeModeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
