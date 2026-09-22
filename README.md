# Varam Classic Garden — Grand Launch Invitation

A premium, cinematic digital invitation for the Grand Launch of **Varam Classic
Garden** by **IMR Groups** — 27 September 2026. Built mobile-first for sharing
over WhatsApp.

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to `http://localhost:5173`) — resize
your browser to a phone width (or open dev tools' device toolbar) to see the
intended experience; the invitation card is capped at 480px. On phones
(below 640px) it fills the screen edge-to-edge; from tablet width up it
presents as a centred, rounded, drop-shadowed card floating on a deep navy
backdrop, so the site looks intentional at every size — a phone, a tablet,
or someone opening the link on a desktop browser.

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  data/project.ts        single source of truth for every fact on the site
                          (dates, price, approvals, amenities, contact, maps)
  hooks/useCountdown.ts   live countdown to the launch date
  components/
    Hero.tsx              opening 9:16 invitation screen
    Announcement.tsx       grand launch announcement
    Countdown.tsx          countdown panel
    Intro.tsx               project introduction
    PriceHighlight.tsx      ₹18 Lakhs onwards
    Approvals.tsx           DTCP / RERA / HNTDA badges
    Amenities.tsx            amenities grid + gated community
    MasterPlan.tsx           supplied site-plan image + lightbox detail view
    Location.tsx             address + Google Maps CTA
    SiteVisit.tsx             free cab family site-visit CTA
    Closing.tsx               final invitation + footer
    StickyBar.tsx             persistent Call / Directions / WhatsApp bar
    Ornaments.tsx             compass, botanical corners, gold divider, petals
    Reveal.tsx                shared scroll-reveal animation wrapper
public/assets/            supplied master-plan / site-plan images (jpg + webp)
```

## Updating project details

Every editable fact — price, dates, contact number, WhatsApp message text,
Google Maps link, amenities, approvals — lives in `src/data/project.ts`.
Change it there and it updates everywhere it's used (hero, footer, sticky
bar, CTAs).

## Design system

- **Palette** — ivory (`#F5FAFC`), cream, sky blush, sky-blue gold accent
  (`#0B6FA3` → `#5FCBF5`), deep navy brown (`#0B3049`) and maroon-navy
  (`#0E3F5C`) — a sky-blue identity matching the IMR Groups logo.
- **Logo** — the actual IMR Groups logo (`public/assets/logo.png`) is shown
  as a circular badge in the hero (`LogoBadge`) and above the closing
  invitation wordmark (`LogoBadgeSmall`), both in `Ornaments.tsx`.
- **Type** — `Cinzel` (wide-tracked display serif, all-caps) for headings,
  `Cormorant Garamond` italic for invitation-style copy, `Poppins` light for
  body text. Loaded via Google Fonts in `index.html`.
- **Motion** — Framer Motion `whileInView` fade-ups (see `Reveal.tsx`)
  staggered across each section, a shimmering gold gradient on "GRAND
  LAUNCH", floating petals in the hero, a ripple on the location pin, and a
  sticky CTA bar that slides in once the hero scrolls out of view.
- **Imagery** — the supplied site-plan PDF was rendered to high-resolution
  JPG/WebP (`public/assets/`) and used as-is; the layout is not redrawn.

## Responsive behavior

- **320px–639px (phones)** — full-bleed invitation, no side margins. Hero
  headline sizes scale with viewport width up to 400px, then lock to a
  fixed size (`58px` / `42px`) so nothing overflows the 480px card on the
  in-between widths a resized browser or an unusual device can produce.
- **640px+ (tablet / desktop)** — the same 480px-wide card centers itself
  with rounded corners, a soft drop shadow, and a deep navy backdrop behind
  it (`App.tsx`'s `.app-shell`, styled in `index.css`), so it reads as a
  deliberate invitation card rather than a stretched mobile page.
- All grids (approvals, amenities, countdown) are already percentage/`fr`
  based inside that fixed-width card, so they don't need separate
  breakpoints of their own.

## Deploying to Cloudflare Pages

The build output in `dist/` after `npm run build` is a fully static site —
it also deploys as-is to Vercel, Netlify, GitHub Pages, or any static host,
but Cloudflare Pages is the primary target and is pre-configured here.

**Option A — Cloudflare dashboard (Git integration, recommended)**

1. Push this project to a GitHub/GitLab repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git**, and select the repo.
3. Build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Every push to the connected branch redeploys automatically; pull
   requests get their own preview URL.

**Option B — Wrangler CLI (no Git required)**

```bash
npm install                # installs the wrangler devDependency too
npx wrangler login         # one-time browser login to your Cloudflare account
npm run deploy             # builds, then runs: wrangler pages deploy dist
```

`wrangler.toml` already points Wrangler at `dist` and names the project
`varam-classic-garden` — change `name` there (and the `--project-name` flag
in `package.json`'s `deploy` script) if you want a different project name
or already created one with a different name in the dashboard.

**After the first deploy**

- The site is live at `https://<project-name>.pages.dev` immediately; add a
  custom domain under the Pages project's **Custom domains** tab whenever
  you're ready (e.g. a subdomain of your own domain) — no config changes
  needed here, since every URL in the site (WhatsApp links, `tel:`, Google
  Maps) is already absolute and the Open Graph/`og:image` tags in
  `index.html` use relative paths that resolve correctly on whatever domain
  serves the build.
- `public/_headers` ships sensible security headers plus long-lived caching
  for hashed JS/CSS and the supplied images — no extra Cloudflare
  configuration is required for either.
- `public/robots.txt` allows indexing, since this is a public marketing
  invitation, not a private tool.
