import omotenashiImg from "@/assets/omotenashi.jpg";

export function Omotenashi() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="polaroid rotate-[-4deg] max-w-md mx-auto relative">
            <img
              src={omotenashiImg}
              alt="Японська філософія гостинності"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full aspect-[4/3] object-cover rounded-sm"
            />
            <div className="text-center mt-3 font-display text-lg">おもてなし</div>
          </div>
          <div className="absolute -bottom-6 right-2 rotate-6 bg-primary text-primary-foreground rounded-2xl px-4 py-2 font-display text-sm shadow-red-glow">
            ★ філософія сервісу
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="text-primary font-semibold tracking-widest text-xs uppercase">
            おもてなし (Omotenashi)
          </div>
          <h2 className="mt-3 font-display font-black text-5xl sm:text-6xl text-ink text-balance leading-[1]">
            Омотенаші
          </h2>
          <p className="mt-6 text-xl text-ink/80 text-balance">
            Це унікальна японська філософія гостинності: передбачити потреби гостя{" "}
            <span className="text-primary font-semibold">ще до того, як він про них подумає</span>.
          </p>
          <p className="mt-4 text-ink/70">
            В основі Омотенаші лежить щирість, яка не чекає на винагороду. Саме тому в Японії
            категорично не прийнято залишати чайові — найкращий сервіс уже включений у культуру за
            замовчуванням.
          </p>
        </div>
      </div>
    </section>
  );
}
