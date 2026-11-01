# Claude Code prompt: ofirmarzouk.com full redesign

> Paste everything below the line into Claude Code, run from the folder that holds the current site's source (or an empty folder if you don't have it). Fill in the `[[...]]` placeholders first, or leave them and Claude Code will ask.

---

## Role and goal

You are rebuilding **ofirmarzouk.com**, the bilingual (Hebrew RTL + English LTR) website of **Adv. Ofir Marzouk**, an Israeli criminal defense lawyer who focuses on **cross-border criminal matters**: extradition, Interpol Red Notices, international arrests, foreign indictments, cybercrime / online-trading (forex, CFD, crypto) cases, and plea negotiations, working with a network of lawyers abroad.

The current site's content is decent, but the design is basic and looks unprofessional (misaligned buttons, weak RTL handling, no visual hierarchy), and it has almost no SEO. Deliver a **complete makeover**: new design system, new code, stronger structure, full technical SEO in both languages, and a site that turns a frightened visitor (often a family member of someone just arrested abroad) into a phone call or WhatsApp message within seconds.

Work in phases. **Stop for my approval after Phase 1** (design direction + homepage). After that, carry on through the remaining phases without stopping unless something is blocked.

## Inputs I'll provide (placeholders)

- Phone: `[[+972-...]]` · WhatsApp: `[[+972-...]]` · Email: `[[...]]`

- Years of practice / licensed since: `[[e.g. licensed since 2014]]` (the current site says "over ten years"; use the accurate figure)
- Professional headshot: `[[path]]` (use a real photo, not an AI one; if missing, leave a clearly marked slot)
- Where form submissions should go: `[[email address]]`
- Hosting: `[[current host / "decide for me"]]`
- Analytics: `[[none / Plausible / GA4]]`
- Extra images: I can generate images with another AI tool. When you need one, add it to `IMAGES_NEEDED.md` (see Phase 2) instead of using stock clichés.

## Current site (source content to migrate)

Live at https://ofirmarzouk.com. Hebrew is the root, English is under `/en/`.

| Page | HE URL | EN URL | Notes |
|---|---|---|---|
| Home | `/index.html` | `/en/index.html` | H1 "הגנה חוצת גבולות למקרים משפטיים מורכבים" / "Cross-Border Defense for Complex Legal Cases" + one paragraph. **No CTA, no contact details.** |
| About | `/about.html` | `/en/about.html` | Two paragraphs, headshot `images/About me.jpg`, contact form. No credentials or education listed. |
| Services | `/services.html` | `/en/services.html` | 6 services, each a short paragraph (cybercrime, extradition, international arrests, foreign indictments, plea agreements, international lawyer network). All on one page. |
| Articles | `/articles.html` | `/en/articles.html` | 3 articles: `/articles/interpol.html` (Interpol & Red Notices, ~700 words), `/articles/forex.html` (Forex & online trading), `/articles/arrests.html` (International arrest & extradition). No dates. |
| Contact | `/contact.html` | `/en/contact.html` | Form only (name, email, phone, message). **No phone, email, WhatsApp or address anywhere on the site.** |

If the source files are in this folder, read them. If not, fetch every page above (both languages, all 3 articles in both languages) and extract the text verbatim into `content/` before changing anything. **Preserve all existing copy, articles included**; you may tighten and restructure it, but don't drop substance, and flag any rewrite of legal claims for my review.

### Problems found in the audit (fix all of these)

1. No phone / WhatsApp / email anywhere: the biggest conversion problem.
2. Homepage has no call to action at all.
3. No meta descriptions on any page (only a viewport tag), no Open Graph, no structured data, no `hreflang`, no canonical tags. robots.txt and sitemap.xml could not be confirmed.
4. All six services live on one page, so there's nothing for Google to rank for "עורך דין הסגרה", "red notice lawyer", etc.
5. Articles have no publish date, no author box, no internal links, and the closing CTA isn't a link.
6. Contact form: verify it actually submits somewhere; it likely doesn't.
7. Hard-coded "© 2025".
8. Filenames with spaces (`About me.jpg`, `Contact us.jpg`, `Article Interpol.jpeg`).
9. Misaligned buttons/layout: almost certainly physical `left/right` CSS fighting RTL. Rebuild with logical properties.
10. No privacy policy, no legal disclaimer, no accessibility statement.

## Tech stack

