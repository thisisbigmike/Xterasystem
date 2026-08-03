'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/data/faqs';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq">
      <div className="wrap">
        <FadeIn>
          <div className="section-head">
            <div className="eyebrow">FAQ</div>
            <h2>Common questions</h2>
          </div>
        </FadeIn>

        <StaggerContainer id="faqList" staggerChildren={0.06}>
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <StaggerItem key={f.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => toggleFaq(i)}
                  type="button"
                >
                  {f.q}
                  <motion.span
                    className="plus"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-a-inner" style={{ padding: '0 4px 20px', color: 'var(--text-muted)', fontSize: '14px' }}>
                        {f.a}
                      </div>
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
