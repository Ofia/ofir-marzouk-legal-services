# Ofir Marzouk Legal Services Website

## Directory Structure

```
/
├── index.html                  # Hebrew homepage
├── about.html                  # Hebrew about page  
├── services.html               # Hebrew services page
├── contact.html                # Hebrew contact page
├── articles.html               # Hebrew articles main page ✅ UPDATED
├── articles/                   # Hebrew articles directory
│   ├── interpol.html          # Hebrew Interpol article ✅ UPDATED
│   ├── forex.html             # Hebrew Forex article ✅ UPDATED 
│   └── arrests.html           # Hebrew Arrests article ✅ UPDATED
├── en/                        # English version directory
│   ├── index.html             # English homepage ✅ UPDATED
│   ├── about.html             # English about page
│   ├── services.html          # English services page
│   ├── contact.html           # English contact page
│   ├── articles.html          # English articles main page ✅ NEW
│   └── articles/              # English articles directory ✅ NEW
│       ├── interpol.html      # English Interpol article ✅ NEW
│       ├── forex.html         # English Forex article ✅ NEW
│       └── arrests.html       # English Arrests article ✅ NEW
├── css/
│   └── style.css              # Main stylesheet with mobile responsiveness
├── js/
│   └── main.js                # Mobile menu and interactions
├── images/                    # Image assets
│   ├── Logo.png
│   ├── Home page.png
│   ├── Article Interpol.jpeg
│   ├── Article FX.jpg
│   └── Article Arrests.png
├── testing/                   # Development/testing files
├── Content/                   # Content directory
├── CNAME                      # GitHub Pages domain config
└── README.md                  # Project documentation
```

## Recent Updates (Claude Session)

### ✅ Completed Tasks:

1. **Created Complete English Articles Section**
   - English articles main page with responsive grid layout
   - 3 English article sub-pages with full content translation
   - Mobile-optimized layouts matching Hebrew version

2. **Fixed Language Navigation**
   - Added EN/עברית switchers to all articles pages
   - Fixed navigation links between Hebrew ↔ English versions
   - Proper bidirectional language switching

3. **Mobile Responsiveness**
   - All articles pages fully responsive on mobile
   - Hamburger menu functionality
   - Optimized touch targets and spacing
   - Fluid typography using clamp()

### 🔧 Technical Implementation:

- **Language Switcher Position:** 
  - Hebrew pages: Left side (RTL layout)
  - English pages: Right side (LTR layout)
- **Color Scheme:** White text/border on dark header background
- **Mobile Breakpoints:** 768px and 480px
- **Grid Layout:** Auto-fit responsive cards

### 📱 Mobile Features:
- Responsive article grid
- Full-width "Read More" buttons on mobile
- Optimized banner heights (400px → 300px → 250px)
- Touch-friendly navigation

## Git Repository
**Remote:** https://github.com/Ofia/ofir-marzouk-legal-services.git
**Branch:** main

## Files Modified/Added:
- `articles.html` - Added EN language switcher
- `articles/interpol.html` - Added EN language switcher  
- `articles/forex.html` - Added EN language switcher
- `articles/arrests.html` - Added EN language switcher
- `en/index.html` - Fixed articles navigation link
- `en/articles.html` - NEW: English articles main page
- `en/articles/interpol.html` - NEW: English Interpol article
- `en/articles/forex.html` - NEW: English Forex article  
- `en/articles/arrests.html` - NEW: English Arrests article

## Ready for Deployment
All English articles pages are complete with proper mobile responsiveness and language switching functionality.

---

## Portfolio Page — ofirmarzouk.com/portfolio

### Status: ✅ LIVE

A personal dev portfolio deployed as a subfolder of the legal services site.

### File Structure:
```
portfolio/
├── index.html          ← main portfolio page (edit PROJECTS array here)
├── cv.json             ← CV data for the chatbot (update freely)
└── assets/
    └── projects/       ← drop project images here (PNG/JPG/WebP, ~960x540)
```

### File Structure:
```
portfolio/
├── Icons/
│   └── Robot Head.png      ← pixel-art robot icon used in top nav
```

### What's done:
- Animated welcome → typewriter intro → project cards (zigzag layout)
- AI chatbot using Cloudflare Worker proxy → Anthropic API
- Chat box height fixed to use `calc(100vh - 110px)` max 480px (viewport-safe)
- CORS locked to `https://ofirmarzouk.com` in the Cloudflare Worker
- Top nav bar (fixed top-right) with robot head icon + Contact dropdown
  - Robot icon toggles chat dropdown
  - Contact item toggles contact info panel (email, phones, offices)
  - Copy-to-clipboard on all contact values
  - Dropdowns close each other and close on outside click

### Cloudflare Worker:
- **URL:** https://ofirs-bot.ofir08.workers.dev
- **Source file:** `C:\Users\ofir\Desktop\Projects\My Portfolio Website\cloudflare-worker.js`
- **Dashboard:** dash.cloudflare.com → Workers & Pages → ofirs-bot
- API key stored as Cloudflare secret `ANTHROPIC_API_KEY` (never in browser)

### TODO — Next Session:
- **Mobile compatibility** for the portfolio page — top nav, dropdowns, project cards, and chat window are not yet optimized for small screens
- **Fix ofirmarzouk.com (legal site)** — main page is not fitting the screen, needs layout/responsive fix
- Fill in the `PROJECTS` array in `portfolio/index.html` (title, description, image, link)
- Drop project images into `portfolio/assets/projects/`
- Update `portfolio/cv.json` with real CV data