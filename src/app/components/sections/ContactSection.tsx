"use client";

import { useState, useCallback } from "react";
import { Mail, MapPin, Linkedin, Github, Send, MessageSquare, Check, Copy } from "lucide-react";
import { heroData } from "@/src/lib/portfolioData";
import { useLanguage } from "../../../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "../../../components/TiltCard";
import { BackgroundBeams } from "../../../components/BackgroundBeams";
import { ShinyButton } from "../../../components/ui/ShinyButton";
import { RandomColorCard } from "../../../components/ui/RandomColorCard";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const reducedMotion = useReducedMotion();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [email]);

  return (
    <motion.button
      onClick={handleCopy}
      className="ml-2 p-1.5 rounded-md hover:bg-accent/20 transition-colors relative focus:outline-none focus:ring-2 focus:ring-accent/50"
      whileHover={{ scale: reducedMotion ? 1 : 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={copied ? "Email copied!" : "Copy email to clipboard"}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
          >
            <Check className="h-4 w-4 text-accent" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
          >
            <Copy className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Tooltip */}
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-mono rounded bg-accent text-accent-foreground whitespace-nowrap"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${heroData.email}?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
    
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: heroData.email,
      href: `mailto:${heroData.email}`,
      showCopy: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: heroData.city,
      href: `#`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: heroData.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: heroData.linkedin,
    }
  ];

  return (
    <section id="contact" className="relative py-16 min-h-screen" aria-labelledby="contact-heading">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full min-h-screen">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="text-center mb-12"
        >
          <motion.p 
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-accent font-mono"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
          >
            {t('contact.title')}
          </motion.p>
          <motion.h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground font-mono mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.3 }}
          >
            {t('contact.subtitle')}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.4 }}
          >
            {t('contact.description')}
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr] h-full">
          {/* Contact Form with input focus glow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.5 }}
          >
            <TiltCard tiltAmount={reducedMotion ? 0 : 8} scaleOnHover={reducedMotion ? 1 : 1.02} glareOpacity={reducedMotion ? 0 : 0.1}>
              <RandomColorCard className="p-10 rounded-2xl bg-card/50 backdrop-blur-sm group overflow-hidden">
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="float-label">
                      <label className="text-sm font-medium text-foreground font-mono mb-2 block" htmlFor="contact-name">
                        {t('contact.form.name')}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="input-glow w-full px-4 py-3 rounded-lg border border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="float-label">
                      <label className="text-sm font-medium text-foreground font-mono mb-2 block" htmlFor="contact-email">
                        {t('contact.form.email')}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@example.com"
                        className="input-glow w-full px-4 py-3 rounded-lg border border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="float-label">
                    <label className="text-sm font-medium text-foreground font-mono mb-2 block" htmlFor="contact-message">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Your message..."
                      className="input-glow w-full px-4 py-3 rounded-lg border border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShinyButton
                      variant="primary"
                      size="lg"
                      className="w-full font-mono"
                      disabled={isSubmitting}
                      onClick={() => handleSubmit(new Event('submit') as unknown as React.FormEvent)}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {t('contact.form.submit')}
                        </>
                      )}
                    </ShinyButton>
                  </motion.div>
                </form>
              </RandomColorCard>
            </TiltCard>
          </motion.div>

          {/* Contact Information with copy-to-clipboard on email */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="block"
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <TiltCard tiltAmount={reducedMotion ? 0 : 5} scaleOnHover={reducedMotion ? 1 : 1.05}>
                    <RandomColorCard className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm group overflow-hidden">
                      <div className="relative z-10 flex items-center gap-4">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300"
                          whileHover={{ rotate: reducedMotion ? 0 : 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-6 w-6 text-accent" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-muted-foreground font-mono">
                            {info.label}
                          </h3>
                          <p className="text-foreground font-mono group-hover:text-accent transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>

                        {/* Copy button for email */}
                        {info.showCopy && (
                          <div onClick={(e) => e.preventDefault()}>
                            <CopyEmailButton email={info.value} />
                          </div>
                        )}
                      </div>
                    </RandomColorCard>
                  </TiltCard>
                </motion.a>
              );
            })}
            
            {/* Message bubble decoration */}
            <motion.div
              className="absolute bottom-10 right-10 text-accent/20"
              animate={reducedMotion ? {} : {
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MessageSquare className="h-16 w-16" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}