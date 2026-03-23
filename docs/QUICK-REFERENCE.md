# 🔧 Multilingual Commands & Quick Reference

## Daily Development Commands

### Start Development Server

```bash
npm run dev
# Opens at http://localhost:4323
# Hindi version: http://localhost:4323/hi/
```

### Build for Production

```bash
npm run build
# Generates 18 static pages in dist/ folder
# Includes all English and Hindi pages
```

### Preview Production Build Locally

```bash
npm run preview
# Serves dist/ locally to test production build
```

### Format Code

```bash
npm run format
# Formats all files with prettier
```

---

## Adding New Content

### Add a New Location (EN + HI)

1. Open `src/data/locations-i18n.js`
2. Find the location object template
3. Add new entry:

```javascript
siwan: {
  en: {
    title: "Boring Machine Supplier in Siwan, Bihar",
    description: "ASR Drillers...",
    heroHeadline: "...",
    heroText: "...",
    localProblems: [
      { title: "...", desc: "..." },
      // Add 3 problems
    ],
    localSolutions: [
      { title: "...", desc: "..." },
      // Add 3 solutions
    ],
    localTestimonials: [
      { name: "...", location: "...", role: "...", text: "...", rating: 5 },
      // Add 3-4 testimonials
    ],
    areaServed: ["Siwan", "..."],
    shippingInfo: "...",
    factoryDetails: {
      address: "Kanpur Factory",
      distance: "...",
      hours: "..."
    }
  },
  hi: {
    // Hindi version of all above
    title: "सिवान में बोरिंग मशीन आपूर्तिकर्ता, बिहार",
    // ... etc
  }
}
```

4. Save and run `npm run build`
5. New English route: `/siwan`
6. New Hindi route: `/hi/siwan`
7. Both auto-generated!

---

## FAQ Section Management

### Update English FAQ

```javascript
// In src/data/locations-i18n.js
commonFAQEn: [
  {
    question: "Your question here?",
    answer: "Your answer here.",
  },
  // 8 total questions
];
```

### Update Hindi FAQ

```javascript
commonFAQHi: [
  {
    question: "आपका सवाल यहाँ?",
    answer: "आपका जवाब यहाँ।",
  },
  // 8 total questions
];
```

Both FAQs auto-populate on all location pages.

---

## Updating Shared Components

### Models Display

Edit models in `commonData.models`:

```javascript
models: [
  {
    name: "22 HP Submersible",
    hp: 22,
    engine: "Kirloskar Diesel",
    price: "₹4.8 Lakh",
    // ... 10 more fields
  },
  // 3 models total
];
```

Changes reflect on all English AND Hindi pages automatically.

### Common Features (After-Sales Benefits)

Edit in `commonData.afterSalesBenefits`:

```javascript
afterSalesBenefits: [
  {
    title: "24/7 WhatsApp Support",
    desc: "Engineer responds in 1–2 hours...",
  },
  // 5 total benefits
];
```

Shared across all pages globally.

---

## Language Switcher Management

Location: `src/components/Header.astro`

Current implementation:

- Shows "English | हिंदी"
- Toggles between versions
- Preserves page context

To modify:

```astro
{isHindi ? (
  <>
    <a href={englishUrl} class="...">English</a>
    <span>|</span>
    <span class="...">हिंदी</span>
  </>
) : (
  <>
    <span class="...">English</span>
    <span>|</span>
    <a href={hindiUrl} class="...">हिंदी</a>
  </>
)}
```

---

## Contact Information Updates

### Phone Number

Change in `src/data/locations-i18n.js`:

```javascript
phone: "+91-NEW-PHONE-NUMBER";
```

Auto-updates on all pages (EN + HI)

### WhatsApp Number

```javascript
whatsapp: "+91NEWWHATSAPPNUMBER";
```

Auto-updates on all pages

### Company Address

```javascript
baseLocation: "New Address, City";
companyName: "Your Company Name";
```

---

## Hreflang Tag Management

Location: `src/layouts/Layout.astro`

Auto-generated for all pages:

```html
<link rel="alternate" hreflang="en" href="https://asrdrillers.com/page/" />
<link rel="alternate" hreflang="hi" href="https://asrdrillers.com/hi/page/" />
<link
  rel="alternate"
  hreflang="x-default"
  href="https://asrdrillers.com/page/"
/>
```

No manual changes needed - everything is automatic!

---

## Testing Commands

### Check Build for Errors

```bash
npm run build 2>&1 | grep -i error
```

### List Generated Pages

```bash
ls -la dist/
ls -la dist/hi/
```

### Count Total Pages

