import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from '@/components/motion/Parallax';
import Counter from '@/components/motion/Counter';

/*
  A full-bleed painting with one case floating in a notched black card.
  David's Lavoisier portrait: a man at his desk with papers, 1788.
*/
const HomePainting = () => {
  return (
    <section className="painting-panel band-ink relative h-screen min-h-[40rem] overflow-hidden" aria-labelledby="painting-case">
      <Parallax factor={0.12} className="absolute inset-0">
        <img
          src="/paintings/lavoisier-1600.webp"
          srcSet="/paintings/lavoisier-800.webp 800w, /paintings/lavoisier-1600.webp 1600w"
          sizes="100vw"
          alt="Žaks Luī Davids, Antuāns Lorāns Lavuazjē un Marija Anna Lavuazjē, 1788. Vīrietis pie rakstāmgalda ar papīriem un spalvu."
          width={1600}
          height={2107}
          loading="lazy"
          decoding="async"
          className="painting-img"
        />
      </Parallax>

      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="case-card">
          <p className="label m-0 text-ink-muted">Gadījums</p>
          <p className="display-3 m-0 mt-5 max-w-[14em]">Kleen1 sagatavo un nosūta līgumu pēc katras klienta sapulces.</p>
          <p className="display m-0 mt-8 text-[clamp(3rem,6vw,5rem)] leading-none">
            <Counter from={20} to={3} suffix=" min" /> <span className="text-ink-muted">no 20</span>
          </p>
          <p className="m-0 mt-3 text-[0.9375rem] text-ink-muted">par katru līgumu, bez roku darba</p>
          <p className="m-0 mt-8">
            <Link to="/portfolio" className="link" id="painting-case">
              Visi paveiktie darbi
            </Link>
          </p>
          <span className="micro absolute bottom-5 left-6 text-ink-muted">Scroll</span>
        </div>
      </div>

      <p className="micro absolute bottom-4 right-6 m-0 max-w-[60vw] text-right text-ink-foreground/70">
        Jacques Louis David, Antoine Laurent Lavoisier and Marie Anne Lavoisier, 1788. The Met, Open Access (CC0)
      </p>
    </section>
  );
};

export default HomePainting;
