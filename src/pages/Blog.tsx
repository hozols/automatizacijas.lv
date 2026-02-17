import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    titleKey: 'blog.post1.title',
    excerptKey: 'blog.post1.excerpt',
    date: '2026-02-10',
    readTime: '5 min',
    category: 'AI',
  },
  {
    id: 2,
    titleKey: 'blog.post2.title',
    excerptKey: 'blog.post2.excerpt',
    date: '2026-02-03',
    readTime: '7 min',
    category: 'Automatizācija',
  },
  {
    id: 3,
    titleKey: 'blog.post3.title',
    excerptKey: 'blog.post3.excerpt',
    date: '2026-01-25',
    readTime: '4 min',
    category: 'Web izstrāde',
  },
];

const Blog = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Helmet>
        <title>{t('blog.meta.title')}</title>
        <meta name="description" content={t('blog.meta.description')} />
      </Helmet>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen size={16} />
              {t('blog.badge')}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('blog.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="pb-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-6">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="block">
                  <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {t(post.titleKey)}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {t(post.excerptKey)}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                        {t('blog.read_more')}
                        <ArrowRight size={14} />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Blog;
