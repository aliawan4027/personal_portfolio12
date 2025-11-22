"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDownCircle, Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { heroData } from "@/src/lib/portfolioData";

const TYPING_INTERVAL = 120;

function useTypedRotatingText(values: string[]) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = values[index % values.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % values.length);
        }
      }
    }, TYPING_INTERVAL);

    return () => clearTimeout(timeout);
  }, [display, deleting, index, values]);

  return display;
}

export function HeroSection() {
  const typed = useTypedRotatingText(heroData.titleVariants);

  return (
    <section
      id="hero"
      className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--card)] px-4 py-8 sm:px-6 sm:py-10 space-y-4"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[var(--accent)]">
            Software Engineer · AI Enthusiast
          </p>
          <h1
            id="hero-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--foreground)]"
          >
            {heroData.name}
          </h1>
          <p className="text-lg text-[var(--muted-foreground)]">
            <span className="text-[var(--muted-foreground)]">I am a</span>{" "}
            <span className="text-[var(--accent)]">{typed}</span>
            <span className="animate-pulse">|</span>
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted-foreground)]">
            {heroData.pitch}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--muted-foreground)]">
            <div className="inline-flex items-center gap-1">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{heroData.phone}</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{heroData.email}</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>{heroData.city}</span>
            </div>
            <a
              href={heroData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 font-medium text-[var(--accent-foreground)] shadow-sm transition hover:bg-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <ArrowDownCircle className="h-4 w-4" />
              View My Projects
            </a>
            <a
              href={heroData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-5 py-2 font-medium text-[var(--foreground)] transition hover:bg-[var(--bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:flex-1"
          aria-hidden="true"
        >
          <div className="relative h-48 w-48 overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-xl md:h-56 md:w-56">
            <Image
              src={heroData.profileImage}
              alt="Portrait of Muhammad Ali"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 224px, 176px"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
