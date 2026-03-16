"use client";

import { experiences } from "@/src/lib/portfolioData";
import { Briefcase, ExternalLink, Calendar } from "lucide-react";
import { Experience } from "@/src/types";
import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { TiltCard } from "../../../components/TiltCard";
import { BackgroundBeams } from "../../../components/BackgroundBeams";
import { ShinyButton } from "../../../components/ui/ShinyButton";
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FloatingIcon } from "../../../components/ui/FloatingIcon";
import { RandomColorCard } from "../../../components/ui/RandomColorCard";

export function ExperienceTimeline() {
  const { t } = useLanguage();

  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    // Handle current positions
    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;
    if (a.current && b.current) return 0;
    
    // Sort by end date (extract year from period)
    const getYear = (period: string) => {
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    
    return getYear(b.period) - getYear(a.period);
  });

  // Safety check for experiences data
  if (!sortedExperiences || !Array.isArray(sortedExperiences) || sortedExperiences.length === 0) {
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
    <section id="experience" className="relative py-20">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Section header with monofont */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-accent font-mono"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('experience.title')}
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-foreground font-mono mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('experience.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('experience.description')}
          </motion.p>
        </motion.div>

        {/* Modern Timeline */}
        <VerticalTimeline lineColor="rgb(34, 197, 94)" className="custom-timeline">
          {sortedExperiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.id}
              contentStyle={{
                background: 'rgb(var(--card))',
                backdropFilter: 'blur(16px) saturate(180%)',
                border: '1px solid rgb(var(--border))',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 8px 32px 0 rgba(var(--shadow), 0.1)',
              }}
              contentArrowStyle={{
                borderRight: '7px solid rgb(34, 197, 94)',
              }}
              date={experience.period}
              iconStyle={{
                background: 'linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129))',
                border: '3px solid rgba(34, 197, 94, 0.5)',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
              }}
              icon={
                <div className="w-full h-full flex items-center justify-center">
                  <FloatingIcon delay={index * 0.2} glowColor="rgb(34, 197, 94)" distance={2}>
                    <Briefcase className="h-5 w-5 text-white" />
                  </FloatingIcon>
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <RandomColorCard className="rounded-lg p-4 bg-card/50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground font-mono">
                        {experience.position}
                      </h3>
                      <h4 className="text-lg text-accent font-mono">
                        {experience.company}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30 font-mono"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
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
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Certificate
                    </motion.a>
                  )}
                </RandomColorCard>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

      </div>
    </section>
  );
}
