'use client';

import { ShieldCheck, Clock, FileText, Lock } from 'lucide-react';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger } from '@/lib/motion';

const items = [
  { Icon: ShieldCheck, label: 'Explicit structure tags' },
  { Icon: Clock, label: 'Upfront risk factors' },
  { Icon: FileText, label: 'Document access' },
  { Icon: Lock, label: 'Secure onboarding' },
];

export default function TrustStrip() {
  return (
    <section id="trust-eligibility" className="pt-16 sm:pt-20">
      <div className="frame pb-16 sm:pb-20">
        <StaggerContainer
          as="ul"
          staggerChildren={stagger.list}
          className="grid grid-cols-2 overflow-hidden rounded-lg border border-border lg:grid-cols-4"
        >
          {items.map(({ Icon, label }, i) => (
            <StaggerItem
              as="li"
              key={label}
              className={[
                'flex items-center gap-3 p-5 text-sm font-medium text-foreground sm:p-6',
                i % 2 === 1 ? 'border-l border-border' : '',
                i >= 2 ? 'border-t border-border lg:border-t-0' : '',
                i === 2 ? 'lg:border-l' : '',
              ].join(' ')}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-accent-soft text-accent">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              {label}
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-center text-sm text-muted">
            See what you can access, what you&apos;re eligible for, and what it costs before you invest.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
