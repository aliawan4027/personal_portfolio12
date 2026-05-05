"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgb(34, 197, 94), rgb(16, 185, 129), rgb(52, 211, 153))",
      }}
    />
  );
}
