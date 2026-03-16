"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";

interface GradientMeshProps {
  className?: string;
  reducedMotion?: boolean;
}

export function GradientMesh({ className, reducedMotion = false }: GradientMeshProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Only run on client to avoid hydration mismatch
    const canAnimate = !reducedMotion && 
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShouldAnimate(canAnimate);
  }, [reducedMotion]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Static gradient mesh for performance */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)"
        }}
      />
      
      {/* Minimal animated orbs - only on capable devices */}
      {shouldAnimate && (
        <>
          <motion.div
            className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/10 via-transparent to-transparent blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: 'transform' }}
          />
          
          <motion.div
            className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{ willChange: 'transform' }}
          />
        </>
      )}

      {/* Subtle noise texture - optimized */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          willChange: 'auto',
        }}
      />
    </div>
  );
}
