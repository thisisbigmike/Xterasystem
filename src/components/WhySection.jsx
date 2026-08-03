'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';

export default function WhySection() {
  return (
    <section>
      <div className="wrap">
        <FadeIn>
          <div className="section-head">
            <div className="eyebrow">Why Xterasystem</div>
            <h2>Built for transparency &amp; clarity</h2>
          </div>
        </FadeIn>

        <StaggerContainer className="why-grid" staggerChildren={0.1}>
          <StaggerItem className="why-item">
            <h4>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Structure-first, not hype-first
            </h4>
            <p>We lead with how it works legal structure, economic model, liquidity, and risks.</p>
          </StaggerItem>

          <StaggerItem className="why-item">
            <h4>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              No mandatory friction upfront
            </h4>
            <p>Browse, compare, and learn before completing ID verification.</p>
          </StaggerItem>

          <StaggerItem className="why-item">
            <h4>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
              Clear eligibility tags
            </h4>
            <p>Retail vs. accredited/qualified, where applicable.</p>
          </StaggerItem>

          <StaggerItem className="why-item">
            <h4>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              Diligence-first presentation
            </h4>
            <p>Key terms and documents surfaced clearly, not buried.</p>

            <div className="doc-preview">
              <div className="dp-line"></div>
              <div className="dp-line short"></div>
              <span className="dp-tag">Risk: Moderate</span>
            </div>

            <motion.div
              className="photo-card"
              style={{ marginTop: '12px' }}
              whileHover={{ y: -4, boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="photo-frame" style={{ '--ar': '4/3' }}>
                <Image
                  src="/images/img-business-plans.jpg"
                  alt="Business plans and financial documents on a professional desk with charts and analytics"
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="photo-caption">
                <b>Business plans / documents</b>
                Professional workspace with business planning documents, financial charts, and data analysis materials.
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem className="why-item" style={{ gridColumn: '1 / -1' }}>
            <h4>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" />
              </svg>
              One account to explore globally
            </h4>
            <p>Availability varies by jurisdiction, but your account doesn&apos;t change.</p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
