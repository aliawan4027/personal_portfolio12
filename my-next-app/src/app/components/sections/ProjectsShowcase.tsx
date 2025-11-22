"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
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

const techTags = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

export function ProjectsShowcase() {
  const [selectedTag, setSelectedTag] = useState("All");
  const filteredProjects = projects.filter((p) =>
    selectedTag === "All" || p.technologies.includes(selectedTag)
  );
  const featured = filteredProjects[0];
  const rest = filteredProjects.slice(1);

  return (
    <section
      id="projects"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="projects-title"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
          Projects
        </p>
        <h2
          id="projects-title"
          className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]"
        >
          Projects & Research
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          A selection of my software engineering, AI/ML, and mobile development work.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {["All", ...techTags].map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
              selectedTag === tag
                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-foreground)]"
                : "border-[var(--border-subtle)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--accent)]"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 shadow-sm sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex-shrink-0">
              <div className="relative h-32 w-full overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--card)] sm:h-40 sm:w-48">
                <Image
                  src={featured.image}
                  alt={`Screenshot of ${featured.title}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 192px, 100vw"
                />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {featured.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {featured.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--border-subtle)] bg-[var(--card)] px-2 py-1 text-[var(--muted-foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-3 py-1.5 font-medium text-[var(--accent-foreground)] shadow-sm transition hover:bg-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  >
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    Live Demo
                  </a>
                )}
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] px-3 py-1.5 font-medium text-[var(--foreground)] transition hover:bg-[var(--bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                  >
                    <Github className="h-3 w-3" aria-hidden="true" />
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 shadow-sm hover:border-[var(--accent)] hover:shadow-md transition-all"
          >
            <div className="mb-3 h-24 overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--card)]">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                width={320}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              {project.title}
            </h3>
            <p className="mt-1 text-xs text-[var(--muted-foreground)] line-clamp-2">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--card)] px-2 py-0.5 text-[10px] text-[var(--muted-foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-medium text-[var(--accent-foreground)] shadow-sm transition hover:bg-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] px-2.5 py-1 text-[10px] font-medium text-[var(--foreground)] transition hover:bg-[var(--bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  <Github className="h-3 w-3" aria-hidden="true" />
                  Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
