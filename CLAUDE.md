# CLAUDE.md — PointCamp Japan landing

## Repo facts
- Landing: Japan autumn trip.
- Repo: `japan` · Stack: TanStack Start (Lovable config) + Bun.
- LANDING = `japan`.
- Build output: `dist/client`.
- Firebase: target `japan` → site `pointcamp-japan` · domain `japan.pointcamp.com.ua`.
- Future path: `pointcamp.com.ua/japan/` (subdomain → subfolder). Not migrated yet.
- Default branch: `dev` (to be renamed to `main` later).
- Lockfile: `bun.lock` is the only lockfile.
- Config wrapper: `@lovable.dev/vite-tanstack-config` 2.x — uses `nitro: false`; `bun run build` prerenders `/` with its full content to `dist/client/index.html` (static prerender, not the SPA shell).
- Toolchain (aligned with Smart): Vite 8.1.5; TanStack Router 1.170.18 / Start 1.168.32 / router-plugin 1.168.23; wrapper `^2.20.0`; `nitro` 3.0.260603-beta (dev); `overrides.rolldown` 1.2.1.

## Standard v1 rules (S1–S5, concise)
- **S1 Lead submission** *(target — not yet applied here, see Pending).* `src/lib/submitLead.ts` exports `LANDING`, `WEBHOOK_URL` (Make), `LeadData { name; phone; email; participant }`, `SendResult { ok; error? }`, `submitLead(data)`. Payload keys exactly: `landing, name, phone, email, participant, page_url, utm_source, utm_medium, utm_campaign, utm_content, utm_term, submitted_at, test`. POST JSON, retry once after 1500 ms, then `{ ok:false, error }`. Push `{ event: "lead_submit" }` to `window.dataLayer` only after a confirmed success; never on failure; guard `window` for SSR. Form via `FormData` with name attrs `name/phone/email/participant`; CSS-hidden honeypot `website`. Status `idle | sending | sent | error`. No `VITE_*` tokens, no browser calls to third-party APIs.
- **S2 Analytics.** GTM `GTM-PGJNFD95` is the only tracking loader (head script + noscript iframe). No direct `gtag.js`, no `fbq`/`fbevents`, no second GTM. `window.dataLayer` typed once. Allowed custom events: `lead_submit`, `video_play`.
- **S3 Meta & crawl.** `<html lang="uk">`; title; description; absolute canonical; OG (title, description, image absolute 1200×630, url, type, `locale=uk_UA`, `site_name="Point Camp"`); `twitter:card=summary_large_image`; theme-color; favicon. `public/robots.txt` with explicit Allow for Googlebot, Bingbot, the AI search/assistant bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-SearchBot, Claude-User), the training bots (GPTBot, ClaudeBot, Google-Extended), Twitterbot, facebookexternalhit and `*` + Sitemap. `public/sitemap.xml` with `<lastmod>` (bump it on every content deploy). **AI-search readiness (GEO):** everything a crawler needs must be in the prerendered HTML as text (AI crawlers do not run JS and do not click). JSON-LD is one `@graph` in `src/routes/index.tsx` (`structuredData()`): Organization with the shared `@id` `https://pointcamp.com.ua/#organization` + WebPage; it must match the visible copy.
- **Bing Webmaster verification (permanent).** `<meta name="msvalidate.01" content="BF4250F50D78E77F8D1A4C8F71BA2B54">` sits next to the description meta in `src/routes/index.tsx`; never remove it (that unverifies the site in Bing Webmaster Tools).
- **S4 Build & hosting.** `vite.config` uses `nitro: false`, `spa: { enabled: false }`, `prerender: { enabled: true, crawlLinks: false }`, `pages: [{ path: "/" }]`: the page text must be in the HTML before any JS runs (LCP, crawlers, AI search). `firebase.json`: `public = dist/client`; **no catch-all rewrite** (unknown paths get the static `public/404.html` with status 404); `Cache-Control: public, max-age=31536000, immutable` for `/assets/**`; root icons/og/manifest `max-age=86400`; `no-cache, no-store, must-revalidate` for `/` and `/index.html`. `.firebaserc` target `japan` → site `pointcamp-japan`. `.gitignore` has `.firebase/`, `dist`, `*.report.html`.
- **S5 Subfolder readiness (prep only; behaviour at `/` unchanged).** No hardcoded root-absolute asset URLs in TS/TSX/CSS/HTML — use imports or `import.meta.env.BASE_URL` (absolute `https://` URLs in meta tags are fine). Do not set a Vite `base` or router `basepath` yet. The router would take a base path via `createRouter({ basepath })` in `src/router.tsx` together with Vite `base`.

