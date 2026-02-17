# Comprehensive SEO Analysis Report — automatizacijas.lv

**Date:** 2026-02-17
**Location:** Latvia (location_code: 2428)
**Language:** Latvian (lv)
**Domain:** automatizacijas.lv
**Hosting:** Vercel

---

## Executive Summary

automatizacijas.lv is a **very new domain** with minimal organic visibility in Latvia. The site currently ranks for only **2 keywords** in Google Latvia (Latvian), generating an estimated **2.8 organic visits/month**. However, the technical foundation is solid (on-page scores 92-97/100), and there are **massive untapped keyword opportunities** — particularly "mākslīgais intelekts" (5,400 searches/month, KD: 3) where the site is not ranking at all despite being directly relevant.

**Key Metrics:**
| Metric | Value |
|---|---|
| Organic Keywords Tracked | 2 |
| Estimated Monthly Traffic (ETV) | 2.8 visits |
| Estimated Traffic Value | €2.70/month |
| Average On-Page Score | 94.8/100 |
| Lighthouse Performance | 91/100 |
| Lighthouse SEO | 100/100 |
| Lighthouse Accessibility | 83/100 |
| Pages Indexed | ~10 |

---

## 1. Technical Site Audit

### 1.1 Performance Metrics

| Page | On-Page Score | TTI (ms) | DOM Complete (ms) | CLS | Content Rate |
|---|---|---|---|---|---|
| Homepage (/) | 95.24 | 115 | 335 | 0 | 4.2% |
| Services (/services) | 94.51 | 286 | 402 | 0 | 3.3% |
| Pricing (/pricing) | 92.68 | 535 | 2033 | 0 | 2.4% |
| Blog (/blog) | 97.44 | 68 | 176 | 0 | 1.3% |
| Contact (/contact) | 94.51 | 121 | 317 | 0 | 2.1% |
| Training (/training) | 94.51 | 56 | 204 | 0 | 2.9% |

### 1.1b Google Lighthouse Scores (Homepage)

| Category | Score |
|---|---|
| **Performance** | 0.91 (91/100) |
| **Accessibility** | 0.83 (83/100) |
| **Best Practices** | 1.0 (100/100) |
| **SEO** | 1.0 (100/100) |

#### Core Web Vitals (Lighthouse)

| Metric | Value | Score |
|---|---|---|
| Largest Contentful Paint (LCP) | 1,421 ms | 0.83 |
| Cumulative Layout Shift (CLS) | 0.002 | 1.0 |
| Total Blocking Time (TBT) | 7 ms | 1.0 |
| First Contentful Paint (FCP) | 1,272 ms | 0.70 |
| Speed Index | 1,600 ms | 0.79 |
| Time to Interactive (TTI) | 1,421 ms | 0.99 |

#### Lighthouse Diagnostics

- **Unused CSS:** ~11 KiB potential savings — likely Tailwind CSS purge can be improved
- **Inefficient cache policy:** 1 resource missing long-term caching headers
- **FCP at 1,272ms (score 0.70):** Lowest metric — consider preloading critical CSS/fonts, deferring non-essential scripts

**Strengths:**
- HTTPS enabled across all pages
- Brotli compression (br) active
- CLS = 0.002 (excellent Core Web Vitals)
- TBT only 7ms (excellent interactivity)
- LCP under 1.5s (good threshold)
- SEO-friendly URLs on all pages
- Cacheable responses
- Google Analytics (G-1D9GFNDNFG) properly installed
- Best Practices & SEO both score 100/100

**Issues Found:**

#### CRITICAL Issues

1. **Blog canonical points to homepage** — `/blog` page has `<link rel="canonical" href="https://automatizacijas.lv/">` instead of `/blog`. This tells Google the blog IS the homepage, preventing blog content from being indexed separately.

2. **All pages share identical OG meta tags** — Every page uses the same `og:url`, `og:title`, and `og:description` pointing to the homepage. Facebook/social shares from any page will show homepage content.

3. **Duplicate `<meta name="description">` tags on ALL pages** — Each page has two description meta tags (one from index.html, one injected by React). Google may pick the wrong one.

4. **Identical `meta keywords` across all pages** — Every page uses the exact same keyword meta tag. While Google ignores meta keywords, this indicates pages aren't being individually optimized.

#### HIGH Priority Issues

