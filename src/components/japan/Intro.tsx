const cards = [
  {
    kanji: "旅",
    title: "Що це за поїздка",
    items: [
      "10 днів / 9 ночей у Японії",
      "Токіо · Кіото · Нара · Осака",
      "Маленька група, до 10 учасників",
      "Досвідчений супровід 24/7",
    ],
    tint: "bg-sakura",
  },
  {
    kanji: "誰",
    title: "Для кого",
    items: [
      "Підлітки, молодь та родини",
      "Фокус на досвіді та самостійності",
      "Безпека та культура понад усе",
      "Перший раз або повернення",
    ],
    tint: "bg-sky-soft",
  },
  {
    kanji: "夢",
    title: "Чому Японія",
    items: [
      "Країна, що змінює уявлення про світ",
      "Технології та глибокі традиції",
      "Інша культура, інша філософія",
      "Wow-ефект на кожному кроці",
    ],
    tint: "bg-beige",
  },
];

export function Intro() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-primary font-semibold tracking-widest text-xs uppercase">
            はじめに · Знайомство
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
            Подорож, на яку чекатимуть роками
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Ми не возимо туристів. Ми створюємо досвід — продуманий маршрут,
            емоції, культуру та свободу досліджувати Японію разом.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="relative rounded-3xl bg-card border border-border p-7 shadow-card hover:-translate-y-1 transition group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`absolute -top-6 -right-6 w-20 h-20 rounded-2xl ${c.tint} flex items-center justify-center font-display text-4xl text-ink rotate-6 group-hover:rotate-0 transition shadow-card`}
              >
                {c.kanji}
              </div>
              <h3 className="font-display font-bold text-2xl text-ink pr-16">
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-3 text-ink/80">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
