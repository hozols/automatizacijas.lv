import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
import Reveal from '@/components/motion/Reveal';
import Counter from '@/components/motion/Counter';

const cases = [
  { client: 'Kleen1', work: 'Līgumu sagatavošana un izsūtīšana pēc klienta sapulces', from: 20, to: 3, suffix: ' min', note: 'par katru līgumu, bija 20' },
  { client: 'Signingclients.com', work: 'LinkedIn rakstu sagatavošana pēc autora balss un tēmas', from: 0, to: 50, suffix: '+', note: 'veidnes, no kurām sistēma izvēlas pati' },
  { client: 'The Artisan Agency', work: 'Jaunu klientu uzņemšana un iknedēļas materiālu piegāde', from: 0, to: 5, suffix: ' h', note: 'nedēļā atpakaļ komandai' },
];

const quotes = [
  {
    lang: 'lv',
    text: 'Pasūtījām datu analīzes risinājumu publiskajiem iepirkumiem saules paneļu nozarē, un šis risinājums mums ļoti palīdzēja tāmējot dažādus objektus un prognozējot konkurentu cenu piedāvājumus.',
    author: 'Dāvids Krastiņš',
    role: 'direktors, BN Darbi',
  },
  {
    lang: 'en',
    text: "He's not only a knowledgable professional, but more importantly great to communicate with, so I felt part of the project and knew what was happening at each stage.",
    author: 'Filip Łysikowski',
    role: 'signingclients.com',
  },
];

/* The white surface: three flat case cards and two flat testimonial cards. */
const HomeCases = () => {
  return (
    <section id="cases" className="band">
      <div className="wrap">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label m-0 text-muted-foreground">Gadījumi</p>
            <h2 className="display-2 m-0 mt-4">
              <Reveal text="Paveiktie darbi" />
            </h2>
            <p className="m-0 mt-4 max-w-[28em] text-muted-foreground">
              Katrs projekts sākas ar vienu konkrētu darbu, kas kādam komandā apnicis. Šeit ir trīs no tiem.
            </p>
          </div>
          <Link to="/portfolio" onClick={() => trackCTAClick('visi_projekti', 'home_cases')} className="btn btn-line shrink-0">
            Visi projekti
          </Link>
        </div>

        <ol className="m-0 mt-10 grid list-none gap-4 p-0 md:grid-cols-3 lg:mt-12">
          {cases.map((item) => (
            <li key={item.client} className="sheet flex flex-col gap-4">
              <span className="label text-muted-foreground">{item.client}</span>
              <span className="display block text-[3.5rem] leading-none lg:text-[4rem]">
                <Counter from={item.from} to={item.to} suffix={item.suffix} />
              </span>
              <span className="caption block text-muted-foreground">{item.note}</span>
              <span className="display-3 mt-auto block pt-4">{item.work}</span>
            </li>
          ))}
        </ol>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {quotes.map((quote) => (
            <figure key={quote.author} className="sheet m-0 flex flex-col gap-6">
              <blockquote lang={quote.lang} className="m-0 text-[1.25rem] leading-normal tracking-tight">
                {quote.lang === 'lv' ? `„${quote.text}”` : `“${quote.text}”`}
              </blockquote>
              <figcaption className="caption mt-auto">
                <span className="text-foreground">{quote.author}</span>
                <span className="text-muted-foreground">, {quote.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCases;