5. **Extremely low content rate on all pages (1.3%–4.2%)** — The text-to-HTML ratio is very low. Google prefers content-rich pages. The homepage has only 416 words; blog index has only 101 words.

6. **Homepage title too long** (92 characters) — "automatizacijas.lv | AI Risinājumi Jūsu Biznesam | Mākslīgā Intelekta Automatizācija Latvijā" truncates in SERPs. Should be under 60 characters.

7. **No page-specific title/description optimization** — Titles like "Pakalpojumi | automatizacijas.lv" and "Cenas | automatizacijas.lv" are generic and miss keyword targeting opportunities.

#### MEDIUM Priority Issues

8. **Render-blocking resources** on 5/6 pages (1 script + 2 stylesheets)
9. **Services page: images missing alt text** (`no_image_title` flag)
10. **Pricing page title too short** (26 chars: "Cenas | automatizacijas.lv")
11. **Irrelevant meta keywords** on pricing, contact, and training pages
12. **No H2 tags on homepage** between services — heading hierarchy skips from H1 to H3

### 1.2 Robots.txt ✅

```
User-agent: *
Allow: /
Crawl-delay: 1
Sitemap: https://automatizacijas.lv/sitemap.xml
```
Clean and correct. Consider removing `Crawl-delay: 1` as it may slow Google's crawling of this small site.

### 1.3 Sitemap.xml ✅

- 10 URLs listed (homepage, services, portfolio, training, pricing, contact, blog index, 3 blog posts)
- Image data included for homepage
- Proper lastmod dates
- **Missing:** Individual service landing pages, blog post-specific images

### 1.4 Schema Markup ✅ (Good Foundation)

Current schemas:
- `Organization` — name, url, logo, contact, social links
- `WebSite` — basic info, language
- `ProfessionalService` — address, hours, services, geo coordinates

**Missing schemas to add:**
- `FAQPage` — for services/pricing pages
- `BreadcrumbList` — for navigation structure
- `BlogPosting` — for individual blog articles
- `Course` — for training/apmācības page
- `Review`/`AggregateRating` — when testimonials are available

---

## 2. Keyword Research — Latvian Market

### 2.1 Primary Target Keywords (Latvian)

| Keyword | Monthly SV | CPC (€) | KD | Competition | Priority |
|---|---|---|---|---|---|
| **mākslīgais intelekts** | 5,400 | 0.35 | 3 | MEDIUM | 🔴 CRITICAL |
| **mājaslapu izstrāde** | 720 | 5.91 | — | HIGH | 🟡 HIGH |
| **mājas lapas izveide** | 720 | 8.24 | 72 | HIGH | 🟡 HIGH |
| **mākslīgais intelekts latviski** | 590 | 0.51 | — | LOW | 🟢 HIGH |
| **bezmaksas mākslīgais intelekts** | 590 | 0.31 | — | LOW | 🟢 HIGH |
| **mājas lapu izstrāde** | 480 | 9.07 | 67 | MEDIUM | 🟡 MEDIUM |
| **mākslīgais intelekts latviski bezmaksas** | 480 | 0.31 | — | LOW | 🟢 HIGH |
| **seo optimizācija** | 390 | 3.14 | 5 | LOW | 🟢 HIGH |
| **mākslīgais intelekts chatgpt** | 390 | 0.05 | — | LOW | 🟢 MEDIUM |
| **mākslīgais intelekts online** | 390 | 0.40 | — | LOW | 🟢 MEDIUM |
| **google mākslīgais intelekts** | 320 | 0.33 | 1 | LOW | 🟢 HIGH |
| **kas ir mākslīgais intelekts** | 260 | 0.62 | 1 | LOW | 🟢 HIGH |
| **mākslīgais intelekts gpt** | 260 | 0.34 | — | LOW | 🟢 MEDIUM |
| **mākslīgais intelekts bezmaksas** | 260 | 0.35 | — | MEDIUM | 🟢 MEDIUM |
| **apmācības** | 210 | 0.92 | 21 | LOW | 🟡 MEDIUM |
| **interneta veikala izstrāde** | 210 | 4.65 | 45 | MEDIUM | 🟡 MEDIUM |
| **web izstrāde** | 210 | 3.67 | 90 | MEDIUM | 🔴 HARD |
| **mākslīgais intelekts aplikācija** | 210 | 0.36 | 1 | MEDIUM | 🟢 MEDIUM |
| **mākslīgais intelekts latvijā** | 110 | 0.56 | — | MEDIUM | 🟢 HIGH |
| **web dizains** | 90 | 1.47 | 23 | MEDIUM | 🟡 LOW |
| **it pakalpojumi** | 70 | 6.17 | — | MEDIUM | 🟡 LOW |
| **automatizācija** | 50 | 0.98 | — | LOW | 🟢 QUICK WIN |
| **digitālā transformācija** | 40 | — | — | LOW | 🟢 MEDIUM |
| **programmatūras izstrāde** | 40 | — | — | LOW | 🟡 LOW |
| **biznesa automatizācija** | 10 | 1.35 | — | LOW | 🟢 MEDIUM |
| **ai rīki** | 20 | 0.27 | — | MEDIUM | 🟢 MEDIUM |

