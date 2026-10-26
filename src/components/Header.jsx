'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import GlobeLogo from './GlobeLogo';
import ThemeToggle from './ThemeToggle';
import { SIGNUP_URL, navLinks } from '@/data/site';
import { cn } from '@/lib/utils';
import { transition } from '@/lib/motion';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  // Over the hero photo the header is transparent and uses the dark tokens;
  // once the page scrolls (or the menu opens) it becomes a solid themed bar.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out',
        solid ? 'border-b border-border bg-header backdrop-blur-md' : 'on-dark border-b border-transparent bg-transparent',
      )}
    >
      <nav aria-label="Main" className="frame flex h-16 items-center justify-between gap-6 border-x-0 lg:border-x-0">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-foreground">
          <GlobeLogo maskId="header-globe-mask" />
          Xterasystem
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={SIGNUP_URL}
            className="hidden h-10 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-on-accent sm:inline-flex"
          >
            Create Account
          </a>
          <button
            type="button"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={transition.base}
            className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
          >
            <div className="frame flex h-full flex-col py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 font-display text-xl font-medium text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SIGNUP_URL}
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex h-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-on-accent"
              >
                Create Account
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
