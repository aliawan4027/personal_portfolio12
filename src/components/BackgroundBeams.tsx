"use client";

import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BackgroundBeamsProps {
  className?: string;
  animated?: boolean;
  reducedMotion?: boolean;
}

export function BackgroundBeams({ className, animated = true, reducedMotion = false }: BackgroundBeamsProps) {
  // Start with false so server and initial client render match (no hydration mismatch).
  // After hydration, check the user's motion preference on the client.
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShouldAnimate(animated && !reducedMotion && !prefersReduced);
  }, [animated, reducedMotion]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Static gradient orbs - reduced opacity for performance */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-green-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/5 via-transparent to-transparent blur-3xl" />
      
      {/* Minimal animated beams - only on capable devices */}
      {shouldAnimate && (
        <div className="absolute inset-0">
          {/* Radial gradient overlay */}
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.02)_100%)]" />
          
          {/* Single animated beam for performance */}
          <motion.div
            className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-green-500/10 to-transparent"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: 'transform, opacity' }}
          />
        </div>
      )}
    </div>
  );
}
