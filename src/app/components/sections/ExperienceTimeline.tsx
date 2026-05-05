"use client";

import { experiences } from "@/src/lib/portfolioData";
import { Briefcase, ExternalLink, Code, Search, Cpu, GraduationCap, Globe, Radio } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { BackgroundBeams } from "../../../components/BackgroundBeams";
import { RandomColorCard } from "../../../components/ui/RandomColorCard";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { useRef } from "react";

// Map company/role keywords to specific icons
function getRoleIcon(position: string, company: string) {
  const p = position.toLowerCase();
  const c = company.toLowerCase();
  if (p.includes("seo")) return Search;
  if (p.includes("ai") || p.includes("artificial")) return Cpu;
  if (p.includes("teacher") || p.includes("instructor")) return GraduationCap;
  if (p.includes("web") || p.includes("developer")) return Code;
  if (p.includes("telecom")) return Radio;
  if (c.includes("ispr")) return Globe;
  return Briefcase;
}

export function ExperienceTimeline() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;
    if (a.current && b.current) return 0;
    const getYear = (period: string) => {
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  if (!sortedExperiences || sortedExperiences.length === 0) {
    return (
      <section className="relative py-20">
        <BackgroundBeams className="absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">Experience data not available</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="relative py-20" aria-labelledby="experience-heading">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-accent font-mono"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
          >
            {t('experience.title')}
          </motion.p>
          <motion.h2
            id="experience-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground font-mono mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.3 }}
          >
            {t('experience.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.4 }}
          >
            {t('experience.description')}
          </motion.p>
        </motion.div>

        {/* Custom Timeline with scroll-driven line */}
        <div ref={timelineRef} className="relative">
          {/* Scroll-driven vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-border/20">
            {!reducedMotion ? (
              <motion.div
                className="w-full bg-gradient-to-b from-accent via-accent to-accent/30 origin-top"
                style={{ height: lineHeight }}
              />
            ) : (
              <div className="w-full h-full bg-accent/40" />
            )}
          </div>

          {/* Timeline entries */}
          <div className="space-y-12">
            {sortedExperiences.map((experience, index) => {
              const IconComponent = getRoleIcon(experience.position, experience.company);

              return (
                <motion.div
                  key={experience.id}
                  className="relative pl-16 md:pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.6,
                    delay: reducedMotion ? 0 : index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Timeline node with role icon */}
                  <div className="absolute left-3 md:left-5 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-green-600 border-2 border-background flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.4)] z-10">
                    <IconComponent className="h-3.5 w-3.5 text-white" />
                  </div>

                  {/* Date badge */}
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/20">
                      {experience.period}
                      {experience.current && (
                        <span className="ml-2 w-2 h-2 rounded-full bg-accent animate-pulse" />
                      )}
                    </span>
                  </div>

                  {/* Card */}
                  <RandomColorCard className="rounded-xl bg-card/50 backdrop-blur-sm p-5">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground font-mono">
                          {experience.position}
                        </h3>
                        <h4 className="text-base text-accent font-mono">
                          {experience.company}
                        </h4>
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 font-mono"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: reducedMotion ? 0 : 0.3 + techIndex * 0.03 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Certificate Link */}
                      {experience.certificateUrl && (
                        <motion.a
                          href={experience.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 text-foreground text-sm font-medium hover:bg-accent/20 hover:text-accent transition-colors"
                          whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </motion.a>
                      )}
                    </div>
                  </RandomColorCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
