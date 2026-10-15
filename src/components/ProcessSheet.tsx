import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

/*
  The hero's demonstration: one real client process (Kleen1, contract
  preparation) going from manual to automatic, step by step.
*/
const STEPS = [
  'Sapulces piezīmes pārtop līguma punktos',
  'Līgums tiek sagatavots konkrētajam klientam',
  'Līgums aiziet klientam e-pastā',
  'Google Drive tiek izveidota klienta mape ar līgumu',
];

const MINUTES_BEFORE = 20;
const MINUTES_AFTER = 3;
const STEP_DELAY = 650;

const ProcessSheet = () => {
  const [done, setDone] = useState(0);
  const [minutes, setMinutes] = useState(MINUTES_BEFORE);
  const timers = useRef<number[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const play = useCallback(() => {
    clearTimers();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setDone(STEPS.length);
      setMinutes(MINUTES_AFTER);
      return;
    }

    setDone(0);
    setMinutes(MINUTES_BEFORE);

    STEPS.forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setDone(i + 1), 900 + i * STEP_DELAY));
    });

    const countStart = 900 + STEPS.length * STEP_DELAY;
    for (let m = MINUTES_BEFORE - 1; m >= MINUTES_AFTER; m--) {
      const tick = MINUTES_BEFORE - m;
      timers.current.push(window.setTimeout(() => setMinutes(m), countStart + tick * 55));
    }
  }, []);

  // Start once, when the sheet is actually on screen (on phones it sits below the fold).
  useEffect(() => {
    const node = rootRef.current;
    if (!node || !('IntersectionObserver' in window)) {
      play();
      return clearTimers;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          play();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [play]);

  const finished = done === STEPS.length && minutes === MINUTES_AFTER;

  return (
    <div ref={rootRef} className="sheet p-6 sm:p-8">
      <div className="flex items-baseline justify-between gap-4 pb-4 border-b-2 border-foreground">
        <h2 className="font-sans text-xl font-bold leading-tight">Līgums pēc klienta sapulces</h2>
        <span className="shrink-0 text-muted-foreground">Kleen1</span>
      </div>

      <ol className="m-0 p-0 list-none">
        {STEPS.map((step, i) => {
          const isDone = i < done;
          return (
            <li key={step} className="flex items-baseline justify-between gap-4 py-3.5 border-b border-border">
              <span className="leading-snug">
                <span className={cn('sweep', isDone && 'is-on')}>{step}</span>
              </span>
              <span
                className={cn(
                  'shrink-0 text-[0.9375rem] font-semibold tabular-nums',
                  isDone ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {isDone ? 'notiek pats' : 'ar rokām'}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="flex items-end justify-between gap-4 pt-5">
        <div>
          <p className="m-0 text-muted-foreground leading-snug">Laiks vienam līgumam</p>
          <p className="m-0 font-display font-extrabold text-6xl sm:text-7xl leading-none tabular-nums pt-1">
            {minutes} min
          </p>
        </div>
        <p className={cn('m-0 text-right text-muted-foreground leading-snug transition-opacity duration-300', finished ? 'opacity-100' : 'opacity-0')}>
          iepriekš <s>{MINUTES_BEFORE} min</s>
          <br />
          <Link to="/portfolio" className="link">
            Par šo projektu
          </Link>
        </p>
      </div>

      <button
        type="button"
        onClick={play}
        className={cn(
          'mt-4 text-[0.9375rem] font-semibold underline underline-offset-4 text-muted-foreground hover:text-foreground transition-opacity duration-300',
          finished ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        tabIndex={finished ? 0 : -1}
      >
        Rādīt vēlreiz
      </button>
    </div>
  );
};

export default ProcessSheet;
