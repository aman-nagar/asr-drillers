# ASR Drillers Website – Project Roadmap Plan.md

**Version:** 1.0 (March 2026)  
**Goal:** Build a fast, professional, high-converting, SEO-dominant static website that ranks #1 for “best boring machine manufacturer in Kanpur / Lucknow / UP / Bihar / Kolkata” and converts Google Ads + organic traffic into 20–50 WhatsApp calls per month.  
**Tech:** Astro 6.x (no TypeScript) + Tailwind CSS v4 + Netlify hosting  
**Style:** Modern Industrial B2B (trustworthy, masculine, clean, premium machinery feel)

## 1. Final Folder Structure (Create Exactly This)

asr-drillers/
├── public/
│ └── images/ ← all real machine photos, factory, testimonials (WebP)
├── src/
│ ├── components/ ← ALL reusable sections (this is the magic)
│ │ ├── Header.astro
│ │ ├── Footer.astro
│ │ ├── Hero.astro
│ │ ├── ModelsTable.astro
│ │ ├── TestimonialsGrid.astro
│ │ ├── WhyChooseSection.astro
│ │ ├── FAQSection.astro
│ │ ├── CommonCTA.astro
│ │ ├── LocalProblemsSolutions.astro
│ │ └── TrustBadges.astro
│ ├── data/
│ │ └── locations.js ← ONE source of truth for all content
│ ├── layouts/
│ │ └── Layout.astro ← wraps every page (Header + Footer + slot)
│ ├── pages/
│ │ ├── index.astro ← Homepage
│ │ ├── [location].astro ← Dynamic route for ALL cities (kanpur, lucknow, kolkata, bihar…)
│ │ ├── products/
│ │ │ └── [slug].astro ← Future product pages
│ │ └── about.astro
│ └── styles/
│ └── global.css ← @import "tailwindcss";
├── astro.config.mjs
├── tailwind.config.js
├── package.json
└── README.md

## 2. Design System & Theme Colors (Strict Consistency)

**Primary Brand Colors (use these only):**

- **Brand Teal** (#0F766E) – main buttons, accents, headings
- **Deep Green** (#166534) – success, trust, machine power
- **Amber/Orange** (#F59E0B) – CTAs, price highlights, urgency
- **Neutral Slate** (#334155) – text, backgrounds
- **Light Stone** (#F8FAFC) – page background

**Tailwind config extension (add this in tailwind.config.js):**

```js
theme: {
  extend: {
    colors: {
      brand: { teal: '#0F766E', green: '#166534', amber: '#F59E0B' }
    }
  }
}


Design Pattern:
Modern Industrial B2B (Premium Machinery Style)

Clean sans-serif fonts (Inter or system-ui)
Heavy use of subtle shadows + rounded-xl cards
Gradient heroes (teal → green)
Large hero images with overlay text
Mobile-first, 100% responsive
Fast-loading (no heavy animations, only Tailwind transitions)
Trust signals everywhere (badges, testimonials, factory photos)
Storytelling flow: Problem → Our Solution → Proof → CTA

3. Homepage Layout (Exact Section Order)
Use these components in src/pages/index.astro:

Header (sticky)
Hero – Full-width factory/machine image + big headline “Best Boring Machine Manufacturer in India | Kanpur Factory” + WhatsApp + Call buttons
Trust Badges – “Since 2015 • 500+ Machines Sold • 24/7 Support • GST Registered”
Featured Machines – 3–4 horizontal cards (22HP, 30HP, 38HP) with price & “View Details” → links to products
Why Choose ASR (global benefits – reusable component)
Success Stories (3–4 real-looking testimonials with photos)
Our Presence Across India – Grid of city cards linking to /kanpur, /lucknow, /kolkata, /bihar etc.
FAQ (global + some common questions)
Final Big CTA – “Ready to Drill Smarter? Message Us on WhatsApp”
Footer

4. Location Pages ([location].astro) – How Reusability Works (Zero Content Duplication)
All location pages use the same single file src/pages/[location].astro
Inside it:

Import data: const page = locationsData[location]
Import shared components
Unique parts only:
Hero (local headline + local photo)
LocalProblemsSolutions (city-specific soil/issues)
Local testimonials (3–4 city-specific)

Shared components (used everywhere):
ModelsTable
WhyChooseSection
FAQSection
CommonCTA
Header + Footer


Result: You add a new city in 5 minutes by just adding 1 object in locations.js. No copy-paste hell.
5. The Data File – src/data/locations.js (ONE source of truth)
This file contains:

commonData → phone, whatsapp, warranty text, global FAQ, base models, after-sales benefits
locationsData → object with keys: kanpur, lucknow, kolkata, bihar, delhi, rajasthan, mp, etc.

Each location object has only the unique parts (hero text, local problems, local solutions, local testimonials).
Future instruction for any AI (copy this whenever you ask AI to build):
“Always use the existing data structure in src/data/locations.js. Never hardcode content in .astro files. Reuse components from src/components/. Keep every page unique for SEO (different title, description, H1, schema, first 100 words, local problems). Maintain brand teal #0F766E and amber #F59E0B for all CTAs. Make UI modern industrial B2B – premium, trustworthy, masculine, fast-loading. Add proper LocalBusiness + Product + FAQPage schema on every page. Target 95+ Lighthouse score.”
6. SEO Rules (Never Compromise)

Every page must have unique <title>, meta description, H1, schema JSON-LD
First 100 words must contain primary keyword naturally
Unique LocalBusiness schema per city
Auto sitemap (Astro default)
Image alt text keyword-rich
Internal linking between cities
Google Business Profile + IndiaMart citations later

7. Next Steps (Do in This Order)

Create the exact folder structure above
Run npx astro add tailwind (already done)
Create src/data/locations.js using the prompt I gave earlier
Build Header.astro + Footer.astro (already given)
Build Layout.astro with Header + Footer
Build Homepage (index.astro) using the section order above
Build [location].astro dynamic page with reusable components
Add real photos to public/images/
Deploy to Netlify
Submit sitemap to Google Search Console

8. Future-Proof Instructions for Any AI Helper
When you ask me (or any AI) to build the next component or page, always paste this at the top:
“Follow the Project Roadmap Plan.md exactly. Use src/data/locations.js for all content. Reuse components. Modern Industrial B2B design with brand teal #0F766E and amber CTAs. Make it storytelling style (Problem → Solution → Proof → CTA). Keep it static, ultra-fast, SEO-perfect with unique schema and first 100 words per page. UI must look premium and trustworthy – not generic.”

This plan.md is your single source of truth.
Print it, keep it open, and refer to it every time you build something.
Your project will stay clean, scalable to 30+ cities, and ready to rank #1 in every state.
Copy everything above into a file called Project-Roadmap-Plan.md in your project root.
Ready for me to generate the full src/data/locations.js file + the complete [location].astro file using this exact plan? Just say “Generate data and dynamic page” and I’ll give you copy-paste ready code.
Let’s make this the best boring machine website in India. 🚀
```
