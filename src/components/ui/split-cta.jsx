import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const variants = {
  // Fixed white pill for photo/dark backgrounds (the hero).
  onDark: {
    pill: 'bg-white text-black hover:bg-black hover:text-white',
    dot: 'bg-black text-white group-hover:bg-white group-hover:text-black',
  },
  // Follows the theme: inverse of the page background.
  theme: {
    pill: 'bg-foreground text-background hover:bg-accent hover:text-on-accent',
    dot: 'bg-background text-foreground group-hover:bg-on-accent group-hover:text-accent',
  },
};

// Pill split CTA from the 21st.dev Aero Hero: label + circular arrow. On hover the
// colors invert and the arrow exits up-right while a second one enters from below-left.
export function SplitCta({ href, children, variant = 'onDark', className }) {
  const v = variants[variant];
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex h-12 items-center justify-between gap-3 rounded-full py-1 pr-1 pl-6 text-sm font-semibold',
        'transition-colors duration-300 ease-out',
        v.pill,
        className,
      )}
    >
      {children}
      <span
        className={cn(
          'relative flex size-10 items-center justify-center overflow-hidden rounded-full transition-colors duration-300 ease-out',
          v.dot,
        )}
      >
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5"
        />
        <ArrowUpRight
          aria-hidden="true"
          className="absolute size-4 -translate-x-5 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
        />
      </span>
    </a>
  );
}

export function TextLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex h-12 items-center text-sm font-semibold underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current',
        className,
      )}
    >
      {children}
    </a>
  );
}
