import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageShell, Breadcrumbs, PageHero, CtaBand } from '@/components/page';

const blogPosts = [
  {
    slug: 'gramatvedibas-programmas-latvija',
    titleKey: 'blog.post23.title',
    excerptKey: 'blog.post23.excerpt',
    date: '2026-10-20',
    readTime: '9 min',
    category: 'Grāmatvedība',
  },
  {
    slug: 'dokumentu-vadibas-sistema',
    titleKey: 'blog.post24.title',
    excerptKey: 'blog.post24.excerpt',
    date: '2026-10-20',
    readTime: '8 min',
    category: 'Automatizācija',
  },
  {
    slug: 'mi-akts-uznemumam',
    titleKey: 'blog.post25.title',
    excerptKey: 'blog.post25.excerpt',
    date: '2026-10-20',
    readTime: '9 min',
    category: 'AI',
  },
  {
    slug: 'e-rekini-latvija',
    titleKey: 'blog.post22.title',
    excerptKey: 'blog.post22.excerpt',
    date: '2026-10-20',
    readTime: '9 min',
    category: 'Grāmatvedība',
  },
  {
    slug: 'chatgpt-latviski-ka-lietot',
    titleKey: 'blog.post19.title',
    excerptKey: 'blog.post19.excerpt',
    date: '2026-07-30',
    readTime: '12 min',
    category: 'AI',
  },
  {
    slug: 'crm-sistema-ka-izveleties',
    titleKey: 'blog.post20.title',
    excerptKey: 'blog.post20.excerpt',
    date: '2026-10-20',
    readTime: '10 min',
    category: 'Automatizācija',
  },
  {
    slug: 'digitalizacija-uznemumam-ar-ko-sakt',
    titleKey: 'blog.post21.title',
    excerptKey: 'blog.post21.excerpt',
    date: '2026-07-30',
    readTime: '11 min',
    category: 'Digitalizācija',
  },
  {
    slug: 'labakie-ai-riki-latvijas-uznemumiem-2026-atjaunots',
    titleKey: 'blog.post18.title',
    excerptKey: 'blog.post18.excerpt',
    date: '2026-04-08',
    readTime: '16 min',
    category: 'AI',
  },
  {
    slug: 'ka-automatizet-rekinu-apstradi-ar-ai',
    titleKey: 'blog.post17.title',
    excerptKey: 'blog.post17.excerpt',
    date: '2026-04-05',
    readTime: '14 min',
    category: 'Grāmatvedība',
  },
  {
    slug: 'ai-vs-tradicionala-klientu-apkalposana',
    titleKey: 'blog.post16.title',
    excerptKey: 'blog.post16.excerpt',
    date: '2026-04-01',
    readTime: '12 min',
    category: 'AI Čatboti',
  },
  {
    slug: 'gramatvedibas-birojs-ietaupija-25-stundas',
    titleKey: 'blog.post15.title',
    excerptKey: 'blog.post15.excerpt',
    date: '2026-03-29',
    readTime: '10 min',
    category: 'Gadījuma izpēte',
  },
  {
    slug: '5-kludas-ai-ieviesana',
    titleKey: 'blog.post14.title',
    excerptKey: 'blog.post14.excerpt',
    date: '2026-03-25',
    readTime: '11 min',
    category: 'AI',
  },
  {
    slug: 'ai-terminu-vardnica',
    titleKey: 'blog.post13.title',
    excerptKey: 'blog.post13.excerpt',
    date: '2026-03-22',
    readTime: '25 min',
    category: 'Izglītība',
  },
  {
    slug: 'e-komercijas-automatizacija-7-veidi',
    titleKey: 'blog.post12.title',
    excerptKey: 'blog.post12.excerpt',
    date: '2026-03-18',
    readTime: '12 min',
    category: 'E-komercija',
  },
  {
    slug: 'ka-ai-maina-gramatvedibas-biroju-darbu',
    titleKey: 'blog.post11.title',
    excerptKey: 'blog.post11.excerpt',
    date: '2026-03-15',
    readTime: '14 min',
    category: 'Grāmatvedība',
  },
  {
    slug: 'ai-chatbots-latviesu-valoda',
    titleKey: 'blog.post10.title',
    excerptKey: 'blog.post10.excerpt',
    date: '2026-03-11',
    readTime: '11 min',
    category: 'AI Čatboti',
  },
  {
    slug: 'ka-izvelities-ai-platformu-uznemumam',
    titleKey: 'blog.post9.title',
    excerptKey: 'blog.post9.excerpt',
    date: '2026-03-08',
    readTime: '14 min',
    category: 'AI Platformas',
  },
  {
    slug: '10-dokumentu-apstrades-procesi-ko-ai-var-automatizet',
    titleKey: 'blog.post8.title',
    excerptKey: 'blog.post8.excerpt',
    date: '2026-03-04',
    readTime: '14 min',
    category: 'Dokumenti',
  },
  {
    slug: 'gramatvedibas-automatizacija-celvedis',
    titleKey: 'blog.post7.title',
    excerptKey: 'blog.post7.excerpt',
    date: '2026-03-01',
    readTime: '16 min',
    category: 'Grāmatvedība',
  },
  {
    slug: 'ai-chatbots-biznesam-ka-izvelities',
    titleKey: 'blog.post4.title',
    excerptKey: 'blog.post4.excerpt',
    date: '2026-02-14',
    readTime: '13 min',
    category: 'AI Čatboti',
  },
  {
    slug: 'ka-ai-transforme-biznesa-procesus',
    titleKey: 'blog.post1.title',
    excerptKey: 'blog.post1.excerpt',
    date: '2026-02-10',
    readTime: '12 min',
    category: 'AI',
  },
  {
    slug: 'ka-automatizet-e-pastu-apstradi-ar-ai',
    titleKey: 'blog.post5.title',
    excerptKey: 'blog.post5.excerpt',
    date: '2026-02-07',
    readTime: '12 min',
    category: 'Automatizācija',
  },
  {
    slug: 'automatizacijas-labas-prakses-maziem-uznemumiem',
    titleKey: 'blog.post2.title',
    excerptKey: 'blog.post2.excerpt',
    date: '2026-02-03',
    readTime: '14 min',
    category: 'Automatizācija',
  },
  {
    slug: 'labakie-ai-riki-uznemumiem-2026',
    titleKey: 'blog.post6.title',
    excerptKey: 'blog.post6.excerpt',
    date: '2026-01-30',
    readTime: '15 min',
    category: 'AI',
  },
  {
    slug: 'web-izstrades-tendences-ai-integracija',
    titleKey: 'blog.post3.title',
    excerptKey: 'blog.post3.excerpt',
    date: '2026-01-25',
    readTime: '11 min',
    category: 'Web izstrāde',
  },
];

