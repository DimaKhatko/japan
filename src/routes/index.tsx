import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/japan/Header";
import { Hero } from "@/components/japan/Hero";
import { Intro } from "@/components/japan/Intro";
import { WhyUs } from "@/components/japan/WhyUs";
import { Reviews } from "@/components/japan/Reviews";
import { WhyJapan } from "@/components/japan/WhyJapan";
import { Omotenashi } from "@/components/japan/Omotenashi";
import { Route as RouteSection } from "@/components/japan/Route";
import { Program } from "@/components/japan/Program";
import { Price } from "@/components/japan/Price";
import { FinalCTA } from "@/components/japan/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Point Camp · Japan 2026 — подорож, що змінює уявлення про світ" },
      {
        name: "description",
        content:
          "Point Camp Japan 2026: 10 днів / 9 ночей у Токіо, Кіото, Нарі та Осаці. Маленька група, перевірений маршрут, 3150 €.",
      },
      { property: "og:title", content: "Point Camp · Japan 2026" },
      {
        property: "og:description",
        content:
          "Подорож до Японії з Point Camp: Tokyo · Kyoto · Nara · Osaka. 10 днів / 9 ночей. 3150 €.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Zen+Maru+Gothic:wght@500;700;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-background text-ink min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhyUs />
        <Reviews />
        <WhyJapan />
        <Omotenashi />
        <RouteSection />
        <Program />
        <Price />
        <FinalCTA />
      </main>
    </div>
  );
}
