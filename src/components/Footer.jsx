'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
            }}
          >
            {/* Column 1: Brand & Socials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--fg)' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--fg)',
                    color: 'var(--bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3c.132 4.093 2.907 6.868 7 7-4.093.132-6.868 2.907-7 7-.132-4.093-2.907-6.868-7-7 4.093-.132 6.868-2.907 7-7z" />
                  </svg>
                </div>
                <span style={{ fontSize: '20px', fontWeight: '700', fontFamily: 'var(--display)' }}>Studio</span>
              </Link>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6', margin: 0, maxWidth: '280px' }}>
                We create beautiful, functional designs that help businesses grow and connect with their audience.
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '8px' }}>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" aria-label="Twitter" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
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

            {/* Column 2: Company & Services */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '14px', color: 'var(--fg)' }}>Company</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="#about" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>About Us</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Careers</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Our Process</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>News &amp; Press</a>
                </nav>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '14px', color: 'var(--fg)' }}>Services</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>UI/UX Design</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Web Development</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Brand Identity</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Digital Marketing</a>
                </nav>
              </div>
            </div>

            {/* Column 3: Resources & Legal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '14px', color: 'var(--fg)' }}>Resources</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Blog</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Case Studies</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Guides &amp; Tutorials</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>FAQ</a>
                </nav>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '14px', color: 'var(--fg)' }}>Legal</h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Terms of Service</a>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--muted)', textDecoration: 'none' }}>Cookie Policy</a>
                </nav>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', margin: 0, color: 'var(--fg)' }}>Subscribe to our newsletter</h4>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.5', margin: 0, maxWidth: '300px' }}>
                Stay updated with our latest projects, design tips, and company news.
              </p>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '10px', marginTop: '6px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
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
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Studio Design Agency. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Cookie Settings</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
