import { cn } from '@/lib/utils';

// Styling adapted from uiarc.dev's Badge (tone pill with a tinted fill and border).
// Each structure type owns one fixed hue so a tag reads the same everywhere.
const tones = {
  direct: 'text-direct bg-direct/12 border-direct/30',
  fund: 'text-fund bg-fund/12 border-fund/30',
  lending: 'text-lending bg-lending/12 border-lending/30',
  revenue: 'text-revenue bg-revenue/12 border-revenue/30',
  neutral: 'text-muted bg-surface-2 border-border',
};

const toneByLabel = [
  [/direct/i, 'direct'],
  [/fund|spv|pooled/i, 'fund'],
  [/lend|debt|credit/i, 'lending'],
  [/revenue|cash flow/i, 'revenue'],
];

export function toneFor(label) {
  const match = toneByLabel.find(([pattern]) => pattern.test(label));
  return match ? match[1] : 'neutral';
}

export function Badge({ children, tone, className }) {
  const resolved = tone || (typeof children === 'string' ? toneFor(children) : 'neutral');
  return (
    <span
      className={cn(
        'inline-flex h-6 shrink-0 items-center whitespace-nowrap rounded-full border px-2.5 text-xs font-medium',
        tones[resolved],
        className,
      )}
    >
      {children}
    </span>
  );
}
