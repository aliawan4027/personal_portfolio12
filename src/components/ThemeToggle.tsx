"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* Icon-only toggle button */}
      <motion.button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="relative p-2 rounded-lg border border-border/50 bg-card/50 hover:border-green-500/50 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-4 w-4 text-foreground group-hover:text-accent" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-4 w-4 text-foreground group-hover:text-accent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isDropdownOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDropdownOpen(false)}
            />
            
            {/* Dropdown panel */}
            <motion.div
              className="absolute top-full right-0 mt-2 w-48 glass-subtle rounded-xl border border-border/40 shadow-premium-lg overflow-hidden z-50"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2 space-y-1">
                <motion.button
                  onClick={() => handleThemeChange("light")}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    theme === "light"
                      ? "bg-accent/20 text-accent"
                      : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sun className="h-4 w-4" />
                  Light
                </motion.button>
                
                <motion.button
                  onClick={() => handleThemeChange("dark")}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-accent/20 text-accent"
                      : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Moon className="h-4 w-4" />
                  Dark
                </motion.button>
                
                <motion.button
                  onClick={() => handleThemeChange("system")}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    theme === "system"
                      ? "bg-accent/20 text-accent"
                      : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="h-4 w-4 rounded-full border-2 border-current" />
                  System
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}