'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import GlobeLogo from './GlobeLogo';
import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg)', paddingTop: '60px', paddingBottom: '40px' }}>
      <div className="wrap">
        <FadeIn>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '40px',
              paddingBottom: '48px',
              alignItems: 'start',
            }}
          >
            {/* Column 1: Xterasystem Brand & Socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start', textAlign: 'left' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--fg)', cursor: 'default' }}>
                <GlobeLogo maskId="footer-globe-mask" />
                <span style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'var(--display)', letterSpacing: '-0.02em' }}>
                  Xterasystem
                </span>
              </div>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6', margin: 0, maxWidth: '280px', textAlign: 'left' }}>
                Empowering institutions and accredited investors to access curated real assets, private credit, and alternative markets with institutional governance.
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '8px' }}>
                {/* Twitter / X */}
                <a href="#" aria-label="X (Twitter)" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="#" aria-label="GitHub" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Company & Investment Universe */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start', textAlign: 'left' }}>
              <div style={{ width: '100%', textAlign: 'left' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '14px', color: 'var(--fg)', textAlign: 'left' }}>Company</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', textAlign: 'left', paddingLeft: 0 }}>
                  <a href="#about" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>About Xterasystem</a>
                  <a href="#structures" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Legal Architecture</a>
                  <a href="#team" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Custodial Partners</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Institutional Governance</a>
                </nav>
              </div>
              <div style={{ width: '100%', textAlign: 'left' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '14px', color: 'var(--fg)', textAlign: 'left' }}>Investment Universe</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', textAlign: 'left', paddingLeft: 0 }}>
                  <a href="#universe" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Real Estate &amp; Infrastructure</a>
                  <a href="#universe" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Private Equity &amp; Credit</a>
                  <a href="#universe" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Renewable Energy</a>
                  <a href="#universe" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Venture Capital</a>
                </nav>
              </div>
            </div>

            {/* Column 3: Resources & Legal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start', textAlign: 'left' }}>
              <div style={{ width: '100%', textAlign: 'left' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '14px', color: 'var(--fg)', textAlign: 'left' }}>Resources</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', textAlign: 'left', paddingLeft: 0 }}>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Market Insights</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Due Diligence Framework</a>
                  <a href="#faq" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Investor FAQ</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Asset Class Guides</a>
                </nav>
              </div>
              <div style={{ width: '100%', textAlign: 'left' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '14px', color: 'var(--fg)', textAlign: 'left' }}>Legal &amp; Compliance</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', textAlign: 'left', paddingLeft: 0 }}>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Privacy Policy</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Terms of Service</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none', textAlign: 'left' }}>Risk Disclosures</a>
                </nav>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start', textAlign: 'left' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: 'var(--fg)', textAlign: 'left' }}>Subscribe to market intelligence</h4>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5', margin: 0, maxWidth: '300px', textAlign: 'left' }}>
                Receive weekly market analysis, deal summaries, and institutional alternative asset reports.
              </p>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '10px', marginTop: '6px', flexWrap: 'wrap', width: '100%' }}>
                <input
                  type="email"
                  placeholder="Enter your business email"
                  style={{
                    flex: '1 1 180px',
                    padding: '10px 18px',
                    borderRadius: '9999px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--fg)',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  style={{
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--fg)',
                    color: 'var(--bg)',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>

          <p
            style={{
              fontSize: '12px',
              color: 'var(--muted)',
              lineHeight: '1.6',
              marginBottom: '24px',
              opacity: 0.8,
              textAlign: 'left',
            }}
          >
            Investing in alternative assets involves risk, including possible loss of principal. Past performance is no guarantee of future results. Offerings are available only to qualified investors in eligible jurisdictions.
          </p>

          <div
            style={{
              borderTop: '1px solid var(--border)',
              paddingTop: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              fontSize: '13px',
              color: 'var(--muted)',
            }}
          >
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Xterasystem Inc. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Risk Disclosure</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
