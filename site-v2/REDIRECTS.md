# 301 Redirect Map — old `.html` URLs → new routes

Host-agnostic list, to convert into `vercel.json` / Netlify `_redirects` / `.htaccess`
once the deploy target (Phase 6) is chosen. Every entry is a permanent (301) redirect.

| Old URL | New URL |
|---|---|
| `/index.html` | `/` |
| `/about.html` | `/about` |
| `/services.html` | `/practice-areas` |
| `/articles.html` | `/articles` |
| `/articles/interpol.html` | `/articles/interpol-red-notice` |
| `/articles/forex.html` | `/articles/forex-online-trading` |
| `/articles/arrests.html` | `/articles/international-arrest` |
| `/contact.html` | `/contact` |
| `/en/index.html` | `/en` |
| `/en/about.html` | `/en/about` |
| `/en/services.html` | `/en/practice-areas` |
| `/en/articles.html` | `/en/articles` |
| `/en/articles/interpol.html` | `/en/articles/interpol-red-notice` |
| `/en/articles/forex.html` | `/en/articles/forex-online-trading` |
| `/en/articles/arrests.html` | `/en/articles/international-arrest` |
| `/en/contact.html` | `/en/contact` |

## Not yet migrated

- `/mediation.html` (גישור) — exists on the live site's nav but was never part of the
  redesign spec and has no equivalent page in `site-v2` yet. Needs a decision: build a
  Mediation page, or drop the nav link and redirect this URL to `/practice-areas`.
- `/business.html` and `/portfolio/*` are separate products (per the root `CLAUDE.md`)
  and are out of scope for this redesign — don't redirect them.

## Example (Vercel `vercel.json`)

```json
{
  "redirects": [
    { "source": "/index.html", "destination": "/", "permanent": true },
    { "source": "/about.html", "destination": "/about", "permanent": true }
  ]
}
```
