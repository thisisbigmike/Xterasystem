'use client';

import FadeIn from './FadeIn';
import { SkeletonLine, SkeletonBlock } from './Skeleton';

export default function ProofSection() {
  return (
    <section>
      <div className="wrap">
        <FadeIn>
          <div className="section-head">
            <div className="eyebrow">Proof</div>
            <h2>Who&apos;s behind it</h2>
            <p>Verified team members, custodial partners, and legal architecture.</p>
          </div>
        </FadeIn>

        <div className="proof-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>Team</div>
            <div className="avatar-row">
              <div className="avatar-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                <SkeletonBlock style={{ borderRadius: '50%' }} />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'relative', zIndex: 2 }}>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
                </svg>
              </div>
              <div className="avatar-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                <SkeletonBlock style={{ borderRadius: '50%' }} />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'relative', zIndex: 2 }}>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
                </svg>
              </div>
              <div className="avatar-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                <SkeletonBlock style={{ borderRadius: '50%' }} />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'relative', zIndex: 2 }}>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
                </svg>
              </div>
            </div>
            <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexDirection: 'column', maxWidth: '240px' }}>
              <SkeletonLine width="60%" height="10px" />
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>Partners &amp; Custodians</div>
            <div className="logo-strip">
              <div className="logo-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'relative', zIndex: 2 }}>Custodian Partner</span>
                <SkeletonBlock style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
              </div>
              <div className="logo-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'relative', zIndex: 2 }}>Legal Counsel</span>
                <SkeletonBlock style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
              </div>
              <div className="logo-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                <span style={{ position: 'relative', zIndex: 2 }}>Audit Firm</span>
                <SkeletonBlock style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
