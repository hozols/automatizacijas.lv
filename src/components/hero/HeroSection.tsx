import React, { Suspense, lazy, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
import { useHeroMode } from './useHeroMode';

const TypewriterScene = lazy(() => import('./TypewriterScene'));

const IMAGE_SRC = '/images/hero-typewriter.webp';
const IMAGE_ALT = 'Rakstāmmašīna, kas raksta: rēķini apstrādāti';

/* A failed chunk or GLB load must not take the page down: report and show the image. */
class SceneErrorBoundary extends React.Component<{ onError: () => void; children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: unknown) {
    console.error('hero scene failed', error);
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function HeroVisual() {
  const mode = useHeroMode();
  const [ready, setReady] = useState(false);
  const [lost, setLost] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onLost = useCallback(() => setLost(true), []);
  const show3d = mode === '3d' && !lost;

  return (
    <div className="relative aspect-[4/3] w-full" data-hero-mode={show3d ? '3d' : 'image'} data-hero-ready={ready ? '1' : '0'}>
      <img
        src={IMAGE_SRC}
        alt={IMAGE_ALT}
        width={1200}
        height={900}
        decoding="async"
        {...{ fetchpriority: 'low' }}
        className="absolute inset-0 h-full w-full object-contain"
        style={{ opacity: show3d && ready ? 0 : 1, transition: 'opacity 300ms ease' }}
      />
      {show3d && (
        <div className="absolute inset-0" style={{ opacity: ready ? 1 : 0, transition: 'opacity 300ms ease' }} aria-hidden="true">
          <SceneErrorBoundary onError={onLost}>
            <Suspense fallback={null}>
              <TypewriterScene onReady={onReady} onContextLost={onLost} />
            </Suspense>
          </SceneErrorBoundary>
        </div>
      )}
    </div>
  );
}

/* Tooling only: ?hero=capture renders the scene alone at 1200x900 with the first line typed. */
function CaptureStage() {
  const [ready, setReady] = useState(false);
  return (
    <div className="relative" style={{ width: 1200, height: 900 }} data-hero-mode="capture" data-hero-ready={ready ? '1' : '0'}>
      <Suspense fallback={null}>
        <TypewriterScene staticLine onReady={() => setReady(true)} />
      </Suspense>
    </div>
  );
}

const HeroSection = () => {
  const mode = useHeroMode();
  if (mode === 'capture') return <CaptureStage />;

  return (
    <section className="wrap pt-10 pb-16 sm:pt-14 lg:pt-16 lg:pb-24">
      <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h1 className="display-1 m-0">
            AI automatizācija <br className="hidden lg:inline" />
            darbiem, kas birojā <br className="hidden lg:inline" />
            atkārtojas katru dienu
          </h1>

          <p className="lede mt-6 lg:mt-8 text-foreground">
            Rēķinu ievade, līgumu sagatavošana, atbildes uz klientu jautājumiem. Uzbūvējam sistēmu, kas šos
            darbus izdara pati, un pieslēdzam to programmām, kuras jau lietojat.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" onClick={() => trackCTAClick('bezmaksas_konsultacija', 'hero')} className="btn btn-solid">
              Pieteikt bezmaksas konsultāciju
            </Link>
            <Link to="/portfolio" onClick={() => trackCTAClick('skatit_darbus', 'hero')} className="btn btn-line">
              Skatīt paveiktos darbus
            </Link>
          </div>

          <p className="mt-4 mb-0 text-muted-foreground">Konsultācija ir bez maksas un bez saistībām.</p>
        </div>

        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
