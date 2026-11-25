"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sticky header that slides away while the visitor reads down the page and
 * comes back as soon as they scroll up. Always visible near the top.
 */
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      ticking.current = false;
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY.current;
      if (y < 80) {
        setHidden(false);
        lastY.current = y;
      } else if (Math.abs(delta) > 8) {
        setHidden(delta > 0);
        lastY.current = y;
      }
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={`sticky top-0 z-40 border-b-2 border-ink bg-paper/90 backdrop-blur transition-transform duration-300 supports-[backdrop-filter]:bg-paper/80 motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {children}
    </header>
  );
}
