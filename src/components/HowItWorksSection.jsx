'use client';

import { ArrowRight, Paperclip } from 'lucide-react';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';
import { SkeletonImage } from './Skeleton';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger } from '@/lib/motion';

const steps = [
  { title: 'Create your account', body: 'Sign up with just an email and password. Nothing else required to start looking around.' },
  { title: 'Browse the investment universe', body: 'Filter by asset class, structure, region, or liquidity. Compare opportunities side by side.' },
  { title: 'Review opportunity details', body: 'Understand the structure upfront (direct ownership, fund, lending, revenue-share), key terms, risk factors, and available documentation.' },
  { title: 'Choose an opportunity', body: "Select something you're eligible for, with terms you understand and are comfortable with." },
  { title: 'Complete KYC', body: 'Verification happens only when you decide to invest, not before.' },
];

const terms = [
  ['Eligibility', <Badge key="e" tone="neutral">Retail</Badge>],
  ['Minimum', '$500'],
  ['Target liquidity', 'Quarterly window'],
  ['Fees', '1.5% mgmt / 10% carry'],
];

const docs = ['Term sheet.pdf', 'Diligence summary.pdf', 'Risk disclosure.pdf'];

export default function HowItWorksSection() {
  return (
    <Section id="how">
      <SectionHeader eyebrow="How it works" title="Five steps from browsing to investing">
        The order matters: you explore and learn well before any verification is required.
      </SectionHeader>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="self-start lg:sticky lg:top-24 lg:col-span-5">
          <SkeletonImage
            className="aspect-square rounded-xl border border-border"
            src="/images/how-it-works-hero.png"
            alt="Portfolio growth dashboard on a large display"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </FadeIn>

        <div className="lg:col-span-7">
          <StaggerContainer as="ol" staggerChildren={stagger.list} className="relative">
            {steps.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="relative grid grid-cols-[2.5rem_1fr] gap-5 pb-10 last:pb-0">
                {/* Connector between step markers. */}
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute top-10 bottom-0 left-5 w-px -translate-x-1/2 bg-border-strong" />
                )}
                <span className="relative flex size-10 items-center justify-center rounded-full border border-accent/40 bg-background text-sm font-semibold text-accent tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <p className="mt-10 flex items-center gap-2 text-sm font-medium text-accent">
              <ArrowRight aria-hidden="true" className="size-4" />
              You can browse and learn first. Verification happens later.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <FadeIn>
          <SkeletonImage
            className="aspect-[4/3] rounded-xl border border-border"
            src="/images/img-corporate-training.jpg"
            alt="Presenter leading a session with professionals around a conference table"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex h-full flex-col justify-center rounded-xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold">Rooftop Solar Fund II</h3>
              <Badge>Fund</Badge>
            </div>
            <dl className="mt-5 text-sm">
              {terms.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 border-b border-border py-3">
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-right font-semibold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
            <ul aria-label="Documents" className="mt-5 flex flex-wrap gap-2">
              {docs.map((doc) => (
                <li key={doc} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
                  <Paperclip aria-hidden="true" className="size-3.5" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
