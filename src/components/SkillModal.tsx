"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillName: string;
  description: string;
}

export function SkillModal({ isOpen, onClose, skillName, description }: SkillModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-accent/20 to-accent/5 p-6 border-b border-border/50">
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-card/50 hover:bg-card/80 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-4 w-4 text-foreground" />
            </motion.button>
            
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground font-mono">
                  {skillName}
                </h3>
                <p className="text-sm text-muted-foreground">Skill Details</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-sm font-semibold text-foreground font-mono mb-2">Description</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Click outside or press X to close</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
