"use client";

import { useState } from "react";
import { projects } from "@/src/lib/portfolioData";
import type { ProjectCategory } from "@/src/types";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "academic", label: "Academic" },
];

export function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["id"]>(
    "all"
  );

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featured = projects.find((p) => p.isFeatured);

  return (
    <section id="projects" className="py-16 bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Projects & Research
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          A selection of AI, web, mobile, and academic projects highlighting my
          range from research to production-ready applications.
        </p>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="mt-8 grid gap-4 rounded-2xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-6 text-slate-50 shadow-lg md:grid-cols-[2fr,1fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                Flagship Project
              </p>
              <h3 className="mt-2 text-xl font-semibold">{featured.title}</h3>
              <p className="mt-2 text-xs text-slate-200">{featured.description}</p>
              <p className="mt-2 text-[11px] text-emerald-300">
                IEEE-accepted research paper · AI · Voice & Sign Recognition
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  "rounded-full border px-3 py-1 font-medium transition-colors",
                  activeFilter === f.id
                    ? "border-[#10b981] bg-[#10b981]/10 text-[#065f46]"
                    : "border-slate-300 bg-white text-slate-700 hover:border-[#10b981]/70"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm hover:-translate-y-1 hover:border-[#3b82f6]/80 hover:shadow-md transition-transform"
            >
              <h3 className="text-sm font-semibold text-[#0f172a]">
                {project.title}
              </h3>
              <p className="mt-1 line-clamp-3 text-xs text-slate-600">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.githubUrl || project.liveUrl) && (
                <div className="mt-3 flex gap-3 text-[11px] text-[#3b82f6]">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      View Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
