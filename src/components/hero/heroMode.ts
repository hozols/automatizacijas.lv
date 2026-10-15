export type HeroMode = 'image' | '3d' | 'capture';

export interface HeroEnv {
  width: number;
  reducedMotion: boolean;
  webgl2: boolean;
  webdriver: boolean;
  /* value of the ?hero= query parameter, used by tooling only */
  override: string | null;
}

export const HERO_MIN_WIDTH = 768;

export function decideHeroMode(env: HeroEnv): HeroMode {
  if (!env.webgl2) return 'image';
  if (env.override === 'capture') return 'capture';
  if (env.override === '3d') return '3d';
  if (env.webdriver) return 'image';
  if (env.reducedMotion) return 'image';
  if (env.width < HERO_MIN_WIDTH) return 'image';
  return '3d';
}

export function hasWebGL2(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2');
  } catch {
    return false;
  }
}

export function readHeroEnv(): HeroEnv {
  return {
    width: window.innerWidth,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    webgl2: hasWebGL2(),
    webdriver: navigator.webdriver === true,
    override: new URLSearchParams(window.location.search).get('hero'),
  };
}
