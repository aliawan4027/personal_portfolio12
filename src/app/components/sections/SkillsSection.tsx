"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { skillCategories, skillDescriptions } from "@/src/lib/portfolioData";
import { useLanguage } from "../../../contexts/LanguageContext";
import { TiltCard } from "../../../components/TiltCard";
import { BackgroundBeams } from "../../../components/BackgroundBeams";
import { RandomColorCard } from "../../../components/ui/RandomColorCard";
import { SkillModal } from "../../../components/SkillModal";

interface Skill {
  id: string;
  name: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export function SkillsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; description: string } | null>(null);

  useEffect(() => {
    setActiveCategory("all");
  }, []);

  const categories: { id: string; name: string }[] = [
    { id: "all", name: "All" },
    ...skillCategories.map(cat => ({ id: cat.id, name: cat.name.split(' ')[0] })),
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillCategories.flatMap(category => category.skills)
    : skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  const handleSkillClick = (skill: Skill) => {
    const description = skillDescriptions[skill.id] || "No description available for this skill.";
    setSelectedSkill({ name: skill.name, description });
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="relative py-20">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
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
            {t('skills.title')}
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-foreground font-mono mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('skills.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('skills.description')}
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium font-mono transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent/20 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid with 3D tilt cards */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredSkills.map((skill: Skill, index: number) => (
            <motion.div
              key={skill.id}
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
                className="h-full cursor-pointer"
                tiltAmount={10}
                scaleOnHover={1.08}
                glareOpacity={0.15}
                onClick={() => handleSkillClick(skill)}
              >
                <RandomColorCard className="p-6 rounded-xl bg-card/50 backdrop-blur-sm group">
                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">💻</span>
                    </motion.div>
                    
                    <h3 className="font-semibold text-foreground font-mono text-sm mb-2 group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1">
                      <span
                        className="text-[10px] px-2 py-1 rounded-full bg-muted/50 text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent-foreground transition-all duration-300"
                      >
                        {skill.name}
                      </span>
                    </div>
                    
                    <p className="text-[10px] text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Click for details
                    </p>
                  </div>
                </RandomColorCard>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Ambient floating animation */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Skill Modal */}
        {selectedSkill && (
          <SkillModal
            isOpen={!!selectedSkill}
            onClose={closeModal}
            skillName={selectedSkill.name}
            description={selectedSkill.description}
          />
        )}
      </div>
    </section>
  );
}