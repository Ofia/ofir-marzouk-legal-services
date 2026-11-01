# Ofir Marzouk — Project Overview

## Live Site Map

| URL | Description |
|-----|-------------|
| `ofirmarzouk.com` | Legal services website (Hebrew + English) — **redesigned, lives in `site-v2/`** |
| `ofirmarzouk.com/portfolio` | Personal tech portfolio |
| `ofirmarzouk.com/business` | Real estate / business page |

---

## 1. Legal Services Website — `ofirmarzouk.com`

**The live source is `site-v2/` — an Astro + Tailwind site.** The old plain-HTML
version (root-level `index.html`, `about.html`, `css/`, `js/`, `en/`, etc.) has been
removed from the repo; it's still recoverable from git history if ever needed.

Bilingual (Hebrew / English): Hebrew is the default at `/`, English lives under `/en/`.
Dark/cream/gold editorial design, real photography (courthouse, scales/gavel, Interpol,
courtroom), Frank Ruhl Libre headings + Heebo body.

### Structure (`site-v2/`)
```
site-v2/
├── src/
│   ├── pages/                    # Hebrew routes at the top level
│   │   ├── index.astro, about.astro, contact.astro, privacy.astro, ...
│   │   ├── articles/[slug].astro, articles/index.astro
│   │   ├── practice-areas/[slug].astro, practice-areas/index.astro
│   │   └── en/                   # English mirror of every route above
│   ├── components/                # Header, Hero, PracticeGrid, Faq, FinalCta, ...
│   ├── layouts/                  # BaseLayout (head/SEO/JSON-LD), PageLayout
│   ├── content/                  # home.ts, services.ts, articles.ts — plain TS data,
│   │                              # not Astro content collections (small fixed set)
│   ├── assets/                   # source photos (optimized by astro:assets)
│   └── styles/global.css         # Tailwind v4 @theme tokens
├── public/                       # robots.txt, CNAME, logo, favicon
├── REDIRECTS.md                  # old-URL → new-URL map (not wired to a host yet)
├── SEO_NOTES.md                  # keyword targets, future article topics, GSC checklist
└── astro.config.mjs              # site: https://ofirmarzouk.com, @astrojs/sitemap
```

### Deploy
- `.github/workflows/deploy.yml` builds `site-v2` and publishes to GitHub Pages via
  Actions, triggered on push to `main`.
- **Not live yet**: repo Settings → Pages → Source is still "Deploy from a branch".
  Until that's switched to "GitHub Actions", nothing changes at the real domain — the
  workflow exists but has never actually run.
- `.nojekyll` at repo root — required so GitHub's legacy Jekyll build doesn't choke on
  Astro's `---` frontmatter if the branch-deploy pipeline ever processes the repo.

### Content still needed before full launch
- Real phone / WhatsApp / email (currently `[ADD PHONE]` / `[ADD EMAIL]` placeholders)
- About page: exact license year
- `Content/Mediation.txt` — the old site's mediation (גישור) page content, archived but
  never rebuilt as a `site-v2` page (no English version existed either)
- Legal pages (Privacy/Disclaimer/Accessibility) are drafted, need Ofir's sign-off (he's
  the lawyer) — marked `REVIEW` in the source
- Branded OG image (currently reuses the homepage hero photo)
- Full QA pass (Lighthouse/axe) and wiring `REDIRECTS.md` into the host

### Source content archive
- `Content/*.txt` — original site copy (home, about, services, contact, 3 articles,
  mediation), kept as the canonical reference for "what the real copy says," separate
  from how it's structured in `site-v2/src/content/*.ts`.
- `images/` — original photo/logo assets `site-v2` was built from (also still used by
  `business.html`, which is unrelated to this redesign).

---

## 2. Portfolio Page — `ofirmarzouk.com/portfolio`

Personal dev portfolio deployed as a subfolder of this repo.

### Files:
```
portfolio/
├── index.html              ← all-in-one page (edit PROJECTS array + INTRO_TEXT here)
├── cv.json                 ← CV data fed to the chatbot
├── Icons/
│   └── Robot Head.png      ← chatbot button icon
└── assets/
    └── projects/           ← project images (PNG/JPG/WebP, ~960x540)
```

### Features:
- Animated welcome → typewriter intro → zigzag project cards
- Top-right nav: AI chatbot + Contact dropdown
- Mobile responsive (breakpoints: 768px, 480px)

### Chatbot (Cloudflare Worker proxy):
- **Worker URL:** https://ofirs-bot.ofir08.workers.dev
- **Source file:** `C:\Users\ofir\Desktop\Projects\My Portfolio Website\cloudflare-worker.js`
- **Dashboard:** dash.cloudflare.com → Workers & Pages → ofirs-bot
- CORS locked to `https://ofirmarzouk.com`
- API key stored as Cloudflare secret `ANTHROPIC_API_KEY` (never in browser)

---

## 3. Business / Real Estate Page — `ofirmarzouk.com/business`

Self-contained single file, no dependency on the legal site's old `css/`/`js/` (those
are gone now — confirmed `business.html` never referenced them).

### Files:
```
business.html               ← root-level page, inline styles only
images/
└── Business Developmetn Portfolio Page.png
```

---

## Git Repository
- **Remote:** https://github.com/Ofia/ofir-marzouk-legal-services.git
- **Branch:** main
- **Deployed via:** GitHub Pages (see "Deploy" above — mid-migration to Actions)

---

## Open TODOs

See "Content still needed before full launch" above. Biggest open item: switch
Pages source to GitHub Actions to actually go live with the new site.
