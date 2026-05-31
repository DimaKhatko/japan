// Deterministic-by-index so it renders identically on server and client (SSR-safe).
const LEAF_COLORS = ["#B3261E", "#C75B12", "#E08A1E", "#A8521C"];

// Japanese maple (momiji) silhouette — five palmate lobes with a short stem.
const MOMIJI_PATH =
  "M12 1 L13 6 L15 5 L14.5 8 L19.5 6.5 L16 10.5 L22.5 12.5 L16.5 12.5 " +
  "L18 18 L13.5 14.5 L12.6 16 L12.6 23 L11.4 23 L11.4 16 L10.5 14.5 " +
  "L6 18 L7.5 12.5 L1.5 12.5 L8 10.5 L4.5 6.5 L9.5 8 L9 5 L11 6 Z";

export function AutumnLeaves({ count = 18 }: { count?: number }) {
  const leaves = Array.from({ length: count });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {leaves.map((_, i) => {
        const left = (i * 53) % 100;
        const dur = 12 + ((i * 7) % 10);
        const delay = (i * 1.7) % 12;
        const size = 8 + ((i * 3) % 10);
        const color = LEAF_COLORS[i % LEAF_COLORS.length];
        return (
          <svg
            key={i}
            className="autumn-leaf"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            style={{
              left: `${left}%`,
              color,
              animationDuration: `${dur}s`,
              animationDelay: `-${delay}s`,
            }}
          >
            <path fill="currentColor" d={MOMIJI_PATH} />
          </svg>
        );
      })}
    </div>
  );
}
