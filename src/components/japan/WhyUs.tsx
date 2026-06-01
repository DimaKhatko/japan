import groupImg from "@/assets/group.webp";
import kyotoImg from "@/assets/whyus-kyoto.webp";
import oceanImg from "@/assets/whyus-ocean.webp";

const trust = [
  { num: "15+", label: "років роботи з підлітками" },
  { num: "10", label: "маленькі комфортні групи" },
  { num: "100%", label: "маршрут перевірений особисто" },
  { num: "2", label: "дорослих супроводжуючих на 10 учасників" },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-20 lg:py-28 bg-grad-sakura">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="polaroid -rotate-3 relative tape">
              <img
                src={groupImg}
                alt="Команда Point Camp"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full aspect-square object-cover rounded-sm"
              />
              <div className="text-center mt-2 text-sm font-display">наша банда</div>
            </div>
            <div className="polaroid rotate-2 mt-10">
              <img
                src={kyotoImg}
                alt="Храм у Кіото"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full aspect-square object-cover rounded-sm"
              />
              <div className="text-center mt-2 text-sm font-display">Kyoto</div>
            </div>
            <div className="polaroid rotate-3 col-span-2 max-w-sm mx-auto">
              <img
                src={oceanImg}
                alt="Олені у Нарі"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full aspect-[16/10] object-cover rounded-sm"
              />
              <div className="text-center mt-2 text-sm font-display">Ocean</div>
            </div>
          </div>
          {/* Origami crane SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute -top-6 -right-2 w-20 h-20 text-primary float-slow"
            aria-hidden
          >
            <path d="M10 50 L50 20 L90 50 L70 55 L50 80 L30 55 Z" fill="currentColor" />
            <path d="M50 20 L50 80" stroke="white" strokeWidth="1.5" />
            <path d="M70 55 L90 50 L75 65" stroke="white" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        <div>
          <div className="text-primary font-semibold tracking-widest text-xs uppercase">
            信頼 · Довіра
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
            Чому з нами
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            За кожною деталлю маршруту — роки досвіду й щира турбота про кожного учасника.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {trust.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl bg-card border border-border p-5 shadow-card"
              >
                <div className="font-display font-black text-4xl text-primary leading-none">
                  {t.num}
                </div>
                <div className="mt-2 text-sm text-ink/75">{t.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-ink/70 text-lg">
            А ще щовечора група разом проживає й проговорює день. Саме ця рефлексія перетворює
            яскраву поїздку на справжній досвід дорослішання.
          </p>
        </div>
      </div>
    </section>
  );
}
