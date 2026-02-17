import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, ArrowLeft } from 'lucide-react';

const blogPostData: Record<string, { titleKey: string; contentKey: string; excerptKey: string; date: string; readTime: string; category: string }> = {
  '1': {
    titleKey: 'blog.post1.title',
    contentKey: 'blog.post1.content',
    excerptKey: 'blog.post1.excerpt',
    date: '2026-02-10',
    readTime: '5 min',
    category: 'AI',
  },
  '2': {
    titleKey: 'blog.post2.title',
    contentKey: 'blog.post2.content',
    excerptKey: 'blog.post2.excerpt',
    date: '2026-02-03',
    readTime: '7 min',
    category: 'Automatizācija',
  },
  '3': {
    titleKey: 'blog.post3.title',
    contentKey: 'blog.post3.content',
    excerptKey: 'blog.post3.excerpt',
    date: '2026-01-25',
    readTime: '4 min',
    category: 'Web izstrāde',
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const post = id ? blogPostData[id] : null;

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
        <title>{t(post.titleKey)} | AI Automatizācija</title>
        <meta name="description" content={t(post.excerptKey)} />
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
                // Handle bold markdown-style text
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
          </div>
        </article>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default BlogPost;
