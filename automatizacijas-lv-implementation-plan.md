# automatizacijas.lv — Implementation Plan for Claude Code

**Site**: automatizacijas.lv (Next.js SPA, Latvian AI automation company)
**Core focus areas**: Accounting automations, document automations, AI platform development (but not limited to)
**Goal**: More organic traffic, more leads, stronger content authority

This document is a step-by-step plan for Claude Code to execute. Each section has clear deliverables.

---

## Phase 1: SEO Fixes & Quick Wins (Week 1)

### 1.1 Fix 404 page branding

The 404 page currently shows "Sula Labs" branding instead of automatizacijas.lv.

**Task**: Find the 404 page component and replace:
- "Sula Labs" → "automatizacijas.lv" or "AI Automatizācija"
- Update the logo to match the main site
- Update the footer copyright to match ("© 2026 AI Automatizācija")
- Ensure the 404 page uses the same navbar/footer components as the rest of the site

### 1.2 Add images to all pages

The homepage currently has **zero `<img>` elements** — everything is CSS/SVG. This hurts Google Image search traffic and user engagement.

**Task**: Add real images to key sections:
- Homepage hero: add a background image or illustration showing AI/automation concept
- Service cards: add icons or illustrations (can use SVG inline but also add at least one real `<img>` with descriptive alt text per section)
- Blog posts: each blog post needs a featured image with `alt` text containing the target keyword
- About/team section: add team photos if available
- All `<img>` tags must have descriptive `alt` attributes in Latvian with relevant keywords

### 1.3 Expand existing blog posts

The 6 existing blog posts are critically thin (~225 words, no H2 subheadings). Google won't rank them.

**Task**: For each of these 6 existing posts, expand to 1500+ words with proper heading structure:

1. `/blog/ka-ai-transforme-biznesa-procesus` — Currently ~225 words. Expand with H2 sections covering: specific business processes AI transforms, real examples, ROI data, Latvia-specific context, and a CTA at the bottom
2. `/blog/automatizacijas-labas-prakses-maziem-uznemumiem` — Expand with specific automation examples for SMEs, step-by-step implementation guide, cost considerations
3. `/blog/web-izstrades-tendences-ai-integracija` — Expand with 2026 trends, AI chatbot integration examples, personalization, SEO automation
4. `/blog/ai-chatbots-biznesam-ka-izvelities` — Expand with comparison table of chatbot types, pricing breakdown, integration options, Latvian language support details
5. `/blog/ka-automatizet-e-pastu-apstradi-ar-ai` — Expand with step-by-step guide, tool comparisons, automation workflow diagrams (described in text)
6. `/blog/labakie-ai-riki-uznemumiem-2026` — Expand with detailed tool reviews, pricing, pros/cons, Latvia availability

**For each post**:
- Add 4-6 H2 subheadings with keywords
- Add 2-3 H3 subheadings under longer H2 sections
- Add 3+ internal links to relevant service pages (e.g., link "čatbots" to `/chatbotu-izstrade`)
- Add a CTA section at the bottom: "Vēlaties uzzināt vairāk? Pieteikties bezmaksas konsultācijai →" linking to `/contact`
- Add FAQ schema markup (JSON-LD) with 2-3 questions per post
- All content in Latvian

### 1.4 Add hreflang tag

**Task**: Add `<link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/{path}" />` to the `<head>` of all pages.

### 1.5 Fix any remaining broken internal links

**Task**: Crawl all internal links and verify none return 404. Specifically check:
- All navbar links
- All footer links
- All service card "Uzzināt vairāk" links (some currently point to generic `/services` instead of dedicated pages)
- The 3 service cards that link to `/services` (Datu analīze, Dokumentu apstrāde, AI darbinieki) should link to their own dedicated pages (create in Phase 2)

---

## Phase 2: New Service Pages (Week 2)

Create dedicated pages for services that currently lack their own URL. Each page should follow the same structure as `/chatbotu-izstrade` (which is the best current service page — has breadcrumbs, H1, H2s, CTA, and meta description with pricing).

### 2.1 `/dokumentu-automatizacija` — Document Automation Page

**This is a core focus area.**

