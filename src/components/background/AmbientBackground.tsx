"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function getPageAtmosphere(pathname: string) {
  if (pathname.startsWith("/projects/")) return "projects";
  if (pathname === "/") return "home";
  return pathname.replace(/^\//, "") || "home";
}

export function AmbientBackground() {
  const pathname = usePathname();
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    let pointerFrame = 0;
    let scrollFrame = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.4;
    let currentX = targetX;
    let currentY = targetY;
    let targetScroll = 0;
    let currentScroll = 0;

    const writePointerValues = () => {
      pointerFrame = 0;
      if (document.hidden) return;

      currentX += (targetX - currentX) * 0.095;
      currentY += (targetY - currentY) * 0.095;
      const xRatio = currentX / Math.max(window.innerWidth, 1);
      const yRatio = currentY / Math.max(window.innerHeight, 1);
      background.style.setProperty("--pointer-x", `${xRatio * 100}%`);
      background.style.setProperty("--pointer-y", `${yRatio * 100}%`);
      background.style.setProperty("--cursor-shift-x", `${(xRatio - 0.5) * 22}px`);
      background.style.setProperty("--cursor-shift-y", `${(yRatio - 0.4) * 16}px`);

      if (Math.abs(targetX - currentX) > 0.25 || Math.abs(targetY - currentY) > 0.25) {
        pointerFrame = window.requestAnimationFrame(writePointerValues);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointerQuery.matches || reduceMotionQuery.matches || document.hidden) return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(writePointerValues);
    };

    const writeScrollValue = () => {
      scrollFrame = 0;
      if (document.hidden) return;
      currentScroll += (targetScroll - currentScroll) * 0.12;
      background.style.setProperty("--scroll-shift", `${currentScroll * -18}px`);
      if (Math.abs(targetScroll - currentScroll) > 0.25) scrollFrame = window.requestAnimationFrame(writeScrollValue);
    };

    const onScroll = () => {
      if (reduceMotionQuery.matches || document.hidden) return;
      const scrollableHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      targetScroll = window.scrollY / scrollableHeight;
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(writeScrollValue);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
        if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
        pointerFrame = 0;
        scrollFrame = 0;
      } else {
        onScroll();
      }
    };

    const onResize = () => {
      currentX = Math.min(currentX, window.innerWidth);
      currentY = Math.min(currentY, window.innerHeight);
      onScroll();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    onScroll();

    return () => {
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div ref={backgroundRef} className="ambient-background" data-page={getPageAtmosphere(pathname)} aria-hidden="true">
      <div className="ambient-aurora ambient-aurora-one" />
      <div className="ambient-aurora ambient-aurora-two" />
      <div className="ambient-aurora ambient-aurora-three" />
      <div className="ambient-aurora ambient-aurora-four" />
      <div className="ambient-tech-grid" />
      <div className="ambient-grid-highlight" />
      <div className="ambient-cursor-glow" />
      <div className="ambient-vignette" />
    </div>
  );
}
