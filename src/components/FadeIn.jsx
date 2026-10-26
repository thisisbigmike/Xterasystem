'use client';

import { motion } from 'framer-motion';
import { revealOffset, stagger, transition } from '@/lib/motion';

const offsets = {
  up: { y: revealOffset },
  down: { y: -revealOffset },
  none: {},
};

const viewport = { once: true, margin: '-64px' };

// Reveals a block once as it scrolls into view.
export default function FadeIn({ children, delay = 0, direction = 'up', className, style, as = 'div' }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, ...(offsets[direction] || offsets.up) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ ...transition.reveal, delay }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

// Reveals its StaggerItem children in sequence.
export function StaggerContainer({ children, className, style, delayChildren = 0, staggerChildren = stagger.list, as = 'div', ...rest }) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren } },
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ children, className, style, as = 'div', ...rest }) {
  const Component = motion[as];
  return (
    <Component
      variants={{
        hidden: { opacity: 0, y: revealOffset },
        visible: { opacity: 1, y: 0, transition: transition.reveal },
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
