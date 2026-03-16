"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

interface LampProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "green" | "blue" | "purple";
}

export function Lamp({ className, size = "md", color = "green" }: LampProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32", 
    lg: "w-48 h-48"
  };

  const colorClasses = {
    green: "from-green-400 to-green-600",
    blue: "from-blue-400 to-blue-600", 
    purple: "from-purple-400 to-purple-600"
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* Glow effect */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-r",
          colorClasses[color],
          "blur-xl opacity-50"
        )}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Core lamp */}
      <div className={cn(
        "relative w-full h-full rounded-full bg-gradient-to-br",
        colorClasses[color],
        "shadow-2xl"
      )}>
        <motion.div
          className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Inner light */}
        <div className="absolute inset-4 rounded-full bg-white/40 backdrop-blur-md">
          <motion.div
            className="w-full h-full rounded-full bg-gradient-to-tr from-white/60 to-transparent"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      {/* Light rays */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute w-1 h-8 rounded-full bg-gradient-to-t",
              colorClasses[color],
              "opacity-60"
            )}
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-120%)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
