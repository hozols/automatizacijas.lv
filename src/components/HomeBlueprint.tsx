import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from '@/components/motion/Parallax';
import Counter from '@/components/motion/Counter';
import { OBJECT_ALT } from '@/components/objects/manifest';

/*
  A full-bleed blueprint of the filing cabinet, drawn as white lines on
  black, with one case in a flat charcoal card on the left.
*/
const HomeBlueprint = () => {
  return (
    <section className="blueprint-panel band-ink relative h-screen min-h-[40rem] overflow-hidden" aria-labelledby="blueprint-case">
      <Parallax factor={0.12} className="absolute inset-0">
        <img
          src="/objects/filing-cabinet-wide-1600.webp"
          srcSet="/objects/filing-cabinet-wide-800.webp 800w, /objects/filing-cabinet-wide-1600.webp 1600w"
          sizes="100vw"
          alt={OBJECT_ALT['filing-cabinet']}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="blueprint-img"
        />
      </Parallax>

      <div className="wrap absolute inset-0 flex items-center">
        <div className="case-card">
          <p className="label m-0 text-smoke">Gadījums</p>
          <p className="display-3 m-0 mt-4 max-w-[14em]">Kleen1 sagatavo un nosūta līgumu pēc katras klienta sapulces.</p>
          <p className="display m-0 mt-8 text-[clamp(3rem,6vw,4rem)] leading-none">
            <Counter from={20} to={3} suffix=" min" /> <span className="text-smoke">no 20</span>
          </p>
          <p className="caption m-0 mt-3 text-ink-muted">par katru līgumu, bez roku darba</p>
          <p className="m-0 mt-8">
            <Link to="/portfolio" className="link" id="blueprint-case">
              Visi paveiktie darbi
            </Link>
          </p>
        </div>
      </div>

      <p className="micro absolute bottom-4 right-6 m-0 max-w-[60vw] text-right text-ink-foreground/60">
        Kartotēkas skapis, 3D modelis
      </p>
    </section>
  );
};

export default HomeBlueprint;
