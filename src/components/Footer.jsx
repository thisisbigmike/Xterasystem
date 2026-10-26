'use client';

import { useState } from 'react';
import GlobeLogo from './GlobeLogo';
import { navLinks } from '@/data/site';

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Try again.');
      setStatus('success');
      setMessage("Thanks. You're on the list.");
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err.message);
    }
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="subscribe-form">
        <label htmlFor="subscribe-email" className="sr-only">Email address</label>
        <input
          id="subscribe-email"
          className="input"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          aria-invalid={status === 'error'}
          aria-describedby="subscribe-status"
          disabled={submitting}
        />
        <button className="btn btn-primary" type="submit" disabled={submitting} aria-busy={submitting}>
          {submitting && <span className="spinner" aria-hidden="true" />}
          {submitting ? 'Subscribing' : 'Subscribe'}
        </button>
      </div>
      <p
        id="subscribe-status"
        className={`form-status${status === 'error' ? ' is-error' : ''}${status === 'success' ? ' is-success' : ''}`}
        role="status"
      >
        {message}
      </p>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#top" aria-label="Xterasystem home">
              <GlobeLogo maskId="footer-globe-mask" />
              Xterasystem
            </a>
            <p>
              A marketplace for real assets and private markets. Every listing shows its structure, risks, and
              eligibility before you invest.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="footer-heading">Platform</h2>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.href} className="link" href={link.href}>{link.label}</a>
              ))}
            </div>
          </nav>

          <div className="footer-newsletter">
            <h2 className="footer-heading">Market updates</h2>
            <p>New listings and asset-class research by email. Unsubscribe anytime.</p>
            <SubscribeForm />
          </div>
        </div>

        <p className="disclaimer">
          Investing in alternative assets involves risk, including possible loss of principal. Past performance is no
          guarantee of future results. Offerings are available only to qualified investors in eligible jurisdictions.
        </p>
        <p className="footer-bottom">&copy; {new Date().getFullYear()} Xterasystem Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
