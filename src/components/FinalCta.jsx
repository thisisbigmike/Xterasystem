'use client';

import FadeIn from './FadeIn';
import { SIGNUP_URL } from '@/data/site';

export default function FinalCta() {
  return (
    <section className="section">
      <div className="wrap">
        <FadeIn className="cta-panel">
          <div className="eyebrow">Get started</div>
          <h2>Create your account and start exploring</h2>
          <p>See global alternative opportunities organized by asset class, structure, and eligibility.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SIGNUP_URL}>Create account</a>
            <a className="btn btn-secondary" href="#how">How it works</a>
          </div>
          <p className="hero-note">No commitment. KYC happens only when you choose to invest.</p>
        </FadeIn>
      </div>
    </section>
  );
}
