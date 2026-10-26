'use client';

import { Layers, Clock, BadgeCheck, Globe, Search } from 'lucide-react';
import { Section, SectionHeader } from './ui/section';
import { SkeletonImage } from './Skeleton';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger } from '@/lib/motion';

const features = [
  { Icon: Layers, title: 'Structure-first, not hype-first', body: 'We lead with how it works: legal structure, economic model, liquidity, and risks.' },
  { Icon: Clock, title: 'No mandatory friction upfront', body: 'Browse, compare, and learn before completing ID verification.' },
  { Icon: BadgeCheck, title: 'Clear eligibility tags', body: 'Retail vs. accredited/qualified opportunities clearly tagged upfront.' },
  { Icon: Globe, title: 'One account to explore globally', body: 'Availability varies by jurisdiction, but your account remains unified.' },
];

export default function WhySection() {
  return (
    <Section id="why">
      <SectionHeader eyebrow="Why Xterasystem" title="Built for transparency & clarity" />

      <StaggerContainer
        as="ul"
        staggerChildren={stagger.grid}
        className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map(({ Icon, title, body }) => (
          <StaggerItem as="li" key={title} className="flex flex-col gap-5 bg-surface p-6 sm:p-8">
            <span className="flex size-10 items-center justify-center rounded-sm bg-accent-soft text-accent">
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn>
        <div className="mt-6 grid overflow-hidden rounded-xl border border-border bg-surface md:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-5 p-6 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-sm bg-accent-soft text-accent">
                <Search aria-hidden="true" className="size-5" />
              </span>
              <h3 className="text-xl font-semibold">Diligence-first presentation</h3>
            </div>
            <p className="text-muted">
              Key terms, offering memorandums, structural risks, and compliance disclosures are surfaced upfront, not
              buried in footnotes or hidden behind paywalls.
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Risk Indicator: Clear &amp; Moderate Categorization
            </span>
          </div>

          <SkeletonImage
            className="min-h-64 border-t border-border md:border-t-0 md:border-l"
            src="/images/img-business-plans.jpg"
            alt="Business plans and financial documents on a desk"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
          >
            <span className="on-dark absolute inset-0 flex flex-col justify-end gap-1 bg-(image:--media-scrim) p-6">
              <span className="font-display text-lg font-semibold text-foreground">Institutional Due Diligence &amp; Financial Plans</span>
              <span className="text-sm text-muted">Audited financial charts, risk matrices, and legal structure documentation.</span>
            </span>
          </SkeletonImage>
        </div>
      </FadeIn>
    </Section>
  );
}
