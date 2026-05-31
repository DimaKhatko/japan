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
  {
    day: 1,
    title: "Приліт & Tokio",
    img: tokyo,
    text: (
      <>
        Перший день — час мʼякого занурення. Приземляємося, відчуваємо ритм міста й без поспіху
        гуляємо затишними вуличками: неон, футуристичні автомати, бездоганна чистота — усе довкола
        викликає щире захоплення. Це той самий момент: «ми нарешті в <b>Японії</b>». Увечері —
        бріфінг, знайомство і спокійне налаштування на пригоду.
      </>
    ),
    tags: ["Trasfer", "Welcome dinner", "Neon vibes"],
  },
  {
    day: 2,
    title: "Shibuya & Harajuku",
    img: harajuku,
    text: (
      <>
        Пульс <b>Tokio</b>. Починаємо з легендарної <b>Shibuya</b>: знаменитий перехід, неон та
        енергія, що заряджає кожного. Занурюємося в <b>Don Quijote</b> — це не просто шопінг, а
        справжній азарт і найкрутіші знахідки. Далі <b>Harajuku</b>: яскравий контраст між драйвом{" "}
        <b>Takeshita Street</b> та витонченою естетикою <b>Omotesando</b>.
      </>
    ),
    tags: ["Shibuya Crossing", "Takeshita St.", "Crepes"],
  },
  {
    day: 3,
    title: "Akihabara",
    img: akihabara,
    text: (
      <>
        Занурення в електричне серце японської поп-культури — легендарну <b>Акіхабару</b>.
        Нескінченні поверхи з аніме, рідкісними колекційними фігурками та найновішими гаджетами.
        Велетенські ігрові центри, неонові вивіски й енергія сучасних технологій. Кожен крок — нове
        відкриття, від вінтажних ігор до футуристичних VR-світів.
      </>
    ),
    tags: ["Gaming", "Anime", "Gachapon"],
  },
  {
    day: 4,
    title: "Переїзд у Kyoto",
    img: kyoto,
    text: (
      <>
        Вранці сідаємо на <b>Shinkansen</b> і мчимо до <b>Кіото</b> — колишньої столиці Японії.
        Швидкісний поїзд сам по собі вже враження: плавний рух, види за вікном. Після обіду гуляємо
        районами з девʼяними будинками, маленькими майстернями та храмами. <b>Кіото</b>{" "}
        відкривається через деталі: ліхтарі, тишу, аромати й ритм, що контрастує з <b>Tokio</b>.
      </>
    ),
    tags: ["Shinkansen", "Tea ceremony", "Gion"],
  },
  {
    day: 5,
    title: "Nara",
    img: nara,
    text: (
      <>
        Подорож у справжню казку, де природа та історія існують в ідеальній гармонії. Головна емоція
        дня — зустріч із ввічливими оленями, що вільно гуляють парком і кланяються гостям. Величний
        храм <b>Todai-ji</b> з гігантським Буддою вражає масштабом, а спокій стародавніх садів дарує
        відчуття глибокої рівноваги.
      </>
    ),
    tags: ["Deers", "Todai-ji", "Sika"],
  },
  {
    day: 6,
    title: "Kyoto & teamLab",
    img: teamlab,
    text: (
      <>
        Дивимось величні храми <b>Кіото</b>: від сяйва <b>Золотого павільйону</b> до витончених
        ліній дзен-садів, що дихають спокоєм та історією. А цифрові інсталяції <b>teamLab</b>{" "}
        додають традиційним локаціям магічного виміру, перетворюючи простір на інтерактивний всесвіт
        світла й тіні.
      </>
    ),
    tags: ["teamLab", "Immersive", "Art"],
  },
  {
    day: 7,
    title: "Osaka",
    img: osaka,
    text: (
      <>
        Неонове серце Японії. Побачимо <b>Дотонборі</b>: легендарний <b>Гліко Мен</b>, велетенські
        рухомі фігури на фасадах та нескінченний потік світла. Прогулянки аркадами <b>Шінсайбаші</b>{" "}
        та величезні магазини <b>Don Quijote</b> дарують азарт великого міста — день драйву, смаку
        та яскравих кадрів.
      </>
    ),
    tags: ["Dotonbori", "Takoyaki", "Street food"],
  },
  {
    day: 8,
    title: "Universal Studios",
    img: universal,
    text: (
      <>
        Повне занурення у світ мрій та адреналіну в <b>Universal Studios Japan</b>. Цілий день,
        присвячений культовим кіновсесвітам: від інтерактивних пригод у <b>Super Nintendo World</b>{" "}
        до магічних вуличок <b>Harry Potter World</b>. Завдяки <b>Express Pass</b> не витрачаємо час
        у чергах, а концентруємося лише на емоціях.
      </>
    ),
    tags: ["Express Pass", "Super Mario World", "Wizarding World"],
  },
  {
    day: 9,
    title: "Tokyo & Shibuya Sky",
    img: shibuyaSky,
    text: (
      <>
        Повертаємось до <b>Tokio</b> і проводимо фінальний день легко: улюблені райони, прогулянки{" "}
        <b>Shibuya</b> та <b>Shinjuku</b>, останні покупки. Увечері піднімаємось на{" "}
        <b>Shibuya Sky</b> — оглядовий майданчик із найкрутішим видом на мегаполіс: місто під
        ногами, сотні вогнів. Завершуємо день груповою рефлексією та спільними фото.
      </>
    ),
    tags: ["Sunset", "Skyline", "Memories"],
  },
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