- **Astro** (static output) + **Tailwind CSS**, TypeScript. Zero client JS by default; tiny islands only where needed (mobile menu, form).
- Astro i18n routing: Hebrew default at `/`, English at `/en/`. One component tree for both languages; strings in `src/i18n/he.json` / `en.json`; long-form content in **content collections** (`src/content/articles/{he,en}/*.md`, `src/content/services/{he,en}/*.md`) with typed frontmatter (title, description, date, updated, slug, translationKey, hero, faq[]).
- `<html lang="he" dir="rtl">` / `<html lang="en" dir="ltr">` per page. **Use CSS logical properties only** (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`). Mirror directional icons (arrows) in RTL. No `left`/`right` anywhere except where truly physical.
- Images through `astro:assets` (AVIF/WebP, width/height set, lazy below the fold). Rename to kebab-case.
- Self-hosted fonts (no Google Fonts CDN calls), `font-display: swap`, subset to Hebrew + Latin.
- Contact form: serverless function (Vercel/Netlify/Cloudflare, matching the host) sending email via Resend, **or** Web3Forms/Formspree if the host is static-only. Include a honeypot + basic rate limit, server-side validation, a privacy-consent checkbox linking to the privacy policy, and success/error states in both languages.
- If I say "decide for me" on hosting: Vercel.

## Phase 1: Design direction + homepage (STOP for approval)

Use your frontend-design skill if available. Avoid the generic law-firm look (gavels, scales, marble columns, stock handshakes) and avoid a templated SaaS look.

**Brand feel:** calm, discreet, senior, international. The visitor is under stress; the site should feel like a steady hand. Think private bank / boutique international firm, not a personal-injury billboard.

Propose **two distinct directions** as rendered homepage mockups (both languages, desktop + mobile), then build the one I pick. Starting points, which you may improve on:

- **A, Ink & Brass:** deep ink-navy (#0F1B2D-ish) surfaces, warm off-white paper, a muted brass accent for CTAs and rules. Serif headings, clean sans body. A subtle world-map line motif (thin connecting arcs between cities) as the recurring "cross-border" signature.
- **B, Stone & Teal:** light, airy, warm stone/limestone background, near-black text, a deep teal accent. Editorial layout with large type and generous whitespace; borders/route-lines as the motif.

**Typography (must support Hebrew well):** headings in **Frank Ruhl Libre** (Hebrew + Latin serif); body in **Heebo** or **Assistant** (or Rubik). Verify Hebrew and English glyphs sit on the same visual baseline and size; tune `line-height` per language (Hebrew usually needs slightly more).

**Design system deliverable** (`src/styles/tokens.css` + a `/styleguide` page excluded from the sitemap): color tokens with WCAG AA contrast checked, type scale, spacing scale, radii, shadows, button variants (primary / secondary / ghost / WhatsApp), form fields, cards, section patterns. Every button/CTA is built from one component so alignment is consistent everywhere.

**Homepage structure:**
1. Sticky header: logo, nav (Home, About, Practice Areas, Articles, Contact), language switch (links to the *equivalent* page in the other language, not the other homepage), and a persistent **phone** + **WhatsApp** button. On mobile: a compact header + bottom sticky bar with Call / WhatsApp.
2. Hero: clear H1 (keep the "cross-border defense" message), one line of subtext, primary CTA "free initial consultation" + secondary "WhatsApp now". Short trust line (years of practice, Israel Bar, languages: Hebrew, English, Spanish).
3. "Arrested abroad, or worried you might be?" urgent-situations block: 3–4 scenario cards (detained at an airport on a Red Notice / extradition request received / charged in a foreign country / under investigation for online-trading or cyber offenses), each linking to the matching service page.
4. Practice areas grid (6 cards → individual pages).
5. How it works: 3–4 steps (first call → case review → strategy across jurisdictions → representation with local counsel network).
6. About teaser with headshot, short bio and link.
7. Latest articles (3 cards with dates).
8. FAQ (5–6 questions, also emitted as FAQPage schema).
9. Final CTA band + contact form.
10. Footer: contact details, nav, practice areas, legal pages (Privacy, Disclaimer, Accessibility Statement), dynamic year.

**Do not** invent testimonials, case results, client logos, awards or statistics. Leave clearly marked optional slots for anything I may supply later.

## Phase 2: All pages, both languages

- **About:** bio, approach, credentials block (Israel Bar license, education LL.B. College of Management, years, languages), international network explanation, headshot, CTA.
- **Practice Areas hub** + **one page per service** (6 pages × 2 languages): expand each into ~400–700 words built from the existing text: who it's for, what typically happens, how Ofir helps, what to do right now, 3–5 FAQs, CTA, links to related articles. Mark every new legal statement with `<!-- REVIEW -->` in the markdown so I can check it. Suggested slugs:
  - `/practice-areas/extradition` · `/practice-areas/interpol-red-notice` · `/practice-areas/international-arrest` · `/practice-areas/foreign-indictment` · `/practice-areas/cybercrime-online-trading` · `/practice-areas/plea-agreements`
  - Hebrew uses the same English slugs under `/` (simpler hreflang pairing and no encoded-URL issues), unless you have a strong reason otherwise; explain if you change it.
  - The "international lawyer network" becomes a section on About + the hub page rather than its own service page.
- **Articles:** index with dates, reading time and category; article template with H1, date published/updated, author box (photo, one-line bio, link to About), table of contents for long articles, in-body links to relevant service pages, a real CTA box at the end, and "related articles". Migrate all 3 existing articles in both languages. Ask me for the original publish dates; until then use a placeholder and flag it.
- **Contact:** phone, WhatsApp (with prefilled message in the right language), email, the form, response-time expectation, and a note on confidentiality.
- **Legal pages (both languages):** Privacy Policy (what the form collects, purpose, retention, rights; draft it and mark it for my review), Legal Disclaimer (site content is general information, not legal advice; contacting doesn't create a lawyer-client relationship), and an **Accessibility Statement** (הצהרת נגישות) with a contact for accessibility issues. Israeli regulations require one.
- **404 page** in both languages.
- **`IMAGES_NEEDED.md`:** for every image slot, list the filename, dimensions/aspect ratio, where it's used, and a detailed generation prompt in English matching the chosen direction (consistent palette, lighting, no text in images, no recognizable real people, no flags/police/handcuff clichés). Use tasteful placeholders until I deliver the files.

## Phase 3: SEO (both languages)

- Unique `<title>` (≤60 chars) and meta description (≤155 chars) per page, written for the searcher, in that page's language.
- `hreflang` pairs (`he`, `en`, `x-default` → Hebrew) on every page, plus self-referencing canonicals.
- Open Graph + Twitter cards with a branded OG image per language (generate them at build time, e.g. with satori).
- JSON-LD: `LegalService` + `Attorney`/`Person` for Ofir (sitewide, with `knowsLanguage`, `areaServed`, `sameAs` slots), `WebSite`, `BreadcrumbList` on inner pages, `Article` on articles (author, datePublished, dateModified), `FAQPage` where FAQs appear. Validate all of it.
- `@astrojs/sitemap` with i18n alternates, `robots.txt` pointing to it.
- **301 redirects** from every old `.html` URL (both languages, including `/articles/*.html` and `/en/articles/*.html`) to its new URL. Write them in the host's config format and test each one.
- Semantic HTML: one H1 per page, logical heading order, descriptive alt text in the page's language, descriptive link text (no bare "Read more"; use e.g. "Read more: Interpol Red Notices").
- Internal linking: every service ↔ related articles ↔ contact.
- Write `SEO_NOTES.md` with: the primary + secondary keyword targets per page in both languages (e.g. "עורך דין הסגרה", "עורך דין פלילי בינלאומי", "הודעה אדומה אינטרפול", "נעצר בחו"ל עורך דין", "Israeli extradition lawyer", "Interpol red notice lawyer Israel", "Israeli arrested abroad lawyer"), 10 suggested future article topics, and a setup checklist for me (Google Search Console for both language versions, submit sitemap, Google Business Profile if applicable, Bing Webmaster Tools).

## Phase 4: Legal-advertising and compliance guardrails

Ofir is a lawyer licensed in Israel; the site must stay within Israel Bar advertising rules. Concretely:
- No promises or implications of outcomes ("we'll get you released", "guaranteed").
- No superlatives or comparisons ("best", "#1", "leading"), and don't label Ofir an "expert/מומחה".
- No testimonials, ratings or case results unless I supply them.
- Tone: factual, measured, reassuring.
- Collect every claim that could be sensitive into `REVIEW.md` with page + line so I can approve it in one pass.

## Phase 5: QA (don't skip)

Use Playwright (already available) to:
- Screenshot every page in both languages at 375px, 768px and 1440px; review them yourself and fix misalignments, overflow and RTL mirroring issues before reporting. Save the final set to `qa/screenshots/`.
- Run axe-core on every page: zero serious/critical violations. Keyboard navigation and visible focus states throughout; mobile menu traps focus correctly; form fields have labels and error messages announced.
- Lighthouse (mobile) on Home, one service page, one article, Contact, both languages: target ≥95 Performance, 100 Accessibility, 100 Best Practices, 100 SEO. Report the scores.
- Link checker: no broken internal links; all old URLs redirect with 301.
- Test the form end-to-end (success + failure + honeypot).
- Verify the language switch lands on the equivalent page for every page.

## Phase 6: Deploy

- Set up deployment on the chosen host with a preview URL first. Don't switch the production domain until I confirm.
- Write a short `README.md`: how to run locally, add an article in each language, change contact details, and deploy.

## Reporting

At the end of each phase give me: what was done, what needs my input (placeholders, `REVIEW.md` items, `IMAGES_NEEDED.md`), and screenshots of key pages. Keep it brief.
