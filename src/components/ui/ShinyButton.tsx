"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export function ShinyButton({ 
  children, 
  className, 
  onClick,
  href,
  variant = "primary",
  size = "md",
  disabled = false
}: ShinyButtonProps) {
  const Component = href ? "a" : "button";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base", 
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700",
    secondary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
  };

  return (
    <motion.div
      className="relative inline-block"
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Component
        className={cn(
          "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
          "overflow-hidden group",
          sizeClasses[size],
          variantClasses[variant],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        onClick={disabled ? undefined : onClick}
        href={href}
        disabled={disabled}
      >
        {/* Shiny effect */}
        {!disabled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
        )}
        
        {/* Content */}
        <span className="relative z-10">{children}</span>
        
        {/* Glow effect */}
        {!disabled && (
          <motion.div
            className="absolute inset-0 rounded-full bg-green-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </Component>
    </motion.div>
  );
}