**Meta**:
- Title: "Dokumentu Automatizācija ar AI | automatizacijas.lv" (50 chars)
- Description: "Automātiska dokumentu apstrāde, rēķinu digitalizācija, līgumu analīze un datu izvilkšana ar AI. Ietaupiet līdz 80% laika. No €199/mēn."
- H1: "Dokumentu Automatizācija Uzņēmumiem Latvijā"

**Content sections (H2s)**:
1. "Kāpēc automatizēt dokumentu apstrādi?" — pain points (manual data entry, human errors, slow processing), statistics
2. "Ko mēs automatizējam" — H3 subsections:
   - Rēķinu apstrāde un digitalizācija
   - Līgumu analīze un datu izvilkšana
   - Grāmatvedības dokumentu automatizācija
   - E-pastu klasifikācija un maršrutēšana
   - Atskaišu ģenerēšana
3. "Kā tas strādā" — 4-step process (similar to homepage process section but specific to documents)
4. "Integrācijas" — list of systems it integrates with (1C, Horizon, Tildes Jumis, e-pastu sistēmas, Google Drive, etc.)
5. "Rezultāti skaitļos" — metrics: time saved, error reduction, cost savings
6. "Biežāk uzdotie jautājumi" — 4-5 FAQ items with schema markup
7. "Sāciet automatizēt dokumentus" — CTA section with form or link to /contact

**Target keywords**: dokumentu automatizācija, dokumentu apstrāde ar AI, rēķinu automatizācija, dokumentu digitalizācija Latvija

**Word count**: 1500-2000 words

### 2.2 `/gramatvedibas-automatizacija` — Accounting Automation Page

**This is a core focus area.**

**Meta**:
- Title: "Grāmatvedības Automatizācija ar AI | automatizacijas.lv" (55 chars)
- Description: "AI grāmatvedības automatizācija — rēķinu apstrāde, atskaišu ģenerēšana, datu saskaņošana un nodokļu aprēķini. Samaziniet manuālo darbu par 70%."
- H1: "Grāmatvedības Automatizācija ar Mākslīgo Intelektu"

**Content sections (H2s)**:
1. "Kāpēc automatizēt grāmatvedību?" — pain points specific to Latvian accountants (VID atskaites, PVN deklarācijas, gada pārskati, manuāla datu ievade)
2. "Grāmatvedības procesi, ko AI automatizē" — H3 subsections:
   - Rēķinu apstrāde un grāmatošana
   - Bankas izrakstu saskaņošana
   - PVN un nodokļu aprēķini
   - Gada pārskatu sagatavošana
   - Debitoru un kreditoru pārvaldība
   - Algu aprēķins un HR dokumenti
3. "Integrācija ar Latvijas grāmatvedības sistēmām" — 1C, Tildes Jumis, Horizon, Zalktis, VID EDS sistēma
4. "Kā norit ieviešana" — 4-step process
5. "Piemērs: Kā grāmatvedības birojs ietaupīja 25 stundas nedēļā" — case study format (even if generalized)
6. "Biežāk uzdotie jautājumi" — FAQ with schema
7. CTA section

**Target keywords**: grāmatvedības automatizācija, AI grāmatvedība, rēķinu automatizācija, grāmatvedības programma AI, automatizēta grāmatvedība Latvija

**Word count**: 2000+ words

### 2.3 `/ai-platformu-izstrade` — AI Platform Development Page

**This is a core focus area.**

**Meta**:
- Title: "AI Platformu Izstrāde Uzņēmumiem | automatizacijas.lv"
- Description: "Pielāgotu AI platformu un risinājumu izstrāde jūsu uzņēmumam. No idejas līdz gatavam produktam — AI čatboti, datu platformas, automatizācijas sistēmas."
- H1: "AI Platformu un Risinājumu Izstrāde"

**Content sections (H2s)**:
1. "Ko mēs izstrādājam" — H3 subsections:
   - AI čatbotu platformas
   - Datu analīzes un BI platformas
   - Automatizācijas sistēmas
   - AI integrācijas ar esošajām sistēmām
   - Custom ML modeļu izstrāde
2. "Tehnoloģijas, ar kurām strādājam" — Python, TensorFlow, OpenAI API, LangChain, vector databases, cloud platforms
3. "Izstrādes process" — detailed process from consultation to deployment
4. "Kāpēc pielāgots risinājums, nevis gatavs produkts?" — comparison
5. FAQ + CTA

