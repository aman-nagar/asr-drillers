# Multilingual Testing Checklist ✅

## Quick Test Before Deployment

### 1. **Build Test** ✅

```bash
npm run build
```

Expected: 18 pages built, 0 errors, ~2.5 seconds

### 2. **Routes to Test**

#### English Routes

- [ ] `https://localhost:3000/` - English homepage
- [ ] `https://localhost:3000/kanpur` - English Kanpur location
- [ ] `https://localhost:3000/lucknow` - English Lucknow location
- [ ] `https://localhost:3000/bihar` - English Bihar location

#### Hindi Routes

- [ ] `https://localhost:3000/hi/` - Hindi homepage
- [ ] `https://localhost:3000/hi/kanpur` - Hindi Kanpur location
- [ ] `https://localhost:3000/hi/lucknow` - Hindi Lucknow location
- [ ] `https://localhost:3000/hi/bihar` - Hindi Bihar location

### 3. **Language Switcher Tests**

#### From English Pages

- [ ] On `/` click "हिंदी" → should go to `/hi/`
- [ ] On `/kanpur` click "हिंदी" → should go to `/hi/kanpur`
- [ ] On `/lucknow` click "हिंदी" → should go to `/hi/lucknow`

#### From Hindi Pages

- [ ] On `/hi/` click "English" → should go to `/`
- [ ] On `/hi/kanpur` click "English" → should go to `/kanpur`
- [ ] On `/hi/lucknow` click "English" → should go to `/lucknow`

### 4. **Content Tests**

#### English Content

- [ ] Homepage title: "Best Boring Machine Manufacturer in India..."
- [ ] Page content in English
- [ ] WhatsApp link works with English text

#### Hindi Content

- [ ] Homepage title: "भारत में सर्वश्रेष्ठ बोरिंग मशीन निर्माता..."
- [ ] All page content in Hindi (not auto-translated English)
- [ ] WhatsApp link pre-filled with Hindi text
- [ ] Testimonials in Hindi

### 5. **Hreflang Tags Tests**

In browser DevTools → Elements → Head section:

#### English Page (/kanpur)

```html
<link rel="alternate" hreflang="en" href="https://asrdrillers.com/kanpur/" />
<link rel="alternate" hreflang="hi" href="https://asrdrillers.com/hi/kanpur/" />
```

#### Hindi Page (/hi/kanpur)

```html
<link rel="alternate" hreflang="en" href="https://asrdrillers.com/kanpur/" />
<link rel="alternate" hreflang="hi" href="https://asrdrillers.com/hi/kanpur/" />
```

### 6. **Meta Tags Tests**

#### English Page

- [ ] `<html lang="en">`
- [ ] Correct English title
- [ ] English description

#### Hindi Page

- [ ] `<html lang="hi">`
- [ ] Correct Hindi title
- [ ] Hindi description

### 7. **Contact/CTA Tests**

- [ ] WhatsApp link has correct number: +919876543210
- [ ] Phone links work: +91-98765-43210
- [ ] English WhatsApp message: "Hello ASR Drillers..."
- [ ] Hindi WhatsApp message: "नमस्ते ASR ड्रिलर्स..."

### 8. **Component Tests**

- [ ] Header shows "English | हिंदी" toggle
- [ ] Footer displays correctly on both versions
- [ ] Models table shows specs correctly
- [ ] Testimonials display with correct language
- [ ] FAQ shows in correct language

### 9. **Mobile Responsiveness**

- [ ] Homepage responsive on mobile
- [ ] Location pages responsive
- [ ] Language switcher visible and clickable on mobile
- [ ] Text readable (no weird wrapping)
- [ ] Hindi text renders properly

### 10. **SEO Tests**

#### In Search Console Preview

- [ ] English pages show English content in preview
- [ ] Hindi pages show Hindi content in preview
- [ ] Hreflang alternate links visible
- [ ] No duplicate content warnings

#### Manual Inspection

```bash
# Check hreflang presence
grep -i 'hreflang' dist/kanpur/index.html
grep -i 'hreflang' dist/hi/kanpur/index.html

# Check lang attribute
grep '<html' dist/index.html
grep '<html' dist/hi/index.html

# Check page count
ls dist/*.html dist/hi/*.html | wc -l  # Should be 9 (EN) + 9 (HI)
```

---

## Common Issues & Fixes

### Issue: Language switcher not visible

**Fix**: Check Header.astro imports and Astro.url.pathname detection

### Issue: Hindi text showing garbled

**Fix**: Verify UTF-8 encoding in locations-i18n.js (`charset="UTF-8"` in HTML)

### Issue: Hreflang tags missing

**Fix**: Verify Layout.astro has hreflang generation code in `<head>`

### Issue: Route conflicts warning during build

**Expected**: This is normal (dynamic routes vs static files). Safe to ignore.

### Issue: WhatsApp link not pre-filling message

**Fix**: Check URL encoding of message text in Header.astro

---

## Performance Benchmarks

Expected metrics:

- [ ] Homepage load: < 1 second
- [ ] Location page load: < 1 second
- [ ] Total pages: 18
- [ ] Build time: 2-3 seconds
- [ ] JavaScript on homepage: 0 KB

---

## Post-Deployment Tests

### Google Indexing

1. Submit English and Hindi sitemaps to Google Search Console
2. Monitor index status (hreflang links help Google understand alternates)
3. Check for "Alternate page with proper link tag" notifications

### Analytics

1. Set up language tracking in Google Analytics
2. Monitor:
   - English vs Hindi traffic split
   - Bounce rate per language
   - Conversion rate per language
   - Most visited location (EN vs HI)

### User Feedback

- [ ] Test with Hindi-speaking contractors
- [ ] Verify testimonials are credible and relevant
- [ ] Check WhatsApp messaging works smoothly

---

## Deployment Checklist

- [ ] All 18 HTML pages generate (npm run build)
- [ ] No console errors
- [ ] All routes accessible
- [ ] Language switcher works
- [ ] Hreflang tags present
- [ ] Mobile responsive
- [ ] Images load correctly
- [ ] Links work (phone, WhatsApp, internal)
- [ ] Hero section displays properly
- [ ] Models table visible
- [ ] Testimonials rendered
- [ ] FAQ section works
- [ ] CTA buttons clickable

---

**Ready to Deploy**: ✅ Yes (after passing all tests)
