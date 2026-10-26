import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Pill split CTA from the 21st.dev Aero Hero: a label pill with a separate circular
// arrow beside it. On hover both invert (accent fill ↔ ink fill) and the arrow exits
// up-right while a second one enters from below-left.
const half =
  'flex h-12 items-center rounded-full bg-accent text-on-accent ring-1 ring-accent ring-inset transition-colors duration-300 ease-out group-hover:bg-on-accent group-hover:text-accent';

export function SplitCta({ href, children, className }) {
  return (
    <a href={href} className={cn('group inline-flex items-center gap-1 text-sm font-semibold', className)}>
      <span className={cn(half, 'px-6')}>{children}</span>
      <span aria-hidden="true" className={cn(half, 'relative size-12 justify-center overflow-hidden')}>
        <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6" />
        <ArrowUpRight className="absolute size-4 -translate-x-6 translate-y-6 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
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
