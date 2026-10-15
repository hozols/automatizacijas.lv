/*
  Pure helpers for the motion primitives. Anything that animates on this site
  renders its final state when the visitor asked for reduced motion or when a
  headless browser (the prerender) is looking.
*/

export function isStaticMotion(): boolean {
  if (typeof window === 'undefined') return true;
  if (navigator.webdriver === true) return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function splitWords(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

/* Ease-out cubic between two numbers, t clamped to 0..1. */
export function counterValue(from: number, to: number, t: number): number {
  const c = Math.min(1, Math.max(0, t));
  const eased = 1 - Math.pow(1 - c, 3);
  return from + (to - from) * eased;
}

export function formatCount(value: number, suffix: string): string {
  return `${Math.round(value)}${suffix}`;
}

/*
  Progress of a sticky wrapper: 0 while its top is at or below the viewport
  top, 1 when its bottom meets the viewport bottom.
*/
export function pinnedProgress(top: number, height: number, viewportH: number): number {
  const distance = height - viewportH;
  if (distance <= 0) return top <= 0 ? 1 : 0;
  return Math.min(1, Math.max(0, -top / distance));
}