**Target keywords**: AI platformu izstrāde, AI risinājumu izstrāde, pielāgota AI sistēma, AI izstrāde Latvija

**Word count**: 1500-2000 words

### 2.4 `/datu-analize` — Data Analysis & BI Page

**Meta**:
- Title: "Datu Analīze un BI ar AI | automatizacijas.lv"
- Description: "AI vadīta biznesa inteliģence — automātiskas atskaites, tendenču analīze, prognozēšana un datu vizualizācija. Pieņemiet lēmumus ar datiem."
- H1: "Datu Analīze un Biznesa Inteliģence ar AI"

**Content**: Similar structure to above. Focus on: automated reporting, trend analysis, forecasting, data visualization, integration with Latvian business systems. 1500+ words.

### 2.5 `/ai-darbinieki` — AI Workers Page

**Meta**:
- Title: "AI Darbinieki Jūsu Uzņēmumam | automatizacijas.lv"
- Description: "Gatavi izmantošanai AI darbinieki biznesa procesiem — klientu apkalpošana, satura veidošana, datu apstrāde. Strādā 24/7 bez kļūdām."
- H1: "AI Darbinieki — Virtuālie Komandas Biedri Jūsu Biznesam"

**Content**: Explain different types of AI workers, use cases, how they integrate with teams, pricing indicators. 1500+ words.

### 2.6 Update service card links on homepage

**Task**: Update the 3 service cards that currently link to generic `/services`:
- "Datu analīze un BI" → link to `/datu-analize`
- "Dokumentu apstrāde" → link to `/dokumentu-automatizacija`
- "AI darbinieki" → link to `/ai-darbinieki`

### 2.7 Update XML sitemap

**Task**: Add all new pages to the sitemap.xml

---

## Phase 3: Industry Vertical Pages (Week 3)

These pages target "[service] + [industry]" keywords. trinity.lv (main competitor) does this well; automatizacijas.lv doesn't have any. Each page should be 1500-2000 words.

### 3.1 `/nozares/gramatvediba-un-finanses` — Accounting & Finance

**Meta**:
- Title: "AI Automatizācija Grāmatvedībai un Finansēm | automatizacijas.lv"
- Description: "AI risinājumi grāmatvedības birojiem, finanšu uzņēmumiem un nodaļām. Rēķinu apstrāde, atskaites, nodokļi — viss automatizēts."
- H1: "AI Automatizācija Grāmatvedības un Finanšu Nozarei"

**Content focus**: Specific pain points for accountants and finance teams in Latvia, compliance with VID requirements, integration with Latvian accounting software, case study format, specific ROI numbers for the industry.

**Target keywords**: AI grāmatvedībai, automatizācija grāmatvedības birojam, finanšu automatizācija Latvija

### 3.2 `/nozares/e-komercija` — E-commerce

**Meta**:
- Title: "AI Automatizācija E-komercijai | automatizacijas.lv"
- H1: "AI Risinājumi E-komercijas Uzņēmumiem"

**Content focus**: AI chatbots for customer support, automated order processing, inventory management, personalized recommendations, abandoned cart recovery, automated product descriptions.

### 3.3 `/nozares/razosana` — Manufacturing

**Meta**:
- Title: "AI Automatizācija Ražošanas Uzņēmumiem | automatizacijas.lv"
- H1: "AI Automatizācija Ražošanas Nozarei Latvijā"

**Content focus**: Quality control, predictive maintenance, supply chain optimization, production planning, document management in manufacturing.

### 3.4 `/nozares/logistika` — Logistics

**Meta**:
- Title: "AI Automatizācija Loģistikai | automatizacijas.lv"
- H1: "AI Risinājumi Loģistikas Uzņēmumiem"

**Content focus**: Route optimization, shipment tracking, automated documentation (CMR, invoices), warehouse management, demand forecasting.

### 3.5 `/nozares/juridiskas-firmas` — Legal

**Meta**:
- Title: "AI Automatizācija Juridiskajām Firmām | automatizacijas.lv"
- H1: "AI Risinājumi Juridiskajām Firmām un Juristiem"

**Content focus**: Contract analysis, document automation, legal research, due diligence automation, client intake chatbots.

### 3.6 Create industry index page `/nozares`

