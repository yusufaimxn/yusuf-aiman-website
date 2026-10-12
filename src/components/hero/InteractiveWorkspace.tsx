"use client";

import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useState } from "react";

const workspaceTechnologies = [
  { name: "Next.js", project: "Yusuf Aiman Website", focus: "App Router · UI systems" },
  { name: "TypeScript", project: "Omni Systems Internal", focus: "Typed product architecture" },
  { name: "Flutter", project: "MyMedik Mobile Application", focus: "Cross-platform mobile" },
  { name: "Laravel", project: "Backend toolkit", focus: "Server-side development" },
  { name: "Supabase", project: "Backend toolkit", focus: "Data and backend platform" },
];

const codeLines = [
  ["const", "developer", " = {"],
  ["  name:", ' "Yusuf Aiman",'],
  ["  focus:", ' "useful software",'],
  ["  stack:", " ["],
  ["    ", '"Next.js",'],
  ["    ", '"TypeScript",'],
  ["    ", '"Flutter",'],
  ["    ", '"Laravel"'],
  ["  ],"],
  ["  status:", ' "building"'],
  ["};"],
];

export function InteractiveWorkspace() {
  const [selectedTechnology, setSelectedTechnology] = useState(workspaceTechnologies[0]);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [2.4, -2.4]), { stiffness: 170, damping: 18 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-2.4, 2.4]), { stiffness: 170, damping: 18 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  }

  function resetTilt() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return <motion.div className="workspace-card" aria-label="Interactive developer workspace" onPointerMove={handlePointerMove} onPointerLeave={resetTilt} style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1100 }} initial={reducedMotion ? false : { opacity: 0, x: 45, rotate: 1.7 }} animate={{ opacity: 1, x: 0, rotate: 1.7 }} transition={{ delay: 0.36, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
    <div className="workspace-top"><div className="window-dots"><i /><i /><i /></div><span>yusuf-aiman / workspace</span><span>⌘ 01</span></div>
    <div className="workspace-main"><div className="workspace-rail"><span /><span /><span /><span /><span /></div><div className="workspace-code">{codeLines.map((line, index) => <motion.span className="code-line" key={`${line[0]}-${index}`} initial={reducedMotion ? false : { opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reducedMotion ? 0 : 0.52 + index * 0.055, duration: 0.3 }}><span className="code-number">{String(index + 1).padStart(2, "0")}</span><span className={index === 0 ? "code-purple" : index === 1 || index === 2 || index === 3 || index === 9 ? "code-blue" : "code-text"}>{line[0]}</span><span className={index > 0 ? "code-green" : "code-blue"}>{line[1]}</span><span className="code-text">{line[2]}</span></motion.span>)}<motion.span className="workspace-code-cursor" animate={reducedMotion ? undefined : { opacity: [1, 0, 1] }} transition={{ duration: 1.1, repeat: Infinity }}>_</motion.span>
      <motion.div className="workspace-profile" layout transition={{ duration: 0.32 }}><div><div className="profile-label">Currently exploring</div><div className="profile-name">{selectedTechnology.project}</div><div className="profile-role">{selectedTechnology.focus}</div></div><div className="online-indicator"><i /> available</div></motion.div>
    </div></div>
    <div className="workspace-tech-selector" role="list" aria-label="Select a technology"><span className="workspace-selector-label">Explore stack</span>{workspaceTechnologies.map((technology) => <button className={selectedTechnology.name === technology.name ? "workspace-tech active" : "workspace-tech"} onClick={() => setSelectedTechnology(technology)} key={technology.name} role="listitem">{technology.name}</button>)}</div>
    <AnimatePresence mode="wait"><motion.span className="workspace-selection-note" key={selectedTechnology.name} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}>Selected: {selectedTechnology.name}</motion.span></AnimatePresence>
  </motion.div>;
}
