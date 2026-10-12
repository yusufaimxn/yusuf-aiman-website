"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { featuredProjects } from "@/data/portfolio";
import { ProjectCard } from "@/components/projects/ProjectCard";

const AUTO_PLAY_MS = 3500;
const carouselItems = [...featuredProjects, ...featuredProjects];

export function FeaturedProjectsCarousel() {
  const reducedMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSlideRef = useRef<HTMLDivElement>(null);
  const interactionTimerRef = useRef<number | null>(null);
  const suppressClickRef = useRef(false);
  const [slideStep, setSlideStep] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);

  const activeProjectIndex = trackIndex % featuredProjects.length;
  const activeProject = featuredProjects[activeProjectIndex];

  useEffect(() => {
    const measure = () => {
      if (!firstSlideRef.current || !trackRef.current) return;
      const gap = Number.parseFloat(window.getComputedStyle(trackRef.current).columnGap) || 0;
      setSlideStep(firstSlideRef.current.getBoundingClientRect().width + gap);
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (firstSlideRef.current) observer.observe(firstSlideRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setIsDocumentHidden(document.hidden);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || isHovered || isFocused || isInteractionPaused || isDocumentHidden || !slideStep) return;

    const timer = window.setInterval(() => {
      setTrackIndex((current) => (current >= featuredProjects.length - 1 ? 0 : current + 1));
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [isDocumentHidden, isFocused, isHovered, isInteractionPaused, reducedMotion, slideStep]);

  useEffect(() => () => {
    if (interactionTimerRef.current) window.clearTimeout(interactionTimerRef.current);
  }, []);

  function pauseAfterInteraction() {
    setIsInteractionPaused(true);
    if (interactionTimerRef.current) window.clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = window.setTimeout(() => setIsInteractionPaused(false), AUTO_PLAY_MS + 1200);
  }

  function goNext() {
    pauseAfterInteraction();
    setTrackIndex((current) => (current >= featuredProjects.length - 1 ? 0 : current + 1));
  }

  function goPrevious() {
    pauseAfterInteraction();
    setTrackIndex((current) => (current <= 0 ? featuredProjects.length - 1 : current - 1));
  }

  function handleFocus(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
  }

  return (
    <div
      className="featured-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrevious();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        }
      }}
    >
      <div className="featured-carousel-viewport" ref={viewportRef}>
        <motion.div
          className="featured-carousel-track"
          ref={trackRef}
          animate={{ x: -(trackIndex * slideStep) }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: -(slideStep * featuredProjects.length), right: 0 }}
          dragElastic={0.08}
          dragMomentum={false}
          onDragStart={() => {
            pauseAfterInteraction();
            suppressClickRef.current = false;
          }}
          onDrag={(_, info) => {
            if (Math.abs(info.offset.x) > 8) suppressClickRef.current = true;
          }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -(slideStep * 0.16)) goNext();
            else if (info.offset.x > slideStep * 0.16) goPrevious();
            window.setTimeout(() => { suppressClickRef.current = false; }, 0);
          }}
          style={{ touchAction: "pan-y" }}
        >
          {carouselItems.map((project, index) => (
            <motion.div
              className="featured-carousel-slide"
              key={`${project.slug}-${index}`}
              ref={index === 0 ? firstSlideRef : undefined}
              onClickCapture={(event) => {
                if (!suppressClickRef.current) return;
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <ProjectCard project={project} index={index % featuredProjects.length} className="featured-carousel-card" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="featured-carousel-footer">
        <div className="featured-carousel-status" aria-live="polite">
          <span>Showing {String(activeProjectIndex + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}</span>
          <strong>{activeProject.name}</strong>
        </div>
        <div className="featured-carousel-actions">
          <div className="featured-carousel-dots" aria-label="Choose featured project">
            {featuredProjects.map((project, index) => (
              <button
                type="button"
                className={index === activeProjectIndex ? "active" : ""}
                aria-label={`Show ${project.name}`}
                aria-pressed={index === activeProjectIndex}
                key={project.slug}
                onClick={() => {
                  pauseAfterInteraction();
                  setTrackIndex(index);
                }}
              />
            ))}
          </div>
          <div className="featured-carousel-buttons">
            <button type="button" aria-label="Previous featured project" onClick={goPrevious}><ArrowLeft size={17} /></button>
            <button type="button" aria-label="Next featured project" onClick={goNext}><ArrowRight size={17} /></button>
          </div>
        </div>
      </div>
      <p className="sr-only">Drag, swipe, or use the previous and next buttons to browse featured projects.</p>
    </div>
  );
}
