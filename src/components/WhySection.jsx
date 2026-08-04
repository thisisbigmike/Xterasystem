'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem, springBounce } from './FadeIn';

export default function WhySection() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Structure-first, not hype-first",
      description: "We lead with how it works — legal structure, economic model, liquidity, and risks.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "No mandatory friction upfront",
      description: "Browse, compare, and learn before completing ID verification.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
      title: "Clear eligibility tags",
      description: "Retail vs. accredited/qualified opportunities clearly tagged upfront.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" />
        </svg>
      ),
      title: "One account to explore globally",
      description: "Availability varies by jurisdiction, but your account remains unified.",
    },
  ];

  return (
    <section id="why">
      <div className="wrap">
        <FadeIn>
          <div className="section-head">
            <div className="eyebrow">Why Xterasystem</div>
            <h2>Built for transparency &amp; clarity</h2>
          </div>
        </FadeIn>

        {/* (1) Shared 4 Feature Cards Grid */}
        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '28px',
          }}
          staggerChildren={0.1}
        >
          {features.map((feat) => (
            <StaggerItem key={feat.title} style={{ height: '100%' }}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'var(--border-strong)' }}
                transition={springBounce}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--border)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(30, 215, 96, 0.12)',
                    color: 'var(--green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center' }}>
                    {feat.icon}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '6px', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.55', margin: 0, fontFamily: 'var(--body)' }}>
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* (2) Standalone Diligence Panel Below Grid */}
        <FadeIn direction="up">
          <motion.div
            whileHover={{ boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)' }}
            transition={{ duration: 0.3 }}
            style={{
              borderRadius: '20px',
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              alignItems: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Left Column: Text + Risk Badge */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(30, 215, 96, 0.12)',
                    color: 'var(--green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '21px', fontWeight: '700', margin: 0, color: 'var(--fg)', letterSpacing: '-0.015em' }}>
                  Diligence-first presentation
                </h3>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', margin: 0, textAlign: 'left' }}>
                Key terms, offering memorandums, structural risks, and compliance disclosures are surfaced upfront — not buried in footnotes or hidden behind paywalls.
              </p>

              {/* Risk Indicator Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(30, 215, 96, 0.12)',
                  border: '1px solid rgba(30, 215, 96, 0.25)',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--green)',
                  marginTop: '4px',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--green)', display: 'inline-block' }}></span>
                Risk Indicator: Clear &amp; Moderate Categorization
              </div>
            </div>

            {/* Right Column: Business Plans Photo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={springBounce}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                position: 'relative',
                height: '240px',
                backgroundColor: 'var(--bg-elevated)',
              }}
            >
              <Image
                src="/images/img-business-plans.jpg"
                alt="Business plans and financial documents on a professional desk"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '18px 20px',
                  color: '#ffffff',
                }}
              >
                <b style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff' }}>Institutional Due Diligence &amp; Financial Plans</b>
                <span style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.8)', marginTop: '2px' }}>
                  Audited financial charts, risk matrices, and legal structure documentation.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
