"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!inView || reducedMotion) {
      if (reducedMotion) setCurrent(value);
      return;
    }
    const controls = animate(0, value, { duration: 1.15, ease: [0.22, 1, 0.36, 1], onUpdate: (latest) => setCurrent(Math.round(latest)) });
    return () => controls.stop();
  }, [inView, reducedMotion, value]);

  return <span ref={ref}>{current}{suffix}</span>;
}
