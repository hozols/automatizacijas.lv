import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageShell, Breadcrumbs, Section, RuledList, CtaBand } from '@/components/page';

const relatedLinks: Record<string, { label: string; path: string }[]> = {
  'ka-ai-transforme-biznesa-procesus': [
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'Dokumentu Automatizācija', path: '/dokumentu-automatizacija' },
  ],
  'automatizacijas-labas-prakses-maziem-uznemumiem': [
    { label: 'Procesu Automatizācija ar AI', path: '/procesu-automatizacija' },
    { label: 'Grāmatvedības Automatizācija', path: '/gramatvedibas-automatizacija' },
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
  ],
  'web-izstrades-tendences-ai-integracija': [
    { label: 'Mājaslapu Izstrāde ar AI', path: '/majaslapu-izstrade' },
    { label: 'AI Platformu Izstrāde', path: '/ai-platformu-izstrade' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
  ],
  'ai-chatbots-biznesam-ka-izvelities': [
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'E-komercijas Automatizācija', path: '/nozares/e-komercija' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
  ],
  'ka-automatizet-e-pastu-apstradi-ar-ai': [
    { label: 'Dokumentu Automatizācija', path: '/dokumentu-automatizacija' },
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
    { label: 'Grāmatvedības Automatizācija', path: '/gramatvedibas-automatizacija' },
  ],
  'labakie-ai-riki-uznemumiem-2026': [
    { label: 'AI Platformu Izstrāde', path: '/ai-platformu-izstrade' },
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
  ],
  'gramatvedibas-automatizacija-celvedis': [
    { label: 'Grāmatvedības Automatizācija', path: '/gramatvedibas-automatizacija' },
    { label: 'Dokumentu Automatizācija', path: '/dokumentu-automatizacija' },
    { label: 'Grāmatvedība un Finanses', path: '/nozares/gramatvediba-un-finanses' },
  ],
  '10-dokumentu-apstrades-procesi-ko-ai-var-automatizet': [
    { label: 'Dokumentu Automatizācija', path: '/dokumentu-automatizacija' },
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
    { label: 'Grāmatvedības Automatizācija', path: '/gramatvedibas-automatizacija' },
  ],
  'ka-izvelities-ai-platformu-uznemumam': [
    { label: 'AI Platformu Izstrāde', path: '/ai-platformu-izstrade' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
    { label: 'Datu Analīze un BI', path: '/datu-analize' },
  ],
  'ai-chatbots-latviesu-valoda': [
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'E-komercijas Automatizācija', path: '/nozares/e-komercija' },
    { label: 'Kontakti', path: '/contact' },
  ],
  'ka-ai-maina-gramatvedibas-biroju-darbu': [
    { label: 'Grāmatvedība un Finanses', path: '/nozares/gramatvediba-un-finanses' },
    { label: 'Grāmatvedības Automatizācija', path: '/gramatvedibas-automatizacija' },
    { label: 'Dokumentu Automatizācija', path: '/dokumentu-automatizacija' },
  ],
  'e-komercijas-automatizacija-7-veidi': [
    { label: 'E-komercijas Automatizācija', path: '/nozares/e-komercija' },
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
  ],
  'ai-terminu-vardnica': [
    { label: 'Kas ir mākslīgais intelekts?', path: '/kas-ir-maksligais-intelekts' },
    { label: 'AI Platformu Izstrāde', path: '/ai-platformu-izstrade' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
  ],
  '5-kludas-ai-ieviesana': [
    { label: 'Bezmaksas Konsultācija', path: '/contact' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
  ],
  'gramatvedibas-birojs-ietaupija-25-stundas': [
    { label: 'Dokumentu Automatizācija', path: '/dokumentu-automatizacija' },
    { label: 'Grāmatvedības Automatizācija', path: '/gramatvedibas-automatizacija' },
    { label: 'Grāmatvedība un Finanses', path: '/nozares/gramatvediba-un-finanses' },
  ],
  'ai-vs-tradicionala-klientu-apkalposana': [
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'E-komercijas Automatizācija', path: '/nozares/e-komercija' },
    { label: 'Kontakti', path: '/contact' },
  ],
  'ka-automatizet-rekinu-apstradi-ar-ai': [
    { label: 'Dokumentu Automatizācija', path: '/dokumentu-automatizacija' },
    { label: 'Grāmatvedības Automatizācija', path: '/gramatvedibas-automatizacija' },
    { label: 'Grāmatvedība un Finanses', path: '/nozares/gramatvediba-un-finanses' },
  ],
  'labakie-ai-riki-latvijas-uznemumiem-2026-atjaunots': [
    { label: 'AI Platformu Izstrāde', path: '/ai-platformu-izstrade' },
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
  ],
};

interface PostData {
  titleKey: string;
  contentKey: string;
  excerptKey: string;
  date: string;
  readTime: string;
  category: string;
  author?: string;
  authorRole?: string;
}

const blogPostData: Record<string, PostData> = {
  'ka-ai-transforme-biznesa-procesus': {
    titleKey: 'blog.post1.title',
    contentKey: 'blog.post1.content',
    excerptKey: 'blog.post1.excerpt',
    date: '2026-02-10',
    readTime: '12 min',
    category: 'AI',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'automatizacijas-labas-prakses-maziem-uznemumiem': {
    titleKey: 'blog.post2.title',
    contentKey: 'blog.post2.content',
    excerptKey: 'blog.post2.excerpt',
    date: '2026-02-03',
    readTime: '14 min',
    category: 'Automatizācija',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'web-izstrades-tendences-ai-integracija': {
    titleKey: 'blog.post3.title',
    contentKey: 'blog.post3.content',
    excerptKey: 'blog.post3.excerpt',
    date: '2026-01-25',
    readTime: '11 min',
    category: 'Web izstrāde',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'ai-chatbots-biznesam-ka-izvelities': {
    titleKey: 'blog.post4.title',
    contentKey: 'blog.post4.content',
    excerptKey: 'blog.post4.excerpt',
    date: '2026-02-14',
    readTime: '13 min',
    category: 'AI Čatboti',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'ka-automatizet-e-pastu-apstradi-ar-ai': {
    titleKey: 'blog.post5.title',
    contentKey: 'blog.post5.content',
    excerptKey: 'blog.post5.excerpt',
    date: '2026-02-07',
    readTime: '12 min',
    category: 'Automatizācija',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'labakie-ai-riki-uznemumiem-2026': {
    titleKey: 'blog.post6.title',
    contentKey: 'blog.post6.content',
    excerptKey: 'blog.post6.excerpt',
    date: '2026-01-30',
    readTime: '15 min',
    category: 'AI',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'gramatvedibas-automatizacija-celvedis': {
    titleKey: 'blog.post7.title',
    contentKey: 'blog.post7.content',
    excerptKey: 'blog.post7.excerpt',
    date: '2026-03-01',
    readTime: '16 min',
    category: 'Grāmatvedība',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  '10-dokumentu-apstrades-procesi-ko-ai-var-automatizet': {
    titleKey: 'blog.post8.title',
    contentKey: 'blog.post8.content',
    excerptKey: 'blog.post8.excerpt',
    date: '2026-03-04',
    readTime: '14 min',
    category: 'Dokumenti',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'ka-izvelities-ai-platformu-uznemumam': {
    titleKey: 'blog.post9.title',
    contentKey: 'blog.post9.content',
    excerptKey: 'blog.post9.excerpt',
    date: '2026-03-08',
    readTime: '14 min',
    category: 'AI Platformas',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'ai-chatbots-latviesu-valoda': {
    titleKey: 'blog.post10.title',
    contentKey: 'blog.post10.content',
    excerptKey: 'blog.post10.excerpt',
    date: '2026-03-11',
    readTime: '11 min',
    category: 'AI Čatboti',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'ka-ai-maina-gramatvedibas-biroju-darbu': {
    titleKey: 'blog.post11.title',
    contentKey: 'blog.post11.content',
    excerptKey: 'blog.post11.excerpt',
    date: '2026-03-15',
    readTime: '14 min',
    category: 'Grāmatvedība',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'e-komercijas-automatizacija-7-veidi': {
    titleKey: 'blog.post12.title',
    contentKey: 'blog.post12.content',
    excerptKey: 'blog.post12.excerpt',
    date: '2026-03-18',
    readTime: '12 min',
    category: 'E-komercija',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'ai-terminu-vardnica': {
    titleKey: 'blog.post13.title',
    contentKey: 'blog.post13.content',
    excerptKey: 'blog.post13.excerpt',
    date: '2026-03-22',
    readTime: '25 min',
    category: 'Izglītība',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  '5-kludas-ai-ieviesana': {
    titleKey: 'blog.post14.title',
    contentKey: 'blog.post14.content',
    excerptKey: 'blog.post14.excerpt',
    date: '2026-03-25',
    readTime: '11 min',
    category: 'AI',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'gramatvedibas-birojs-ietaupija-25-stundas': {
    titleKey: 'blog.post15.title',
    contentKey: 'blog.post15.content',
    excerptKey: 'blog.post15.excerpt',
    date: '2026-03-29',
    readTime: '10 min',
    category: 'Gadījuma izpēte',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'ai-vs-tradicionala-klientu-apkalposana': {
    titleKey: 'blog.post16.title',
    contentKey: 'blog.post16.content',
    excerptKey: 'blog.post16.excerpt',
    date: '2026-04-01',
    readTime: '12 min',
    category: 'AI Čatboti',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'ka-automatizet-rekinu-apstradi-ar-ai': {
    titleKey: 'blog.post17.title',
    contentKey: 'blog.post17.content',
    excerptKey: 'blog.post17.excerpt',
    date: '2026-04-05',
    readTime: '14 min',
    category: 'Grāmatvedība',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
  'labakie-ai-riki-latvijas-uznemumiem-2026-atjaunots': {
    titleKey: 'blog.post18.title',
    contentKey: 'blog.post18.content',
    excerptKey: 'blog.post18.excerpt',
    date: '2026-04-08',
    readTime: '16 min',
    category: 'AI',
    author: 'Māris Ozols',
    authorRole: 'AI automatizācijas eksperts',
  },
};

const months = [
  'janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs',
  'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris',
];

/* "2026-04-08" becomes "2026. gada 8. aprīlis". */
const formatDate = (iso: string) => {
  const [year, month, day] = iso.split('-').map(Number);
  return `${year}. gada ${day}. ${months[month - 1]}`;
};

// Render content with markdown-like support: ## and ### headings, "- " lists, **bold** and [links](path)
const renderContent = (content: string) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let currentList: string[] = [];
  let key = 0;

  const renderInlineFormatting = (text: string): React.ReactNode[] => {
    const parts = text.split(/(\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\))/g);
    return parts.map((part, i) => {
      if (!part) return null;
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        return (
          <Link key={i} to={linkMatch[2]} className="link">
            {linkMatch[1]}
          </Link>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ');
      elements.push(
        <p key={key++} className="mt-0 mb-5">
          {renderInlineFormatting(text)}
        </p>
      );
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc pl-6 space-y-2 mt-0 mb-6">
          {currentList.map((item, i) => (
            <li key={i}>{renderInlineFormatting(item)}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const flush = () => {
    flushParagraph();
    flushList();
  };

  for (const line of lines) {
    if (line.startsWith('### ')) {
      flush();
      elements.push(
        <h3 key={key++} className="text-xl sm:text-2xl font-bold leading-snug mt-10 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('## ')) {
      flush();
      elements.push(
        <h2 key={key++} className="display-3 mt-14 mb-5 first:mt-0" id={line.slice(3).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9āčēģīķļņšūž-]/g, '')}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('- ')) {
      flushParagraph();
      currentList.push(line.slice(2));
    } else if (line.trim() === '') {
      flush();
    } else {
      flushList();
      currentParagraph.push(line);
    }
  }
  flush();

  return elements;
};

// Generate table of contents from H2 headings
const generateTOC = (content: string) => {
  const h2s: { text: string; id: string }[] = [];
  for (const line of content.split('\n')) {
    if (line.startsWith('## ')) {
      const text = line.slice(3);
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9āčēģīķļņšūž-]/g, '');
      h2s.push({ text, id });
    }
  }
  return h2s;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const post = slug ? blogPostData[slug] : null;
  /* The translation carries a leading arrow; link text has none. */
  const backLabel = t('blog.back').replace(/^←\s*/, '');

  if (!post) {
    return (
      <PageTransition>
        <PageShell>
          <div className="wrap band">
            <h1 className="display-1 m-0">Raksts nav atrasts</h1>
            <p className="mt-6 mb-0">
              <Link to="/blog" className="link">
                {backLabel}
              </Link>
            </p>
          </div>
        </PageShell>
      </PageTransition>
    );
  }

  const content = t(post.contentKey);
  const toc = generateTOC(content);
  const author = post.author || 'automatizacijas.lv';
  const authorRole = post.authorRole || 'AI automatizācijas eksperts';

  const faqItems: { question: string; answer: string }[] = [];
  const faqMatch = content.match(/## Biežāk uzdotie jautājumi[\s\S]*$/);
  if (faqMatch) {
    const faqContent = faqMatch[0];
    const qaPairs = faqContent.split(/### /g).slice(1);
    for (const pair of qaPairs) {
      const lines = pair.trim().split('\n');
      const question = lines[0]?.trim();
      const answer = lines.slice(1).join(' ').trim();
      if (question && answer) {
        faqItems.push({ question, answer });
      }
    }
  }

  return (
    <PageTransition>
      <Helmet>
        <title>{t(post.titleKey)} | automatizacijas.lv</title>
        <meta name="description" content={t(post.excerptKey)} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={author} />
        <link rel="canonical" href={`https://automatizacijas.lv/blog/${slug}`} />
        <link rel="alternate" hreflang="lv" href={`https://automatizacijas.lv/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://automatizacijas.lv/blog/${slug}`} />
        <meta property="og:title" content={t(post.titleKey)} />
        <meta property="og:description" content={t(post.excerptKey)} />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:author" content={author} />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t(post.titleKey)} />
        <meta name="twitter:description" content={t(post.excerptKey)} />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": t(post.titleKey),
          "description": t(post.excerptKey),
          "image": {
            "@type": "ImageObject",
            "url": "https://automatizacijas.lv/og-image.jpg",
            "width": 1200,
            "height": 630
          },
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Person",
            "name": author,
            "jobTitle": authorRole
          },
          "publisher": {
            "@type": "Organization",
            "name": "automatizacijas.lv",
            "url": "https://automatizacijas.lv",
            "logo": {
              "@type": "ImageObject",
              "url": "https://automatizacijas.lv/favicon.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://automatizacijas.lv/blog/${slug}`
          },
          "articleSection": post.category,
          "inLanguage": "lv",
          "wordCount": content.split(/\s+/).length,
          "timeRequired": `PT${post.readTime.replace(' min', 'M')}`
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://automatizacijas.lv/blog" },
            { "@type": "ListItem", "position": 3, "name": t(post.titleKey), "item": `https://automatizacijas.lv/blog/${slug}` }
          ]
        })}</script>
        {faqItems.length > 0 && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}</script>
        )}
      </Helmet>
      <PageShell>
        <Breadcrumbs
          items={[
            { label: 'Sākums', to: '/' },
            { label: 'Blogs', to: '/blog' },
            { label: t(post.titleKey) },
          ]}
        />

        <article>
          <header className="wrap pt-8 pb-10 lg:pt-12 lg:pb-14">
            <h1 className="display-1 m-0 max-w-[16em]">{t(post.titleKey)}</h1>
            <p className="mt-6 lg:mt-8 mb-0 max-w-[42em] text-muted-foreground">
              <span className="font-semibold text-foreground">{author}</span>, {authorRole}.{' '}
              <time dateTime={post.date}>{formatDate(post.date)}</time>, lasīšanas laiks {post.readTime}.
              Kategorija: {post.category}.
            </p>
          </header>

          <div className="wrap pb-16 lg:pb-24">
            <div className="border-t-2 border-foreground pt-8 lg:pt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Table of contents */}
              {toc.length > 2 && (
                <nav aria-label="Satura rādītājs" className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
                  <h2 className="m-0 font-sans text-lg font-bold leading-snug">Satura rādītājs</h2>
                  <ol className="list-none p-0 m-0 mt-4 border-t border-border">
                    {toc.map((item, i) => (
                      <li key={i} className="border-b border-border">
                        <a
                          href={`#${item.id}`}
                          className="block py-2.5 text-muted-foreground no-underline hover:text-primary hover:underline underline-offset-4"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className="min-w-0 lg:col-span-8 lg:col-start-5">
                <div className="max-w-[42em] text-lg leading-relaxed">{renderContent(content)}</div>
                <p className="mt-12 mb-0 pt-6 max-w-[42em] border-t border-border">
                  <Link to="/blog" className="link">
                    {backLabel}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Links */}
        {slug && relatedLinks[slug] && (
          <Section title="Saistītie pakalpojumi" tone="sheet">
            <RuledList items={relatedLinks[slug].map((link) => ({ title: link.label, to: link.path }))} />
          </Section>
        )}

        <CtaBand
          title="Vēlaties automatizēt šo procesu?"
          text="Pieteikties bezmaksas konsultācijai un uzziniet, kā AI var palīdzēt jūsu uzņēmumam."
          primary={{ to: '/contact', label: 'Pieteikties bezmaksas konsultācijai' }}
        />
      </PageShell>
    </PageTransition>
  );
};

export default BlogPost;
