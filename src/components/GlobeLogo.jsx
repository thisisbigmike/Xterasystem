export default function GlobeLogo({ maskId = "globe-mask" }) {
  return (
    <svg className="logo-icon" aria-hidden="true" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id={maskId}>
        <circle cx="50" cy="50" r="46" fill="white" />
        <path d="M 0 16 Q 50 24 100 16 L 100 23 Q 50 31 0 23 Z" fill="black" />
        <path d="M 0 35 Q 50 43 100 35 L 100 42 Q 50 50 0 42 Z" fill="black" />
        <path d="M 0 54 Q 50 62 100 54 L 100 61 Q 50 69 0 61 Z" fill="black" />
        <path d="M 0 73 Q 50 81 100 73 L 100 80 Q 50 88 0 80 Z" fill="black" />
      </mask>
      <circle cx="50" cy="50" r="46" fill="var(--accent)" mask={`url(#${maskId})`} />
    </svg>
  );
}
