"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionEase } from "@/lib/motion/variants";

type TextLine = { text: string; accent?: boolean };

export function TextReveal({ lines }: { lines: TextLine[] }) {
  const reducedMotion = useReducedMotion();
  return <h1 className="text-reveal">{lines.map((line, index) => <span className="text-reveal-line" key={line.text}><motion.span className={line.accent ? "text-reveal-inner text-reveal-accent" : "text-reveal-inner"} initial={reducedMotion ? false : { y: "115%", opacity: 0, filter: "blur(8px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.78, delay: reducedMotion ? 0 : 0.18 + index * 0.11, ease: motionEase }}>{line.text}</motion.span></span>)}</h1>;
}
