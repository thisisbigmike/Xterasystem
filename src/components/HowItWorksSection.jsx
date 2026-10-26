'use client';

import { CircleCheck, Paperclip } from 'lucide-react';
import SectionHead from './SectionHead';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger } from '@/lib/motion';

const steps = [
  {
    title: 'Create your account',
    body: 'Sign up with an email and password. Nothing else is needed to start browsing.',
  },
  {
    title: 'Browse the investment universe',
    body: 'Filter by asset class, structure, region, or liquidity. Compare opportunities side by side.',
  },
  {
    title: 'Review opportunity details',
    body: 'See the structure (direct ownership, fund, lending, or revenue-share), key terms, risk factors, and documents.',
  },
  {
    title: 'Choose an opportunity',
    body: "Select one you're eligible for, with terms you understand.",
  },
  {
    title: 'Complete KYC',
    body: 'Verification happens only when you decide to invest, not before.',
  },
];

const terms = [
  ['Eligibility', 'Retail'],
  ['Minimum', '$500'],
  ['Target liquidity', 'Quarterly window'],
  ['Fees', '1.5% mgmt / 10% carry'],
];

const docs = ['Term sheet.pdf', 'Diligence summary.pdf', 'Risk disclosure.pdf'];

export default function HowItWorksSection() {
  return (
    <section className="section section-alt" id="how">
      <div className="wrap">
        <SectionHead eyebrow="How it works" title="Five steps from browsing to investing">
          You explore and learn before any verification is required.
        </SectionHead>

        <div className="how-grid">
          <div>
            <StaggerContainer as="ol" className="timeline" staggerChildren={stagger.list}>
              {steps.map((step, i) => (
                <StaggerItem as="li" key={step.title} className="timeline-step">
                  <span className="timeline-marker" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.2}>
              <p className="reassure">
                <CircleCheck className="icon-sm" />
                Browse and learn first. Verification comes later.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="how-aside">
            <p className="how-aside-label">What step 03 looks like</p>
            <div className="mock">
              <div className="mock-body">
                <div className="mock-title">
                  <h4>Rooftop Solar Fund II</h4>
                  <span className="tag">Fund</span>
                </div>
                {terms.map(([label, value]) => (
                  <div className="kv-row" key={label}>
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
                <ul className="doc-list" aria-label="Documents">
                  {docs.map((doc) => (
                    <li key={doc}>
                      <Paperclip className="icon-xs" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mock-foot">Illustrative listing. Not an offer to invest.</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
