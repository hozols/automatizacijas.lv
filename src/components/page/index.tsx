import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

/*
  Building blocks shared by every inner page. They carry the layout rules of
  the site so pages only supply content:
  - everything is left aligned on one grid (heading column + content column)
  - lists are ruled rows, never grids of identical cards
  - numbers appear only where the content is a real sequence (Steps)
*/

export const PageShell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-background text-foreground">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export interface Crumb {
  label: string;
  to?: string;
}

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Atrašanās vieta" className="wrap pt-6 text-[0.9375rem] text-muted-foreground">
    <ol className="list-none p-0 m-0 flex flex-wrap gap-x-2">
      {items.map((item, i) => (
        <li key={item.label} className="flex gap-x-2">
          {item.to ? (
            <Link to={item.to} className="underline underline-offset-4 hover:text-foreground">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-foreground">
              {item.label}
            </span>
          )}
          {i < items.length - 1 && <span aria-hidden="true">/</span>}
        </li>
      ))}
    </ol>
  </nav>
);

interface PageHeroProps {
  title: React.ReactNode;
  lede?: React.ReactNode;
  /* Short plain facts shown as one ruled row under the lede. */
  facts?: string[];
  children?: React.ReactNode;
}

export const PageHero = ({ title, lede, facts, children }: PageHeroProps) => (
  <header className="wrap pt-8 pb-12 lg:pt-12 lg:pb-16">
    <h1 className="display-1 m-0 max-w-[15em]">{title}</h1>
    {lede && <p className="lede mt-6 lg:mt-8 mb-0 max-w-[40em]">{lede}</p>}
    {children && <div className="mt-8">{children}</div>}
    {facts && facts.length > 0 && (
      <ul className="list-none p-0 m-0 mt-10 lg:mt-12 border-t-2 border-foreground grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
        {facts.map((fact) => (
          <li key={fact} className="py-4 border-b border-border font-semibold">
            {fact}
          </li>
        ))}
      </ul>
    )}
  </header>
);

interface SectionProps {
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  /* "sheet" paints the band white, "ink" paints it navy. */
  tone?: 'paper' | 'sheet' | 'ink';
  children: React.ReactNode;
}

export const Section = ({ title, intro, id, tone = 'paper', children }: SectionProps) => (
  <section
    id={id}
    className={cn(
      tone === 'sheet' && 'bg-card border-y border-border',
      tone === 'ink' && 'band-ink'
    )}
  >
    <div className="wrap py-12 lg:py-20 grid gap-6 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-4">
        <h2 className="display-2 m-0">{title}</h2>
        {intro && (
          <p className={cn('mt-4 mb-0', tone === 'ink' ? 'text-ink-muted' : 'text-muted-foreground')}>{intro}</p>
        )}
      </div>
      <div className="lg:col-span-8 min-w-0">{children}</div>
    </div>
  </section>
);

/* Running text inside a Section. */
export const Prose = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn('prose-block space-y-4 text-lg leading-relaxed max-w-[40em]', className)}>{children}</div>
);

/* A plain list of statements, each marked with a highlighter tick. */
export const CheckList = ({ items, className }: { items: React.ReactNode[]; className?: string }) => (
  <ul className={cn('list-none p-0 m-0 border-t border-border', className)}>
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 py-3 border-b border-border">
        <span aria-hidden="true" className="mt-[0.45em] h-3 w-3 shrink-0 bg-marker" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export interface RuledItem {
  title: React.ReactNode;
  desc?: React.ReactNode;
  /* Optional short value shown on the right, e.g. a price or a duration. */
  aside?: React.ReactNode;
  to?: string;
}

/* Title + description rows. Replaces grids of cards. */
export const RuledList = ({ items, columns = 1 }: { items: RuledItem[]; columns?: 1 | 2 }) => (
  <ul
    className={cn(
      'list-none p-0 m-0 border-t-2 border-foreground',
      columns === 2 && 'md:grid md:grid-cols-2 md:gap-x-10'
    )}
  >
    {items.map((item, i) => {
      const body = (
        <>
          <span className="flex items-baseline justify-between gap-6">
            <span className="text-xl font-bold leading-snug">
              {item.to ? <span className="sweep">{item.title}</span> : item.title}
            </span>
            {item.aside && <span className="shrink-0 font-semibold text-primary">{item.aside}</span>}
          </span>
          {item.desc && <span className="block mt-1.5 text-muted-foreground">{item.desc}</span>}
        </>
      );
      return (
        <li key={i} className="border-b border-border">
          {item.to ? (
            <Link to={item.to} className="service-row block py-5 no-underline text-foreground">
              {body}
            </Link>
          ) : (
            <div className="py-5">{body}</div>
          )}
        </li>
      );
    })}
  </ul>
);

/* Numbered steps. Use only for a real sequence. */
export const Steps = ({ items }: { items: { title: React.ReactNode; desc: React.ReactNode }[] }) => (
  <ol className="list-none p-0 m-0 border-t-2 border-foreground">
    {items.map((item, i) => (
      <li key={i} className="grid grid-cols-[3.5rem_1fr] gap-x-4 py-5 border-b border-border">
        <span aria-hidden="true" className="font-display font-extrabold text-6xl leading-[0.9] text-primary">
          {i + 1}
        </span>
        <div>
          <h3 className="m-0 text-xl font-bold leading-snug">{item.title}</h3>
          <p className="mt-1.5 mb-0 text-muted-foreground">{item.desc}</p>
        </div>
      </li>
    ))}
  </ol>
);

export const Faq = ({ items }: { items: { question: string; answer: React.ReactNode }[] }) => (
  <div className="border-t-2 border-foreground">
    {items.map((faq) => (
      <details key={faq.question} className="faq border-b border-border">
        <summary className="flex items-baseline justify-between gap-6 py-5 text-lg font-bold leading-snug cursor-pointer list-none">
          {faq.question}
          <span aria-hidden="true" className="faq-sign shrink-0 font-sans font-normal text-3xl leading-none text-primary" />
        </summary>
        <div className="pb-6 max-w-[40em] text-muted-foreground">{faq.answer}</div>
      </details>
    ))}
  </div>
);

interface CtaBandProps {
  title: React.ReactNode;
  text?: React.ReactNode;
  primary?: { to: string; label: string; onClick?: () => void };
  secondary?: { to: string; label: string };
}

/* Closing call to action. One per page, at the end. */
export const CtaBand = ({
  title,
  text,
  primary = { to: '/contact', label: 'Pieteikt bezmaksas konsultāciju' },
  secondary,
}: CtaBandProps) => (
  <section className="band-action">
    <div className="wrap py-14 lg:py-20 grid gap-8 lg:grid-cols-12 lg:gap-14 lg:items-end">
      <div className="lg:col-span-7">
        <h2 className="display-2 m-0">{title}</h2>
        {text && <p className="mt-4 mb-0 text-lg max-w-[34em] opacity-90">{text}</p>}
      </div>
      <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
        <Link to={primary.to} onClick={primary.onClick} className="btn btn-invert">
          {primary.label}
        </Link>
        {secondary && (
          <Link to={secondary.to} className="btn btn-line btn-line-invert">
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  </section>
);
