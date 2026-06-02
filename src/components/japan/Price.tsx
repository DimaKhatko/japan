const included = [
  "Проживання у 2-місних номерах у 3–4★ готелях",
  "Харчування: сніданки + ще один прийом їжі щодня",
  "Страхування на час поїздки",
  "Весь транспорт у Японії, включно з Shinkansen, метро та міжміськими переїздами",
  "Супровід 24/7 командою PointCamp",
  "Вхідні квитки та бронювання до ключових локацій: Universal Studios Japan (з express-pass), teamLab, Shibuya Sky, храми, платні музеї та локації за маршрутом",
  "Повна організація та координація поїздки командою PointCamp",
  "Сувеніри та мерч від PointCamp",
];

const extras = [
  { label: "Переліт", price: "900–1200 €" },
  { label: "Добирання до міста вильоту (Київ – Будапешт/Варшава – Київ)", price: "~310 €" },
  { label: "Оформлення візи", price: "120 €" },
  { label: "Кишенькові витрати", price: "300 €" },
];

export function Price() {
  return (
    <section id="price" className="relative py-20 lg:py-28 bg-rice-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
          {/* Price card */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-3xl bg-grad-red-navy text-white p-8 shadow-polaroid relative overflow-hidden">
              <div
                className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/10"
                aria-hidden
              />
              <div className="text-xs uppercase tracking-widest opacity-80">料金 · Вартість</div>
              <div className="mt-3 font-display font-black text-6xl leading-none">3150 €</div>
              <div className="mt-2 text-white/80">10 днів / 9 ночей</div>

              <div className="mt-7 space-y-2">
                <div className="flex items-center gap-3 rounded-2xl bg-white/15 backdrop-blur px-4 py-3">
                  <span className="text-2xl">🍁</span>
                  <div>
                    <div className="font-semibold">21.10 – 30.10.2026</div>
                    <div className="text-xs text-white/75">осіння група</div>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-white text-primary font-semibold px-5 py-3.5 hover:scale-[1.02] transition"
              >
                Забронювати місце
              </a>
            </div>
          </aside>

          <div>
            <div className="text-primary font-semibold tracking-widest text-xs uppercase">
              含む · Включено
            </div>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
              У вартість входить
            </h2>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {included.map((it) => (
                <li
                  key={it}
                  className="flex gap-3 rounded-2xl bg-card border border-border p-4 shadow-card"
                >
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    ✓
                  </span>
                  <span className="text-ink/85 text-sm">{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h3 className="font-display font-bold text-2xl text-ink">Оплачується окремо</h3>
              <p className="text-ink/65 mt-1 text-sm">
                Ми допоможемо з бронюванням квитків, добиранням до міста вильоту та оформленням
                візи.
              </p>
              <div className="mt-5 divide-y divide-border rounded-2xl bg-card border border-border shadow-card overflow-hidden">
                {extras.map((e) => (
                  <div
                    key={e.label}
                    className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
                  >
                    <span className="text-ink/85">{e.label}</span>
                    <span className="font-display font-bold text-primary">{e.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
