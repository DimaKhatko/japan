import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import m01 from "@/assets/moments/moment-01.webp";
import m02 from "@/assets/moments/moment-02.webp";
import m03 from "@/assets/moments/moment-03.webp";
import m04 from "@/assets/moments/moment-04.webp";
import m05 from "@/assets/moments/moment-05.webp";
import m06 from "@/assets/moments/moment-06.webp";
import m07 from "@/assets/moments/moment-07.webp";
import m08 from "@/assets/moments/moment-08.webp";
import m09 from "@/assets/moments/moment-09.webp";
import m10 from "@/assets/moments/moment-10.webp";
import m11 from "@/assets/moments/moment-11.webp";

const moments = [
  { src: m01, alt: "Токійська вежа з висоти — подорож Point Camp Japan" },
  { src: m02, alt: "Олені в Нарі поряд з учасниками Point Camp Japan" },
  { src: m03, alt: "Японські суші під час подорожі Point Camp Japan" },
  { src: m04, alt: "Цифрова інсталяція teamLab у Токіо — Point Camp Japan" },
  { src: m05, alt: "Манга й аніме-культура Японії — Point Camp Japan" },
  { src: m06, alt: "Ресторан у Камакурі — подорож Point Camp Japan" },
  { src: m07, alt: "Суші-шеф готує страву в Японії — Point Camp Japan" },
  { src: m08, alt: "Храм у Камакурі — подорож підлітків Point Camp Japan" },
  { src: m09, alt: "Пагода храму в Камакурі — Point Camp Japan" },
  { src: m10, alt: "Вулиці Токіо — подорож Point Camp Japan" },
  { src: m11, alt: "Перехрестя Сібуя в Токіо — Point Camp Japan" },
];

export function Moments() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 0);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("img");
    const gap = 16;
    const amount = (card?.clientWidth ?? el.clientWidth * 0.8) + gap;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-primary font-semibold tracking-widest text-xs uppercase">Моменти</div>
        <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
          Як це було насправді
        </h2>
        <p className="mt-4 text-ink/70 text-lg">Реальні кадри з наших подорожей — без фільтрів.</p>
      </div>

      <div className="relative mt-10 lg:mt-12">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-5 lg:px-8 pr-12 lg:pr-20 snap-x snap-mandatory scroll-pl-5 lg:scroll-pl-8 [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
        >
          {moments.map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              loading="lazy"
              className="h-[300px] lg:h-[420px] w-auto shrink-0 snap-start rounded-2xl object-cover shadow-card"
            />
          ))}
        </div>

        {/* Desktop navigation arrows — touch devices swipe instead */}
        <button
          type="button"
          aria-label="Попередні фото"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-background text-ink shadow-card transition hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Наступні фото"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-background text-ink shadow-card transition hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
