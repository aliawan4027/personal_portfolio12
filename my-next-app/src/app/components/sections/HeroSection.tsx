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
      className="relative overflow-hidden bg-[#0f172a] text-slate-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#3b82f6_0,_transparent_60%)] opacity-60" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            Software Engineer · AI Enthusiast
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {heroData.name}
          </h1>
          <p className="text-lg text-slate-200">
            <span className="text-slate-400">I am a</span>{" "}
            <span className="text-[#3b82f6]">{typed}</span>
            <span className="animate-pulse">|</span>
          </p>
          <p className="max-w-xl text-sm text-slate-200">
            {heroData.pitch}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200">
            <div className="inline-flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{heroData.phone}</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{heroData.email}</span>
            </div>
            <div className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{heroData.city}</span>
            </div>
            <a
              href={heroData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#3b82f6]"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#3b82f6] px-5 py-2 font-medium text-white shadow hover:bg-blue-500"
            >
              <ArrowDownCircle className="h-4 w-4" />
              View My Projects
            </a>
            <a
              href={heroData.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-slate-400/60 px-5 py-2 font-medium text-slate-100 hover:bg-white/10"
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
        >
          <div className="relative h-48 w-48 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 shadow-xl md:h-56 md:w-56">
            <Image
              src={heroData.profileImage}
              alt={heroData.name}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
