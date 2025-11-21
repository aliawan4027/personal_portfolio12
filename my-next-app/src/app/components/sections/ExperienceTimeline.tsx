"use client";

import { experiences } from "@/src/lib/portfolioData";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a]">
          Professional Experience
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          A timeline of roles across SEO, AI research, and software engineering.
        </p>
        <div className="mt-8 space-y-6 border-l border-slate-200 pl-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="relative ml-2 rounded-xl bg-slate-50 p-4 shadow-sm"
            >
              <div className="absolute -left-5 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#3b82f6]/50 bg-white">
                <Briefcase className="h-4 w-4 text-[#3b82f6]" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-[#0f172a]">
                    {exp.position} · {exp.company}
                  </p>
                  <p className="text-xs text-slate-500">{exp.period}</p>
                </div>
                {exp.current && (
                  <span className="rounded-full bg-[#10b981]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#047857]">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs text-slate-700">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
