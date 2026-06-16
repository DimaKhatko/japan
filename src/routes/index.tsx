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
import { Moments } from "@/components/japan/Moments";
import { FinalCTA } from "@/components/japan/FinalCTA";
import { Footer } from "@/components/japan/Footer";
import { StickyApplyButton } from "@/components/japan/StickyApplyButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Point Camp · Japan 2026 — подорож, що змінює уявлення про світ" },
      {
        name: "description",
        content:
          "Подорож до Японії для підлітків та молоді: Токіо, Кіото, Нара, Осака. Досвід, менторство і безпека — 10 днів, що змінюють уявлення про світ.",
      },
      { property: "og:title", content: "Point Camp · Japan 2026" },
      {
        property: "og:description",
        content:
          "Подорож до Японії для підлітків та молоді: Токіо, Кіото, Нара, Осака. Досвід, менторство і безпека — 10 днів, що змінюють уявлення про світ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://japan.pointcamp.com.ua/" },
      { property: "og:image", content: "https://japan.pointcamp.com.ua/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
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
        <Moments />
        <FinalCTA />
      </main>
      <Footer />
      <StickyApplyButton />
    </div>
  );
}
