/*
  Shared by Reveal and Hairline. Puts `is-on` on an element when it enters
  the viewport, once. In static mode (reduced motion, prerender) it is on
  immediately. Elements already on screen at mount keep whatever state the
  HTML carried, so nothing that has painted vanishes to animate again.
  Returns the cleanup for useEffect.
*/
export function armOnEnter(el: HTMLElement | null, staticMotion: boolean, threshold: number): (() => void) | undefined {
  if (!el) return undefined;
  if (staticMotion) {
    el.classList.add('is-on');
    return undefined;
  }
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    el.classList.add('is-on');
    return undefined;
  }
  el.classList.remove('is-on');
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-on');
        io.disconnect();
      }
    },
    { threshold },
  );
  io.observe(el);
  return () => io.disconnect();
}
