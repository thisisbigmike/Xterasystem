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
    <div className="trust" id="trust-eligibility">
      <div className="wrap">
        <StaggerContainer as="ul" className="trust-row" staggerChildren={stagger.list}>
          {items.map(({ Icon, label }) => (
            <StaggerItem as="li" key={label} className="trust-item">
              <Icon className="icon-xs" />
              {label}
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn delay={0.2}>
          <p className="trust-sub">
            See what you can access, what you&apos;re eligible for, and what it costs before you invest.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