**Task**: Create an index page listing all industry verticals with cards/links. H1: "AI Automatizācija pa Nozarēm". Each card links to the industry page.

### 3.7 Add industry pages to navigation

**Task**: Add "Nozares" as a dropdown in the main navigation (under Risinājumi or as a separate item).

---

## Phase 4: Blog Content — New Posts (Weeks 3-6)

All blog posts must be:
- 1500-2500 words
- Have 4-6 H2 subheadings with target keywords
- Have 2-3 H3 subheadings under longer sections
- Include 3+ internal links to service/industry pages
- Include a CTA at the bottom linking to /contact
- Include FAQ schema markup (2-3 questions)
- Include a relevant featured image with keyword-rich alt text
- Written in Latvian
- Published with proper meta title (under 60 chars) and meta description (under 160 chars)

### Blog Post Schedule

**Week 3** (accounting/document focus):

1. **"Grāmatvedības Automatizācija 2026: Pilns Ceļvedis Latvijas Uzņēmumiem"**
   - Target: grāmatvedības automatizācija ceļvedis
   - H2s: Kāpēc automatizēt grāmatvedību, Kādi procesi automatizējami, Populārākie rīki, Integrācija ar Latvijas sistēmām, Kā sākt, Izmaksas un ROI
   - Internal links: /gramatvedibas-automatizacija, /dokumentu-automatizacija, /nozares/gramatvediba-un-finanses
   - 2000 words

2. **"10 Dokumentu Apstrādes Procesi, Ko AI Var Automatizēt Jūsu Uzņēmumā"**
   - Target: dokumentu apstrāde AI automatizācija
   - Listicle format with detailed descriptions of each process
   - Internal links: /dokumentu-automatizacija, /procesu-automatizacija
   - 1800 words

**Week 4** (AI platform / technical focus):

3. **"Kā Izvēlēties AI Platformu Savam Uzņēmumam: Gatavs Risinājums vs. Pielāgota Izstrāde"**
   - Target: AI platforma uzņēmumam izvēle
   - Comparison format with pros/cons table
   - Internal links: /ai-platformu-izstrade, /services
   - 1800 words

4. **"AI Čatbots Latviešu Valodā: Kā Tas Strādā un Ko Var Sasniegt"**
   - Target: AI čatbots latviešu valodā
   - Technical but accessible explanation, demo scenarios
   - Internal links: /chatbotu-izstrade
   - 1500 words

**Week 5** (industry focus):

5. **"Kā AI Maina Grāmatvedības Biroju Darbu Latvijā"**
   - Target: AI grāmatvedības birojs
   - Interview-style or narrative format about transformation
   - Internal links: /nozares/gramatvediba-un-finanses, /gramatvedibas-automatizacija
   - 1800 words

6. **"E-komercijas Automatizācija: 7 Veidi, Kā AI Palielina Pārdošanu"**
   - Target: e-komercija automatizācija AI
   - Numbered list with detailed explanations
   - Internal links: /nozares/e-komercija, /chatbotu-izstrade
   - 1500 words

**Week 6** (mixed):

7. **"AI Terminu Vārdnīca Latviešu Valodā"**
   - Target: mākslīgais intelekts termini, AI vārdnīca
   - Comprehensive glossary: 50+ terms with definitions
   - Internal links to relevant service pages from each term
   - 3000+ words (glossary format)
   - This becomes a pillar page that earns backlinks

8. **"5 Kļūdas, Ko Uzņēmumi Pieļauj AI Ieviešanā (un Kā No Tām Izvairīties)"**
   - Target: AI ieviešana kļūdas
   - Problem-solution format
   - Internal links: /contact (consultation CTA), /services
   - 1500 words

**Week 7-8** (case studies + continued content):

9. **"Kā Grāmatvedības Birojs Ietaupīja 25 Stundas Nedēļā ar Dokumentu Automatizāciju"**
   - Case study format (even if slightly fictionalized based on real client patterns)
   - Include specific numbers: before/after, ROI timeline, tools used
   - Internal links: /dokumentu-automatizacija, /gramatvedibas-automatizacija
   - 1200 words

10. **"AI vs. Tradicionālā Klientu Apkalpošana: Salīdzinājums ar Skaitļiem"**
    - Target: AI čatbots salīdzinājums
    - Comparison table format, specific metrics
    - Internal links: /chatbotu-izstrade
    - 1500 words

