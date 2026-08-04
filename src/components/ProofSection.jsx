'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem, springBounce } from './FadeIn';

export default function ProofSection() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      image: "/images/team_alex.png",
    },
    {
      name: "Sam Taylor",
      role: "Lead Designer",
      image: "/images/team_sam.png",
    },
    {
      name: "Jordan Smith",
      role: "Senior Developer",
      image: "/images/team_jordan.png",
    },
    {
      name: "Casey Brown",
      role: "Project Manager",
      image: "/images/team_casey.png",
    },
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
                  height: '350px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: '0 20px 40px -20px rgba(0,0,0,0.15)',
                  backgroundColor: 'var(--card)',
                }}
              >
                {/* Real human headshot image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.5s ease',
                  }}
                />

                {/* Dark bottom gradient overlay for readable text */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.35) 55%, transparent 100%)',
                    color: '#ffffff',
                    zIndex: 2,
                  }}
                >
                  <h4 style={{ fontSize: '19px', fontWeight: '700', margin: 0, letterSpacing: '-0.01em', color: '#ffffff' }}>
                    {member.name}
                  </h4>
                  <p style={{ fontSize: '13.5px', marginTop: '4px', margin: 0, color: 'rgba(255, 255, 255, 0.82)', fontFamily: 'var(--body)' }}>
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
