"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function HoverCard({ children, className, href, onClick }: HoverCardProps) {
  const Component = href ? "a" : "div";
  const props = href ? { href } : { onClick };

  return (
    <motion.div
      className={cn(
        "relative cursor-pointer rounded-lg border border-transparent transition-all duration-300",
        "hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10",
        className
      )}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-green-500/0 opacity-0"
        whileHover={{
          borderColor: "rgb(34 197 94 / 0.5)",
          opacity: 1,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      />
      <Component {...props} className="relative z-10 block h-full">
        {children}
      </Component>
    </motion.div>
  );
}
