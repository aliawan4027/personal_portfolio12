"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0f172a]/80 backdrop-blur border-b border-white/10">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-slate-100"
        aria-label="Primary navigation"
      >
        <a
          href="/"
          className="font-semibold tracking-tight hover:text-[#3b82f6] transition-colors"
        >
          Muhammad Ali
        </a>
        <div className="hidden gap-6 text-sm md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(s.id);
              }}
              className="cursor-pointer hover:text-[#3b82f6] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#0f172a] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 space-y-2 text-sm text-slate-100">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScroll(s.id)}
                className={cn(
                  "w-full text-left rounded-md px-2 py-1.5 hover:bg-white/5 transition-colors"
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
