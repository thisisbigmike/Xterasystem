'use client';

import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';

export default function TrustStrip() {
  return (
    <div className="trust" id="trust-eligibility">
      <div className="wrap">
        <StaggerContainer className="trust-row" staggerChildren={0.12}>
          <StaggerItem className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Explicit structure tags
          </StaggerItem>
          <StaggerItem className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Upfront risk factors
          </StaggerItem>
          <StaggerItem className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
            Document access
          </StaggerItem>
          <StaggerItem className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 018 0v3" />
            </svg>
            Secure onboarding
          </StaggerItem>
        </StaggerContainer>
        <FadeIn delay={0.3}>
          <p className="trust-sub">
            See what you can access, what you&apos;re eligible for, and what it costs — before you invest.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
