'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// next/image with a shimmer placeholder that clears once the photo has decoded.
export function SkeletonImage({ className = '', children, ...imageProps }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // Cached images can finish loading before hydration attaches onLoad.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <span className={`media ${loaded ? '' : 'skeleton'} ${className}`} aria-busy={!loaded}>
      <Image ref={imgRef} onLoad={() => setLoaded(true)} {...imageProps} />
      {children}
    </span>
  );
}
