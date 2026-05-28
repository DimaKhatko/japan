import heroImg from "@/assets/hero-japan.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 lg:pt-32 pb-20 overflow-hidden"
    >
      {/* Sunburst background */}
      <div className="absolute inset-0 bg-grad-sun opacity-95" aria-hidden />
      <div className="absolute inset-0 bg-rays opacity-30 mix-blend-overlay" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-widest uppercase border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Point Camp · подорож року +1 + А + 1
          </div>

          <h1 className="mt-5 font-display font-black leading-[0.92] text-6xl sm:text-7xl lg:text-8xl">
            Japan
            <span className="block text-[0.92em]">2026</span>
            <span className="block mt-2 text-base lg:text-lg font-medium tracking-[0.4em] text-white/80">
              ニッポン
            </span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-white/90 max-w-md text-balance">
            Подорож, що змінює уявлення про світ. Маленька група, перевірений
            маршрут, емоції, які залишаються назавжди.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="pulse-red inline-flex items-center gap-2 rounded-2xl bg-white text-primary px-6 py-3.5 font-semibold shadow-lg hover:scale-[1.02] active:scale-100 transition"
            >
              Хочу поїхати →
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/80 text-white px-6 py-3.5 font-semibold hover:bg-white/10 transition"
            >
              Дивитись програму
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-white/95">
            <div>
              <div className="text-3xl font-display font-black leading-none">
                10
              </div>
              <div className="text-xs uppercase tracking-widest text-white/75">
                днів / 9 ночей
              </div>
            </div>
            <div className="h-10 w-px bg-white/30" />
            <div>
              <div className="text-3xl font-display font-black leading-none">
                3150 €
              </div>
              <div className="text-xs uppercase tracking-widest text-white/75">
                все організовано
              </div>
            </div>
            <div className="h-10 w-px bg-white/30 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-3xl font-display font-black leading-none">
                4 ★
              </div>
              <div className="text-xs uppercase tracking-widest text-white/75">
                міста · готелі
              </div>
            </div>
          </div>
        </div>

        {/* Hero image as a polaroid stack */}
        <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-sakura/40 blur-2xl" aria-hidden />
          <div className="relative">
            <div className="absolute -top-8 -right-8 polaroid w-40 sm:w-52 rotate-6 float-slow">
              <div className="aspect-square bg-sakura rounded-sm" />
              <div className="text-center mt-2 font-display text-sm">桜 · sakura</div>
            </div>
            <div className="relative polaroid w-72 sm:w-96 lg:w-[440px] -rotate-3 shadow-polaroid">
              <img
                src={heroImg}
                alt="Японія: Фудзі, торі, сакура, оригамі журавлі та коі"
                className="w-full aspect-[4/3] object-cover rounded-sm"
                width={1536}
                height={1280}
              />
              <div className="text-center mt-3 font-display text-base text-ink">
                Point Camp · Japan ’26
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 polaroid w-32 sm:w-40 rotate-[-8deg] float-slow" style={{ animationDelay: "1.5s" }}>
              <div className="aspect-square bg-sky-soft rounded-sm flex items-center justify-center text-3xl">⛩️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