### 2.2 MEGA Opportunity: "mākslīgais intelekts" Cluster

This keyword cluster represents **8,000+ monthly searches** with **very low difficulty (KD: 1-3)**:

| Long-tail Keyword | SV | KD | Blog Topic Idea |
|---|---|---|---|
| mākslīgais intelekts | 5,400 | 3 | Pillar page: "Mākslīgais intelekts — pilnīgs ceļvedis" |
| mākslīgais intelekts latviski | 590 | — | "MI rīki latviešu valodā — 2026. gada apskats" |
| bezmaksas mākslīgais intelekts | 590 | — | "Labākie bezmaksas MI rīki biznesam" |
| mākslīgais intelekts latviski bezmaksas | 480 | — | "Bezmaksas MI rīki, kas strādā latviski" |
| mākslīgais intelekts chatgpt | 390 | — | "ChatGPT ceļvedis latviešu valodā" |
| mākslīgais intelekts online | 390 | — | "MI rīki tiešsaistē — izmēģini tagad" |
| google mākslīgais intelekts | 320 | 1 | "Google Gemini — kā izmantot biznesā" |
| kas ir mākslīgais intelekts | 260 | 1 | "Kas ir MI? Vienkāršs skaidrojums" |
| mākslīgais intelekts gpt | 260 | — | "GPT tehnoloģija — kas jāzina" |
| mākslīgais intelekts bezmaksas | 260 | — | (covered by above) |
| mākslīgais intelekts aplikācija | 210 | 1 | "Labākās MI aplikācijas 2026" |
| mākslīgais intelekts chatgpt latviski | 170 | — | (covered by above) |
| mākslīgais intelekts programma | 170 | — | "MI programmatūra uzņēmumiem" |
| mākslīgais intelekts latvijā | 110 | — | "MI Latvijā — pašreizējā situācija un perspektīvas" |
| mākslīgais intelekts latviešu valodā | 110 | — | (covered by above) |
| mākslīgais intelekts telefonā | 90 | — | "MI telefona aplikācijas" |
| **TOTAL CLUSTER** | **~9,400+** | | |

### 2.3 English Keywords (for international reach)

| Keyword | SV (Latvia) | Notes |
|---|---|---|
| ai automation | — | Low local volume, but used by international clients |
| web development riga | — | No data in DFS, but valuable for English-speaking businesses |
| ai agency latvia | — | No data, niche but high-intent |
| chatbot development latvia | — | No data, high commercial intent |
| business automation | — | Low local volume |

**Recommendation:** Create an English /en/ section or at minimum English-language blog posts targeting "AI automation Latvia", "AI agency Riga", "chatbot development Baltic" for international B2B clients.

---

## 3. Competitor Analysis

### 3.1 Direct Keyword Competitors (Latvia/Latvian)

For the core AI/automation keywords, the SERP competitors are:

| Domain | Keywords | Avg Position | ETV | Type |
|---|---|---|---|---|
| tezaurs.lv | 2 | 1.5 | 21.7 | Dictionary (not real competitor) |
| lv.wikipedia.org | 3 | 40 | 12.5 | Encyclopedia |
| www.la.lv | 3 | 33 | 0.7 | News portal |
| www.facebook.com | 3 | 36 | 3.0 | Social media |
| www.lsm.lv | 2 | 8.5 | 5.5 | Public media |
| likta.lv | 2 | 9 | 2.6 | IT association |
| www.delfi.lv | 2 | 21.5 | 4.1 | News portal |
| kursors.lv | 2 | 29.5 | 2.0 | Tech news |
| **automatizacijas.lv** | **2** | **48** | **2.8** | **Target site** |

