'use client';

// Adapted from useplanes.com's Cinematic Text: each word drifts up out of a blur
// and settles. Toned down (less blur, shorter) to keep the motion subtle.
import { useMemo, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ease } from '@/lib/motion';

export function CinematicText({ text, accent, as: Tag = 'h1', delay = 0.1, stagger = 0.07, className }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // `accent` is a trailing phrase rendered in the accent color.
  const words = useMemo(() => {
    const plain = text.split(/\s+/).filter(Boolean).map((w) => ({ w, accent: false }));
    const tail = accent ? accent.split(/\s+/).filter(Boolean).map((w) => ({ w, accent: true })) : [];
    return [...plain, ...tail];
  }, [text, accent]);

  return (
    <Tag ref={ref} className={cn('text-balance', className)}>
      <span className="sr-only">{accent ? `${text} ${accent}` : text}</span>
      <span aria-hidden="true">
        {words.map(({ w, accent: isAccent }, i) => (
          <motion.span
            key={`${w}-${i}`}
            className={cn('inline-block', isAccent && 'text-accent')}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, filter: 'blur(10px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
            transition={reduced ? { duration: 0.2 } : { duration: 0.9, delay: delay + i * stagger, ease: ease.out }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
