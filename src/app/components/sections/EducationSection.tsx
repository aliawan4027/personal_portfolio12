"use client";

import { educations } from "@/src/lib/portfolioData";
import { GraduationCap, Calendar, MapPin, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { TiltCard } from "../../../components/TiltCard";
import { BackgroundBeams } from "../../../components/BackgroundBeams";
import { RandomColorCard } from "../../../components/ui/RandomColorCard";

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative py-20" aria-labelledby="education-heading">
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
            {t('education.title')}
          </motion.p>
          <motion.h2
            id="education-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground font-mono mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('education.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('education.description')}
          </motion.p>
        </motion.div>

        {/* Education grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200
              }}
            >
              <TiltCard 
                className="h-full"
                tiltAmount={10}
                scaleOnHover={1.03}
                glareOpacity={0.15}
              >
                <RandomColorCard className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm group overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </motion.div>

                    {/* Education details */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground font-mono group-hover:text-accent transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.institution}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      {edu.description && (
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {edu.description}
                        </p>
                      )}

                      {/* Document Links */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {edu.degreeUrl && (
                          <motion.a
                            href={edu.degreeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FileText className="h-3 w-3" />
                            Degree
                          </motion.a>
                        )}
                        {edu.transcriptUrl && (
                          <motion.a
                            href={edu.transcriptUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FileText className="h-3 w-3" />
                            Transcript
                          </motion.a>
                        )}
                        {edu.certificateUrl && (
                          <motion.a
                            href={edu.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FileText className="h-3 w-3" />
                            Certificate
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/50"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                  </div>
                </RandomColorCard>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating graduation caps animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-accent/20"
              style={{
                top: `${20 + i * 30}%`,
                left: `${10 + i * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <GraduationCap className="h-8 w-8" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
