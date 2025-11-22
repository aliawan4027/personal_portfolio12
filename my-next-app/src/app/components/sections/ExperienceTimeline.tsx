"use client";

import { experiences } from "@/src/lib/portfolioData";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="experience-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          Experience
        </p>
        <h2
          id="experience-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          Professional Experience
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          A timeline of roles across SEO, AI research, and software engineering.
        </p>
      </div>
      <div className="mt-6 space-y-6 border-l border-[var(--border-subtle)] pl-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="relative ml-2 rounded-xl bg-[var(--bg-elevated)] p-4 shadow-sm"
          >
            <div className="absolute -left-5 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)]/50 bg-[var(--card)]">
              <Briefcase className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {exp.position} · {exp.company}
                </p>
                <p className="text-xs text-[var(--muted-foreground)]">{exp.period}</p>
              </div>
              {exp.current && (
                <span className="rounded-full bg-[var(--accent-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--accent-foreground)]">
                  Current
                </span>
              )}
            </div>
            <p className="mt-2 text-xs text-[var(--muted-foreground)] leading-relaxed">
              {exp.description}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <div className="flex flex-wrap gap-1">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border-subtle)] bg-[var(--card)] px-2 py-0.5 text-[10px] text-[var(--muted-foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {exp.certificateUrl && (
                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
