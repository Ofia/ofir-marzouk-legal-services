# SEO Notes

## What's implemented (this pass)

- Unique `<title>` / meta description per page (homepage rewritten for search intent; inner pages use the service/article title + intro)
- Canonical + `hreflang` (he / en / x-default→he) on every page, computed from the actual URL — not hardcoded, so it's correct on every inner page, not just the homepage
- Open Graph + Twitter card tags (title, description, locale, image) — **the OG image is currently the homepage hero photo, reused everywhere.** Spec called for a branded, per-language OG image generated at build time (e.g. with `satori`); that's not built yet — flagged for a follow-up pass.
- JSON-LD: sitewide `Attorney` + `WebSite`; `FAQPage` on the homepage and every practice-area page with FAQs; `Article` + `BreadcrumbList` on every article page; `BreadcrumbList` on every practice-area page
- `@astrojs/sitemap` with i18n alternates (`sitemap-index.xml` → `sitemap-0.xml`), `robots.txt` pointing to it
- Fixed a real bug found during this pass: the language switcher in the header pointed every inner page back to the *homepage's* other-language version, not its own equivalent page. Now computed from the current URL on every page.
- Descriptive link text on practice-area/urgent-situation cards (was a bare "Learn more →"/"קרא עוד ←", now includes the item name)

## Not done yet

- Branded OG image generation (see above)
- 301 redirects — mapped in `REDIRECTS.md`, not wired to a host (Phase 6 not started)
- Full Lighthouse/axe QA pass (Phase 5)
- `/mediation.html` has no new-site equivalent — see `REDIRECTS.md`

## Primary keyword targets (Hebrew)

| Page | Primary | Secondary |
|---|---|---|
| Home | עורך דין פלילי בינלאומי | עורך דין הסגרה, נעצר בחו"ל עורך דין |
| Extradition | עורך דין הסגרה | הליך הסגרה, התנגדות להסגרה |
| Interpol Red Notice | הודעה אדומה אינטרפול | עורך דין אינטרפול, צו מעצר בינלאומי |
| International Arrest | נעצר בחו"ל עורך דין | מעצר בינלאומי, קונסוליה ישראלית |
| Cybercrime / Online Trading | עורך דין פשיעת סייבר | עורך דין פורקס, הונאת מסחר אונליין |
| Foreign Indictment | כתב אישום במדינה זרה | הליך פלילי בחו"ל |
| Plea Agreements | הסדר טיעון עורך דין | הסכם עם התביעה |

## Primary keyword targets (English)

| Page | Primary | Secondary |
|---|---|---|
| Home | Israeli extradition lawyer | international criminal defense lawyer Israel |
| Extradition | extradition lawyer Israel | extradition hearing, oppose extradition |
| Interpol Red Notice | Interpol red notice lawyer | remove red notice, CCF application |
| International Arrest | arrested abroad Israeli lawyer | Israeli consulate arrest, international arrest |
| Cybercrime / Online Trading | cybercrime defense lawyer Israel | forex fraud lawyer, online trading investigation |
| Foreign Indictment | foreign indictment lawyer | criminal charges abroad |
| Plea Agreements | plea agreement lawyer Israel | prosecution negotiation |

## 10 future article topics

1. What is a Provisional Arrest Warrant (and how is it different from a Red Notice)?
2. US vs. EU extradition treaties with Israel — how they differ
3. How Israeli courts review extradition requests: the legal test
4. CCF (Commission for the Control of Interpol's Files) — how the removal process actually works
5. What happens at an Israeli airport if you're flagged on arrival/departure?
6. Crypto exchanges and money-laundering investigations — what triggers one
7. Plea bargains across borders: can a foreign plea deal affect an Israeli case?
8. Rights of family members when a relative is detained abroad
9. Israeli Bar advertising rules — why lawyer websites can't promise outcomes
10. Dual citizenship and extradition: does an Israeli passport change anything?

## Setup checklist (for Ofir, once deployed)

- [ ] Google Search Console — verify both the Hebrew (root) and English (`/en/`) properties
- [ ] Submit `sitemap-index.xml` in Search Console
- [ ] Bing Webmaster Tools — same sitemap submission
- [ ] Google Business Profile, if applicable to a law office with a physical address
- [ ] Confirm `REDIRECTS.md` is wired into the host config before the domain cuts over
- [ ] Swap the placeholder phone/WhatsApp/email everywhere a `[ADD ...]` marker remains
