'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GlobeLogo from './GlobeLogo';
import ThemeToggle from './ThemeToggle';
import { SIGNUP_URL, navLinks } from '@/data/site';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    if (!drawerOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <div className={`nav-backdrop${drawerOpen ? ' is-open' : ''}`} onClick={closeDrawer} aria-hidden="true" />

      <header className={`site-header${drawerOpen ? ' is-menu-open' : ''}`}>
        <div className="wrap">
          <nav className="nav" aria-label="Main">
            <a className="logo" href="#top" aria-label="Xterasystem home">
              <GlobeLogo maskId="header-globe-mask" />
              Xterasystem
            </a>

            <div className={`nav-links${drawerOpen ? ' is-open' : ''}`} id="nav-links">
              <div className="nav-drawer-head">
                <span className="logo">
                  <GlobeLogo maskId="drawer-globe-mask" />
                  Menu
                </span>
                <button className="icon-btn" type="button" aria-label="Close menu" onClick={closeDrawer}>
                  <X className="icon-sm" />
                </button>
              </div>
              {navLinks.map((link) => (
                <a key={link.href} className="link" href={link.href} onClick={closeDrawer}>
                  {link.label}
                </a>
              ))}
              <div className="nav-mobile-cta">
                <a className="btn btn-primary" href={SIGNUP_URL} onClick={closeDrawer}>
                  Create account
                </a>
              </div>
            </div>

            <div className="nav-actions">
              <ThemeToggle />
              <button
                className="icon-btn nav-toggle"
                type="button"
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                aria-controls="nav-links"
                onClick={() => setDrawerOpen(true)}
              >
                <Menu className="icon-sm" />
              </button>
              <a className="btn btn-primary btn-sm nav-cta-desktop" href={SIGNUP_URL}>
                Create account
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
