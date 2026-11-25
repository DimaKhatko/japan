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
import { SoldOutModal } from "@/components/japan/SoldOutModal";

const SITE_URL = "https://japan.pointcamp.com.ua/";
const ORG_ID = "https://pointcamp.com.ua/#organization";

/**
 * JSON-LD @graph: the brand (same @id on every Point Camp landing, so crawlers and
 * AI search merge them into one entity) and this page. The autumn 2026 trip is over,
 * so there is deliberately no Event/Offer node: add one (dates, price, availability)
 * together with the next season's copy. Everything here must match the visible page.
 */
function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Point Camp",
        alternateName: "PointCamp",
        url: "https://pointcamp.com.ua/",
        logo: `${SITE_URL}favicon-512x512.png`,
        foundingDate: "2011",
        sameAs: [
          "https://www.facebook.com/pointcamp",
          "https://www.instagram.com/point_camp",
          "https://t.me/pointcamp",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+380662217373",
          contactType: "customer service",
          email: "contact@pointcamp.com.ua",
          availableLanguage: ["uk"],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}#webpage`,
        url: SITE_URL,
        name: "Point Camp · Japan — подорож до Японії для підлітків та молоді",
        description:
          "Подорож до Японії для підлітків та молоді: Токіо, Кіото, Нара, Осака. Досвід, менторство і безпека — 10 днів, що змінюють уявлення про світ.",
        inLanguage: "uk",
        primaryImageOfPage: `${SITE_URL}og-image.jpg`,
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Point Camp · Japan 2026 — подорож, що змінює уявлення про світ" },
      {
        name: "description",
        content:
          "Подорож до Японії для підлітків та молоді: Токіо, Кіото, Нара, Осака. Досвід, менторство і безпека — 10 днів, що змінюють уявлення про світ.",
      },
      // Bing Webmaster Tools site verification: keep permanently (removing it unverifies the site).
      { name: "msvalidate.01", content: "BF4250F50D78E77F8D1A4C8F71BA2B54" },
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
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData()),
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
        <Moments />
        <FinalCTA />
      </main>
      <Footer />
      <StickyApplyButton />
      <SoldOutModal />
    </div>
  );
}
