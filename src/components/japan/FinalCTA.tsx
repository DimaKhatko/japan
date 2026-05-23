export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-ink text-white"
    >
      {/* Oversized graffiti background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <div className="font-display font-black text-[22vw] leading-none text-stroke-red opacity-30 whitespace-nowrap">
          POINT&nbsp;CAMP
        </div>
      </div>
      {/* Red glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8 text-center">
        <div className="text-primary font-semibold tracking-widest text-xs uppercase">
          連絡 · Контакти
        </div>
        <h2 className="mt-4 font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white text-balance">
          Хочете поїхати з нами до Японії?
        </h2>
        <p className="mt-5 text-white/75 text-lg">
          Залишилось декілька місць у кожній групі. Напишіть або зателефонуйте —
          відповімо за пару хвилин.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+380669217373"
            className="pulse-red inline-flex items-center gap-3 rounded-2xl bg-primary text-primary-foreground px-7 py-4 text-lg font-semibold shadow-red-glow hover:scale-[1.02] transition"
          >
            <span className="text-xl">📞</span>
            +38 066 921 73 73
          </a>
          <a
            href="https://t.me/pointcamp"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/70 text-white px-7 py-4 text-lg font-semibold hover:bg-white/10 transition"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden>
              <path d="M9.7 15.3l-.4 4c.6 0 .8-.3 1.1-.6l2.7-2.5 5.5 4c1 .6 1.7.3 2-1l3.6-16.9c.3-1.5-.6-2.1-1.6-1.7L1 8.5C-.4 9.1-.4 10 .7 10.4l5.6 1.7L19 4.4c.6-.3 1.2-.1.7.3"/>
            </svg>
            Telegram
          </a>
        </div>

        <div className="mt-10 text-white/55 text-sm">
          Point Camp · 桜 · 2026 — подорож, яку згадуватимуть усе життя.
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <a
        href="https://t.me/pointcamp"
        target="_blank"
        rel="noreferrer"
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 py-4 font-semibold shadow-red-glow"
      >
        ✈️ Написати в Telegram
      </a>
    </section>
  );
}
