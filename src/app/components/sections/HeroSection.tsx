"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { heroData } from "@/src/lib/portfolioData";
import { useLanguage } from "../../../contexts/LanguageContext";
import { BackgroundBeams } from "../../../components/BackgroundBeams";
import { Lamp } from "../../../components/ui/Lamp";
import { ShinyButton } from "../../../components/ui/ShinyButton";
import { FloatingIcon } from "../../../components/ui/FloatingIcon";
import { useTextScramble } from "../../../hooks/useTextScramble";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { useState, useEffect, useRef, useCallback } from "react";

// Floating particles component
function FloatingParticles({ count = 18 }: { count?: number }) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + Math.random() * 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = 8 + Math.random() * 12;
        const delay = Math.random() * 5;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/30"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        );
      })}
    </div>
  );
}

// Glowing gradient ring behind profile image
function GlowRing() {
  const reducedMotion = useReducedMotion();
  return (
    <div
      className="absolute inset-[-6px] rounded-full"
      style={{
        background:
          "conic-gradient(from 0deg, rgb(34,197,94), rgb(16,185,129), rgb(99,102,241), rgb(168,85,247), rgb(236,72,153), rgb(34,197,94))",
        animation: reducedMotion ? "none" : "spin-slow 6s linear infinite",
        filter: "blur(4px)",
      }}
      aria-hidden="true"
    />
  );
}

export function HeroSection() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Magnetic cursor effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reducedMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / rect.width;
      const dy = (e.clientY - centerY) / rect.height;
      mouseX.set(dx * 20); // max 20px displacement
      mouseY.set(dy * 20);
    },
    [reducedMotion, mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  // Text scramble for rotating titles
  const scrambledTitle = useTextScramble(heroData.titleVariants, {
    speed: 30,
    pauseDuration: 3000,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-labelledby="hero-heading"
    >
      {/* Floating particles */}
      <FloatingParticles />

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
        {/* Profile image with glowing ring and magnetic effect */}
        <motion.div
          className="flex justify-center mb-8"
          style={reducedMotion ? {} : { x: springX, y: springY }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <GlowRing />
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-2 border-background z-10"
              whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={heroData.profileImage}
                alt={`Portrait of ${heroData.name} — Software Engineer and AI Developer`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <motion.h1
            id="hero-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold gradient-text leading-tight"
            initial={{ letterSpacing: reducedMotion ? "normal" : "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "-0.025em", opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.2, ease: "easeOut", delay: reducedMotion ? 0 : 0.2 }}
          >
            {heroData.name}
          </motion.h1>
          
          {/* Scramble text effect for rotating titles */}
          <motion.div
            className="text-lg md:text-xl text-muted-foreground font-mono h-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.6 }}
          >
            <span className="text-accent mr-2">{t('hero.prefix')}</span>
            <span className="inline-block min-w-[200px] text-left font-semibold text-foreground">
              {reducedMotion ? heroData.titleVariants[0] : scrambledTitle}
            </span>
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

        {/* Social links with brand glow */}
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
            className="p-3 rounded-full border border-border/50 bg-card/50 hover:border-[#0A66C2]/50 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50"
            whileHover={{ scale: reducedMotion ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className="h-5 w-5 group-hover:text-[#0A66C2]" />
          </motion.a>
          <motion.a
            href={heroData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 bg-card/50 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50"
            whileHover={{ scale: reducedMotion ? 1 : 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Visit GitHub profile"
          >
            <Github className="h-5 w-5 group-hover:text-purple-400" />
          </motion.a>
        </motion.div>

        {/* CTA buttons with magnetic effect */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 1.4 }}
          style={reducedMotion ? {} : { x: springX, y: springY }}
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

        </motion.div>
      </div>
    </section>
  );
}
