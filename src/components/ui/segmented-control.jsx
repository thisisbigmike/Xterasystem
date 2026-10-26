'use client';

// Adapted from useplanes.com's Segmented Control: a pill that springs to the
// selected tab, with arrow/Home/End keyboard support (WAI-ARIA tabs pattern).
import { useId, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const pillSpring = { type: 'spring', stiffness: 380, damping: 30, mass: 0.6 };

export function SegmentedControl({ options, value, onChange, label, controls, className }) {
  const reduced = useReducedMotion();
  const layoutId = useId();
  const refs = useRef([]);
  const index = Math.max(options.indexOf(value), 0);

  const onKeyDown = (e) => {
    const last = options.length - 1;
    const next = { ArrowRight: index === last ? 0 : index + 1, ArrowLeft: index === 0 ? last : index - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    onChange(options[next]);
    refs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn('relative flex w-full items-center gap-0.5 overflow-x-auto rounded-full border border-border bg-white/5 p-0.5', className)}
    >
      {options.map((option, i) => {
        const active = option === value;
        return (
          <button
            key={option}
            ref={(el) => { refs.current[i] = el; }}
            type="button"
            role="tab"
            aria-selected={active}
            aria-controls={controls}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(option)}
            onKeyDown={onKeyDown}
            className={cn(
              'relative h-8 shrink-0 cursor-pointer rounded-full px-3 text-xs font-medium whitespace-nowrap transition-colors',
              active ? 'text-on-accent' : 'text-muted hover:text-foreground',
            )}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-accent"
                transition={reduced ? { duration: 0 } : pillSpring}
              />
            )}
            <span className="relative">{option}</span>
          </button>
        );
      })}
    </div>
  );
}
