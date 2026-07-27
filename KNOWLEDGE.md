# Ofir Marzouk — Legal Services Site + Portfolio — Knowledge Base

> Indexed by the Aldebaran Labs brain → `C:\Users\ofir\Desktop\Aldebaran Labs\index\repos.md`
> Rules: `Aldebaran Labs\docs\ai_native.md`. This file **summarizes and links**.

**Client:** internal · **Status:** Live · **Domain:** `ofirmarzouk.com` (CNAME, GitHub Pages)
**Local:** `C:\Users\ofir\Desktop\Projects\Ofir Marzouk Legal Service Site`
**GitHub:** `Ofia/ofir-marzouk-legal-services` (branch `main`)
**Last reviewed:** 2026-07-27

> **Path correction:** the brain previously indexed this repo as `…\Ofir Marzouk Legal Service Site\portfolio`.
> That is a *subfolder*. The git repo root is one level up, and it contains three sites, not one.

---

## What it is

Three sites in one repo, all static, all served from `ofirmarzouk.com`:

| URL | What |
|---|---|
| `ofirmarzouk.com` | Bilingual legal services site — **Hebrew primary (RTL)**, English under `/en/` |
| `ofirmarzouk.com/portfolio` | Personal tech portfolio — 966-line `index.html` driven by `cv.json` |
| `ofirmarzouk.com/business` | Real estate / business page |

The legal site carries an articles section with three long-form pieces (Interpol, Forex, arrests) —
the practising-lawyer half of the founder story that the pitch deck asserts and this repo proves.

## Business logic

Not a product. The rules that shape it:

- **Hebrew is the primary language, not a translation.** RTL is the default; English is the variant.
  The language switcher sits on the **left** for Hebrew pages, **right** for English — direction-aware
  chrome, not a mirrored copy.
- **`cv.json` is the data, `index.html` is the view.** The portfolio renders from a structured file
  rather than hand-edited markup — the only place a machine-readable CV of the founder exists.

## Stack

Static HTML5 + CSS3 + vanilla JS. No build step, no framework, no dependencies. GitHub Pages.
Mobile breakpoints at 768px and 480px. `css/style.css` handles both RTL and LTR.

## Reusable features

| Feature | Where | State |
|---|---|---|
| Bilingual RTL/LTR static site with direction-aware chrome | `css/style.css`, `js/main.js`, `en/` | ✅ shipped — **the only RTL work we own.** Relevant: the Salon's client base is Brooklyn Orthodox and the app already carries Hebrew (מעשרות) |
| Machine-readable CV / profile as JSON | `portfolio/cv.json` (100 lines) | ✅ shipped — feeds the portfolio page; also the cleanest structured source for founder bio copy |

## AI-native features

None. This repo is static.

## Documentation index

| File | What's in it |
|---|---|
| `CLAUDE.md` | Site map, page inventory, technical notes on RTL/LTR and breakpoints |
| `portfolio/cv.json` | Structured CV: contact, summary, projects with live links |
| `portfolio/assets/projects/Projects_Info.txt` | **Project list with stacks and live URLs — see open question 1** |
| `README.md`, `memo.md` | Repo notes |

## Unprocessed sources

- `articles/` — three long-form legal articles (Interpol, Forex, arrests), Hebrew. **Real domain
  writing by the founder; unindexed**
- `Content/` — source content, unreviewed
- `testing/` — scratch dev copies, explicitly not live
- `portfolio/assets/projects/*.png|jpg` — screenshots of eight projects
- `business.html`, `mediation.html` — the real estate and mediation practice pages

## Open questions

1. **`portfolio/assets/projects/Projects_Info.txt` names projects the brain does not index.**
   This is a Rule 3 reachability failure — `index/repos.md` claims to cover everything we own:
   - **The Bull — Mobile App** — React Native 0.81.4 / Expo SDK 54 / TypeScript, Node + Express
     backend, Claude with **tool use**, Google OAuth + PayPal + Zodomus. *A whole application with no
     entry in the brain.* Note that `The Bull Properties\CLAUDE.md` promises a `mobile/` folder that
     is empty — this may be where that app actually lives.
   - **Invoice Manager** — React + Vite + shadcn/ui, FastAPI + Supabase, S3, Gmail API, Claude for
     data extraction. **Live at `invoices-kappa-teal.vercel.app`.** This is a *fourth* independent
     structured-extraction build (after Contracts, Properties, Salon) and a second Gmail integration.
   - **AI Data Visualizer** — Flask + Hugging Face Qwen 2.5 72B, pandas/pdfplumber/pytesseract,
     Plotly. Live on Hugging Face Spaces.
   - Plus **Eight Ball**, **Goma Slot Machine**, **Villa Kaleo** (client site, `villakaleost.com`).

   None have local paths recorded. **Finding where they live is the highest-value follow-up from this
   pass** — two of them are real AI applications.
2. **The Bull Contracts is described here as Flask + Gun.js + Claude 3.5.** That is an earlier
   architecture; the current repo is FastAPI + Supabase + `claude-sonnet-4-6`. Historical, not wrong —
   but the portfolio is public and says the old thing.
3. **`Projects_Info.txt` is a flat text file doing an index's job.** It should either graduate into
   `index/repos.md` or be pointed at from there. Right now it is the only record of half our work.
