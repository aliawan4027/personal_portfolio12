"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/src/lib/portfolioData";
import { cn } from "@/src/lib/utils";

export function SkillsSection() {
  const [activeId, setActiveId] = useState(skillCategories[0]?.id ?? "");
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <section id="skills" className="py-16 bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a]">
          Technical Skills
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Explore my skills across programming, AI/ML, backend, DevOps, SEO, and more.
        </p>
        <div className="mt-6 flex flex-col gap-6 md:flex-row">
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap gap-2">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                    activeId === cat.id
                      ? "border-[#3b82f6] bg-[#3b82f6]/10 text-[#0f172a]"
                      : "border-slate-300 bg-white text-slate-700 hover:border-[#3b82f6]/60"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-[1.5]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active?.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid gap-3 rounded-xl bg-white p-4 shadow-sm sm:grid-cols-2 md:grid-cols-3"
              >
                {active?.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 shadow-sm hover:border-[#10b981]/70 hover:bg-white"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <div className="h-1.5 rounded-full bg-slate-200">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#10b981]"
                        style={{ width: `${70 + Math.random() * 25}%` }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
