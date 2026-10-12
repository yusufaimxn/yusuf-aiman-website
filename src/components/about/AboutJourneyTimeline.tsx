"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { aboutJourney } from "@/data/about";

export function AboutJourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeStage = aboutJourney[activeIndex];

  return (
    <div className="about-journey-explorer">
      <div className="about-journey-steps" role="tablist" aria-label="Educational and professional journey">
        {aboutJourney.map((stage, index) => (
          <button
            className={index === activeIndex ? "about-journey-step active" : "about-journey-step"}
            key={stage.period}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`journey-panel-${index}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="about-journey-step-index">0{index + 1}</span>
            <span><strong>{stage.title}</strong><small>{stage.period}</small></span>
            <span className="about-journey-step-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          className="about-journey-panel"
          id={`journey-panel-${activeIndex}`}
          key={activeStage.period}
          role="tabpanel"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-journey-panel-top"><span>{activeStage.kind === "venture" ? "Professional milestone" : "Educational stage"}</span><span>{activeStage.period}</span></div>
          <h3>{activeStage.qualification}</h3>
          <p>{activeStage.description}</p>
          <ul>{activeStage.highlights?.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
