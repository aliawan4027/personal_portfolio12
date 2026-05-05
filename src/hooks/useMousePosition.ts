"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(ref?: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (ref?.current) {
          const rect = ref.current.getBoundingClientRect();
          setPosition({
            x: e.clientX - rect.left - rect.width / 2,
            y: e.clientY - rect.top - rect.height / 2,
          });
        } else {
          setPosition({ x: e.clientX, y: e.clientY });
        }
      });
    },
    [ref]
  );

  useEffect(() => {
    const target = ref?.current || window;
    target.addEventListener("mousemove", handleMouseMove as EventListener);
    return () => {
      target.removeEventListener("mousemove", handleMouseMove as EventListener);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove, ref]);

  return position;
}
