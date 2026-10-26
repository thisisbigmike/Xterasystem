'use client';

import { faqs } from '@/data/faqs';
import { Section, SectionHeader } from './ui/section';
import { Accordion } from './ui/accordion';
import FadeIn from './FadeIn';

export default function FaqSection() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow="FAQ" title="Common questions" className="lg:sticky lg:top-24" />
        </div>
        <FadeIn className="lg:col-span-8">
          <Accordion items={faqs.map((f) => ({ title: f.q, content: f.a }))} />
        </FadeIn>
      </div>
    </Section>
  );
}
