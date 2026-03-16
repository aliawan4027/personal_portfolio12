"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightSize?: number;
  spotlightColor?: string;
}

export function SpotlightCard({ 
  children, 
  className, 
  spotlightSize = 400,
  spotlightColor = "rgba(34, 197, 94, 0.15)"
}: SpotlightCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--card)] p-6",
        "overflow-hidden transition-all duration-300",
        "hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10",
        className
      )}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Spotlight effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle ${spotlightSize}px at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 40%)`,
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-green-500/0 opacity-0 pointer-events-none"
        whileHover={{
          borderColor: "rgb(34 197 94 / 0.3)",
          opacity: 1,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      />
    </motion.div>
  );
}
