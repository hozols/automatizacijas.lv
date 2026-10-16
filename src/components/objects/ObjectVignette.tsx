import React, { Suspense, lazy, useCallback, useState } from 'react';
import { useHeroMode } from '@/components/hero/useHeroMode';
import { OBJECT_ALT, objectSrc } from './manifest';

const ObjectScene = lazy(() => import('./ObjectScene'));

interface Props {
  slug: string;
  alt?: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  /* mount the live wireframe on top of the still when the environment allows (desktop, motion on, WebGL) */
  live?: boolean;
}

/* A failed chunk or GLB keeps the still in place. */
class SceneBoundary extends React.Component<{ onError: () => void; children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/*
  A 12px square with one office object drawn as white lines on black. The
  still WebP is always there (prerender, mobile, reduced motion); on a desktop
  with motion the same model turns slowly as a live wireframe, fading in
  over the still once it is ready. The hero decides the environment the
  same way, so both answer reduced motion and viewport changes together.
*/
export default function ObjectVignette({ slug, alt, sizes = '(min-width: 1024px) 15rem, 30vw', className = '', style, live = false }: Props) {
  const mode = useHeroMode();
  const [ready, setReady] = useState(false);
  const [lost, setLost] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onLost = useCallback(() => setLost(true), []);
  const show3d = live && mode === '3d' && !lost;

  return (
    <span className={`vignette ${className}`} style={style} data-object={slug} data-object-live={show3d && ready ? '1' : '0'}>
      <img
        key={slug}
        src={objectSrc(slug, 800)}
        srcSet={`${objectSrc(slug, 400)} 400w, ${objectSrc(slug, 800)} 800w`}
        sizes={sizes}
        alt={alt ?? OBJECT_ALT[slug] ?? ''}
        width={800}
        height={800}
        loading="lazy"
        decoding="async"
        style={{ opacity: show3d && ready ? 0 : 1 }}
      />
      {show3d && (
        <span className="vignette-scene" aria-hidden="true" style={{ opacity: ready ? 1 : 0 }}>
          <SceneBoundary onError={onLost}>
            <Suspense fallback={null}>
              <ObjectScene slug={slug} onReady={onReady} onContextLost={onLost} />
            </Suspense>
          </SceneBoundary>
        </span>
      )}
    </span>
  );
}