11. **"Kā Automatizēt Rēķinu Apstrādi ar AI: Soli pa Solim"**
    - Target: rēķinu apstrāde automatizācija
    - Step-by-step tutorial format
    - Internal links: /dokumentu-automatizacija, /gramatvedibas-automatizacija
    - 1800 words

12. **"Labākie AI Rīki Latvijas Uzņēmumiem 2026: Atjaunots Saraksts"**
    - Update and massively expand the existing thin post
    - Target: AI rīki uzņēmumiem 2026
    - 2000 words with detailed reviews

---

## Phase 5: UI/UX Improvements (Weeks 2-4, parallel)

### 5.1 Homepage hero section

**Current**: The hero headline "AI automatizācija augošiem uzņēmumiem" is generic.

**Task**: Update the hero section:
- Add a secondary rotating/alternating text that shows specific use cases: "grāmatvedības automatizācija", "dokumentu apstrāde", "AI čatboti", "datu analīze"
- Or add 3-4 small icon badges below the hero showing key verticals
- Make the subheading more outcome-focused. Suggested: "No grāmatvedības automatizācijas līdz AI čatbotiem — pielāgoti risinājumi, kas ietaupa laiku un naudu. Bezmaksas konsultācija."

### 5.2 Remove "Bezmaksas 14 dienu izmēģinājums" or explain it

**Current**: Below the hero CTA there's text "Bezmaksas 14 dienu izmēģinājums" but nowhere explains what the trial is.

