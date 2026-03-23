# 🚀 ASR Drillers Website – Quick Start & Next Steps

## Current Status

- ✅ Phase 1 Complete: Foundation built (10 pages, 9 components)
- 📍 Location: /home/aries/aries/projects/asr-drillers
- 🌐 Dev Server: `npm run dev` → http://localhost:4323
- 📦 Production Build: `npm run build` → dist/

---

## Running the Project

### Start Development Server

```bash
cd /home/aries/aries/projects/asr-drillers
npm run dev
# Opens at http://localhost:4323
```

### Build for Production

```bash
npm run build
# Creates optimized static files in dist/
```

### View Production Build

```bash
npm run preview
# Serves the dist/ folder locally
```

---

## Project Structure Quick Reference

```
📦 asr-drillers/
├── 📄 PHASE-1-COMPLETION.md (Full completion report)
├── 📄 IMPLEMENTATION-PLAN.md (Updated project roadmap)
├── 📁 src/
│   ├── 📁 components/ (9 reusable components)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ModelsTable.astro
│   │   ├── TestimonialsGrid.astro
│   │   ├── TrustBadges.astro
│   │   ├── FAQSection.astro
│   │   ├── LocalProblemsSolutions.astro
│   │   ├── CommonCTA.astro
│   │   └── WhyChooseSection.astro
│   ├── 📁 pages/ (10 pages total)
│   │   ├── index.astro (Homepage)
│   │   ├── kanpur.astro (Static)
│   │   ├── lucknow.astro (Static)
│   │   ├── [location].astro (Dynamic for 5 cities)
│   │   └── 📁 products/
│   │       ├── 22-hp-submersible.astro
│   │       └── 30-hp-hydraulic.astro
│   ├── 📁 layouts/
│   │   └── Layout.astro (Master template)
│   ├── 📁 data/
│   │   └── locations.js (All content, 7 cities)
│   └── 📁 styles/
│       └── global.css (Tailwind import)
├── 📄 tailwind.config.js (Brand colors defined)
├── 📄 astro.config.mjs
└── 📄 package.json
```

---

## Key Data Files

### src/data/locations.js

- **commonData:** Phone, WhatsApp, models (3), FAQ (8), company info
- **locationsData:** 7 cities (kanpur, lucknow, bihar, rajasthan, delhi, kolkata, mp)
- Each city has: title, problems, solutions, testimonials, shipping info

**To update contact info globally:**

```javascript
// Edit in src/data/locations.js
commonData.phone = "+91-XXXXXXXXXX";
commonData.whatsapp = "+91XXXXXXXXXX";
// Changes reflected on all 10 pages automatically
```

---

## Common Tasks

### Add a New Location

1. Edit `src/data/locations.js`
2. Add entry to `locationsData` object with: title, description, problems, solutions, testimonials, shippingInfo
3. No code changes needed - [location].astro auto-generates the page
4. Run `npm run build` to generate static file

### Change Brand Colors

```javascript
// Edit tailwind.config.js colors section
colors: {
  'brand-teal': '#0F766E',    // Change here
  'brand-green': '#166534',   // Change here
  'brand-amber': '#F59E0B',   // Change here
}
```

### Update Global Phone/WhatsApp

```javascript
// src/data/locations.js
commonData.phone = "Your new number";
commonData.whatsapp = "Your new number";
```

This updates all 30+ links across the entire site automatically.

### Add FAQ Questions

```javascript
// src/data/locations.js - commonData.commonFAQ array
{
  question: "Your question?",
  answer: "Your answer"
}
```

---

## Pages Currently Live

| Page          | URL                         | Type    | Status  |
| ------------- | --------------------------- | ------- | ------- |
| Homepage      | /                           | Static  | ✅ Live |
| Kanpur        | /kanpur                     | Static  | ✅ Live |
| Lucknow       | /lucknow                    | Static  | ✅ Live |
| Bihar         | /bihar                      | Dynamic | ✅ Live |
| Rajasthan     | /rajasthan                  | Dynamic | ✅ Live |
| Delhi         | /delhi                      | Dynamic | ✅ Live |
| Kolkata       | /kolkata                    | Dynamic | ✅ Live |
| MP            | /mp                         | Dynamic | ✅ Live |
| 22 HP Product | /products/22-hp-submersible | Static  | ✅ Live |
| 30 HP Product | /products/30-hp-hydraulic   | Static  | ✅ Live |

