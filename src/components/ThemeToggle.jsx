'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { transition } from '@/lib/motion';
import { cn } from '@/lib/utils';

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

  const CurrentIcon = (options.find((o) => o.mode === themeMode) || options[1]).Icon;

  return (
    <div className="relative" ref={wrapRef}>
      <button
        className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5"
        type="button"
        aria-label="Color theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <CurrentIcon className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-[calc(100%+0.5rem)] right-0 z-10 flex min-w-36 flex-col gap-0.5 rounded-lg border border-border-strong bg-surface p-1 shadow-float"
            role="menu"
            aria-label="Color theme"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={transition.fast}
          >
            {options.map(({ mode, label, Icon }) => (
              <button
                key={mode}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-left text-sm transition-colors',
                  themeMode === mode ? 'bg-surface-2 font-semibold text-foreground' : 'text-muted hover:bg-surface-2 hover:text-foreground',
                )}
                type="button"
                role="menuitemradio"
                aria-checked={themeMode === mode}
                onClick={() => {
                  setThemeMode(mode);
                  setOpen(false);
                }}
              >
                <Icon className="size-4" />
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
