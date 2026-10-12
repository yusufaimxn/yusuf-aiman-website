"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { revealTransition } from "@/lib/motion/variants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
};

export function Reveal({ children, className, delay = 0, distance = 28, once = true }: RevealProps) {
  const reducedMotion = useReducedMotion();
  return <motion.div className={className} initial={reducedMotion ? false : { opacity: 0, y: distance, filter: "blur(6px)" }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }} animate={reducedMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined} viewport={{ once, amount: 0.14 }} transition={{ ...revealTransition, delay }}>{children}</motion.div>;
}
