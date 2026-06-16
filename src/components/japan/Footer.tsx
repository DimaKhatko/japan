import { Phone, Send, MessageCircle, MessageSquare, Mail, Instagram, Facebook } from "lucide-react";
import logoJapan from "@/assets/logo-japan.png";

const navLinks = [
  { href: "#about", label: "Про подорож" },
  { href: "#why", label: "Чому з нами" },
  { href: "#route", label: "Маршрут" },
  { href: "#program", label: "Програма" },
  { href: "#price", label: "Вартість" },
  { href: "#contact", label: "Контакти" },
];

const contacts = [
  { href: "tel:+380662217373", icon: Phone, label: "+38 066 221 73 73" },
  { href: "https://t.me/point_camp", icon: Send, label: "Telegram", external: true },
  { href: "viber://chat?number=%2B380662217373", icon: MessageCircle, label: "Viber" },
  { href: "https://wa.me/+380662217373", icon: MessageSquare, label: "WhatsApp", external: true },
  { href: "mailto:contact@pointcamp.com.ua", icon: Mail, label: "Написати на e-mail" },
];

const socials = [
  { href: "https://www.instagram.com/point_camp", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/pointcamp", icon: Facebook, label: "Facebook" },
  { href: "https://t.me/pointcamp", icon: Send, label: "Telegram" },
];

const docs = [
  {
    href: "https://drive.google.com/file/d/1OFvq9GX9-4brPLVxUoqpcWETbJV-_555/preview",
    label: "Публічна оферта",
  },
  {
    href: "https://drive.google.com/file/d/16D4I7OvCw2L4-G1QejjEtVx3G4P448ob/preview",
    label: "Обробка персональних даних",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* Seigaiha wave crest along the very top — ties into the landing motifs */}
      <div aria-hidden className="bg-seigaiha h-5 w-full opacity-60" />

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div>
            <img src={logoJapan} alt="Point Camp Japan" className="h-10 w-auto" />
            <p className="mt-5 font-display text-lg font-bold text-white">
              心に残る旅 · Подорож, яку згадуватимуть усе життя.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Освітня подорож до Японії для підлітків та молоді: Токіо, Кіото, Нара, Осака. Досвід,
              менторство і безпека.
            </p>
          </div>

          {/* Navigation + contacts */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Розділи
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/70 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Контакти
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                    >
                      <c.icon className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                      <span>{c.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social + documents */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary">
              Соцмережі
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-secondary">
              Документи
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {docs.map((d) => (
                <li key={d.href}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} Point Camp · Japan. Усі права захищені.</span>
          <a
            href="https://www.pointcamp.com.ua/croatia/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Літній кемп у Хорватії →
          </a>
        </div>
      </div>
    </footer>
  );
}
