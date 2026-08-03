'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { springBounce } from './FadeIn';

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="theme-toggle-wrap" ref={wrapRef} id="themeToggleWrap">
      <motion.button
        className="theme-toggle"
        id="themeToggleBtn"
        aria-label="Select theme"
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        transition={springBounce}
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          className="icon-sun"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ display: themeMode === 'light' ? 'block' : 'none' }}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg
          className="icon-moon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: themeMode === 'dark' ? 'block' : 'none' }}
        >
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
        <svg
          className="icon-system"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: themeMode === 'system' ? 'block' : 'none' }}
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={springBounce}
            className="theme-dropdown show"
            id="themeDropdown"
          >
            <motion.button
              whileHover={{ x: 2 }}
              className={`theme-option ${themeMode === 'light' ? 'active' : ''}`}
              type="button"
              onClick={() => {
                setThemeMode('light');
                setOpen(false);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
              Light
            </motion.button>
            <motion.button
              whileHover={{ x: 2 }}
              className={`theme-option ${themeMode === 'dark' ? 'active' : ''}`}
              type="button"
              onClick={() => {
                setThemeMode('dark');
                setOpen(false);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
              </svg>
              Dark
            </motion.button>
            <motion.button
              whileHover={{ x: 2 }}
              className={`theme-option ${themeMode === 'system' ? 'active' : ''}`}
              type="button"
              onClick={() => {
                setThemeMode('system');
                setOpen(false);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              System
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
