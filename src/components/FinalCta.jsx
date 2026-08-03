'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function FinalCta() {
  return (
    <section>
      <div className="wrap">
        <FadeIn direction="up">
          <motion.div
            className="final-cta"
            whileHover={{ boxShadow: '0 30px 60px -20px var(--green-dim)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Start today</div>
            <h2>Create your account and start exploring</h2>
            <p>
              Get a clear view of global alternative opportunities — organized by asset class, structure, and eligibility.
            </p>
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
              No commitment required. Verification/KYC happens when you choose to invest.
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
