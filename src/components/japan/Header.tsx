import { useEffect, useState } from "react";
import logoJapan from "@/assets/logo-japan.png";
import logoJapanDark from "@/assets/logo-japan-dark.png";

const links = [
  { href: "#about", label: "Про подорож" },
  { href: "#why", label: "Чому з нами" },
  { href: "#route", label: "Маршрут" },
  { href: "#program", label: "Програма" },
  { href: "#price", label: "Вартість" },
  { href: "#contact", label: "Контакти" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 40);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          {/* Both logos stacked; cross-fade on scroll to avoid layout shift */}
          <span className="relative inline-block h-8 md:h-10 group-hover:scale-105 transition-transform">
            <img
              src={logoJapan}
              alt="Point Camp Japan"
              className={`h-8 md:h-10 w-auto transition-opacity duration-300 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={logoJapanDark}
              alt=""
              aria-hidden
              className={`absolute left-0 top-0 h-8 md:h-10 w-auto transition-opacity duration-300 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </span>
          <span
            className={`text-[10px] font-medium tracking-widest leading-none transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white/80"
            }`}
          >
            JAPAN · 2026
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:transition-all ${
                scrolled
                  ? "text-ink/75 hover:text-primary after:bg-primary"
                  : "text-white/90 hover:text-white after:bg-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-2xl bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-card hover:brightness-110 transition"
        >
          Залишити заявку
        </a>

        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card"
        >
          <span className="block w-5 h-0.5 bg-ink relative before:absolute before:left-0 before:-top-1.5 before:w-5 before:h-0.5 before:bg-ink after:absolute after:left-0 after:top-1.5 after:w-5 after:h-0.5 after:bg-ink" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink py-2 border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-semibold"
            >
              Залишити заявку
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