**Key insight:** There are **no strong direct AI agency competitors** ranking for Latvian AI keywords. The SERPs are dominated by news sites, Wikipedia, and government portals. This is a **wide open opportunity** for a commercial AI services site.

### 3.2 Web Development Competitors (SERP for "mājas lapu izstrāde")

| Position | Domain | Title |
|---|---|---|
| 1 | janislejnieks.lv | Freelance WordPress developer |
| 2 | mozello.lv | DIY website builder |
| 3 | dircms.lv | Website price calculator |
| Local Pack | enterpage, clickit, 2410.lv | Local agencies |
| 4 | webprojekts.lv | Web development agency |
| 5 | born.lv | UX/UI + web development |
| 6 | amparo.lv | Full-service web agency |
| 7 | webdev.lv | Website development |
| 8 | ps.lv | WordPress development |
| 9 | digitalweb.lv | Website development |

**automatizacijas.lv does NOT rank for any web development keyword.**

### 3.3 Domain Authority Comparison

| Domain | Organic Keywords | ETV | Est. Traffic Cost |
|---|---|---|---|
| visma.lv | 1,388 | 20,756 | €16,776 |
| stars.gov.lv | 1,270 | 6,031 | €2,919 |
| kic.lv | 114 | 383 | €104 |
| smarthr.lv | 151 | 473 | €144 |
| **automatizacijas.lv** | **2** | **2.8** | **€2.70** |

### 3.4 Content Gap Opportunities

Keywords competitors rank for that automatizacijas.lv doesn't:
- "čatbots" (bots/chatbot) — tezaurs.lv #2, kursors.lv #5, delfi.lv #3
- "mākslīgais intelekts latvijā" — facebook.com #7, lsm.lv #5
- "procesu automatizācija" — stars.gov.lv, masterbase.com
- "biznesa procesu automatizācija" — stars.gov.lv #7
- "digitālā transformācija" — multiple gov sites
- All web development keywords

---

## 4. Current Rankings & SERP Analysis

### 4.1 Current Rankings

| Keyword | Position | Page | SV | Trend |
|---|---|---|---|---|
| automatizācija | **#8** (live SERP) / #5 (DFS Labs) | Homepage | 50 | Moving up ✅ |
| apmācības | #91 | /training | 210 | New entry |

### 4.2 SERP Features Analysis

| Keyword | Featured Snippet | Videos | Local Pack | PAA | Images |
|---|---|---|---|---|---|
| mākslīgais intelekts | ✅ (Wikipedia) | ✅ | ❌ | ✅ | ✅ |
| automatizācija | ❌ | ❌ | ❌ | ❌ | ✅ |
| mājas lapu izstrāde | ❌ | ❌ | ✅ (3 results) | ✅ | ✅ |

**Opportunities:**
- Create content targeting the featured snippet for "mākslīgais intelekts" (currently Wikipedia)
- Get into the local pack for "mājas lapu izstrāde" by setting up/optimizing Google Business Profile
- Create video content for YouTube SERP presence

### 4.3 Quick Win Keywords (Positions 5–20)

| Keyword | Current Position | SV | Action |
|---|---|---|---|
| **automatizācija** | **#5-8** | 50 | Optimize homepage, add more content about automatizācija |

This is the **only quick win** currently. The site needs to get ranking for many more keywords first.

---

## 5. Backlink Analysis

> **Note:** Backlinks API access was not available during this audit. The following is derived from ranked keyword data.

### 5.1 Current Backlink Status

Based on domain rank overview, automatizacijas.lv has **minimal backlinks** (new domain founded 2024). The average competitor in the "automatizācija" SERP has:
- ~0.9 backlinks per page
- ~0.4 referring domains per page
- Domain rank: very low

### 5.2 Link Building Opportunities

**Latvian Business Directories:**
- firmas.lv
- zl.lv (Zelta Lapas)
- 1188.lv
- google.com/business (Google My Business)
- yelp.com
- trustpilot.com

**Latvian Tech/Business Media:**
- delfi.lv (press releases)
- lsm.lv (expert commentary)
- db.lv (Dienas Bizness)
- tvnet.lv
- kursors.lv (tech news)

**Industry Organizations:**
- likta.lv (Latvian IT Cluster)
- liaa.gov.lv (Investment Agency — project partnerships)
- startupwise.com
- techhub.lv

**University Partnerships:**
- rtu.lv (Riga Technical University)
- lu.lv (University of Latvia)