const months = [
  'janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs',
  'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris',
];

/* "2026-04-08" becomes "2026. gada 8. aprīlis". */
const formatDate = (iso: string) => {
  const [year, month, day] = iso.split('-').map(Number);
  return `${year}. gada ${day}. ${months[month - 1]}`;
};

const Blog = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Helmet>
        <title>{t('blog.meta.title')}</title>
        <meta name="description" content={t('blog.meta.description')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://automatizacijas.lv/blog" />
        <link rel="alternate" hreflang="lv" href="https://automatizacijas.lv/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://automatizacijas.lv/blog" />
        <meta property="og:title" content={t('blog.meta.title')} />
        <meta property="og:description" content={t('blog.meta.description')} />
        <meta property="og:image" content="https://automatizacijas.lv/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="automatizacijas.lv" />
        <meta property="og:locale" content="lv_LV" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('blog.meta.title')} />
        <meta name="twitter:description" content={t('blog.meta.description')} />
        <meta name="twitter:image" content="https://automatizacijas.lv/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "AI Automatizācija Blog",
          "url": "https://automatizacijas.lv/blog",
          "description": t('blog.meta.description'),
          "publisher": {
            "@type": "Organization",
            "name": "automatizacijas.lv",
            "url": "https://automatizacijas.lv"
          },
          "inLanguage": "lv"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Sākums", "item": "https://automatizacijas.lv/" },
            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://automatizacijas.lv/blog" }
          ]
        })}</script>
      </Helmet>
      <PageShell>
        <Breadcrumbs items={[{ label: 'Sākums', to: '/' }, { label: t('blog.badge') }]} />

        <PageHero title={t('blog.title')} lede={t('blog.subtitle')}>
          <p className="m-0 max-w-[40em] text-muted-foreground">
            Mūsu blogā dalāmies ar praktiskiem padomiem par mākslīgā intelekta izmantošanu biznesā,
            automatizācijas labākajām praksēm un jaunākajām tehnoloģiju tendencēm Latvijā.
            Neatkarīgi no tā, vai esat tikai sācis interesēties par AI vai jau izmantojat automatizāciju savā uzņēmumā,
            šeit atradīsiet noderīgus resursus un idejas, kā uzlabot biznesa procesus ar mūsdienu tehnoloģijām.
          </p>
        </PageHero>

        <section className="wrap pb-16 lg:pb-24">
          <ul className="list-none p-0 m-0 border-t-2 border-foreground">
            {blogPosts.map((post) => (
              <li key={post.slug} className="border-b border-border">
                <Link
                  to={`/blog/${post.slug}`}
                  className="service-row group grid gap-x-8 gap-y-3 py-7 lg:py-9 lg:grid-cols-12 lg:items-baseline no-underline text-foreground"
                >
                  <p className="m-0 lg:col-span-3 text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>, lasīšanas laiks {post.readTime}
                    <span className="block font-medium text-foreground">{post.category}</span>
                  </p>
                  <div className="lg:col-span-7">
                    <h2 className="display-3 m-0">
                      <span className="sweep">{t(post.titleKey)}</span>
                    </h2>
                    <p className="mt-3 mb-0 max-w-[40em] text-muted-foreground group-hover:text-foreground transition-colors">
                      {t(post.excerptKey)}
                    </p>
                  </div>
                  <span className="lg:col-span-2 lg:text-right font-medium text-primary underline underline-offset-4 decoration-[1.5px]">
                    {t('blog.read_more')}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CtaBand
          title="Pieteikties bezmaksas konsultācijai"
          text="Uzziniet, kā AI var palīdzēt jūsu uzņēmumam."
        />
      </PageShell>
    </PageTransition>
  );
};

export default Blog;
