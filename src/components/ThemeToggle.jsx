'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ease, duration } from '@/lib/motion';

const options = [
  { mode: 'light', label: 'Light', Icon: Sun },
  { mode: 'dark', label: 'Dark', Icon: Moon },
  { mode: 'system', label: 'System', Icon: Monitor },
];

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const CurrentIcon = (options.find((o) => o.mode === themeMode) || options[2]).Icon;

  return (
    <div className="theme-menu-wrap" ref={wrapRef}>
      <button
        className="icon-btn"
        type="button"
        aria-label="Color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <CurrentIcon className="icon-sm" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-menu"
            role="menu"
            aria-label="Color theme"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: duration.fast, ease: ease.out }}
          >
            {options.map(({ mode, label, Icon }) => (
              <button
                key={mode}
                className="theme-option"
                type="button"
                role="menuitemradio"
                aria-checked={themeMode === mode}
                onClick={() => {
                  setThemeMode(mode);
                  setOpen(false);
                }}
              >
                <Icon className="icon-sm" />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
