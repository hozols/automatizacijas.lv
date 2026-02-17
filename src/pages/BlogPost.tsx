import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';

const relatedLinks: Record<string, { label: string; path: string }[]> = {
  'ka-ai-transforme-biznesa-procesus': [
    { label: 'Kas ir mākslīgais intelekts?', path: '/kas-ir-maksligais-intelekts' },
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
  ],
  'automatizacijas-labas-prakses-maziem-uznemumiem': [
    { label: 'Procesu Automatizācija ar AI', path: '/procesu-automatizacija' },
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
  ],
  'web-izstrades-tendences-ai-integracija': [
    { label: 'Mājaslapu Izstrāde ar AI', path: '/majaslapu-izstrade' },
    { label: 'Kas ir mākslīgais intelekts?', path: '/kas-ir-maksligais-intelekts' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
  ],
  'ai-chatbots-biznesam-ka-izvelities': [
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'Kas ir mākslīgais intelekts?', path: '/kas-ir-maksligais-intelekts' },
    { label: 'Visi AI Pakalpojumi', path: '/services' },
  ],
  'ka-automatizet-e-pastu-apstradi-ar-ai': [
    { label: 'Procesu Automatizācija ar AI', path: '/procesu-automatizacija' },
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
    { label: 'Kas ir mākslīgais intelekts?', path: '/kas-ir-maksligais-intelekts' },
  ],
  'labakie-ai-riki-uznemumiem-2026': [
    { label: 'Kas ir mākslīgais intelekts?', path: '/kas-ir-maksligais-intelekts' },
    { label: 'Procesu Automatizācija', path: '/procesu-automatizacija' },
    { label: 'AI Čatbotu Izstrāde', path: '/chatbotu-izstrade' },
  ],
};

interface PostData {
  titleKey: string;
  contentKey: string;
  excerptKey: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPostData: Record<string, PostData> = {
  'ka-ai-transforme-biznesa-procesus': {
    titleKey: 'blog.post1.title',
    contentKey: 'blog.post1.content',
    excerptKey: 'blog.post1.excerpt',
    date: '2026-02-10',
    readTime: '5 min',
    category: 'AI',
  },
  'automatizacijas-labas-prakses-maziem-uznemumiem': {
    titleKey: 'blog.post2.title',
    contentKey: 'blog.post2.content',
    excerptKey: 'blog.post2.excerpt',
    date: '2026-02-03',
    readTime: '7 min',
    category: 'Automatizācija',
  },
  'web-izstrades-tendences-ai-integracija': {
    titleKey: 'blog.post3.title',
    contentKey: 'blog.post3.content',
    excerptKey: 'blog.post3.excerpt',
    date: '2026-01-25',
    readTime: '4 min',
    category: 'Web izstrāde',
  },
  'ai-chatbots-biznesam-ka-izvelities': {
    titleKey: 'blog.post4.title',
    contentKey: 'blog.post4.content',
    excerptKey: 'blog.post4.excerpt',
    date: '2026-02-14',
    readTime: '6 min',
    category: 'AI Čatboti',
  },
  'ka-automatizet-e-pastu-apstradi-ar-ai': {
    titleKey: 'blog.post5.title',
    contentKey: 'blog.post5.content',
    excerptKey: 'blog.post5.excerpt',
    date: '2026-02-07',
    readTime: '5 min',
    category: 'Automatizācija',
  },
  'labakie-ai-riki-uznemumiem-2026': {
    titleKey: 'blog.post6.title',
    contentKey: 'blog.post6.content',
    excerptKey: 'blog.post6.excerpt',
    date: '2026-01-30',
    readTime: '8 min',
    category: 'AI',
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const post = slug ? blogPostData[slug] : null;

  if (!post) {
    return (
      <PageTransition>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Raksts nav atrasts</h1>
            <Link to="/blog" className="text-primary hover:underline">
              {t('blog.back')}
            </Link>
          </div>
        </main>
        <Footer />
      </PageTransition>
    );
  }

  const contentParagraphs = t(post.contentKey).split('\n\n');

  return (
    <PageTransition>
      <Helmet>
        <title>{t(post.titleKey)} | automatizacijas.lv</title>
        <meta name="description" content={t(post.excerptKey)} />
        <link rel="canonical" href={`https://automatizacijas.lv/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://automatizacijas.lv/blog/${slug}`} />
        <meta property="og:title" content={t(post.titleKey)} />
        <meta property="og:description" content={t(post.excerptKey)} />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:locale" content="lv_LV" />
        <meta property="article:published_time" content={post.date} />
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
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Organization",
            "name": "automatizacijas.lv",
            "url": "https://automatizacijas.lv"
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
          "wordCount": t(post.contentKey).split(/\s+/).length,
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
      </Helmet>
      <Header />
      <main className="min-h-screen">
        <article className="py-16 sm:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              {t('blog.back')}
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} />
                {post.readTime}
              </span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              {t(post.titleKey)}
            </h1>

            <div className="prose prose-lg max-w-none">
              {contentParagraphs.map((paragraph, index) => {
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {parts.map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return (
                          <strong key={i} className="text-foreground font-semibold">
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      return <span key={i}>{part}</span>;
                    })}
                  </p>
                );
              })}
            </div>

            {/* Related Links */}
            {slug && relatedLinks[slug] && (
              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-lg font-semibold text-foreground mb-4">Saistītie pakalpojumi</h2>
                <div className="flex flex-wrap gap-3">
                  {relatedLinks[slug].map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-card/60 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default BlogPost;
