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
  // a person's environment (motion setting, viewport) beats the tooling override;
  // the override only makes automation behave like a real visitor
  if (env.reducedMotion) return 'image';
  if (env.width < HERO_MIN_WIDTH) return 'image';
  if (env.override === '3d') return '3d';
  if (env.webdriver) return 'image';
  return '3d';
}

let webgl2Probe: boolean | null = null;
export function hasWebGL2(): boolean {
  if (webgl2Probe !== null) return webgl2Probe;
  try {
    const c = document.createElement('canvas');
    webgl2Probe = !!c.getContext('webgl2');
  } catch {
    webgl2Probe = false;
  }
  return webgl2Probe;
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