## Commands
- Install: `bun install`
- Clean build: `rm -rf dist && bun run build`
- Serve the build locally: `bunx serve dist/client -p 5000`
- Deploy: `firebase deploy --only hosting:japan` — deploys are done by Dima only.

Prerender needs a working Vite preview server; sandbox environments that cannot start one will fail at the prerender step while client and server bundles still compile.

## Conventions
- Work on the default branch (currently `dev`, later `main`). No feature branches, no Firebase preview channels.
- Prompts and code comments in English.
- Never write shell commands with `#` comments.
- Assets must be committed to be visible (nothing is fetched at runtime from outside the repo).
- `bun.lock` is the single lockfile; do not add npm/pnpm/yarn lockfiles.

## Content rules (S6)
- Parents are addressed with lowercase «ви» in page copy. Participants would be «ти» — this landing addresses parents, so the absence of «ти» is correct.
- Flag any mention of вогнище, ватра, багаття, костер, bonfire, campfire.
- Flag outdated years/dates, template or Lovable leftovers, lorem, `{{placeholders}}`, and mentions belonging to another landing.
- Do not change visible copy, design tokens, layout or components beyond what a standard item requires.

## Pending
- **Next-season SEO/GEO (do together with the spring copy).** Title/OG still say "Japan 2026"; add an `Event` node with the public `Offer` (dates, price, availability) to `structuredData()`; add a visible FAQ block (always-mounted answers, see the FAQ in `pointcamp-croatia`) plus a `FAQPage` node; self-host Zen Maru Gothic instead of the Google Fonts request; port the deferred GTM loader, lazy sections and font subset from `pointcamp-winter`.
- **S1 — blocked until the Make router is ready.** Keep the current form, `src/lib/sendToTelegram.ts` and the `children` field untouched for now. When unblocked: implement `src/lib/submitLead.ts` per S1, switch the form to `FormData` + `name/phone/email/participant` (rename `children → participant`), remove `sendToTelegram.ts` and the `VITE_TELEGRAM_*` vars from `.env.example`.
- **Secrets in client (part of S1).** `VITE_TELEGRAM_BOT_TOKEN` / `VITE_TELEGRAM_CHAT_ID` are embedded in the client bundle; removed only when S1 lands.
- **`wrangler.jsonc`** — unused Cloudflare config; verify and remove.
- **Croatia purple palette** in `FinalCTA` (violet classes), plus `theme-color` `#4A316D` and the manifest `theme_color`/`background_color` — replace with the Japan palette.
- **Image weight** — built images ≈5 MB; largest `moment-*.webp` ≈300 KB each. Optimise/resize.
- **JS weight** — client JS ≈515 KB uncompressed; review for trimming.
- **Unused shadcn components** in `src/components/ui/*` (chart, carousel, sidebar, menubar, drawer, etc.) — remove what is unused.
- **Next-season content** — the landing currently shows SOLD OUT for 2026 (`SPOTS_LEFT = 0` in `src/lib/config.ts`); refresh for the next season when known.
- **Subfolder migration** — not done this session: set Vite `base` and router `basepath` when moving to `pointcamp.com.ua/japan/`.
