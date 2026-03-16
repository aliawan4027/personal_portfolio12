"use client";

import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/app/components/layout/Footer";
import { HeroSection } from "@/src/app/components/sections/HeroSection";
import { AboutSection } from "@/src/app/components/sections/AboutSection";
import { SkillsSection } from "@/src/app/components/sections/SkillsSection";
import { ExperienceTimeline } from "@/src/app/components/sections/ExperienceTimeline";
import { ProjectsShowcase } from "@/src/app/components/sections/ProjectsShowcase";
import { EducationSection } from "@/src/app/components/sections/EducationSection";
import { CertificationsSection } from "@/src/app/components/sections/CertificationsSection";
import { PublicationsSection } from "@/src/app/components/sections/PublicationsSection";
import { AchievementsSection } from "@/src/app/components/sections/AchievementsSection";
import { ContactSection } from "@/src/app/components/sections/ContactSection";
import { GradientMesh } from "@/src/components/GradientMesh";
import { useState, useEffect } from "react";

export default function Home() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GradientMesh className="fixed inset-0 -z-10 opacity-20" reducedMotion={reducedMotion} />
      <Navbar />
      <main id="main-content" className="space-y-24 pt-16">
        <section className="min-h-screen flex items-center justify-center px-4">
          <HeroSection />
        </section>
        <section id="about" className="max-w-6xl mx-auto px-4">
          <AboutSection />
        </section>
        <section id="skills" className="max-w-6xl mx-auto px-4">
          <SkillsSection />
        </section>
        <section id="experience" className="max-w-6xl mx-auto px-4">
          <ExperienceTimeline />
        </section>
        <section id="projects" className="max-w-6xl mx-auto px-4">
          <ProjectsShowcase />
        </section>
        <section id="education" className="max-w-6xl mx-auto px-4">
          <EducationSection />
        </section>
        <section id="certifications" className="max-w-6xl mx-auto px-4">
          <CertificationsSection />
        </section>
        <section id="publications" className="max-w-6xl mx-auto px-4">
          <PublicationsSection />
        </section>
        <section id="achievements" className="max-w-6xl mx-auto px-4">
          <AchievementsSection />
        </section>
        <section id="contact" className="max-w-6xl mx-auto px-4">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
