'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/data/categories';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';

export default function UniverseSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const selectedCat = categories[selectedIdx];

  const featuredNames = ["Real Estate & Property", "Energy & Natural Resources", "Agriculture & Food", "Technology & Digital Infra"];
  const featuredCats = featuredNames.map(name => categories.find(c => c.name === name)).filter(Boolean);

  return (
    <section id="universe">
      <div className="wrap">
        <FadeIn>
          <div className="section-head">
            <div className="eyebrow">Investment universe</div>
            <h2>A broad universe, organized for clarity</h2>
            <p>
              Xterasystem showcases opportunities across asset classes. Some are direct assets — property, vehicles, land.
              Others are businesses, projects, funds, or revenue streams. Each opportunity page states exactly what you&apos;re
              buying into and how it works.
            </p>
            <div className="note-box">
              Exact availability, minimums, and eligibility depend on your country/region and on each opportunity.
            </div>
          </div>
        </FadeIn>

        {/* Category mosaic */}
        <FadeIn delay={0.1}>
          <div className="mosaic" id="mosaic">
            {Array.from({ length: 24 }).map((_, i) => {
              const hue = categories[i % categories.length].hue;
              return (
                <motion.span
                  key={i}
                  style={{ background: hue, opacity: 0.3 + (i % 4) * 0.16 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              );
            })}
          </div>
        </FadeIn>

        {/* Featured category tiles */}
        <StaggerContainer className="feature-row" id="featureRow" staggerChildren={0.08}>
          {featuredCats.map((cat) => (
            <StaggerItem key={cat.name}>
              <motion.div
                className="feature-tile"
                whileHover={{ y: -4, scale: 1.02, borderColor: 'var(--border-strong)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="fglow" style={{ background: `radial-gradient(circle at 80% 15%, ${cat.hue}4d, transparent 70%)` }} />
                <div className="ficon" style={{ background: cat.hue, borderRadius: '8px' }} />
                <div className="ftitle">{cat.name.split(' & ')[0]}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* All categories grid */}
        <div className="universe-layout">
          <StaggerContainer className="cat-grid" id="catGrid" staggerChildren={0.04}>
            {categories.map((cat, i) => (
              <StaggerItem key={cat.name}>
                <motion.div
                  className={`cat-tile ${i === selectedIdx ? 'active' : ''}`}
                  onClick={() => setSelectedIdx(i)}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="swatch" style={{ background: cat.hue }} />
                  <div className="cat-name">{cat.name}</div>
                  <div className="cat-count">{cat.items.length} listed</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Detail panel with animated transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCat.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="detail-panel show"
              id="detailPanel"
              style={{ marginTop: '20px' }}
            >
              <div className="detail-panel-head">
                <h3 id="detailTitle">{selectedCat.name}</h3>
                <span className="eyebrow" id="detailCount">{selectedCat.items.length} opportunities</span>
              </div>
              <div className="chip-row" id="detailChips">
                {selectedCat.items.map((it, idx) => (
                  <motion.span
                    className="chip"
                    key={it}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ scale: 1.05, borderColor: 'var(--green)' }}
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
