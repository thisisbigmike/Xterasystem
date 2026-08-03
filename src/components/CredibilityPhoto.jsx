'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function CredibilityPhoto() {
  return (
    <section style={{ padding: '56px 0 0' }}>
      <div className="wrap">
        <FadeIn direction="up">
          <div className="eyebrow" style={{ marginBottom: '16px' }}>Credibility photo</div>
          <motion.div
            className="photo-card"
            style={{ maxWidth: '640px' }}
            whileHover={{ y: -4, boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="photo-frame" style={{ '--ar': '16/9' }}>
              <Image
                src="/images/img-analytics-team.jpg"
                alt="Professional investment team analyzing data on multiple screens in a modern boardroom"
                width={640}
                height={360}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div className="photo-caption">
              <b>Boardroom dashboards</b>
              Professional investment analysis team reviewing real-time market data and portfolio analytics across multiple display screens.
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
