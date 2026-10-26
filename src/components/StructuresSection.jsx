'use client';

import SectionHead from './SectionHead';
import { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger } from '@/lib/motion';

const structures = [
  { tag: 'Direct asset', title: 'Direct ownership', body: 'Title, equity, or a direct fractional interest in physical or corporate assets.' },
  { tag: 'Fund / SPV', title: 'Fund or pooled vehicle', body: 'An interest in a managed fund or special-purpose vehicle that holds the underlying assets.' },
  { tag: 'Debt', title: 'Lending and credit', body: 'Fixed or variable income through loans, bonds, or structured debt instruments.' },
  { tag: 'Cash flow', title: 'Revenue-share', body: 'A contractual share of gross or net revenue from an operating business or asset.' },
];

export default function StructuresSection() {
  return (
    <section className="section" id="structures">
      <div className="wrap">
        <SectionHead eyebrow="Legal and economic structures" title="Know what you own before you commit">
          Every opportunity on Xterasystem is categorized by its underlying structure, so you never have to guess.
        </SectionHead>

        <StaggerContainer as="ul" className="structure-grid" staggerChildren={stagger.grid}>
          {structures.map((s) => (
            <StaggerItem as="li" key={s.title} className="card structure-card">
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
