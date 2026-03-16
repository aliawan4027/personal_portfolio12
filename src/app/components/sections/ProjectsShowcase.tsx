"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/src/lib/portfolioData";
import { useLanguage } from "../../../contexts/LanguageContext";
import { TiltCard } from "../../../components/TiltCard";
import { BackgroundBeams } from "../../../components/BackgroundBeams";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";
import { FloatingIcon } from "../../../components/ui/FloatingIcon";
import { RandomColorCard } from "../../../components/ui/RandomColorCard";
import { Project } from "@/src/types";
import { AISkillsMatcher } from "../../../components/AISkillsMatcher";

export function ProjectsShowcase() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [reducedMotion, setReducedMotion] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setSelectedTag("All");
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const techTags = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort();

  const filteredProjects: Project[] = projects.filter((p) =>
    selectedTag === "All" || p.technologies.includes(selectedTag)
  );
  const featured: Project | undefined = filteredProjects[0];
  const rest: Project[] = filteredProjects.slice(1);

  return (
    <section id="projects" className="relative py-20">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0" reducedMotion={reducedMotion} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section header with monofont and AI Matcher */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-accent font-mono"
            initial={{ opacity: 0, letterSpacing: reducedMotion ? "0.25em" : "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.2 }}
          >
            {t('projects.title')}
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-foreground font-mono mt-2 mb-4"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.3 }}
          >
            {t('projects.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.4 }}
          >
            {t('projects.description')}
          </motion.p>
          
          {/* AI Skills Matcher */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.5 }}
            className="flex justify-center"
          >
            <AISkillsMatcher />
          </motion.div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.6 }}
        >
          {["All", ...techTags].map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium font-mono transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px]",
                selectedTag === tag
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent/20 hover:text-foreground"
              )}
              whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Filter projects by ${tag}`}
              aria-pressed={selectedTag === tag}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.7 }}
            className="mb-12"
          >
            <TiltCard tiltAmount={reducedMotion ? 0 : 10} scaleOnHover={reducedMotion ? 1 : 1.02} glareOpacity={reducedMotion ? 0 : 0.15}>
              <RandomColorCard className="rounded-2xl bg-card/50 backdrop-blur-sm overflow-hidden group">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8 p-6">
                  <div className="flex-shrink-0">
                    <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border/50 bg-card/50 sm:h-48 sm:w-64">
                      <Image
                        src={featured.image || ''}
                        alt={`Screenshot of ${String(featured.title)}`}
                        fill={true}
                        className="object-cover"
                        sizes="(min-width: 640px) 256px, 100vw"
                        loading="lazy"
                      />
                      {!reducedMotion && (
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
                          } as React.CSSProperties}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground font-mono group-hover:text-accent transition-colors duration-300">
                        {featured.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {featured.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {featured.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent-foreground transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {featured.liveUrl && (
                        <motion.a
                          href={featured.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent-strong transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px]"
                          whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`View live demo of ${featured.title}`}
                        >
                          <FloatingIcon delay={0.2} glowColor="rgb(16, 185, 129)" distance={2}>
                            <ExternalLink className="h-4 w-4" />
                          </FloatingIcon>
                          Live Demo
                        </motion.a>
                      )}
                      {featured.githubUrl && (
                        <motion.a
                          href={featured.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 text-foreground font-medium hover:bg-accent/20 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px]"
                          whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`View source code of ${featured.title}`}
                        >
                          <FloatingIcon delay={0.4} glowColor="rgb(139, 92, 246)" distance={2}>
                            <Github className="h-4 w-4" />
                          </FloatingIcon>
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </RandomColorCard>
            </TiltCard>
          </motion.div>
        )}

        {/* Projects grid */}
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.8 }}
        >
          {rest.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: reducedMotion ? 0 : 0.5, 
                delay: reducedMotion ? 0 : 0.1 * index,
                type: reducedMotion ? "tween" : "spring",
                stiffness: reducedMotion ? 0 : 200
              }}
            >
              <TiltCard 
                className="h-full"
                tiltAmount={reducedMotion ? 0 : 15}
                scaleOnHover={reducedMotion ? 1 : 1.05}
                glareOpacity={reducedMotion ? 0 : 0.2}
              >
                <RandomColorCard className="h-full rounded-2xl bg-card/50 backdrop-blur-sm overflow-hidden group">
                  {/* Project image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={project.image || ''}
                      alt={`Screenshot of ${String(project.title)}`}
                      fill={true}
                      className="object-cover"
                      sizes="(min-width: 640px) 320px, 100vw"
                      loading="lazy"
                    />
                    {!reducedMotion && (
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
                        } as React.CSSProperties}
                      />
                    )}
                  </div>

                  {/* Project content */}
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground font-mono group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent-foreground transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium hover:bg-accent-strong transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px]"
                          whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <FloatingIcon delay={index * 0.1} glowColor="rgb(16, 185, 129)" distance={1}>
                            <ExternalLink className="h-3 w-3" />
                          </FloatingIcon>
                          Demo
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/50 bg-card/50 text-foreground text-xs font-medium hover:bg-accent/20 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px]"
                          whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          aria-label={`View source code of ${project.title}`}
                        >
                          <FloatingIcon delay={index * 0.1 + 0.2} glowColor="rgb(139, 92, 246)" distance={1}>
                            <Github className="h-3 w-3" />
                          </FloatingIcon>
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </RandomColorCard>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
