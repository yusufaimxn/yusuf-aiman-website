"use client";

import Link from "next/link";
import { ArrowUpRight, Boxes, Code2, Megaphone, Palette, Sparkles, Smartphone, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { aboutCapabilities } from "@/data/about";

const icons: Record<string, LucideIcon> = { code: Code2, mobile: Smartphone, workflow: Workflow, boxes: Boxes, palette: Palette, sparkles: Sparkles, megaphone: Megaphone };

export function AboutCapabilityGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeCapability = aboutCapabilities[activeIndex];
  const ActiveIcon = icons[activeCapability.icon];

  return (
    <div className="about-capability-explorer">
      <div className="about-capability-grid" role="tablist" aria-label="Yusuf's capabilities">
        {aboutCapabilities.map((capability, index) => {
          const Icon = icons[capability.icon];
          return (
            <button className={index === activeIndex ? "about-capability-card active" : "about-capability-card"} key={capability.title} type="button" role="tab" aria-selected={index === activeIndex} onClick={() => setActiveIndex(index)}>
              <span className="about-capability-number">{capability.index}</span>
              <span className="about-capability-icon"><Icon size={18} strokeWidth={1.6} /></span>
              <strong>{capability.title}</strong>
              <span className="about-capability-arrow" aria-hidden="true">↗</span>
            </button>
          );
        })}
      </div>

      <motion.div className="about-capability-detail" key={activeCapability.title} initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.28 }}>
        <div className="about-capability-detail-icon"><ActiveIcon size={24} strokeWidth={1.5} /></div>
        <div><p className="eyebrow">Selected capability</p><h3>{activeCapability.title}</h3><p>{activeCapability.description}</p><Link className="text-link" href={activeCapability.href}>{activeCapability.hrefLabel} <ArrowUpRight size={15} /></Link></div>
      </motion.div>
    </div>
  );
}
