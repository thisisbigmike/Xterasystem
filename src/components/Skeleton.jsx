'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// next/image with a shimmer placeholder that clears once the photo has decoded.
// Every photo on the page gets the same grade so mixed sources read as one set.
export function SkeletonImage({ className, imgClassName, children, ...imageProps }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // Cached images can finish loading before hydration attaches onLoad.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <span className={cn('relative block overflow-hidden', !loaded && 'skeleton', className)} aria-busy={!loaded}>
      <Image
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={cn('object-cover saturate-85 contrast-105', imgClassName)}
        {...imageProps}
      />
      {children}
    </span>
  );
}
