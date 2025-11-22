import { Navbar } from "@/src/app/components/layout/Navbar";
import { Footer } from "@/src/app/components/layout/Footer";
import { HeroSection } from "@/src/app/components/sections/HeroSection";
import { ThemeToggle } from "@/src/app/components/layout/ThemeToggle";
import { AboutSection } from "@/src/app/components/sections/AboutSection";
import { SkillsSection } from "@/src/app/components/sections/SkillsSection";
import { ExperienceTimeline } from "@/src/app/components/sections/ExperienceTimeline";
import { ProjectsShowcase } from "@/src/app/components/sections/ProjectsShowcase";
import { EducationSection } from "@/src/app/components/sections/EducationSection";
import { CertificationsSection } from "@/src/app/components/sections/CertificationsSection";
import { PublicationsSection } from "@/src/app/components/sections/PublicationsSection";
import { AchievementsSection } from "@/src/app/components/sections/AchievementsSection";
import { ContactSection } from "@/src/app/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <ThemeToggle />
      <Navbar />
      <main className="space-y-16">
        <section className="max-w-6xl mx-auto px-4">
          <HeroSection />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <AboutSection />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <SkillsSection />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <ExperienceTimeline />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <ProjectsShowcase />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <EducationSection />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <CertificationsSection />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <PublicationsSection />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <AchievementsSection />
        </section>
        <section className="max-w-6xl mx-auto px-4">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
