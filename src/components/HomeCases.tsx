import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
import Reveal from '@/components/motion/Reveal';
import Hairline from '@/components/motion/Hairline';
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

const HomeCases = () => {
  return (
    <section id="cases" className="band">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="display-2 m-0">
              <Reveal text="Paveiktie darbi" />
            </h2>
            <p className="m-0 mt-5 max-w-[24em] text-muted-foreground">
              Katrs projekts sākas ar vienu konkrētu darbu, kas kādam komandā apnicis. Šeit ir trīs no tiem.
            </p>
            <Link to="/portfolio" onClick={() => trackCTAClick('visi_projekti', 'home_cases')} className="btn btn-line mt-8">
              Visi projekti
            </Link>
          </div>
          <div className="lg:col-span-8">
            <Hairline />
            <ol className="m-0 list-none p-0">
              {cases.map((item) => (
                <li key={item.client} className="grid gap-x-8 gap-y-2 border-b border-border py-7 sm:grid-cols-5">
                  <div className="sm:col-span-2">
                    <p className="m-0 font-medium">{item.client}</p>
                    <p className="m-0 leading-snug text-muted-foreground">{item.work}</p>
                  </div>
                  <p className="m-0 sm:col-span-3">
                    <span className="display block text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
                      <Counter from={item.from} to={item.to} suffix={item.suffix} />
                    </span>
                    <span className="mt-1 block text-[0.9375rem] text-muted-foreground">{item.note}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-14">
          {quotes.map((quote) => (
            <figure key={quote.author} className="m-0">
              <blockquote lang={quote.lang} className="display-3 m-0 italic">
                {quote.lang === 'lv' ? `„${quote.text}”` : `“${quote.text}”`}
              </blockquote>
              <figcaption className="mt-4 text-[0.9375rem]">
                <span className="font-medium">{quote.author}</span>
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
