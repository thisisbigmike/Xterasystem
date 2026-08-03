'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobeLogo from './GlobeLogo';
import ThemeToggle from './ThemeToggle';
import { springBounce } from './FadeIn';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <div
        className={`nav-backdrop ${drawerOpen ? 'active' : ''}`}
        id="navBackdrop"
        onClick={closeDrawer}
      />

      <header>
        <div className="wrap">
          <nav>
            <motion.div
              className="logo"
              whileHover={{ scale: 1.03 }}
              transition={springBounce}
            >
              <GlobeLogo maskId="header-globe-mask" />
              Xterasystem
            </motion.div>

            <div className={`nav-links ${drawerOpen ? 'active' : ''}`} id="navLinks">
              <div className="nav-drawer-head">
                <div className="logo">
                  <GlobeLogo maskId="drawer-globe-mask" />
                  Menu
                </div>
                <motion.button
                  className="nav-drawer-close"
                  id="navDrawerClose"
                  aria-label="Close navigation menu"
                  type="button"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={springBounce}
                  onClick={closeDrawer}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              <a href="#how" onClick={closeDrawer}>How it works</a>
              <a href="#universe" onClick={closeDrawer}>Investment universe</a>
              <a href="#trust-eligibility" onClick={closeDrawer}>Trust &amp; eligibility</a>
              <a href="#faq" onClick={closeDrawer}>FAQ</a>
              <div className="nav-mobile-cta">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="btn btn-primary"
                  href="#"
                  onClick={closeDrawer}
                >
                  Create Account
                </motion.a>
              </div>
            </div>

            <div className="nav-cta">
              <ThemeToggle />
              <motion.button
                className="nav-toggle"
                id="navToggle"
                aria-label="Toggle navigation menu"
                aria-expanded={drawerOpen ? 'true' : 'false'}
                aria-controls="navLinks"
                aria-haspopup="true"
                type="button"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={springBounce}
                onClick={() => setDrawerOpen((prev) => !prev)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="btn btn-primary btn-sm nav-btn-desktop"
                href="#"
              >
                Create Account
              </motion.a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
