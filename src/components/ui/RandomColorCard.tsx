"use client";

import { motion } from "framer-motion";
import { useRandomColor } from "../../hooks/useRandomColor";
import { ReactNode } from "react";

interface RandomColorCardProps {
  children: ReactNode;
  className?: string;
  borderSize?: string;
}

export function RandomColorCard({ 
  children, 
  className = "",
  borderSize = "border-2"
}: RandomColorCardProps) {
  const { currentColor, generateRandomColor } = useRandomColor();

  return (
    <motion.div
      className={`${borderSize} ${className} transition-all duration-300`}
      style={{ borderColor: currentColor }}
      whileHover={{
        boxShadow: `0 0 20px ${currentColor}`,
        scale: 1.02,
      }}
      onHoverStart={() => generateRandomColor()}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}
