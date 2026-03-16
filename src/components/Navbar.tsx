"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";
import { heroData } from "@/src/lib/portfolioData";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { t } = useLanguage();

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Memoize nav items to prevent unnecessary re-renders
  const navItems = useMemo(() => [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.experience'), href: "#experience" },
    { name: t('nav.education'), href: "#education" },
    { name: t('nav.publications'), href: "#publications" },
    { name: t('nav.certificates'), href: "#certifications" },
    { name: t('nav.contact'), href: "#contact" },
  ], [t]);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Auto-hide on scroll down, show on scroll up
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          
          // Add background when scrolled
          setIsScrolled(currentScrollY > 20);
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Optimized scroll to section with smooth behavior
  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      <AnimatePresence>
        <motion.header
          initial={{ y: -100 }}
          animate={{ 
            y: isVisible ? 0 : -100,
            backgroundColor: isScrolled ? "rgb(var(--background) / 0.9)" : "transparent"
          }}
          exit={{ y: -100 }}
          transition={{ 
            duration: reducedMotion ? 0 : 0.3, 
            ease: "easeInOut",
            backgroundColor: { duration: 0.2 }
          }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? "backdrop-blur-md border-b border-border/20 shadow-premium" 
              : ""
          }`}
          style={{ willChange: reducedMotion ? 'auto' : 'transform, background-color' }}
        >
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo - Optimized for touch */}
              <motion.div
                className="flex-shrink-0 flex items-center gap-3"
                whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {/* Profile Picture */}
                <motion.a
                  href={heroData.profileImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500/20 shadow-premium-lg focus:outline-none focus:ring-2 focus:ring-green-500/50"
                  whileHover={{ scale: reducedMotion ? 1 : 1.1, rotate: reducedMotion ? 0 : 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View profile picture"
                >
                  <img
                    src={heroData.profileImage}
                    alt="Muhammad Ali"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.a>
                
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#hero");
                  }}
                  className="text-xl font-bold font-mono gradient-text hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded px-2 py-1"
                  aria-label="Navigate to hero section"
                >
                  MA
                </a>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex-1 md:flex md:justify-center md:items-center">
                <div className="flex items-baseline space-x-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="relative text-foreground hover:text-accent px-3 py-2 text-sm font-medium font-mono transition-colors duration-300 group whitespace-nowrap rounded-lg hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: reducedMotion ? 0 : 0.5, 
                        delay: reducedMotion ? 0 : index * 0.1 
                      }}
                      whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      {item.name}
                      {/* Green underline effect */}
                      {!reducedMotion && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 origin-center"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Right side controls */}
              <div className="flex items-center gap-2">
                <LanguageSelector />
                <ThemeToggle />
                
                {/* Mobile menu button - Larger touch target */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden relative p-3 rounded-lg hover:bg-accent/20 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px] min-w-[44px]"
                  whileHover={{ scale: reducedMotion ? 1 : 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: reducedMotion ? 0 : -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: reducedMotion ? 0 : 180, opacity: 0 }}
                        transition={{ duration: reducedMotion ? 0 : 0.3 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: reducedMotion ? 0 : 180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: reducedMotion ? 0 : -180, opacity: 0 }}
                        transition={{ duration: reducedMotion ? 0 : 0.3 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </nav>
        </motion.header>
      </AnimatePresence>

      {/* Mobile menu with enhanced animations and accessibility */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Mobile menu panel */}
            <motion.div
              className="fixed top-16 right-0 z-50 w-72 h-full max-w-[80vw] glass-subtle rounded-l-2xl border-l border-border/40 shadow-premium-lg md:hidden overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: reducedMotion ? "tween" : "spring", 
                damping: 25, 
                stiffness: 200,
                duration: reducedMotion ? 0 : 0.5
              }}
              style={{ willChange: reducedMotion ? 'auto' : 'transform' }}
            >
              <div className="p-6 space-y-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.1 }}
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="block px-4 py-3 rounded-lg text-foreground hover:text-accent hover:bg-accent/20 font-mono text-sm transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[44px] flex items-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: reducedMotion ? 0 : 0.3, 
                        delay: reducedMotion ? 0 : 0.1 + index * 0.05 
                      }}
                      whileHover={{ scale: reducedMotion ? 1 : 1.02, x: reducedMotion ? 0 : 5 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`Navigate to ${item.name} section`}
                    >
                      <span className="relative">
                        {item.name}
                        {/* Green accent on hover */}
                        {!reducedMotion && (
                          <motion.div
                            className="absolute inset-0 rounded bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 -z-10"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
