import React from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';

const cases = [
  {
    client: 'Kleen1',
    work: 'Līgumu sagatavošana un izsūtīšana pēc klienta sapulces',
    result: 'No 20 minūtēm līdz 3 par katru līgumu',
  },
  {
    client: 'Signingclients.com',
    work: 'LinkedIn rakstu sagatavošana pēc autora balss un tēmas',
    result: 'Vairāk nekā 50 veidnes, no kurām sistēma izvēlas pati',
  },
  {
    client: 'The Artisan Agency',
    work: 'Jaunu klientu uzņemšana un iknedēļas materiālu piegāde',
    result: 'Vairāk nekā 5 stundas nedēļā atpakaļ komandai',
  },
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
    <section className="band band-ink">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="display-2 m-0">Paveiktie darbi</h2>
            <p className="mt-5 mb-0 text-ink-muted max-w-[24em]">
              Katrs projekts sākas ar vienu konkrētu darbu, kas kādam komandā apnicis. Šeit ir trīs no tiem.
            </p>
            <Link
              to="/portfolio"
              onClick={() => trackCTAClick('visi_projekti', 'home_cases')}
              className="btn btn-line mt-8 hover:!bg-ink-foreground hover:!text-ink hover:!border-ink-foreground"
            >
              Visi projekti
            </Link>
          </div>

          <ol className="lg:col-span-8 list-none p-0 m-0 border-t-2 border-ink-foreground">
            {cases.map((item) => (
              <li key={item.client} className="grid gap-x-8 gap-y-1 py-6 border-b border-ink-rule sm:grid-cols-5">
                <div className="sm:col-span-2">
                  <p className="m-0 font-bold">{item.client}</p>
                  <p className="m-0 text-ink-muted leading-snug">{item.work}</p>
                </div>
                <p className="display-3 m-0 sm:col-span-3">{item.result}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-14 mt-14 lg:mt-20">
          {quotes.map((quote) => (
            <figure key={quote.author} className="m-0">
              <blockquote lang={quote.lang} className="m-0 text-xl sm:text-[1.375rem] leading-normal">
                {quote.lang === 'lv' ? `„${quote.text}”` : `“${quote.text}”`}
              </blockquote>
              <figcaption className="mt-4 text-ink-muted">
                <span className="font-bold text-ink-foreground">{quote.author}</span>, {quote.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCases;
