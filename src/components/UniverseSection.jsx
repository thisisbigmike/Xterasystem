'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Gem, Zap, Wheat, Building2, Truck, Cpu, Bitcoin, HeartPulse, Landmark, ChartLine, Clapperboard, Palette,
} from 'lucide-react';
import { categories } from '@/data/categories';
import { Section, SectionHeader } from './ui/section';
import { SkeletonImage } from './Skeleton';
import FadeIn from './FadeIn';
import { cn } from '@/lib/utils';
import { transition } from '@/lib/motion';

// Each category gets its own treatment: a photo where one exists, otherwise
// a distinct icon plus a gradient anchored to a different corner.
const treatments = {
  'Precious Metals': { Icon: Gem, glow: '0% 0%' },
  'Energy & Natural Resources': { Icon: Zap, span: 'sm:col-span-2 lg:row-span-2' },
  'Agriculture & Food': { Icon: Wheat, span: 'sm:col-span-2' },
  'Real Estate & Property': { Icon: Building2, span: 'sm:col-span-2 lg:row-span-2' },
  'Transportation & Logistics': { Icon: Truck, glow: '100% 0%' },
  'Technology & Digital Infra': { Icon: Cpu, span: 'sm:col-span-2' },
  'Digital Assets': { Icon: Bitcoin, glow: '0% 100%' },
  'Healthcare & Biotech': { Icon: HeartPulse, glow: '100% 100%' },
  'Infrastructure & Public Services': { Icon: Landmark, glow: '50% 0%' },
  'Financial Assets': { Icon: ChartLine, glow: '50% 100%' },
  'Media, Entertainment & IP': { Icon: Clapperboard, glow: '0% 50%' },
  'Alternative & Special Assets': { Icon: Palette, glow: '100% 50%' },
};

function Tile({ cat, selected }) {
  const { Icon, glow } = treatments[cat.name];
  if (cat.image) {
    return (
      <>
        <SkeletonImage
          className="absolute inset-0"
          src={cat.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <span aria-hidden="true" className="absolute inset-0 bg-(image:--media-scrim)" />
        <span className="on-dark relative mt-auto flex flex-col gap-1 p-5">
          <span className="font-display text-lg font-semibold text-foreground">{cat.name}</span>
          <span className="text-xs text-muted">{cat.items.length} listed</span>
        </span>
      </>
    );
  }
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: `radial-gradient(120% 120% at ${glow}, var(--accent-soft), transparent 60%)` }}
      />
      <span
        className={cn(
          'relative flex size-10 items-center justify-center rounded-sm border border-border bg-background/60 transition-colors',
          selected ? 'text-accent' : 'text-muted group-hover:text-accent',
        )}
      >
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <span className="relative mt-auto flex flex-col gap-1">
        <span className="font-display text-base font-semibold text-foreground">{cat.name}</span>
        <span className="text-xs text-muted">{cat.items.length} listed</span>
      </span>
    </>
  );
}

export default function UniverseSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const tabRefs = useRef([]);
  const selected = categories[selectedIdx];

  // Roving focus per the WAI-ARIA tabs pattern.
  const onKeyDown = (e) => {
    const last = categories.length - 1;
    const next = {
      ArrowRight: selectedIdx === last ? 0 : selectedIdx + 1,
      ArrowDown: selectedIdx === last ? 0 : selectedIdx + 1,
      ArrowLeft: selectedIdx === 0 ? last : selectedIdx - 1,
      ArrowUp: selectedIdx === 0 ? last : selectedIdx - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setSelectedIdx(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section id="universe">
      <SectionHeader
        eyebrow="Investment universe"
        title="A broad universe, organized for clarity"
        note="Exact availability, minimums, and eligibility depend on your country/region and on each opportunity."
      >
        Xterasystem showcases opportunities across asset classes. Some are direct assets: property, vehicles, land.
        Others are businesses, projects, funds, or revenue streams. Each opportunity page states exactly what
        you&apos;re buying into and how it works.
      </SectionHeader>

      <FadeIn>
        {/* Bento: 1px gaps over the border color draw the divider grid between tiles. */}
        <div
          role="tablist"
          aria-label="Asset classes"
          className="grid grid-flow-dense auto-rows-[10.5rem] grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((cat, i) => {
            const isSelected = i === selectedIdx;
            return (
              <button
                key={cat.name}
                ref={(el) => { tabRefs.current[i] = el; }}
                id={`cat-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls="cat-panel"
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedIdx(i)}
                onKeyDown={onKeyDown}
                className={cn(
                  'group relative flex cursor-pointer flex-col overflow-hidden bg-surface p-5 text-left transition-colors hover:bg-surface-2',
                  cat.image && 'p-0',
                  treatments[cat.name].span,
                  isSelected && 'z-10 outline-2 -outline-offset-2 outline-accent',
                )}
              >
                <Tile cat={cat} selected={isSelected} />
              </button>
            );
          })}
        </div>

        <div
          id="cat-panel"
          role="tabpanel"
          aria-labelledby={`cat-tab-${selectedIdx}`}
          className="mt-6 rounded-xl border border-border bg-surface p-6 sm:p-8"
        >
          <motion.div key={selected.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition.fast}>
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">{selected.name}</h3>
              <span className="eyebrow text-accent">{selected.items.length} opportunities</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {selected.items.map((item) => (
                <li key={item} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </FadeIn>
    </Section>
  );
}
