"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

type PortraitVariant = "cinematic" | "editorial" | "minimal" | "casual";
type PortraitSize = "sm" | "md" | "lg";

type CinematicPortraitProps = {
  imageSrc: string;
  alt: string;
  variant?: PortraitVariant;
  size?: PortraitSize;
  priority?: boolean;
  showMetadata?: boolean;
  enableMotion?: boolean;
  className?: string;
  metadata?: { name?: string; role?: string; location?: string };
};

export function CinematicPortrait({ imageSrc, alt, variant = "cinematic", size = "md", priority = false, showMetadata = false, enableMotion = true, className = "", metadata = {} }: CinematicPortraitProps) {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const imageX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 140, damping: 22 });
  const imageY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-4, 4]), { stiffness: 140, damping: 22 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!enableMotion || reducedMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const imageStyle = enableMotion && !reducedMotion ? { x: imageX, y: imageY } : undefined;
  const rootClass = ["cinematic-portrait", `portrait-${variant}`, `portrait-size-${size}`, className].filter(Boolean).join(" ");
  const sizes = size === "lg" ? "(max-width: 720px) 90vw, 440px" : size === "md" ? "(max-width: 720px) 80vw, 360px" : "(max-width: 720px) 70vw, 260px";

  return <motion.figure className={rootClass} data-matte="black" onPointerMove={handlePointerMove} onPointerLeave={resetPointer} initial={enableMotion && !reducedMotion ? { opacity: 0, y: 22, scale: .97 } : false} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .18 }} transition={{ duration: reducedMotion ? 0 : .72, ease: [0.22, 1, 0.36, 1] }}>
    <div className="portrait-backdrop" aria-hidden="true"><span className="portrait-grid" /><span className="portrait-orb" /><span className="portrait-orbit portrait-orbit-one" /><span className="portrait-orbit portrait-orbit-two" /><span className="portrait-corner portrait-corner-top" /><span className="portrait-corner portrait-corner-bottom" /></div>
    <motion.div className="portrait-subject" style={imageStyle}><Image src={imageSrc} alt={alt} fill priority={priority} sizes={sizes} /></motion.div>
    <div className="portrait-interface" aria-hidden="true"><span>PROFILE / 001</span><span>BUILDING / USEFUL SYSTEMS</span></div>
    {showMetadata && <figcaption className="portrait-metadata"><span><strong>{metadata.name ?? "Yusuf Aiman"}</strong><small>{metadata.role ?? "Developer / Founder"}</small></span><span><strong>{metadata.location ?? "Cyberjaya"}</strong><small>Malaysia</small></span></figcaption>}
  </motion.figure>;
}
