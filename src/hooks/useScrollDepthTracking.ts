import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

export function useScrollDepthTracking() {
  const tracked = useRef(new Set<number>());

  useEffect(() => {
    const thresholds = [25, 50, 75, 90];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of thresholds) {
        if (percent >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
