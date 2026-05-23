export function Sakura({ count = 18 }: { count?: number }) {
  const petals = Array.from({ length: count });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {petals.map((_, i) => {
        const left = (i * 53) % 100;
        const dur = 12 + ((i * 7) % 10);
        const delay = (i * 1.7) % 12;
        const size = 8 + ((i * 3) % 10);
        return (
          <span
            key={i}
            className="sakura-petal"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDuration: `${dur}s`,
              animationDelay: `-${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
