'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';
import SectionHead from './SectionHead';
import { SkeletonImage } from './Skeleton';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger, transition } from '@/lib/motion';

const featured = categories
  .map((cat, index) => ({ ...cat, index }))
  .filter((cat) => cat.image);

export default function UniverseSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const tabRefs = useRef([]);
  const panelRef = useRef(null);
  const selected = categories[selectedIdx];

  const selectFromFeatured = (index) => {
    setSelectedIdx(index);
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  // Roving focus per the WAI-ARIA tabs pattern.
  const onTabKeyDown = (e) => {
    const last = categories.length - 1;
    const moves = {
      ArrowRight: selectedIdx === last ? 0 : selectedIdx + 1,
      ArrowDown: selectedIdx === last ? 0 : selectedIdx + 1,
      ArrowLeft: selectedIdx === 0 ? last : selectedIdx - 1,
      ArrowUp: selectedIdx === 0 ? last : selectedIdx - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    setSelectedIdx(moves[e.key]);
    tabRefs.current[moves[e.key]]?.focus();
  };

  return (
    <section className="section" id="universe">
      <div className="wrap">
        <SectionHead
          eyebrow="Investment universe"
          title="A broad universe, organized for clarity"
          note="Exact availability, minimums, and eligibility depend on your country or region and on each opportunity."
        >
          Xterasystem lists opportunities across asset classes. Some are direct assets such as property, vehicles,
          and land. Others are businesses, projects, funds, or revenue streams. Each opportunity page states what
          you&apos;re buying into and how it works.
        </SectionHead>

        <StaggerContainer className="featured-grid" staggerChildren={stagger.grid}>
          {featured.map((cat) => (
            <StaggerItem key={cat.name}>
              <button
                type="button"
                className="featured-card card-interactive"
                aria-current={selectedIdx === cat.index}
                aria-controls="cat-panel"
                onClick={() => selectFromFeatured(cat.index)}
              >
                <SkeletonImage
                  src={cat.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className="media-fill"
                >
                  <span className="media-caption">
                    <strong>{cat.name}</strong>
                    <span>{cat.items.length} asset types</span>
                  </span>
                </SkeletonImage>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <div className="cat-tabs" role="tablist" aria-label="Asset classes">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                ref={(el) => { tabRefs.current[i] = el; }}
                id={`cat-tab-${i}`}
                type="button"
                role="tab"
                className="cat-tab"
                aria-selected={i === selectedIdx}
                aria-controls="cat-panel"
                tabIndex={i === selectedIdx ? 0 : -1}
                onClick={() => setSelectedIdx(i)}
                onKeyDown={onTabKeyDown}
              >
                <span className="cat-tab-name">{cat.name}</span>
                <span className="cat-tab-count">{cat.items.length} asset types</span>
              </button>
            ))}
          </div>

          <div
            ref={panelRef}
            id="cat-panel"
            className="card cat-panel"
            role="tabpanel"
            aria-labelledby={`cat-tab-${selectedIdx}`}
          >
            {/* Keyed fade-in only: an exit phase can strand stale content when tabs change quickly. */}
            <motion.div
              key={selected.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition.fast}
            >
              <div className="cat-panel-head">
                <h3>{selected.name}</h3>
                <span className="eyebrow">{selected.items.length} asset types</span>
              </div>
              <ul className="chip-row">
                {selected.items.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
