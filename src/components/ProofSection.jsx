'use client';

import { Section, SectionHeader } from './ui/section';
import { SkeletonImage } from './Skeleton';
import { StaggerContainer, StaggerItem } from './FadeIn';
import { stagger } from '@/lib/motion';

// TODO: placeholder names, roles, and headshots. Replace with the real team
// (and real photos) before launch.
const teamMembers = [
  { name: 'Alex Johnson', role: 'Creative Director', image: '/images/team_alex.png' },
  { name: 'Sam Taylor', role: 'Lead Designer', image: '/images/team_sam.png' },
  { name: 'Jordan Smith', role: 'Senior Developer', image: '/images/team_jordan.png' },
  { name: 'Casey Brown', role: 'Project Manager', image: '/images/team_casey.png' },
];

export default function ProofSection() {
  return (
    <Section id="team">
      <SectionHeader eyebrow="Proof" title="Meet Our Team">
        Our experienced leadership and cross-disciplinary team driving global alternative investment innovation.
      </SectionHeader>

      <StaggerContainer as="ul" staggerChildren={stagger.grid} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <StaggerItem as="li" key={member.name}>
            <SkeletonImage
              className="aspect-[4/5] rounded-xl border border-border"
              imgClassName="object-top"
              src={member.image}
              alt={`Portrait of ${member.name}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            >
              <span className="on-dark absolute inset-0 flex flex-col justify-end bg-(image:--media-scrim) p-5">
                <span className="font-display text-lg font-semibold text-foreground">{member.name}</span>
                <span className="text-sm text-muted">{member.role}</span>
              </span>
            </SkeletonImage>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
