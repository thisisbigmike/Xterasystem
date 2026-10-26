'use client';

import FadeIn from './FadeIn';
import { SkeletonImage } from './Skeleton';

// Image-only band: the former "Credibility photo" slot, without dev captions.
export default function CredibilityPhoto() {
  return (
    <section className="border-t border-border">
      <div className="frame py-16 sm:py-20">
        <FadeIn>
          <SkeletonImage
            className="aspect-[21/9] rounded-xl border border-border"
            src="/images/img-analytics-team.jpg"
            alt="Investment team reviewing market data on multiple screens in a boardroom"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </FadeIn>
      </div>
    </section>
  );
}
