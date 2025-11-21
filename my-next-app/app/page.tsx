import { Navbar } from "@/src/app/components/layout/Navbar";
import { Footer } from "@/src/app/components/layout/Footer";
import { HeroSection } from "@/src/app/components/sections/HeroSection";
import { AboutSection } from "@/src/app/components/sections/AboutSection";
import { SkillsSection } from "@/src/app/components/sections/SkillsSection";
import { ExperienceTimeline } from "@/src/app/components/sections/ExperienceTimeline";
import { ProjectsShowcase } from "@/src/app/components/sections/ProjectsShowcase";
import { EducationSection } from "@/src/app/components/sections/EducationSection";
import { CertificationsSection } from "@/src/app/components/sections/CertificationsSection";
import { PublicationsSection } from "@/src/app/components/sections/PublicationsSection";
import { ContactSection } from "@/src/app/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <EducationSection />
        <CertificationsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
