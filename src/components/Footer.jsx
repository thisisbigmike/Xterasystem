'use client';

import { useState } from 'react';
import GlobeLogo from './GlobeLogo';
import { cn } from '@/lib/utils';

const columns = [
  {
    heading: 'Company',
    links: [
      ['About Xterasystem', '#about'],
      ['Legal Architecture', '#structures'],
      ['Custodial Partners', '#team'],
      ['Institutional Governance', '#'],
    ],
  },
  {
    heading: 'Investment Universe',
    links: [
      ['Real Estate & Infrastructure', '#universe'],
      ['Private Equity & Credit', '#universe'],
      ['Renewable Energy', '#universe'],
      ['Venture Capital', '#universe'],
    ],
  },
  {
    heading: 'Resources',
    links: [
      ['Market Insights', '#'],
      ['Due Diligence Framework', '#'],
      ['Investor FAQ', '#faq'],
      ['Asset Class Guides', '#'],
    ],
  },
  {
    heading: 'Legal & Compliance',
    links: [
      ['Privacy Policy', '#'],
      ['Terms of Service', '#'],
      ['Risk Disclosures', '#'],
    ],
  },
];

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
    <form onSubmit={onSubmit} noValidate className="mt-5">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="subscribe-email" className="sr-only">Email address</label>
        <input
          id="subscribe-email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          aria-invalid={status === 'error'}
          aria-describedby="subscribe-status"
          disabled={submitting}
          className={cn(
            'h-11 min-w-0 flex-1 rounded-full border bg-background px-5 text-sm text-foreground placeholder:text-subtle',
            'transition-colors focus-visible:border-accent focus-visible:outline-none',
            status === 'error' ? 'border-danger' : 'border-border-strong hover:border-subtle',
          )}
        />
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-on-accent disabled:cursor-progress disabled:opacity-75"
        >
          {submitting && <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent" />}
          {submitting ? 'Subscribing' : 'Subscribe'}
        </button>
      </div>
      <p
        id="subscribe-status"
        role="status"
        className={cn('mt-2 min-h-5 text-sm', status === 'error' ? 'text-danger' : 'text-accent')}
      >
        {message}
      </p>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="frame pt-16 pb-10">
        <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
              <GlobeLogo maskId="footer-globe-mask" />
              Xterasystem
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Empowering institutions and accredited investors to access curated real assets, private credit, and
              alternative markets with institutional governance.
            </p>
            <h2 className="mt-8 text-sm font-semibold">Subscribe to market intelligence</h2>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Stay updated with Xterasystem alternative asset opportunities, market insights, and institutional deal reports.
            </p>
            <SubscribeForm />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <h2 className="text-sm font-semibold">{col.heading}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="text-sm text-muted transition-colors hover:text-foreground">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-xs text-subtle">
          Investing in alternative assets involves risk, including possible loss of principal. Past performance is no
          guarantee of future results. Offerings are available only to qualified investors in eligible jurisdictions.
        </p>

        <div className="mt-6 flex flex-col gap-4 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Xterasystem Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-foreground">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
