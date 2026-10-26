'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '@/data/faqs';
import SectionHead from './SectionHead';
import { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger, transition } from '@/lib/motion';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <SectionHead eyebrow="FAQ" title="Common questions" />

        <StaggerContainer className="faq-list" staggerChildren={stagger.list}>
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <StaggerItem key={f.q} className="faq-item">
                <h3>
                  <button
                    id={`faq-q-${i}`}
                    className="faq-q"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                  >
                    {f.q}
                    <Plus className="icon-sm" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      className="faq-a"
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={transition.base}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