---

## 6. Content & On-Page Optimization

### 6.1 Page-by-Page Analysis

#### Homepage (/)
- **Current title:** "automatizacijas.lv | AI Risinājumi Jūsu Biznesam | Mākslīgā Intelekta Automatizācija Latvijā" (92 chars — TOO LONG)
- **Suggested title:** "AI Automatizācija Uzņēmumiem Latvijā | automatizacijas.lv" (57 chars)
- **Current desc:** Good (202 chars), but duplicated
- **Suggested desc:** "Profesionāli AI automatizācijas risinājumi Latvijā — čatboti, procesu automatizācija, AI darbinieki un datu analīze. Bezmaksas konsultācija." (140 chars)
- **Content:** Only 416 words. Needs 1,500+ words for competitive SERP positions
- **Missing:** H2 heading hierarchy, more textual content, case studies, FAQ section

#### Services (/services)
- **Current title:** "Pakalpojumi | automatizacijas.lv" (32 chars — generic)
- **Suggested title:** "AI Pakalpojumi — Čatboti, Automatizācija, Datu Analīze | automatizacijas.lv" (74 chars)
- **Current desc:** "Mēs piedāvājam plašu AI pakalpojumu klāstu..." (122 chars — generic)
- **Suggested desc:** "AI čatboti, procesu automatizācija, dokumentu apstrāde un pielāgoti AI risinājumi uzņēmumiem. Uzzini vairāk par mūsu pakalpojumiem." (130 chars)
- **Missing:** Individual service landing pages, more detailed content, pricing info

#### Pricing (/pricing)
- **Current title:** "Cenas | automatizacijas.lv" (26 chars — TOO SHORT)
- **Suggested title:** "AI Pakalpojumu Cenas un Plāni | automatizacijas.lv" (50 chars)
- **Issues:** Low description-to-content consistency (0.231), irrelevant meta keywords

#### Blog (/blog)
- **CRITICAL:** Canonical points to homepage! Must fix to `https://automatizacijas.lv/blog`
- **Current title:** "Blogs | AI Automatizācija" (25 chars — OK but could be better)
- **Suggested title:** "AI Blogs — Jaunākais par Mākslīgo Intelektu un Automatizāciju" (61 chars)
- **Content:** Only 101 words on the blog index. Extremely thin.
- **Only 3 blog posts** — needs regular publishing schedule

#### Training (/training)
- **Current title:** "Apmācības | automatizacijas.lv" (30 chars)
- **Suggested title:** "AI Apmācības un Kursi | Mākslīgais Intelekts Biznesam" (53 chars)
- **Good structure:** Has H1, H2, H3 hierarchy for courses
- **Missing:** Course schema markup, pricing, testimonials

#### Contact (/contact)
- **Current title:** "Sazinies ar mums | automatizacijas.lv" (37 chars — OK)
- **Issues:** Low content rate, irrelevant meta keywords

### 6.2 Missing Content Pages to Create

| Page | Target Keywords | Priority |
|---|---|---|
| **/kas-ir-maksligais-intelekts** | kas ir mākslīgais intelekts (260 SV, KD:1) | 🔴 CRITICAL |
| **/maksligais-intelekts-biznesam** | mākslīgais intelekts biznesam, MI latvijā | 🔴 HIGH |
| **/procesu-automatizacija** | procesu automatizācija, biznesa automatizācija | 🟡 HIGH |
| **/chatbot-izstrade** | čatbots, AI čatbots, chatbot izstrāde | 🟡 HIGH |
| **/majaslapu-izstrade** | mājas lapu izstrāde, mājaslapu izstrāde (720 SV) | 🟡 HIGH |
| **/seo-optimizacija** | seo optimizācija (390 SV, KD:5) | 🟡 MEDIUM |
| **/interneta-veikala-izstrade** | interneta veikala izstrāde (210 SV) | 🟡 MEDIUM |
| **/digitala-transformacija** | digitālā transformācija (40 SV) | 🟢 MEDIUM |
| **/ai-riki** | ai rīki, mākslīgais intelekts rīki | 🟢 MEDIUM |

### 6.3 Blog Content Strategy — Recommended Topics

**Tier 1 — High Traffic, Low Difficulty (publish ASAP):**

