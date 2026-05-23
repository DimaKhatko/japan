const reviews = [
  {
    name: "Анна, мама Софії",
    text: "Софія повернулася іншою людиною. Розповідає про Японію щодня. Дякую за безпеку і чуйність.",
    rotate: "-rotate-2",
  },
  {
    name: "Максим, 16",
    text: "Це був найкращий тиждень мого життя. Akihabara, teamLab, Shibuya Sky — як у фільмі.",
    rotate: "rotate-1",
  },
  {
    name: "Олена, мама Артема",
    text: "Спокій за дитину 24/7. Хлопці супроводжуючі — золото. Артем уже планує наступну подорож.",
    rotate: "rotate-2",
  },
];

export function Reviews() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-primary font-semibold tracking-widest text-xs uppercase">
            声 · Голоси учасників
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
            Найцінніше — це емоції учасників
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 items-center justify-center lg:justify-start">
          <div className="rounded-2xl bg-card border border-border px-5 py-4 shadow-card flex items-center gap-3">
            <div className="font-display font-black text-3xl text-primary">4.8</div>
            <div className="text-sm">
              <div className="font-semibold">Google Maps</div>
              <div className="text-ink/60">★ ★ ★ ★ ★</div>
            </div>
          </div>
          <div className="rounded-2xl bg-card border border-border px-5 py-4 shadow-card flex items-center gap-3">
            <div className="font-display font-black text-3xl text-primary">96%</div>
            <div className="text-sm">
              <div className="font-semibold">рекомендують</div>
              <div className="text-ink/60">Facebook</div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className={`relative polaroid ${r.rotate} hover:rotate-0 transition`}
            >
              <div className="bg-sakura/40 rounded-sm p-5 min-h-[180px] flex items-center">
                <blockquote className="text-ink/90 italic">“{r.text}”</blockquote>
              </div>
              <figcaption className="text-center mt-3 font-display text-sm text-ink">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
