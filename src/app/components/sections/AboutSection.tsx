"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { SpotlightCard } from "../../../components/ui/SpotlightCard";
import { BackgroundBeams } from "../../../components/BackgroundBeams";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20" aria-labelledby="about-heading">
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
            {t('about.title')}
          </motion.p>
          <motion.h2
            id="about-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground font-mono mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('about.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        {/* Content with Spotlight Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SpotlightCard className="h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-mono text-foreground">
                  Introduction
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    I am Muhammad Ali, a software engineer and AI enthusiast with a solid foundation in full‑stack and mobile development. My career objective is to leverage my technical skills and knowledge in software engineering to develop innovative solutions, contribute to impactful projects, and grow as a professional in a dynamic and challenging environment.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SpotlightCard className="h-full">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-mono text-foreground">
                  Experience & Skills
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    I have hands‑on experience with Flutter, Next.js, Python, AI model training (RAG, LLMs, YOLO), cloud platforms, and SEO. Beyond technical depth, I value leadership, communication, time management, and teamwork—skills I have practiced as a class representative, mentor, and instructor.
                  </p>
                  <p className="leading-relaxed">
                    Outside of work I enjoy traveling, nature, swimming, sports, and volunteering, all of which keep me curious and people‑focused.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Text reveal animation for key points */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <SpotlightCard className="inline-block">
            <div className="p-6">
              <motion.p
                className="text-lg font-medium text-foreground font-mono"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                Passionate about AI, mobile development, and creating innovative solutions
              </motion.p>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