1. "Kas ir mākslīgais intelekts? Vienkāršs ceļvedis 2026. gadam" → 260+ SV
2. "10 labākie bezmaksas MI rīki uzņēmumiem 2026" → 590+ SV
3. "Mākslīgais intelekts latviski — labākie rīki latviešu valodā" → 590+ SV
4. "ChatGPT lietošana biznesā — praktisks ceļvedis" → 390+ SV
5. "Google Gemini vs ChatGPT — kuru izvēlēties?" → 320+ SV
6. "Kā izmantot mākslīgo intelektu mazā uzņēmumā" → info intent

**Tier 2 — Commercial Intent, Medium Difficulty:**

7. "Procesu automatizācija — kā sākt un ko automatizēt vispirms"
8. "AI čatboti biznesam — kāpēc tie ir nepieciešami 2026. gadā"
9. "Mājaslapu izstrāde ar AI — modernā pieeja"
10. "SEO optimizācija 2026 — pilnīgs ceļvedis"
11. "Interneta veikala izveide Latvijā — izmaksas un iespējas"
12. "Digitālā transformācija Latvijā — tendences un piemēri"

**Tier 3 — Authority Building:**

13. "MI ētika — ko uzņēmumiem jāzina"
14. "AI Latvijā — nozares pārskats un perspektīvas"
15. "Mašīnmācīšanās vienkāršiem vārdiem"

### 6.4 Schema Markup Improvements

Add to each service page:
```json
{
  "@type": "Service",
  "name": "AI Čatbotu Izstrāde",
  "description": "...",
  "provider": { "@type": "Organization", "name": "automatizacijas.lv" },
  "areaServed": "Latvia",
  "serviceType": "AI Chatbot Development"
}
```

Add FAQ schema to services/pricing:
```json
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Cik maksā AI čatbota izstrāde?",
    "acceptedAnswer": { "@type": "Answer", "text": "..." }
  }]
}
```

