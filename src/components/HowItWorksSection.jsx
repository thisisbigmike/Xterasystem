'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';

export default function HowItWorksSection() {
  return (
    <section id="how">
      <div className="wrap">
        <FadeIn>
          <div className="section-head">
            <div className="eyebrow">How it works</div>
            <h2>Five steps from browsing to investing</h2>
            <p>The order matters — you explore and learn well before any verification is required.</p>
          </div>
        </FadeIn>

        <div className="how-grid">
          {/* Hero image card column */}
          <FadeIn delay={0.1} className="how-image-col">
            <motion.div
              className="photo-card"
              style={{ maxWidth: '340px', width: '100%' }}
              whileHover={{ y: -4, boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="photo-frame" style={{ '--ar': '1/1' }}>
                <Image
                  src="/images/how-it-works-hero.png"
                  alt="Structured investment journey visualization"
                  width={340}
                  height={340}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="photo-caption">
                <b>Your path to success</b>
                Follow the structured journey from browsing to investing with confidence.
              </div>
            </motion.div>
          </FadeIn>

          {/* Connected vertical timeline column */}
          <div className="how-timeline-col">
            <StaggerContainer className="timeline-steps" staggerChildren={0.1}>
              <StaggerItem className="timeline-step">
                <div className="timeline-marker">01</div>
                <div className="timeline-content">
                  <h4>Create your account</h4>
                  <p>Sign up with just an email and password — nothing else required to start looking around.</p>
                </div>
              </StaggerItem>
              <StaggerItem className="timeline-step">
                <div className="timeline-marker">02</div>
                <div className="timeline-content">
                  <h4>Browse the investment universe</h4>
                  <p>Filter by asset class, structure, region, or liquidity. Compare opportunities side by side.</p>
                </div>
              </StaggerItem>
              <StaggerItem className="timeline-step">
                <div className="timeline-marker">03</div>
                <div className="timeline-content">
                  <h4>Review opportunity details</h4>
                  <p>Understand the structure upfront (direct ownership, fund, lending, revenue-share), key terms, risk factors, and available documentation.</p>
                </div>
              </StaggerItem>
              <StaggerItem className="timeline-step">
                <div className="timeline-marker">04</div>
                <div className="timeline-content">
                  <h4>Choose an opportunity</h4>
                  <p>Select something you&apos;re eligible for, with terms you understand and are comfortable with.</p>
                </div>
              </StaggerItem>
              <StaggerItem className="timeline-step">
                <div className="timeline-marker">05</div>
                <div className="timeline-content">
                  <h4>Complete KYC</h4>
                  <p>Verification happens only when you decide to invest, not before.</p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.2}>
              <div className="queue-reassure">→ You can browse and learn first. Verification happens later.</div>
            </FadeIn>
          </div>
        </div>

        <div className="how-pair">
          {/* Training photo card */}
          <FadeIn direction="up">
            <motion.div
              className="photo-card"
              whileHover={{ y: -4, boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="photo-frame" style={{ '--ar': '4/3' }}>
                <Image
                  src="/images/img-corporate-training.jpg"
                  alt="Corporate training session with diverse professionals around a conference table"
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div className="photo-caption">
                <b>Training / presenter</b>
                Professional training environment with diverse team members collaborating in a modern corporate setting.
              </div>
            </motion.div>
          </FadeIn>

          {/* Opportunity detail mock */}
          <FadeIn direction="up" delay={0.1}>
            <div className="detail-mock">
              <div className="dm-head">
                <h4>Rooftop Solar Fund II</h4>
                <span className="row-tag">Fund</span>
              </div>
              <div className="dm-row"><span>Eligibility</span><span>Retail</span></div>
              <div className="dm-row"><span>Minimum</span><span>$500</span></div>
              <div className="dm-row"><span>Target liquidity</span><span>Quarterly window</span></div>
              <div className="dm-row"><span>Fees</span><span>1.5% mgmt / 10% carry</span></div>
              <div className="dm-docs">
                <span className="dm-doc">Term sheet.pdf</span>
                <span className="dm-doc">Diligence summary.pdf</span>
                <span className="dm-doc">Risk disclosure.pdf</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
