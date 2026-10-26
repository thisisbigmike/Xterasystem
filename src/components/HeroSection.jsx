'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import FadeIn from './FadeIn';
import { SkeletonImage } from './Skeleton';
import { CinematicText } from './ui/cinematic-text';
import { SplitCta, TextLink } from './ui/split-cta';
import { SegmentedControl } from './ui/segmented-control';
import { Badge } from './ui/badge';
import { SIGNUP_URL } from '@/data/site';
import { transition } from '@/lib/motion';

const bullets = [
  'Explore real assets, infrastructure, private credit, and more, across regions',
  'Understand the structure upfront: ownership, fund, lending, revenue-share',
  "Browse first. Verify (KYC) when you're ready to invest",
];

const browsing = [
  { name: 'Gold', category: 'Precious Metals', tag: 'Direct asset' },
  { name: 'Zinc', category: 'Energy & Natural Resources', tag: 'Fund' },
  { name: 'Uranium', category: 'Energy & Natural Resources', tag: 'Lending' },
  { name: 'Coffee', category: 'Agriculture & Food', tag: 'Revenue-share' },
  { name: 'Hotels & resorts', category: 'Real Estate & Property', tag: 'Fund' },
];

const filters = ['All', 'Direct asset', 'Fund', 'Lending', 'Revenue-share'];

const opportunity = [
  ['Target return', '12.4% p.a.'],
  ['Min. invest', '$500'],
];

export default function HeroSection() {
  const [filter, setFilter] = useState('All');
  const rows = browsing
    .map((row, i) => ({ ...row, num: String(i + 1).padStart(2, '0') }))
    .filter((row) => filter === 'All' || row.tag === filter);

  return (
    <>
      <section className="on-dark relative isolate flex min-h-svh flex-col overflow-hidden bg-background">
        <SkeletonImage
          className="absolute inset-0 -z-20"
          src="/images/cat_energy.png"
          alt=""
          fill
          preload
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-(image:--scrim)" />

        {/* 12-column divider grid (1/3/4/3/1), aligned to the page frame. Hidden on small screens. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden justify-center md:flex">
          <div className="grid h-full w-full max-w-[1280px] grid-cols-12 divide-x divide-white/20 border-x border-white/20">
            <div className="col-span-1" />
            <div className="col-span-3" />
            <div className="col-span-4" />
            <div className="col-span-3" />
            <div className="col-span-1" />
          </div>
        </div>

        <div className="frame flex flex-1 flex-col items-center justify-center pt-32 pb-56 text-center lg:border-x-0 lg:pb-64">
          <FadeIn direction="down">
            <p className="eyebrow text-accent">Global · Multi-asset · Verified access</p>
          </FadeIn>

          <CinematicText
            text="Get access to global"
            accent="alternative investments"
            className="mt-6 max-w-5xl text-display font-normal tracking-display text-white"
          />

          <FadeIn delay={0.4}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
              Create an Xterasystem account to explore curated opportunities across real assets and private markets,
              clearly labeled by structure, risk factors, and eligibility before you commit capital.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <SplitCta href={SIGNUP_URL}>Create Account</SplitCta>
              <TextLink href="#how" className="text-white">Learn how it works</TextLink>
            </div>

            <ul className="mx-auto mt-12 grid max-w-4xl gap-3 text-left text-sm text-white/75 sm:grid-cols-3 sm:gap-6">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                  {b}
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-8 max-w-md text-xs text-white/60">
              Create an account in ~60 seconds. No commitment required. Availability and eligibility vary by
              jurisdiction and opportunity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product preview: floats over the bottom edge of the hero. */}
      <div className="frame relative z-10 -mt-44 lg:-mt-52 lg:border-x-0">
        <FadeIn delay={0.5}>
          <div className="on-dark mx-auto max-w-5xl overflow-hidden rounded-xl border border-white/15 bg-surface/80 shadow-float backdrop-blur-xl">
            <div className="flex items-center gap-4 border-b border-border px-5 py-3">
              <div aria-hidden="true" className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
              </div>
              <span className="truncate text-xs text-subtle">app.xterasystem.com/opportunities</span>
            </div>

            <div className="grid md:grid-cols-3 md:divide-x md:divide-border">
              <div className="p-5 md:col-span-2 md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow text-subtle">Browsing now</span>
                  <span className="flex items-center gap-2 text-xs font-medium text-accent">
                    <span aria-hidden="true" className="size-1.5 animate-pulse-dot rounded-full bg-accent" />
                    Live universe
                  </span>
                </div>

                <SegmentedControl
                  className="mt-4"
                  label="Filter by structure"
                  options={filters}
                  value={filter}
                  onChange={setFilter}
                  controls="preview-list"
                />

                <ul id="preview-list" role="tabpanel" className="mt-3 min-h-[19rem]">
                  <AnimatePresence initial={false} mode="popLayout">
                    {rows.map((row) => (
                      <motion.li
                        key={row.name}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={transition.base}
                        className="flex items-center justify-between gap-4 border-b border-border py-3 last:border-b-0"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="w-5 text-xs text-subtle tabular-nums">{row.num}</span>
                          <span
                            aria-hidden="true"
                            className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-accent-soft text-xs font-semibold text-accent"
                          >
                            {row.name.slice(0, 2).toUpperCase()}
                          </span>
                          <div className="min-w-0">
                            <div className="truncate text-sm font-semibold text-foreground">{row.name}</div>
                            <div className="truncate text-xs text-subtle">{row.category}</div>
                          </div>
                        </div>
                        <Badge>{row.tag}</Badge>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>

              <div className="border-t border-border p-5 md:border-t-0 md:p-6">
                <div className="rounded-lg border border-border bg-background/60 p-5">
                  <p className="eyebrow text-subtle">Opportunity</p>
                  <h3 className="mt-2 text-xl font-semibold">Rooftop Solar Fund II</h3>
                  <dl className="mt-4 text-sm">
                    <div className="flex items-center justify-between border-b border-border py-2.5">
                      <dt className="text-muted">Structure</dt>
                      <dd><Badge>Fund</Badge></dd>
                    </div>
                    {opportunity.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between border-b border-border py-2.5 last:border-b-0">
                        <dt className="text-muted">{label}</dt>
                        <dd className="font-semibold text-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-5 flex h-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-on-accent">
                    View details
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
