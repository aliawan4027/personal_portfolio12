"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Sparkles, TrendingUp, Code, Smartphone, Brain, Globe, Zap, ArrowRight } from "lucide-react";
import { projects, skillCategories } from "@/src/lib/portfolioData";
import { cn } from "@/src/lib/utils";

interface AISkillsMatcherProps {
  className?: string;
}

interface MatchedProject {
  project: typeof projects[0];
  score: number;
  matchedSkills: string[];
  reasons: string[];
}

export function AISkillsMatcher({ className }: AISkillsMatcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchedProjects, setMatchedProjects] = useState<MatchedProject[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Popular interest areas for quick selection
  const popularInterests = useMemo(() => [
    { id: "mobile", label: "Mobile Apps", icon: Smartphone, color: "blue" },
    { id: "ai", label: "AI & Machine Learning", icon: Brain, color: "purple" },
    { id: "web", label: "Web Development", icon: Globe, color: "green" },
    { id: "flutter", label: "Flutter", icon: Code, color: "cyan" },
    { id: "python", label: "Python", icon: Zap, color: "yellow" },
  ], []);

  // AI-powered matching algorithm
  const analyzeAndMatch = useCallback(async (userInput: string, interests: string[]) => {
    setIsAnalyzing(true);
    
    // Simulate AI processing with realistic delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const allText = `${userInput} ${interests.join(" ")}`.toLowerCase();
    const matches: MatchedProject[] = [];
    
    projects.forEach(project => {
      let score = 0;
      const matchedSkills: string[] = [];
      const reasons: string[] = [];
      
      // Title and description matching
      if (project.title.toLowerCase().includes(allText) || 
          project.description.toLowerCase().includes(allText)) {
        score += 40;
        reasons.push("Direct match with your interests");
      }
      
      // Technology matching
      project.technologies.forEach(tech => {
        if (allText.includes(tech.toLowerCase())) {
          score += 20;
          matchedSkills.push(tech);
          reasons.push(`Uses ${tech} which matches your interests`);
        }
      });
      
      // Category matching
      if (interests.includes(project.category)) {
        score += 30;
        reasons.push("Falls under your preferred category");
      }
      
      // Featured projects get bonus
      if (project.isFeatured) {
        score += 10;
        reasons.push("Featured project with exceptional quality");
      }
      
      // AI/ML projects get bonus for AI interests
      if (interests.includes("ai") && project.category === "ai-ml") {
        score += 15;
        reasons.push("AI/ML project matching your interests");
      }
      
      // Mobile projects get bonus for mobile interests
      if (interests.includes("mobile") && project.category === "mobile") {
        score += 15;
        reasons.push("Mobile development project");
      }
      
      if (score > 0) {
        matches.push({
          project,
          score: Math.min(score, 100),
          matchedSkills,
          reasons
        });
      }
    });
    
    // Sort by score and take top 3
    const sortedMatches = matches
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    
    setMatchedProjects(sortedMatches);
    setIsAnalyzing(false);
  }, []);

  const handleAnalyze = () => {
    if (input.trim() || selectedInterests.length > 0) {
      analyzeAndMatch(input, selectedInterests);
    }
  };

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const clearResults = () => {
    setMatchedProjects([]);
    setInput("");
    setSelectedInterests([]);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative group px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 hover:from-green-500/30 hover:to-blue-500/30 border border-green-500/30 rounded-xl font-mono text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px]"
        whileHover={{ scale: reducedMotion ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-green-500" />
          <span>AI Project Matcher</span>
          <ArrowRight className="h-4 w-4 opacity-60 group-hover:translate-x-1 transition-transform" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-2xl glass-subtle rounded-2xl border border-border/40 shadow-premium-lg max-h-[90vh] overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ 
                type: reducedMotion ? "tween" : "spring",
                damping: 25,
                stiffness: 300
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20">
                    <Brain className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold font-mono">AI Project Matcher</h2>
                    <p className="text-sm text-muted-foreground">Find projects matching your interests</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent/20 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px] min-w-[44px]"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Input Section */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium font-mono mb-2">
                      What are you interested in?
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g., mobile apps, AI, Flutter, Python..."
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 font-mono text-sm"
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                      />
                    </div>
                  </div>

                  {/* Quick Interest Selection */}
                  <div>
                    <p className="text-sm font-medium font-mono mb-3">Quick interests:</p>
                    <div className="flex flex-wrap gap-2">
                      {popularInterests.map((interest) => {
                        const Icon = interest.icon;
                        const isSelected = selectedInterests.includes(interest.id);
                        
                        return (
                          <motion.button
                            key={interest.id}
                            onClick={() => toggleInterest(interest.id)}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 font-mono text-xs min-h-[44px]",
                              isSelected
                                ? "bg-green-500/20 border-green-500/50 text-green-500"
                                : "bg-background border-border/50 hover:border-green-500/30"
                            )}
                            whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Icon className="h-3 w-3" />
                            {interest.label}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Analyze Button */}
                  <motion.button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || (!input.trim() && selectedInterests.length === 0)}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg font-mono font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
                    whileHover={{ scale: reducedMotion ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isAnalyzing ? (
                      <div className="flex items-center justify-center gap-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Analyzing with AI...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span>Find Matching Projects</span>
                      </div>
                    )}
                  </motion.button>
                </div>

                {/* Results */}
                <AnimatePresence>
                  {matchedProjects.length > 0 && (
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold font-mono flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-500" />
                          Your Matched Projects
                        </h3>
                        <button
                          onClick={clearResults}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Clear
                        </button>
                      </div>

                      <div className="space-y-3">
                        {matchedProjects.map((match, index) => (
                          <motion.div
                            key={match.project.id}
                            className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-green-500/30 transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-semibold font-mono">{match.project.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {match.project.description}
                                </p>
                              </div>
                              <div className="flex flex-col items-end">
                                <div className="text-2xl font-bold text-green-500">
                                  {match.score}%
                                </div>
                                <div className="text-xs text-muted-foreground">Match</div>
                              </div>
                            </div>

                            {match.matchedSkills.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-3">
                                {match.matchedSkills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded font-mono"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="mt-3 text-xs text-muted-foreground">
                              {match.reasons.slice(0, 2).join(" • ")}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
