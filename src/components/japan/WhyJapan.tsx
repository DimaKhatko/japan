const reasons = [
  { kanji: "安", title: "Абсолютна безпека", text: "країна, де довіра є основою життя." },
  { kanji: "質", title: "Передбачувана якість", text: "найвищий рівень сервісу в кожній деталі." },
  {
    kanji: "心",
    title: "Глибина культури",
    text: "кожна поїздка відкриває нові, невідомі раніше грані.",
  },
];

export function WhyJapan() {
  return (
    <section className="relative py-20 lg:py-28 bg-seigaiha">
      <div className="absolute inset-0 bg-background/70" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-primary font-semibold tracking-widest text-xs uppercase">
              日本 · Чому Японія
            </div>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
              Японія — країна №1, куди хочеться повернутися
            </h2>
            <div className="mt-8 inline-flex items-center gap-4 rounded-3xl bg-card border-2 border-primary p-6 shadow-card">
              <div className="font-display font-black text-6xl text-primary leading-none">
                7<span className="text-3xl">/10</span>
              </div>
              <div className="text-ink/80 text-sm max-w-[220px]">
                мандрівників відвідують Японію вдруге та більше. Це один із найвищих показників у
                світі.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-2xl text-ink">Чому сюди повертаються?</h3>
            {reasons.map((r) => (
              <div
                key={r.title}
                className="flex gap-5 items-start rounded-2xl bg-card border border-border p-5 shadow-card hover:translate-x-1 transition"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary text-primary-foreground font-display font-black text-2xl flex items-center justify-center shadow-red-glow">
                  {r.kanji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink">{r.title}</h3>
                  <p className="mt-1 text-ink/70">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