Add BlogPosting schema to each blog post:
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "datePublished": "2026-02-10",
  "author": { "@type": "Person", "name": "..." }
}
```

Add BreadcrumbList schema site-wide.

---

## 7. Prioritized Action Plan

### 🔴 Quick Wins — This Week

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | **Fix blog canonical** — change from `/` to `/blog` | HIGH | 5 min |
| 2 | **Make OG tags page-specific** — each page needs unique og:url, og:title, og:description | HIGH | 1 hour |
| 3 | **Fix duplicate meta description tags** — remove the duplicate from index.html or React | HIGH | 30 min |
| 4 | **Shorten homepage title** to under 60 chars | MEDIUM | 5 min |
| 5 | **Create unique meta descriptions** for each page with target keywords | HIGH | 1 hour |
| 6 | **Set up Google Business Profile** — address already in schema (Gustava Zemgala gatve 67, Rīga) | HIGH | 1 hour |
| 7 | **Submit sitemap to Google Search Console** (if not already) | HIGH | 10 min |
| 8 | **Remove Crawl-delay from robots.txt** | LOW | 2 min |
| 9 | **Add alt text to all images** (services page missing) | MEDIUM | 30 min |
| 10 | **Fix heading hierarchy** — add H2 tags on homepage between H1 and H3 | MEDIUM | 30 min |

### 🟡 Medium Term — 2–4 Weeks

| # | Action | Impact | Effort |
|---|---|---|---|
| 11 | **Create pillar page: "Kas ir mākslīgais intelekts"** — target 2,000+ words, KD:1, 260+ SV | CRITICAL | 1 day |
| 12 | **Create pillar page: "Mākslīgais intelekts biznesam"** — link hub for all MI content | CRITICAL | 1 day |
| 13 | **Expand homepage content** from 416 to 1,500+ words — add FAQ, detailed service descriptions, stats | HIGH | 4 hours |
| 14 | **Publish 4 blog posts** targeting "bezmaksas MI rīki", "MI latviski", "ChatGPT ceļvedis", "Google Gemini" | HIGH | 4 days |
| 15 | **Create individual service landing pages** — /chatbotu-izstrade, /procesu-automatizacija, /majaslapu-izstrade | HIGH | 3 days |
| 16 | **Add FAQ schema** to services and pricing pages | MEDIUM | 2 hours |
| 17 | **Add BlogPosting schema** to each blog post | MEDIUM | 1 hour |
| 18 | **Add BreadcrumbList schema** site-wide | MEDIUM | 1 hour |
| 19 | **Optimize internal linking** — every blog post should link to relevant service pages | HIGH | 2 hours |
| 20 | **Register on Latvian business directories** — firmas.lv, zl.lv, 1188.lv | MEDIUM | 2 hours |
| 21 | **Update sitemap.xml** with all new pages and blog posts | MEDIUM | 30 min |

### 🟢 Long Term — 1–3 Months

| # | Action | Impact | Effort |
|---|---|---|---|
| 22 | **Publish 2 blog posts/week** targeting MI keyword cluster (8,000+ monthly searches available) | CRITICAL | Ongoing |
| 23 | **Create English content section** targeting "AI automation Latvia", "AI agency Riga" | HIGH | 1 week |
| 24 | **Build backlinks** — guest posts on kursors.lv, delfi.lv tech section, industry events | HIGH | Ongoing |
| 25 | **Create video content** — "Kas ir MI?" explainer for YouTube SERP presence | MEDIUM | 1 week |
| 26 | **Target local pack** for "mājas lapu izstrāde" via Google Business + reviews | HIGH | Ongoing |
| 27 | **Build topic authority** — comprehensive MI content hub (aim for 20+ articles in MI cluster) | CRITICAL | 2 months |
| 28 | **Create case studies** — each client project as a detailed blog post/portfolio entry | HIGH | Ongoing |
| 29 | **Explore partnerships** — LIKTA, RTU, LU for backlinks and credibility | MEDIUM | Ongoing |
| 30 | **Monitor and optimize** — track rankings weekly, adjust content strategy based on what gains traction | HIGH | Ongoing |

---

## 8. Traffic Projection

**Current state:** 2.8 visits/month from 2 keywords

**If quick wins + medium term actions completed (1 month):**
- Estimated keywords: 15–30
- Estimated traffic: 50–150 visits/month
- Key wins: "automatizācija" → top 3, new MI content pages ranking

**If full content strategy executed (3 months):**
- Estimated keywords: 100–200
- Estimated traffic: 500–2,000 visits/month
- Key wins: MI keyword cluster capturing 5-15% of 9,400 monthly searches

**6-month target with consistent execution:**
- Estimated keywords: 300–500
- Estimated traffic: 2,000–5,000 visits/month
- Comparable to current visma.lv visibility in AI/automation niche

---

## Appendix A: SERP Screenshots Data

### "mākslīgais intelekts" — Top 10 (Latvia/Latvian, Feb 2026)

1. 🏆 **Featured Snippet** — lv.wikipedia.org
2. enciklopedija.lv
3. chatgpt.com (Latvian GPT)
4. 🎥 Video carousel (YouTube, Facebook)
5. microsoft.com/lv-lv/ai
6. 🔍 People Also Search
7. elementsofai.com/lv
8. europarl.europa.eu
9. cert.lv
10. tiesibsargs.lv

**automatizacijas.lv is NOT in the top 100 for this keyword.**

### "automatizācija" — Top 10

1. tezaurs.lv (dictionary)
2. designtree.lv (engineering automation)
3. siemens.com/lv
4. mollerauto.lv (blog post)
5. masterbase.com
6. izm.gov.lv
7. stars.gov.lv
8. **automatizacijas.lv** ✅ (#8)
9. letonika.lv
10. pipedrive.com/lv

### "mājas lapu izstrāde" — Top 10

1. janislejnieks.lv
2. mozello.lv
3. dircms.lv
4-6. 📍 Local Pack (3 agencies)
7. webprojekts.lv
8. People Also Search
9. born.lv
10. amparo.lv

**automatizacijas.lv is NOT ranking for web development keywords.**

---

## Appendix B: All "Mākslīgais Intelekts" Related Searches (from Google SERP)

- Bezmaksas mākslīgais intelekts
- Google mākslīgais intelekts
- Mākslīgais intelekts chatgpt
- Mākslīgais intelekts latviski bezmaksas
- Mākslīgais intelekts online
- Mākslīgais intelekts aplikācija
- Mākslīgais intelekts latvijā
- Mākslīgais intelekts programma
- Mākslīgais intelekts kursi
- Mākslīgais intelekts mācības
- Mākslīgā intelekta rīki
- Mākslīgais intelekts mūzika
- Mākslīgais intelekts telefonā
- Kā izmantot mākslīgo intelektu

---

*Report generated using DataForSEO API data. All search volume and ranking data reflects Latvia market (location_code: 2428) with Latvian language settings.*
