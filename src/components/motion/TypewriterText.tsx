"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export function TypewriterText({ roles }: { roles: string[] }) {
  const reducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const longestRole = useMemo(() => Math.max(...roles.map((role) => role.length)), [roles]);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(roles[0] ?? "");
      return;
    }
    const currentRole = roles[roleIndex] ?? roles[0] ?? "";
    const deleting = display === currentRole;
    const timeout = window.setTimeout(() => {
      if (!deleting) {
        setDisplay(currentRole.slice(0, display.length + 1));
      } else {
        setDisplay("");
        setRoleIndex((index) => (index + 1) % roles.length);
      }
    }, deleting ? 1500 : display.length === 0 ? 500 : 54);
    return () => window.clearTimeout(timeout);
  }, [display, reducedMotion, roleIndex, roles]);

  return <span className="typewriter-text" style={{ minWidth: `${longestRole + 1}ch` }}>{display}<span className="typewriter-cursor" aria-hidden="true">▌</span></span>;
}
