const stops = [
  { city: "Токіо", icon: "✈️", note: "Приліт" },
  { city: "Кіото", icon: "🚄", note: "Shinkansen" },
  { city: "Нара", icon: "🚆", note: "Потягом" },
  { city: "Осака", icon: "🚆", note: "Потягом" },
  { city: "Токіо", icon: "🚄", note: "Shinkansen" },
  { city: "Дім", icon: "🛫", note: "Виліт" },
];

export function Route() {
  return (
    <section id="route" className="relative py-20 lg:py-28 bg-grad-sky">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-primary font-semibold tracking-widest text-xs uppercase">
            ルート · Маршрут
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
            Маршрут пригоди
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Чотири міста — чотири історії. Все продумано до Shinkansen.
          </p>
        </div>

        <div className="mt-14 relative">
          {/* Dashed red route line */}
          <svg
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 top-10 w-full h-12 hidden md:block"
            aria-hidden
          >
            <path
              d="M 50 30 Q 200 0 350 30 T 650 30 T 950 30"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="3"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          <ol className="relative grid grid-cols-2 md:grid-cols-6 gap-6">
            {stops.map((s, i) => (
              <li key={i} className="flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-2xl shadow-card">
                  {s.icon}
                </div>
                <div className="mt-3 font-display font-bold text-lg text-ink">
                  {s.city}
                </div>
                <div className="text-xs text-ink/60 uppercase tracking-wider">{s.note}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
