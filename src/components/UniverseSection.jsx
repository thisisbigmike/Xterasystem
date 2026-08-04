'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '@/data/categories';
import FadeIn, { StaggerContainer, StaggerItem, springBounce } from './FadeIn';

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

        {/* Featured category cards with real background images */}
        <StaggerContainer
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '28px',
          }}
          staggerChildren={0.08}
        >
          {featuredCats.map((cat) => (
            <StaggerItem key={cat.name}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={springBounce}
                style={{
                  position: 'relative',
                  height: '140px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  cursor: 'pointer',
                  backgroundColor: 'var(--card)',
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '16px',
                    color: '#ffffff',
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.01em' }}>
                    {cat.name.split(' & ')[0]}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* All categories grid with images */}
        <div className="universe-layout">
          <StaggerContainer
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '14px',
            }}
            staggerChildren={0.04}
          >
            {categories.map((cat, i) => {
              const isSelected = i === selectedIdx;
              return (
                <StaggerItem key={cat.name}>
                  <motion.div
                    onClick={() => setSelectedIdx(i)}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={springBounce}
                    style={{
                      position: 'relative',
                      height: '130px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      border: isSelected ? '2px solid var(--green)' : '1px solid var(--border)',
                      boxShadow: isSelected ? '0 0 20px rgba(30, 215, 96, 0.25)' : '0 4px 12px rgba(0,0,0,0.05)',
                      cursor: 'pointer',
                      backgroundColor: 'var(--card)',
                    }}
                  >
                    {/* Category Background Image */}
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{
                        objectFit: 'cover',
                        opacity: isSelected ? 0.9 : 0.75,
                        transition: 'opacity 0.3s ease, transform 0.4s ease',
                      }}
                    />

                    {/* Dark gradient overlay for text readability */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.4) 65%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '14px 16px',
                        color: '#ffffff',
                      }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.01em', lineHeight: '1.25' }}>
                        {cat.name}
                      </span>
                      <span style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px', fontFamily: 'var(--mono)' }}>
                        {cat.items.length} listed
                      </span>
                    </div>

                    {/* Active Indicator Green Dot */}
                    {isSelected && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--green)',
                          boxShadow: '0 0 10px var(--green)',
                        }}
                      />
                    )}
                  </motion.div>
                </StaggerItem>
              );
            })}
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
              style={{ marginTop: '24px' }}
            >
              <div className="detail-panel-head">
                <h3>{selectedCat.name}</h3>
                <span className="eyebrow">{selectedCat.items.length} opportunities</span>
              </div>
              <div className="chip-row">
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
