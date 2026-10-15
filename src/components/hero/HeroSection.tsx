import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
import { useHeroMode } from './useHeroMode';
import { usePinnedProgress } from '@/components/motion/usePinnedProgress';
import { isStaticMotion } from '@/components/motion/motionPrefs';
import Wordmark from './Wordmark';

const TypewriterScene = lazy(() => import('./TypewriterScene'));

const IMAGE_SRC = '/images/hero-typewriter.webp';
const IMAGE_SRC_600 = '/images/hero-typewriter-600.webp';
const IMAGE_ALT = 'Rakstāmmašīna, kas raksta: rēķini apstrādāti';
const PIN_MIN_WIDTH = 1024;

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

function HeroVisual({ scroll }: { scroll: { current: number } }) {
  const mode = useHeroMode();
  const [ready, setReady] = useState(false);
  const [lost, setLost] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onLost = useCallback(() => setLost(true), []);
  const show3d = mode === '3d' && !lost;

  return (
    <div className="hero-visual" data-hero-mode={show3d ? '3d' : 'image'} data-hero-ready={ready ? '1' : '0'}>
      <img
        src={IMAGE_SRC}
        srcSet={`${IMAGE_SRC_600} 600w, ${IMAGE_SRC} 1200w`}
        sizes="(min-width: 1024px) 60vw, 100vw"
        alt={IMAGE_ALT}
        width={1200}
        height={900}
        decoding="async"
        {...{ fetchpriority: 'high' }}
        className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
        style={{ opacity: show3d && ready ? 0 : 1 }}
      />
      {show3d && (
        <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: ready ? 1 : 0 }} aria-hidden="true">
          <SceneErrorBoundary onError={onLost}>
            <Suspense fallback={null}>
              <TypewriterScene scroll={scroll} onReady={onReady} onContextLost={onLost} />
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

/*
  The first room. On a desktop without reduced motion the room is 200vh tall
  and its stage sticks: scrolling dollies the camera back, turns the machine,
  opens the wordmark's tracking and darkens the room to ink. Everywhere else
  the room is a plain stack in its final state.
*/
const HeroSection = () => {
  const mode = useHeroMode();
  const [pinned, setPinned] = useState(false);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const decide = () => setPinned(!isStaticMotion() && window.innerWidth >= PIN_MIN_WIDTH);
    decide();
    const mq = window.matchMedia(`(min-width: ${PIN_MIN_WIDTH}px)`);
    mq.addEventListener('change', decide);
    return () => mq.removeEventListener('change', decide);
  }, []);

  const onUpdate = useCallback((p: number) => {
    const el = stage.current;
    if (!el) return;
    el.style.setProperty('--p', p.toFixed(4));
    el.style.setProperty('--p-ink', Math.min(1, Math.max(0, (p - 0.7) / 0.3)).toFixed(4));
    el.style.setProperty('--p-fade', Math.min(1, Math.max(0, p / 0.3)).toFixed(4));
  }, []);
  const onTenth = useCallback((tenth: number) => {
    stage.current?.parentElement?.setAttribute('data-hero-progress', tenth.toFixed(1));
  }, []);
  const [wrapper, progress] = usePinnedProgress<HTMLElement>(pinned, onTenth, onUpdate);

  if (mode === 'capture') return <CaptureStage />;

  return (
    <section ref={wrapper} className={`hero-wrap ${pinned ? 'is-pinned' : ''}`} data-hero-progress="0.0">
      <div ref={stage} className="hero-stage">
        <div className="hero-cluster wrap">
          <p className="label m-0">AI automatizācija uzņēmumiem</p>
          <h1 className="display-1 m-0 mt-4 max-w-[14em]">Darbi, kas birojā atkārtojas, izdarīti paši.</h1>
          <p className="m-0 mt-4 text-[0.9375rem] text-muted-foreground">
            <span className="font-medium text-foreground">Kleen1</span> · līgums no 20 minūtēm līdz 3
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" onClick={() => trackCTAClick('bezmaksas_konsultacija', 'hero')} className="btn btn-solid">
              Pieteikt konsultāciju
            </Link>
            <Link to="/portfolio" onClick={() => trackCTAClick('skatit_darbus', 'hero')} className="btn btn-line">
              Paveiktie darbi
            </Link>
          </div>
        </div>

        <Wordmark />
        <HeroVisual scroll={progress} />
      </div>
    </section>
  );
};

export default HeroSection;
