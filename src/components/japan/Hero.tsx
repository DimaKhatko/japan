import heroMobile from "@/assets/hero-japan-mobile.webp";
import heroDesktop from "@/assets/hero-japan-desktop.webp";
import { SPOTS_LEFT, spotsNoun } from "@/lib/config";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 lg:pt-32 pb-20 overflow-hidden">
      {/* Sunburst background */}
      <div className="absolute inset-0 bg-grad-sun opacity-95" aria-hidden />
      <div className="absolute inset-0 bg-rays opacity-30 mix-blend-overlay" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-widest uppercase border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white" />
            {SPOTS_LEFT === 0
              ? "Набір закрито · лист очікування"
              : `Останні ${SPOTS_LEFT} ${spotsNoun(SPOTS_LEFT)}`}
          </div>

          <h1 className="mt-5 font-display font-[840] leading-[0.92] text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
            Подорож, що змінює уявлення про світ
          </h1>

          <div className="mt-5 text-2xl font-semibold text-white">21–30 жовтня 2026 · 3150 €</div>

          <p className="mt-6 text-lg lg:text-xl text-white/90 max-w-md text-balance">
            10 днів у Японії для підлітків та молоді. Токіо, Кіото, Нара, Осака — малою групою, з
            досвідченим супроводом.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="pulse-red inline-flex items-center gap-2 rounded-2xl bg-white text-primary px-6 py-3.5 font-semibold shadow-lg hover:scale-[1.02] active:scale-100 transition"
            >
              Залишити заявку
            </a>
            <a
              href="tel:+380662217373"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/80 text-white px-6 py-3.5 font-semibold hover:bg-white/10 transition"
            >
              +38 066 221 73 73
            </a>
          </div>
        </div>

        {/* Hero image as a polaroid stack */}
        <div
          className="relative flex justify-center lg:justify-end animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div
            className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-sakura/40 blur-2xl"
            aria-hidden
          />
          <div className="relative">
            <div className="absolute -top-8 -right-8 polaroid w-40 sm:w-52 rotate-6 float-slow">
              <div className="aspect-square bg-sakura rounded-sm" />
              <div className="text-center mt-2 font-display text-sm">sakura</div>
            </div>
            <div className="relative polaroid w-72 sm:w-96 lg:w-[440px] -rotate-3 shadow-polaroid">
              <picture>
                <source media="(min-width:1024px)" srcSet={heroDesktop} />
                <img
                  src={heroMobile}
                  alt="Японія: Фудзі, торі, сакура, оригамі журавлі та коі"
                  className="w-full aspect-[4/3] object-cover rounded-sm"
                  width={900}
                  height={1200}
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <div className="text-center mt-3 font-display text-base text-ink">
                Point Camp · Japan ’26
              </div>
            </div>
            <div
              className="absolute -bottom-10 -left-10 polaroid w-32 sm:w-40 rotate-[-8deg] float-slow"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="aspect-square bg-sky-soft rounded-sm flex items-center justify-center text-3xl">
                ⛩️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
