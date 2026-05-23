import tokyo from "@/assets/tokyo.jpg";
import harajuku from "@/assets/harajuku.jpg";
import akihabara from "@/assets/akihabara.jpg";
import kyoto from "@/assets/kyoto.jpg";
import nara from "@/assets/nara.jpg";
import teamlab from "@/assets/teamlab.jpg";
import osaka from "@/assets/osaka.jpg";
import universal from "@/assets/universal.jpg";
import shibuyaSky from "@/assets/shibuya-sky.jpg";

const days = [
  { day: 1, title: "Приліт & Токіо", img: tokyo, text: "Перші кроки в столиці. Заселення, перші враження, прогулянка районом.", tags: ["Trasfer", "Welcome dinner", "Neon vibes"] },
  { day: 2, title: "Shibuya & Harajuku", img: harajuku, text: "Найвідоміший перехід світу, мода, вуличний стайл і вуличні смаколики.", tags: ["Shibuya Crossing", "Takeshita St.", "Crepes"] },
  { day: 3, title: "Akihabara", img: akihabara, text: "Електроніка, аніме, манга та ретро-гейминг. Місто майбутнього.", tags: ["Gaming", "Anime", "Gachapon"] },
  { day: 4, title: "Переїзд у Kyoto", img: kyoto, text: "Shinkansen — і ми у древній столиці. Храми, чай, спокій.", tags: ["Shinkansen", "Tea ceremony", "Gion"] },
  { day: 5, title: "Nara", img: nara, text: "Олені, Великий Будда, найстаріша столиця Японії.", tags: ["Deers", "Todai-ji", "Sika"] },
  { day: 6, title: "Kyoto & teamLab", img: teamlab, text: "Імерсивна цифрова галерея — досвід, який не передати фото.", tags: ["teamLab", "Immersive", "Art"] },
  { day: 7, title: "Osaka", img: osaka, text: "Гастро-столиця Японії. Dotonbori, такоякі та неонові ріки.", tags: ["Dotonbori", "Takoyaki", "Street food"] },
  { day: 8, title: "Universal Studios", img: universal, text: "Express Pass у руки — і вперед. Гаррі Поттер, Маріо, адреналін.", tags: ["Express Pass", "Super Mario World", "Wizarding World"] },
  { day: 9, title: "Tokyo & Shibuya Sky", img: shibuyaSky, text: "Повернення в Токіо. Захід сонця на даху мегаполіса.", tags: ["Sunset", "Skyline", "Memories"] },
];

export function Program() {
  return (
    <section id="program" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-primary font-semibold tracking-widest text-xs uppercase">
            プログラム · Програма
          </div>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
            9 днів — 9 історій
          </h2>
          <p className="mt-4 text-ink/70 text-lg">
            Кожен день — нова локація, нова їжа, нові емоції.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {days.map((d) => (
            <article
              key={d.day}
              className="group relative rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-polaroid transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-3 left-3 rounded-full bg-primary text-primary-foreground font-display font-black text-sm px-3 py-1.5 shadow-red-glow">
                  День {d.day}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-xl text-ink">{d.title}</h3>
                <p className="mt-2 text-ink/70 text-sm leading-relaxed">{d.text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-sakura/50 text-ink/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
