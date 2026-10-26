'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { SkeletonImage } from './Skeleton';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';
import { categories } from '@/data/categories';
import { SIGNUP_URL } from '@/data/site';
import { stagger, transition } from '@/lib/motion';

const filters = ['All', 'Direct', 'Fund', 'Lending', 'Revenue-share'];

const sampleListings = [
  { name: 'Gold', category: 'Precious Metals', structure: 'Direct' },
  { name: 'Rooftop Solar Fund II', category: 'Energy & Natural Resources', structure: 'Fund' },
  { name: 'Cocoa', category: 'Agriculture & Food', structure: 'Lending' },
  { name: 'Residential apartments', category: 'Real Estate & Property', structure: 'Direct' },
  { name: 'Music royalties', category: 'Media, Entertainment & IP', structure: 'Revenue-share' },
  { name: 'Cargo trucks', category: 'Transportation & Logistics', structure: 'Lending' },
];

// Derived from the catalog so the numbers stay true as categories change.
const stats = [
  { value: categories.length, label: 'Asset classes' },
  { value: categories.reduce((n, c) => n + c.items.length, 0), label: 'Asset types' },
  { value: filters.length - 1, label: 'Legal structures' },
  { value: 0, label: 'Verification steps to browse' },
];

export default function HeroSection() {
  const [filter, setFilter] = useState('All');
  const visible = sampleListings.filter((l) => filter === 'All' || l.structure === filter);

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-stage on-dark">
          <SkeletonImage
            className="hero-bg"
            src="/images/cat_energy.png"
            alt=""
            fill
            preload
            sizes="(max-width: 1180px) 100vw, 1180px"
          />

          <div className="hero-grid">
            <FadeIn>
              <span className="badge">
                <span className="badge-dot" aria-hidden="true" />
                Real assets · Private markets
              </span>
              <h1>
                Get access to global <span className="accent">alternative investments</span>
              </h1>
              <p className="hero-lead">
                Explore curated opportunities across real assets and private markets. Every listing shows its
                structure, risk factors, and eligibility before you commit capital.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={SIGNUP_URL}>Create account</a>
                <a className="btn btn-secondary" href="#how">How it works</a>
              </div>
              <p className="hero-note">
                Takes about 60 seconds. Availability and eligibility vary by jurisdiction and opportunity.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="hero-visual">
              <div className="mock">
                <div className="mock-bar">
                  <div className="mock-dots" aria-hidden="true"><span /><span /><span /></div>
                  <span className="mock-url">app.xterasystem.com/opportunities</span>
                </div>
                <div className="mock-body">
                  <div className="filter-row" role="group" aria-label="Filter sample listings by structure">
                    {filters.map((f) => (
                      <button
                        key={f}
                        type="button"
                        className="filter-btn"
                        aria-pressed={filter === f}
                        onClick={() => setFilter(f)}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                  <ul className="listing-list" aria-live="polite">
                    <AnimatePresence initial={false} mode="popLayout">
                      {visible.map((l) => (
                        <motion.li
                          key={l.name}
                          className="listing"
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={transition.base}
                        >
                          <div className="listing-main">
                            <span className="monogram" aria-hidden="true">{l.category.slice(0, 2).toUpperCase()}</span>
                            <div className="listing-text">
                              <div className="listing-name">{l.name}</div>
                              <div className="listing-cat">{l.category}</div>
                            </div>
                          </div>
                          <span className="tag">{l.structure}</span>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>
                <div className="mock-foot">Illustrative. Not an offer to invest.</div>
              </div>

              <div className="float-card">
                <span className="icon-badge" aria-hidden="true">
                  <ShieldCheck className="icon-md" />
                </span>
                <div>
                  <strong>KYC only when you invest</strong>
                  <span>Browse and compare first</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <StaggerContainer as="dl" className="hero-stats" delayChildren={0.2} staggerChildren={stagger.list}>
            {stats.map((s) => (
              <StaggerItem key={s.label} className="hero-stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