**Task**: Either:
- Remove this text entirely (if there's no actual trial product)
- Replace with "Bez saistībām · Atbilde 24h laikā" or "Bezmaksas konsultācija · Bez saistībām"
- Or create an actual trial/demo flow and link to it

### 5.3 Populate testimonials section

**Current**: The "Uzticas uzņēmumi visā Latvijā" section exists but has no actual testimonials — just the heading and subtitle.

**Task**: Either:
- Add 3-6 real testimonials with: quote text, person name, role, company name, optional company logo
- Or add client logos in a "Mūsu klienti" bar (even without quotes)
- If no real testimonials available yet, **remove the section entirely** — an empty social proof section is worse than none

### 5.4 Add a "Nozares" section to homepage

**Task**: Add a new section after the services grid showing industry verticals with icons/cards:
- Grāmatvedība un Finanses
- E-komercija
- Ražošana
- Loģistika
- Juridiskās firmas

Each card links to the corresponding `/nozares/` page. Section heading: "Nozares, kurām palīdzam"

### 5.5 Add inline lead capture form

**Current**: The only way to convert is clicking through to /contact.

**Task**: Add an inline consultation form on the homepage (after the process section or before the FAQ). Simple form:
- Vārds (name)
- E-pasts (email)
- Uzņēmums (company, optional)
- Select dropdown: "Kas jūs interesē?" with options: Grāmatvedības automatizācija, Dokumentu apstrāde, AI čatbots, AI platforma, Cits
- Submit button: "Pieteikties bezmaksas konsultācijai"

### 5.6 Add trust signals

**Task**: Add a "trust bar" section near the top of the homepage (below hero, before main content):
- Number of implemented projects
- Years of experience / established year
- Client satisfaction rate
- Any certifications or partnerships

If exact numbers aren't available, use qualitative badges like: "Latvijā dibināts", "Pielāgoti risinājumi", "24/7 atbalsts", "GDPR atbilstošs"

### 5.7 Improve footer

**Task**:
- The LinkedIn link currently goes to `linkedin.com/company/sula-labs-io/` — either update to an automatizacijas.lv page or add context
- Add Facebook, TikTok, or other active social links if they exist
- Consider adding a mini-form for newsletter signup in the footer

### 5.8 Add a sticky CTA bar on mobile

**Task**: On mobile viewport, add a sticky bottom bar with "Pieteikties konsultācijai" button that stays visible while scrolling. This is a common high-conversion pattern for service websites.

### 5.9 Blog post template improvements

**Task**: Update the blog post template/layout:
- Add a table of contents (auto-generated from H2s) at the top of each post
- Add "Saistītie raksti" (related posts) section at the bottom (currently may be missing or just service links)
- Add social share buttons
- Add an author section with name and mini-bio
- Add estimated reading time (already partially there: "5 min" shown on blog listing)
- Add a CTA banner between content sections or at the bottom: "Vēlaties automatizēt šo procesu? Pieteikties bezmaksas konsultācijai →"

---

## Phase 6: Technical SEO (Week 2, ongoing)

### 6.1 Verify SSR/SSG is working

**Task**: Check that all pages are properly server-side rendered. Run `curl -s https://automatizacijas.lv | head -200` and verify that the actual HTML content (headings, paragraphs, text) is present in the initial HTML response — not just loaded via JavaScript after page load. If the HTML is empty/minimal and content loads via JS, implement SSR or SSG for all pages.

### 6.2 Add FAQ schema to service pages

**Task**: Each service page and industry page that has a FAQ section should have corresponding `FAQPage` JSON-LD schema markup. Example:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cik maksā grāmatvedības automatizācija?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Grāmatvedības automatizācijas risinājumi sākas no €199/mēn..."
      }
    }
  ]
}
```

### 6.3 Add BreadcrumbList schema

**Task**: Add BreadcrumbList JSON-LD to all pages (service pages already have visual breadcrumbs — add the schema too).

### 6.4 Add Article schema to blog posts

**Task**: Each blog post should have `Article` or `BlogPosting` JSON-LD with: headline, datePublished, dateModified, author, image, description.

### 6.5 Create a proper internal linking strategy

**Task**: Implement these internal linking rules:
- Every blog post links to at least 2 service pages
- Every service page links to at least 2 related blog posts
- Every industry page links to relevant service pages and blog posts
- The homepage links to all top-level service and industry pages
- Use descriptive anchor text (not "uzzināt vairāk" — use "grāmatvedības automatizācija" or the target keyword)

### 6.6 Add `<meta name="author">` to blog posts

### 6.7 Implement proper Open Graph images

**Task**: Each page should have a unique `og:image` — especially blog posts. Create template-based OG images with the post title overlaid on a branded background.

### 6.8 Set up blog RSS feed

**Task**: If not already present, create an RSS feed at `/blog/feed.xml` or `/rss.xml` for blog syndication.

---

## Phase 7: Content Maintenance (Ongoing)

### Publishing cadence
- **Minimum 2 blog posts per week** going forward
- Focus 60% on accounting/document/AI platform topics, 40% on other automation topics
- Every month: 1 case study, 1 industry-specific post, 2 general AI/automation posts

### Content refresh
- Every 3 months: update the "Labākie AI Rīki" post with new tools
- Every 6 months: refresh all service page content with updated stats and offerings
- Monitor Google Search Console for queries where the site appears on page 2 — these are quick-win keywords to create/optimize content for

### Keyword tracking priorities
Track rankings for these terms monthly:
- AI automatizācija Latvijā
- grāmatvedības automatizācija
- dokumentu automatizācija
- AI čatbots biznesam
- AI platformu izstrāde
- procesu automatizācija uzņēmumiem
- rēķinu automatizācija
- AI risinājumi Latvijā

---

## Summary — Execution Order

| Week | Focus | Key Deliverables |
|---|---|---|
| 1 | SEO fixes + blog expansion | Fix 404 branding, add images, expand 6 blog posts to 1500+ words, add hreflang |
| 2 | New service pages + tech SEO | Create 5 new service pages (/dokumentu-automatizacija, /gramatvedibas-automatizacija, /ai-platformu-izstrade, /datu-analize, /ai-darbinieki), update sitemap, verify SSR, add schemas |
| 3 | Industry pages + new blogs | Create 5 industry vertical pages + /nozares index, publish 2 new blog posts |
| 4 | UI improvements + new blogs | Homepage hero update, testimonials, inline form, trust bar, 2 new blog posts |
| 5 | Blog content push | 2 new blog posts (industry focus), improve blog template |
| 6 | Blog content + polish | AI glossary pillar page, 1 additional post, footer fixes, mobile sticky CTA |
| 7-8 | Case studies + continued content | 2 case studies, 2 blog posts, internal linking audit |

**Total new pages**: ~17 (5 service + 5 industry + 1 index + 12 blog posts)
**Total pages after completion**: ~37 (up from 20)
