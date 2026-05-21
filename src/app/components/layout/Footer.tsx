"use client";

import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

export function Footer() {
  const reducedMotion = useReducedMotion();

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-ali-b64386264/",
      color: "#0A66C2",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/aliawan4027",
      color: "#8B5CF6",
    },
    {
      icon: Github,
      label: "GitHub (Alt)",
      href: "https://github.com/softwareengineer698-glitch",
      color: "#6366F1",
    },
  ];

  return (
    <footer className="border-t border-border/20 bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold font-mono">Muhammad Ali</p>
          <p className="text-xs text-slate-400">
            Software Engineer · AI Developer · App Developer
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
          <div className="inline-flex items-center gap-1">
            <Mail className="h-3 w-3" />
            <span>clashwithme1122@gmail.com</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>Rawalpindi</span>
          </div>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition-colors duration-300"
                style={{ color: "inherit" }}
                whileHover={
                  reducedMotion
                    ? {}
                    : {
                        scale: 1.15,
                        color: link.color,
                        filter: `drop-shadow(0 0 8px ${link.color})`,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                aria-label={`Visit ${link.label}`}
              >
                <Icon className="h-3 w-3" />
                <span>{link.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
      <div className="border-t border-border/10 py-4 text-center text-[10px] text-slate-500">
        © {new Date().getFullYear()} Muhammad Ali. All rights reserved.
      </div>
    </footer>
  );
}
