'use client';

import { Layers, Clock, BadgeCheck, Globe, Search, Check } from 'lucide-react';
import SectionHead from './SectionHead';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger } from '@/lib/motion';

const features = [
  {
    Icon: Layers,
    title: 'Structure first',
    body: 'Every listing leads with how it works: legal structure, economic model, liquidity, and risks.',
  },
  {
    Icon: Clock,
    title: 'No verification to browse',
    body: 'Browse, compare, and learn before completing ID verification.',
  },
  {
    Icon: BadgeCheck,
    title: 'Clear eligibility tags',
    body: 'Retail and accredited or qualified opportunities are tagged on the listing.',
  },
  {
    Icon: Globe,
    title: 'One account, every region',
    body: 'Availability varies by jurisdiction, but you sign in to a single account.',
  },
];

const disclosures = [
  'Key terms and offering memorandum',
  'Structural and market risks',
  'Compliance disclosures and fees',
];

const riskRows = [
  ['Capital at risk', 'Yes'],
  ['Liquidity', 'Quarterly window'],
  ['Leverage', 'None'],
];

const RISK_LEVEL = 3;

export default function WhySection() {
  return (
    <section className="section section-alt" id="why">
      <div className="wrap">
        <SectionHead eyebrow="Why Xterasystem" title="Built for transparency and clarity" />

        <StaggerContainer as="ul" className="feature-grid" staggerChildren={stagger.grid}>
          {features.map(({ Icon, title, body }) => (
            <StaggerItem as="li" key={title} className="card feature-card">
              <span className="icon-badge" aria-hidden="true">
                <Icon className="icon-md" />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <div className="card diligence">
            <div>
              <div className="diligence-title">
                <span className="icon-badge" aria-hidden="true">
                  <Search className="icon-md" />
                </span>
                <h3>Diligence on the listing itself</h3>
              </div>
              <p>
                The details that matter appear on the opportunity page, not in footnotes or behind a paywall.
              </p>
              <ul className="check-list">
                {disclosures.map((d) => (
                  <li key={d}>
                    <Check className="icon-sm" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mock">
              <div className="mock-body">
                <div className="mock-title">
                  <h4>Risk profile</h4>
                  <span className="tag">Fund</span>
                </div>
                <div
                  className="risk-meter"
                  role="meter"
                  aria-label="Risk level"
                  aria-valuemin={1}
                  aria-valuemax={5}
                  aria-valuenow={RISK_LEVEL}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={n <= RISK_LEVEL ? 'is-filled' : undefined} />
                  ))}
                </div>
                <div className="risk-label">Moderate · {RISK_LEVEL} of 5</div>
                {riskRows.map(([label, value]) => (
                  <div className="kv-row" key={label}>
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
              <div className="mock-foot">Rooftop Solar Fund II. Illustrative only.</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
