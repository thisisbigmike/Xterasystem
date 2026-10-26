'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { THEME_STORAGE_KEY, DEFAULT_THEME_MODE } from '@/lib/theme';

const ThemeContext = createContext({
  themeMode: DEFAULT_THEME_MODE,
  setThemeMode: () => {},
});

export function ThemeProvider({ children }) {
  const [themeMode, setThemeModeState] = useState(DEFAULT_THEME_MODE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved) setThemeModeState(saved);
    } catch {}
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
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    } catch {}

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
      {/* Honors the OS "reduce motion" setting for every framer-motion animation. */}
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
