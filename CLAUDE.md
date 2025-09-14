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