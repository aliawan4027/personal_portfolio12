"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export function useTextScramble(
  texts: string[],
  options?: {
    speed?: number;       // ms per character resolve
    pauseDuration?: number; // ms to hold finished text
  }
) {
  const speed = options?.speed ?? 30;
  const pauseDuration = options?.pauseDuration ?? 3000;
  const [displayText, setDisplayText] = useState(texts[0] || "");
  const [currentIndex, setCurrentIndex] = useState(0);
  const frameRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const scramble = useCallback(
    (target: string) => {
      let iteration = 0;
      const maxLen = target.length;

      const animate = () => {
        const resolved = target.slice(0, iteration);
        const scrambled = Array.from({ length: maxLen - iteration }, () =>
          CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join("");

        setDisplayText(resolved + scrambled);

        if (iteration < maxLen) {
          iteration++;
          frameRef.current = window.setTimeout(animate, speed);
        }
      };

      animate();
    },
    [speed]
  );

  useEffect(() => {
    const target = texts[currentIndex];
    if (!target) return;

    scramble(target);

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, pauseDuration + target.length * speed);

    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, texts, scramble, speed, pauseDuration]);

  return displayText;
}
