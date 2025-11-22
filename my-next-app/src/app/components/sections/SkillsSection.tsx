"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/src/lib/portfolioData";
import { cn } from "@/src/lib/utils";

export function SkillsSection() {
  const [activeId, setActiveId] = useState(skillCategories[0]?.id ?? "");
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <section
      id="skills"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="skills-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          Skills
        </p>
        <h2
          id="skills-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          Technical Skills
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Explore my skills across programming, AI/ML, backend, DevOps, SEO, and more.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
                  activeId === cat.id
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-foreground)]"
                    : "border-[var(--border-subtle)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--accent)]"
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
              className="grid gap-3 rounded-xl bg-[var(--bg-elevated)] p-4 shadow-sm sm:grid-cols-2 md:grid-cols-3"
            >
              {active?.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--card)] px-3 py-2 text-xs text-[var(--foreground)] shadow-sm hover:border-[var(--accent)] hover:bg-[var(--bg-elevated)]"
                >
                  <span className="font-medium">{skill.name}</span>
                  <div className="h-1.5 rounded-full bg-[var(--border-subtle)]">
                    <div
                      className="h-1.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)]"
                      style={{ width: `${70 + Math.random() * 25}%` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
