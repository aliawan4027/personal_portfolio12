"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "../lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareOpacity?: number;
  scaleOnHover?: number;
  onClick?: () => void;
}

export function TiltCard({ 
  children, 
  className, 
  tiltAmount = 15,
  glareOpacity = 0.1,
  scaleOnHover = 1.05,
  onClick 
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -tiltAmount;
    const rotateY = (mouseX / (rect.width / 2)) * tiltAmount;

    x.set(rotateY);
    y.set(rotateX);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const transform = useMotionTemplate`perspective(1000px) rotateX(${ySpring}deg) rotateY(${xSpring}deg) scale(${isHovering ? scaleOnHover : 1})`;

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/20 to-transparent opacity-0 pointer-events-none"
        animate={{ opacity: isHovering ? glareOpacity : 0 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Content */}
      <div className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
}
