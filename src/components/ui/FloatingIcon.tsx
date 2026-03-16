"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingIconProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  glowColor?: string;
}

export function FloatingIcon({ 
  children, 
  delay = 0, 
  duration = 3,
  distance = 4,
  glowColor = "rgb(34, 197, 94)" // default green glow
}: FloatingIconProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      whileHover={{
        scale: 1.1,
        filter: `drop-shadow(0 0 8px ${glowColor})`,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
