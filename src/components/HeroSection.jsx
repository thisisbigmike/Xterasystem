'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';

export default function HeroSection() {
  const tickerItems = useMemo(() => {
    const flat = categories.flatMap(c => c.items.map(it => ({ item: it, cat: c.name, hue: c.hue })));

    const picks = [
      flat[0], // Gold
      flat[15], // Cocoa
      flat[4], // Uranium
      flat[20], // Residential apartments
      flat[35], // Cargo trucks
    ];
    const tags = ['Direct asset', 'Fund', 'Lending', 'Revenue-share', 'Fund'];

    return picks.map((p, i) => ({
      ...p,
      num: String(i + 1).padStart(2, '0'),
      tag: tags[i % tags.length],
    }));
  }, []);

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <FadeIn direction="down" delay={0.1}>
              <div className="eyebrow">Global · Multi-asset · Verified access</div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1>
                Get access to global<br />
                <span className="accent">alternative investments</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="subhead">
                Create an Xterasystem account to explore curated opportunities across real assets and
                private markets — clearly labeled by structure, risk factors, and eligibility before you commit capital.
              </p>
            </FadeIn>

            <StaggerContainer delayChildren={0.4} staggerChildren={0.12} className="hero-bullets">
              <StaggerItem>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span className="check">
                    <svg viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L4.5 8.5L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Explore real assets, infrastructure, private credit, and more — across regions
                </li>
              </StaggerItem>
              <StaggerItem>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span className="check">
                    <svg viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L4.5 8.5L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Understand the structure upfront — ownership, fund, lending, revenue-share
                </li>
              </StaggerItem>
              <StaggerItem>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span className="check">
                    <svg viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L4.5 8.5L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Browse first. Verify (KYC) when you&apos;re ready to invest
                </li>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.65}>
              <div className="hero-ctas">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn btn-primary"
                  href="#"
                >
                  Create Account
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn btn-ghost"
                  href="#how"
                >
                  Learn how it works
                </motion.a>
              </div>
              <p className="hero-micro">
                Create an account in ~60 seconds. No commitment required. Availability and eligibility
                vary by jurisdiction and opportunity.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.3} duration={0.7}>
            <div className="device-stack">
              <motion.div
                className="browser-mock"
                whileHover={{ y: -4, boxShadow: '0 50px 80px -30px rgba(0,0,0,0.8)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="browser-topbar">
                  <div className="browser-dots"><span></span><span></span><span></span></div>
                  <span className="browser-url">app.xterasystem.com/opportunities</span>
                </div>
                <div className="browser-body">
                  <div className="ticker-card-head">
                    <span>Browsing now</span>
                    <div className="pulse-dot"><i></i>Live universe</div>
                  </div>
                  <div id="tickerList">
                    {tickerItems.map((p, idx) => (
                      <motion.div
                        className="row-item"
                        key={p.item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <div className="row-left">
                          <span className="row-num">{p.num}</span>
                          <span className="row-swatch" style={{ background: p.hue }} />
                          <div>
                            <div className="row-name">{p.item}</div>
                            <div className="row-sub">{p.cat}</div>
                          </div>
                        </div>
                        <span className="row-tag">{p.tag}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="phone-mock"
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              >
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="phone-label">Opportunity</div>
                  <div className="phone-title">Rooftop Solar Fund II</div>
                  <div className="phone-row"><span>Structure</span><span>Fund</span></div>
                  <div className="phone-row"><span>Target return</span><span>12.4% p.a.</span></div>
                  <div className="phone-row"><span>Min. invest</span><span>$500</span></div>
                  <div className="phone-cta">View details</div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
