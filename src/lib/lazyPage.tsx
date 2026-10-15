import React, { useEffect, useReducer } from 'react';
import Loader from '@/components/Loader';

/*
  Like React.lazy, but without Suspense: when the module has been preloaded
  (main.tsx does this for the current route before hydrating) the page
  renders synchronously, so prerendered HTML hydrates without SSR markers.
*/
export function lazyPage<P extends object>(importer: () => Promise<{ default: React.ComponentType<P> }>) {
  let Loaded: React.ComponentType<P> | null = null;
  let pending: Promise<void> | null = null;
  const preload = () => {
    if (!pending) {
      pending = importer().then((m) => {
        Loaded = m.default;
      });
    }
    return pending;
  };
  const Page = (props: P) => {
    const [, rerender] = useReducer((x: number) => x + 1, 0);
    useEffect(() => {
      if (!Loaded) preload().then(rerender);
    }, []);
    if (Loaded) return <Loaded {...props} />;
    return <Loader />;
  };
  Page.preload = preload;
  return Page as React.ComponentType<P> & { preload: () => Promise<void> };
}
