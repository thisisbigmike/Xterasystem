'use client';

import { motion } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem } from './FadeIn';

export default function StructuresSection() {
  return (
    <section>
      <div className="wrap">
        <FadeIn>
          <div className="section-head">
            <div className="eyebrow">Clear legal &amp; economic structures</div>
            <h2>Know what you own before you commit</h2>
            <p>Every opportunity on Xterasystem is categorized by its underlying structure. No guessing.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="structure-banner">
            <div className="sb-node"><i></i>Direct ownership</div>
            <div className="sb-line"></div>
            <div className="sb-node"><i></i>Fund / SPV</div>
            <div className="sb-line"></div>
            <div className="sb-node"><i></i>Lending / Debt</div>
            <div className="sb-line"></div>
            <div className="sb-node"><i></i>Revenue-share</div>
          </div>
        </FadeIn>

        <StaggerContainer className="structure-grid" staggerChildren={0.1}>
          <StaggerItem>
            <motion.div
              className="structure-card"
              whileHover={{ y: -4, borderColor: 'var(--green)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="tag">Direct Asset</span>
              <h4>Direct Ownership</h4>
              <p>Title, equity, or direct fractional interest in physical or corporate assets.</p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="structure-card"
              whileHover={{ y: -4, borderColor: 'var(--green)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="tag">Fund / SPV</span>
              <h4>Fund / Pooled</h4>
              <p>Interest in a managed fund or special-purpose vehicle holding underlying assets.</p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="structure-card"
              whileHover={{ y: -4, borderColor: 'var(--green)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="tag">Debt</span>
              <h4>Lending / Credit</h4>
              <p>Fixed or variable income through loans, bonds, or structured debt instruments.</p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="structure-card"
              whileHover={{ y: -4, borderColor: 'var(--green)' }}
              transition={{ duration: 0.2 }}
            >
              <span className="tag">Cash flow</span>
              <h4>Revenue-Share</h4>
              <p>Entitlement to a percentage of gross or net revenue from operations.</p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
