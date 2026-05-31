import type { CSSProperties } from "react";
import routeMap from "@/assets/route-map.webp";

export function Route() {
  return (
    <section
      id="route"
      className="relative isolate overflow-hidden py-16 lg:py-20"
      style={
        {
          "--sea-bg": "#EAF4FA",
          "--sea-line": "#8FC2DC",
        } as CSSProperties
      }
    >
      {/* Seigaiha (Japanese wave) sea — recolorable via --sea-bg / --sea-line.
          The map's transparent sea blends seamlessly into these waves. */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full"
        aria-hidden="true"
        style={{ background: "var(--sea-bg, #EAF4FA)" }}
      >
        <defs>
          <pattern id="seigaiha" width="68" height="34" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="var(--sea-line, #8FC2DC)">
              {/* fan @ (34,0) */}
              <path d="M0,0 A34,34 0 0 1 68,0" strokeWidth="2.2" />
              <path d="M12.92,0 A21.08,21.08 0 0 1 55.08,0" strokeWidth="2" />
              <path d="M25.16,0 A8.84,8.84 0 0 1 42.84,0" strokeWidth="1.8" />
              {/* fan @ (34,34) */}
              <path d="M0,34 A34,34 0 0 1 68,34" strokeWidth="2.2" />
              <path d="M12.92,34 A21.08,21.08 0 0 1 55.08,34" strokeWidth="2" />
              <path d="M25.16,34 A8.84,8.84 0 0 1 42.84,34" strokeWidth="1.8" />
              {/* fan @ (0,17) */}
              <path d="M-34,17 A34,34 0 0 1 34,17" strokeWidth="2.2" />
              <path d="M-21.08,17 A21.08,21.08 0 0 1 21.08,17" strokeWidth="2" />
              <path d="M-8.84,17 A8.84,8.84 0 0 1 8.84,17" strokeWidth="1.8" />
              {/* fan @ (68,17) */}
              <path d="M34,17 A34,34 0 0 1 102,17" strokeWidth="2.2" />
              <path d="M46.92,17 A21.08,21.08 0 0 1 89.08,17" strokeWidth="2" />
              <path d="M59.16,17 A8.84,8.84 0 0 1 76.84,17" strokeWidth="1.8" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)" />
      </svg>

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: heading + route line on a clean light panel (never on the waves) */}
          <div className="lg:col-span-5 rounded-2xl bg-background p-6 md:p-8 shadow-card">
            <div className="text-primary font-semibold tracking-widest text-xs uppercase">
              Маршрут
            </div>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl text-ink text-balance">
              Масштаб пригоди. Наш маршрут по Японії
            </h2>
            <p className="mt-5 text-sm font-medium text-ink/70">
              Tokio → Кіото → Нара → Осака → Tokio
            </p>
          </div>

          {/* Right: full map in a framed card floating on the seigaiha sea — no cropping */}
          <div className="lg:col-span-7 rounded-2xl bg-background p-4 md:p-6 shadow-card">
            <img
              src={routeMap}
              alt="Маршрут подорожі Японією: Токіо, Кіото, Нара, Осака"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
