'use client';

import { motion } from 'framer-motion';

// Kinetics-inspired spring physics preset
export const springPhysics = {
  type: 'spring',
  stiffness: 320,
  damping: 24,
  mass: 1,
};

export const springBounce = {
  type: 'spring',
  stiffness: 400,
  damping: 18,
};

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration,
  className = '',
  style = {},
}) {
  const directions = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { x: 35, y: 0 },
    right: { x: -35, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={
        duration
          ? { duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }
          : { ...springPhysics, delay }
      }
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', style = {}, delayChildren = 0, staggerChildren = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: springPhysics,
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
