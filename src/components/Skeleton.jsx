export function SkeletonLine({ width = '100%', height = '14px', style = {}, className = '' }) {
  return (
    <span
      className={`skeleton-line ${className}`}
      style={{ width, height, ...style }}
    />
  );
}

export function SkeletonBlock({ width = '100%', height = '100%', style = {}, className = '' }) {
  return (
    <div
      className={`skeleton-block ${className}`}
      style={{ width, height, ...style }}
    />
  );
}

export function SkeletonCard({ height = '140px', style = {} }) {
  return (
    <div className="skeleton-card" style={{ padding: '16px', background: 'var(--card)', borderRadius: '12px', border: '1px solid var(--border)', ...style }}>
      <SkeletonLine width="40%" height="12px" style={{ marginBottom: '12px' }} />
      <SkeletonLine width="85%" height="18px" style={{ marginBottom: '10px' }} />
      <SkeletonLine width="60%" height="14px" />
    </div>
  );
}
