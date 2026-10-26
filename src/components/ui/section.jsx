import { cn } from '@/lib/utils';
import FadeIn from '../FadeIn';

// Every content section: hairline top rule + the framed column, so the
// hero's divider grid carries through the page.
export function Section({ id, className, frameClassName, children, ...props }) {
  return (
    <section id={id} className={cn('border-t border-border', className)} {...props}>
      <div className={cn('frame py-16 sm:py-24', frameClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, children, note, align = 'left', className }) {
  return (
    <FadeIn className={cn('mb-12 max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
      {children && <p className="mt-4 text-muted">{children}</p>}
      {note && (
        <p className="mt-5 rounded-sm border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-foreground">
          {note}
        </p>
      )}
    </FadeIn>
  );
}
