import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
import Reveal from '@/components/motion/Reveal';
import Hairline from '@/components/motion/Hairline';
import Hex from '@/components/motion/Hex';

/*
  The ink room. Three circular paintings of office work as it was done for
  five hundred years, and the six things the machine now does instead.
  Hovering a service puts its painting and name into one of the circles.
*/

interface Vignette {
  slug: string;
  caption: string;
  alt: string;
}

const DEFAULT_VIGNETTES: Vignette[] = [
  { slug: 'tax-collector', caption: 'Rēķini', alt: 'Nodokļu vācējs raksta grāmatā, Jans Sanderss van Hemesens, 17. gs.' },
  { slug: 'scholar-writing', caption: 'Līgumi', alt: 'Gijoms Budē raksta ar spalvu, Žans Klueē, ap 1536' },
  { slug: 'letter', caption: 'Atbildes', alt: 'Sieviete raksta vēstuli, Gerards ter Borhs, ap 1660' },
];

const services: { title: string; description: string; link: string; vignette: Vignette }[] = [
  {
    title: 'AI čatboti',
    description: 'Atbild klientiem latviski 24/7, pieslēdzas CRM un mājaslapai.',
    link: '/chatbotu-izstrade',
    vignette: { slug: 'letter', caption: 'AI čatboti', alt: 'Sieviete raksta vēstuli, Gerards ter Borhs' },
  },
  {
    title: 'Procesu automatizācija',
    description: 'E-pastu šķirošana, datu pārnešana starp sistēmām, atskaites bez roku darba.',
    link: '/procesu-automatizacija',
    vignette: { slug: 'merchant-van-dyck', caption: 'Procesi', alt: 'Tirgotājs Lukass van Ufels, Antonis van Deiks' },
  },
  {
    title: 'Dokumentu automatizācija',
    description: 'Rēķinu, līgumu un pavadzīmju datus AI nolasa, pārbauda un ievada jūsu sistēmā.',
    link: '/dokumentu-automatizacija',
    vignette: { slug: 'tax-collector', caption: 'Dokumenti', alt: 'Nodokļu vācējs raksta grāmatā, van Hemesens' },
  },
  {
    title: 'Grāmatvedības automatizācija',
    description: 'E-rēķini, bankas izrakstu saskaņošana un ievade grāmatvedības programmā.',
    link: '/gramatvedibas-automatizacija',
    vignette: { slug: 'merchant-hals', caption: 'Grāmatvedība', alt: 'Tirgotājs Pauls Veršūrs, Franss Halss, 1643' },
  },
  {
    title: 'Datu analīze',
    description: 'Automātiskas atskaites, tendences un prognozes no datiem, kas jums jau ir.',
    link: '/datu-analize',
    vignette: { slug: 'scholar-writing', caption: 'Analīze', alt: 'Gijoms Budē raksta, Žans Klueē' },
  },
  {
    title: 'AI darbinieki',
    description: 'AI darbinieki konkrētiem uzdevumiem, jūsu sistēmās un jūsu noteikumos.',
    link: '/ai-darbinieki',
    vignette: { slug: 'magdalen-letter', caption: 'AI darbinieki', alt: 'Marija Magdalēna raksta vēstuli, 16. gs.' },
  },
];

const HomeServices = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const vignettes = DEFAULT_VIGNETTES.map((v, i) =>
    hovered !== null && hovered % 3 === i ? services[hovered].vignette : v,
  );

  return (
    <section className="band band-ink">
      <div className="wrap">
        <div className="flex items-baseline justify-between gap-6">
          <span className="label text-ink-muted">Birojs kopš 1514. gada</span>
          <span className="label hidden text-ink-muted sm:inline">Sešas lietas, ko mašīna dara pati</span>
        </div>
        <h2 className="display-2 m-0 mt-8 text-center">
          <Reveal text="Ko mašīna dara pati" />
        </h2>

        <ul className="m-0 mt-14 grid list-none grid-cols-3 gap-4 p-0 sm:gap-8 lg:mt-20 lg:px-[8%]">
          {vignettes.map((v, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              <span className="display-3 mb-5 block">{v.caption}</span>
              <span className="vignette">
                <img
                  key={v.slug}
                  src={`/paintings/${v.slug}-800.webp`}
                  srcSet={`/paintings/${v.slug}-400.webp 400w, /paintings/${v.slug}-800.webp 800w`}
                  sizes="(min-width: 1024px) 15rem, 30vw"
                  alt={v.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="mt-5 flex gap-2" aria-hidden="true">
                <Hex filled={i === 0} />
                <Hex filled={i === 1} />
                <Hex filled={i === 2} />
              </span>
            </li>
          ))}
        </ul>

        <Hairline className="mt-16 lg:mt-24" />
        <ul className="m-0 list-none p-0" onMouseLeave={() => setHovered(null)}>
          {services.map((service, i) => (
            <li key={service.link} className="border-b border-ink-rule">
              <Link
                to={service.link}
                onClick={() => trackCTAClick(service.title, 'home_services')}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                className="group grid gap-x-8 gap-y-1 py-6 text-current no-underline lg:grid-cols-12 lg:items-baseline"
              >
                <span className="label lg:col-span-1">0{i + 1}</span>
                <span className="display-3 lg:col-span-4">
                  <Reveal text={service.title} stagger={30} />
                </span>
                <span className="text-ink-muted transition-colors group-hover:text-ink-foreground lg:col-span-7">
                  {service.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeServices;
