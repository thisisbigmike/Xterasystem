'use client';

import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem, springBounce } from './FadeIn';

export default function ProofSection() {
  const teamMembers = [
    { name: "Alex Johnson", role: "Creative Director" },
    { name: "Sam Taylor", role: "Lead Designer" },
    { name: "Jordan Smith", role: "Senior Developer" },
    { name: "Casey Brown", role: "Project Manager" },
  ];

  return (
    <section id="team">
      <div className="wrap">
        <FadeIn>
          <div className="section-head">
            <div className="eyebrow">Proof</div>
            <h2>Meet Our Team</h2>
            <p>Our experienced leadership and cross-disciplinary team driving global alternative investment innovation.</p>
          </div>
        </FadeIn>

        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '32px',
          }}
          staggerChildren={0.1}
        >
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={springBounce}
                style={{
                  position: 'relative',
                  height: '340px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, var(--card) 0%, var(--card-hover) 100%)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 20px 40px -20px rgba(0,0,0,0.15)',
                }}
              >
                {/* Central placeholder graphic (matching image 2 design) */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.15,
                  }}
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>

                {/* Dark bottom gradient overlay for readable text */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.35) 50%, transparent 100%)',
                    color: '#ffffff',
                  }}
                >
                  <h4 style={{ fontSize: '19px', fontWeight: '700', margin: 0, letterSpacing: '-0.01em', color: '#ffffff' }}>
                    {member.name}
                  </h4>
                  <p style={{ fontSize: '13.5px', marginTop: '4px', margin: 0, color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--body)' }}>
                    {member.role}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
