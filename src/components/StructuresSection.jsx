'use client';

import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';
import { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger } from '@/lib/motion';
import { cn } from '@/lib/utils';

const structures = [
  { node: 'Direct ownership', tag: 'Direct Asset', title: 'Direct Ownership', body: 'Title, equity, or direct fractional interest in physical or corporate assets.' },
  { node: 'Fund / SPV', tag: 'Fund / SPV', title: 'Fund / Pooled', body: 'Interest in a managed fund or special-purpose vehicle holding underlying assets.' },
  { node: 'Lending / Debt', tag: 'Debt', title: 'Lending / Credit', body: 'Fixed or variable income through loans, bonds, or structured debt instruments.' },
  { node: 'Revenue-share', tag: 'Cash flow', title: 'Revenue-Share', body: 'Entitlement to a percentage of gross or net revenue from operations.' },
];

const dot = {
  'Direct Asset': 'bg-direct',
  'Fund / SPV': 'bg-fund',
  Debt: 'bg-lending',
  'Cash flow': 'bg-revenue',
};

export default function StructuresSection() {
  return (
    <Section id="structures">
      <SectionHeader eyebrow="Clear legal & economic structures" title="Know what you own before you commit">
        Every opportunity on Xterasystem is categorized by its underlying structure. No guessing.
      </SectionHeader>

      <StaggerContainer
        as="ul"
        staggerChildren={stagger.grid}
        className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
      >
        {structures.map((s) => (
          <StaggerItem as="li" key={s.title} className="flex flex-col bg-surface p-6 sm:p-8">
            <span className="flex items-center gap-2 text-xs font-medium text-subtle">
              <span aria-hidden="true" className={cn('size-2 rounded-full', dot[s.tag])} />
              {s.node}
            </span>
            <h3 className="mt-8 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm text-muted">{s.body}</p>
            <Badge className="mt-6 self-start">{s.tag}</Badge>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