---

## Phase 2 Implementation Tasks

### Pages to Create

- [ ] /about.astro (Company story, heritage, manufacturing)
- [ ] /contact.astro (Contact form, map, hours)
- [ ] /gallery.astro (Factory photos, testimonials gallery)
- [ ] /blog/[slug].astro (Long-tail SEO articles)

### Content to Add

- [ ] High-quality product images (WebP format)
- [ ] Factory interior/exterior photos
- [ ] Team member photos
- [ ] Client case study images
- [ ] 5-10 blog articles with keywords

### Integrations

- [ ] Netlify Forms (contact form handling)
- [ ] Google Analytics 4 (tracking)
- [ ] Google Maps embed (contact page)
- [ ] WhatsApp chat widget
- [ ] Google Business Profile setup

### Optimizations

- [ ] Image optimization (Lighthouse 95+)
- [ ] Internal linking audit
- [ ] Meta description refinement per page
- [ ] Structured data validation
- [ ] Mobile responsiveness testing

---

## Component Usage Examples

### Using ModelsTable

```astro
<ModelsTable />
<!-- Automatically maps over commonData.models -->
```

### Using TestimonialsGrid

```astro
<TestimonialsGrid testimonials={pageData.localTestimonials} />
```

### Using CommonCTA

```astro
<CommonCTA
  headline="Ready to Start?"
  subheadline="Get a quote today"
  bgColor="bg-linear-to-r from-brand-green to-brand-teal"
/>
```

### Using FAQSection

```astro
<FAQSection faqs={commonData.commonFAQ} title="Common Questions" />
```

---

## Debugging & Troubleshooting

### Dev Server Won't Start

```bash
# Check if port is in use
lsof -i :4323
# Kill process if needed
kill -9 <PID>
# Try npm run dev again
```

### Build Errors

```bash
# Clear cache
rm -rf .astro dist node_modules
npm install
npm run build
```

### Component Not Importing

- Verify file path is correct: `../components/ComponentName.astro`
- Check spelling of component name
- Ensure component is exported correctly in the .astro file

### Tailwind Classes Not Applied

- Verify tailwind.config.js is present and correct
- Check that global.css is imported in Layout.astro
- Restart dev server: Ctrl+C then `npm run dev`

---

## Deployment Checklist (For Phase 5)

- [ ] Remove any TODO comments
- [ ] Update all phone/WhatsApp numbers in src/data/locations.js
- [ ] Add real images to public/images/
- [ ] Setup environment variables if needed
- [ ] Test production build: `npm run build`
- [ ] Test preview: `npm run preview`
- [ ] Setup Netlify account and connect repository
- [ ] Configure Netlify form handling
- [ ] Setup Google Search Console
- [ ] Setup Google Analytics 4
- [ ] Create XML sitemap
- [ ] Test all links on live site
- [ ] Verify responsive design on mobile devices
- [ ] Run Lighthouse audit (target 95+)

---

## Key Phone Numbers & Contacts

**Update in src/data/locations.js (commonData):**

```javascript
commonData.phone = "+91-XXXXXXXXXX";
commonData.whatsapp = "+919XXXXXXXXX";
```

This is the single source of truth for all contact info.

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server on port 4323

# Production
npm run build            # Build static site to dist/
npm run preview          # Preview production build

# Maintenance
npm install             # Install/update dependencies
npm update              # Update all packages
npm run format          # Format code (if prettier installed)
```

---

## Resources

- **Astro Docs:** https://docs.astro.build
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Project Roadmap:** See IMPLEMENTATION-PLAN.md
- **Completion Report:** See PHASE-1-COMPLETION.md

---

## Support & Next Steps

**Current State:** Phase 1 ✅ Complete - Ready for Phase 2  
**Next Action:** Begin Phase 2 implementation (About, Contact, Gallery pages)  
**Estimated Timeline:** Phase 2 = 3-4 days | Full Launch = 5-6 weeks

**Questions?** Refer to PHASE-1-COMPLETION.md for detailed technical breakdown.

---

_Last Updated: Phase 1 Complete_  
_Project Status: Foundation Built & Tested_  
_Ready for: Phase 2 Implementation_
