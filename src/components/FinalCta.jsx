'use client';

import FadeIn from './FadeIn';
import { SplitCta, TextLink } from './ui/split-cta';
import { SIGNUP_URL } from '@/data/site';

export default function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="frame py-16 sm:py-24">
        <FadeIn className="relative overflow-hidden rounded-xl border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Same 1/3/4/3/1 divider grid as the hero, faint, to close the page on the same motif. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden grid-cols-12 divide-x divide-border md:grid">
            <div className="col-span-1" />
            <div className="col-span-3" />
            <div className="col-span-4" />
            <div className="col-span-3" />
            <div className="col-span-1" />
          </div>
          <div className="relative">
            <p className="eyebrow text-accent">Start today</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-display">
              Create your account and start exploring
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              Get a clear view of global alternative opportunities, organized by asset class, structure, and eligibility.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <SplitCta href={SIGNUP_URL}>Create Account</SplitCta>
              <TextLink href="#how" className="text-foreground">Learn how it works</TextLink>
            </div>
            <p className="mt-6 text-xs text-subtle">No commitment required. Verification/KYC happens when you choose to invest.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
