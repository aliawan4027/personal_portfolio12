"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored ?? "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
      window.localStorage.setItem("theme", next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed right-4 top-4 z-50 inline-flex items-center gap-1 rounded-full border border-slate-400/40 bg-white/70 px-3 py-1 text-xs font-medium text-slate-800 shadow-sm backdrop-blur hover:bg-white"
    >
      {theme === "light" ? (
        <>
          <Moon className="h-3 w-3" />
          <span>Dark</span>
        </>
      ) : (
        <>
          <Sun className="h-3 w-3" />
          <span>Light</span>
        </>
      )}
    </button>
  );
}