```bash
find dist -name "*.html" | wc -l
# Should be 18 (9 English + 9 Hindi)
```

### Check Hreflang on English Page

```bash
grep hreflang dist/kanpur/index.html
```

### Check Hreflang on Hindi Page

```bash
grep hreflang dist/hi/kanpur/index.html
```

### Verify Lang Attribute

```bash
grep '<html' dist/index.html       # Should be lang="en"
grep '<html' dist/hi/index.html    # Should be lang="hi"
```

---

## Deployment Commands

### Build for Production

```bash
npm run build
```

### Test Production Build Locally

```bash
npm run preview
# Opens at http://localhost:4321
```

### Deploy to Hosting

```bash
# Copy entire dist/ folder to your server
# Example (Netlify/Vercel):
npm run build
# Then commit dist/ or deploy directly
```

---

## Troubleshooting Commands

### Clear Build Cache

```bash
rm -rf .astro
npm run build
```

### Check Dependencies

```bash
npm list
npm audit
```

### Format All Files

```bash
npm run format
```

### Check for Unused Imports

```bash
grep -r "import.*from" src/ | grep -v "node_modules"
```

---

## File Organization Reference

```
src/
├── components/
│   ├── Header.astro ..................... Language switcher
│   ├── Layout.astro ..................... Hreflang tags
│   ├── Footer.astro ..................... Contact info
│   ├── ModelsTable.astro ................ Shared specs
│   ├── FAQSection.astro ................. Shared/localized FAQs
│   └── ... (other components)
├── data/
│   ├── locations-i18n.js ................ Bilingual data (USE THIS)
│   └── locations.js ..................... Old file (legacy)
├── pages/
│   ├── index.astro ...................... English homepage
│   ├── [location].astro ................. English location pages
│   ├── hi/
│   │   ├── index.astro .................. Hindi homepage
│   │   └── [location].astro ............. Hindi location pages
│   └── ... (other pages)
└── layouts/
    └── Layout.astro ..................... Master template

Documentation/
├── README-MULTILINGUAL.md ............... Overview
├── MULTILINGUAL-IMPLEMENTATION.md ....... Technical details
├── MULTILINGUAL-TESTING.md .............. Testing guide
└── QUICK-REFERENCE.md .................. This file
```

---

## Common Edits Workflow

### Edit Location Content (e.g., Kanpur)

1. Open `src/data/locations-i18n.js`
2. Find `kanpur:` section
3. Update either `en:` or `hi:` (or both)
4. Save
5. Run `npm run build`
6. Check results: `/kanpur` or `/hi/kanpur`

### Update Company-Wide Info

1. Open `src/data/locations-i18n.js`
2. Edit `commonData` section (top of file)
3. Changes apply to ALL pages
4. Save and build

### Add New Testimonial (Hindi Location)

1. Find location in `src/data/locations-i18n.js`
2. Locate `hi:` section
3. Add to `localTestimonials[]`:

```javascript
{
  name: "नाम",
  location: "स्थान",
  role: "भूमिका",
  text: "testimonial text...",
  rating: 5
}
```

4. Save and build

### Update FAQ (Both Languages)

1. Open `src/data/locations-i18n.js`
2. Edit `commonFAQEn[]` for English
3. Edit `commonFAQHi[]` for Hindi
4. Save and build

---

## Quick Checklist Before Deploy

- [ ] `npm run build` completes with 0 errors
- [ ] 18 pages generated (check `find dist -name "*.html" | wc -l`)
- [ ] English homepage loads: `/`
- [ ] Hindi homepage loads: `/hi/`
- [ ] Language switcher works
- [ ] WhatsApp links have correct numbers
- [ ] Phone numbers are correct
- [ ] Testimonials display properly
- [ ] Models table shows all 3 models
- [ ] No broken links
- [ ] Mobile responsive (test on phone)

---

## Performance Metrics

After build:

```bash
du -sh dist/                    # Total size
find dist -type f | wc -l      # File count
wc -l dist/*.html              # Lines per page (smaller = faster)
```

Expected:

- Total size: < 20 MB (all 18 pages + assets)
- Load time: < 1 second per page
- JavaScript: 0 KB on homepage (Astro default)

---

## Getting Help

For issues:

1. Check [MULTILINGUAL-TESTING.md](./MULTILINGUAL-TESTING.md) troubleshooting section
2. Review [MULTILINGUAL-IMPLEMENTATION.md](./MULTILINGUAL-IMPLEMENTATION.md) for technical details
3. Check [README-MULTILINGUAL.md](./README-MULTILINGUAL.md) for overview

---

**Last Updated**: Today  
**Astro Version**: 6.0.8  
**Status**: Production Ready ✅
