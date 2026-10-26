// Motion tokens. Mirrors --ease-out / --ease-in-out in globals.css
// so framer-motion and CSS transitions move the same way.

export const ease = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
};

export const duration = {
  fast: 0.15,
  base: 0.24,
  slow: 0.4,
  reveal: 0.6,
};

// Scroll reveals travel a short distance so content settles rather than flies in.
export const revealOffset = 12;

// Lists reveal item by item so the eye reads them in order; 60ms keeps a
// 5-item list under 0.5s total.
export const stagger = {
  list: 0.06,
  grid: 0.08,
};

export const transition = {
  fast: { duration: duration.fast, ease: ease.out },
  base: { duration: duration.base, ease: ease.out },
  slow: { duration: duration.slow, ease: ease.out },
  reveal: { duration: duration.reveal, ease: ease.out },
};
