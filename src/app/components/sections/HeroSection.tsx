"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { heroData } from "@/src/lib/portfolioData";
import { useLanguage } from "../../../contexts/LanguageContext";
import { TiltCard } from "../../../components/TiltCard";
import { BackgroundBeams } from "../../../components/BackgroundBeams";
import { Lamp } from "../../../components/ui/Lamp";
import { ShinyButton } from "../../../components/ui/ShinyButton";
import { FloatingIcon } from "../../../components/ui/FloatingIcon";
import { useState, useEffect } from "react";

export function HeroSection() {
  const { t } = useLanguage();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0" reducedMotion={reducedMotion} />
      
      {/* Lamp decorations */}
      <div className="absolute -top-20 left-10 opacity-30">
        <Lamp size="lg" color="green" />
      </div>
      <div className="absolute -top-20 right-10 opacity-30">
        <Lamp size="lg" color="blue" />
      </div>
      
      <div className="relative z-10 w-full mx-auto px-2 text-center">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold gradient-text leading-tight"
            initial={{ letterSpacing: reducedMotion ? "normal" : "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "-0.025em", opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.2, ease: "easeOut", delay: reducedMotion ? 0 : 0.2 }}
          >
            {heroData.name}
          </motion.h1>
          
          <motion.div
            className="text-lg md:text-xl text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.6 }}
          >
            <span className="text-accent">{t('hero.prefix')}</span> Software Engineer · AI Enthusiast
          </motion.div>
          
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.8 }}
          >
            {heroData.pitch}
          </motion.p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 1 }}
        >
          <motion.a
            href={`mailto:${heroData.email}`}
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded px-2 py-1"
            whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Email ${heroData.email}`}
          >
            <FloatingIcon delay={0} glowColor="rgb(59, 130, 246)">
              <Mail className="h-4 w-4 group-hover:text-accent" />
            </FloatingIcon>
            {heroData.email}
          </motion.a>
          <motion.a
            href={`tel:${heroData.phone}`}
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded px-2 py-1"
            whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Call ${heroData.phone}`}
          >
            <FloatingIcon delay={0.2} glowColor="rgb(16, 185, 129)">
              <Phone className="h-4 w-4 group-hover:text-accent" />
            </FloatingIcon>
            {heroData.phone}
          </motion.a>
          <motion.div
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300 group px-2 py-1"
            whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
            aria-label={`Location: ${heroData.city}`}
          >
            <FloatingIcon delay={0.4} glowColor="rgb(239, 68, 68)">
              <MapPin className="h-4 w-4 group-hover:text-accent" />
            </FloatingIcon>
            {heroData.city}
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-4 mt-6"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 1.2 }}
        >
          <motion.a
            href={heroData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 bg-card/50 hover:border-green-500/50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50"
            whileHover={{ scale: reducedMotion ? 1 : 1.1, rotate: reducedMotion ? 0 : 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Visit LinkedIn profile"
          >
            <FloatingIcon delay={0.6} glowColor="rgb(59, 130, 246)" distance={2}>
              <Linkedin className="h-5 w-5 group-hover:text-accent" />
            </FloatingIcon>
          </motion.a>
          <motion.a
            href={heroData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 bg-card/50 hover:border-green-500/50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50"
            whileHover={{ scale: reducedMotion ? 1 : 1.1, rotate: reducedMotion ? 0 : -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Visit GitHub profile"
          >
            <FloatingIcon delay={0.8} glowColor="rgb(139, 92, 246)" distance={2}>
              <Github className="h-5 w-5 group-hover:text-accent" />
            </FloatingIcon>
          </motion.a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 1.4 }}
        >
          <motion.div
            whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShinyButton
              href="#contact"
              variant="primary"
              size="lg"
              className="font-mono focus:outline-none focus:ring-2 focus:ring-green-500/50"
              aria-label="Contact me"
            >
              Contact Me
            </ShinyButton>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShinyButton
              href={heroData.resumeUrl}
              variant="outline"
              size="lg"
              className="font-mono focus:outline-none focus:ring-2 focus:ring-green-500/50"
              aria-label="Download resume"
            >
              <FloatingIcon delay={1} glowColor="rgb(245, 158, 11)" distance={2}>
                <Download className="h-4 w-4 mr-2" />
              </FloatingIcon>
              Download Resume
            </ShinyButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
