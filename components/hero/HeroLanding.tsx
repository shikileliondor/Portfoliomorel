"use client";

import { useCallback, useEffect, useMemo, useState, type PointerEvent } from "react";
import { AnimatedInitials } from "@/components/hero/AnimatedInitials";
import { CustomCursor } from "@/components/hero/CustomCursor";
import { AboutSection } from "@/components/AboutSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsSection } from "@/components/SkillsSection";

export function HeroLanding() {
  const [cursorActive, setCursorActive] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.35), 1);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const bounds = currentTarget.getBoundingClientRect();

    const moveX = ((clientX - bounds.left) / bounds.width - 0.5) * 16;
    const moveY = ((clientY - bounds.top) / bounds.height - 0.5) * 16;

    setParallax({ x: moveX, y: moveY });
  }, []);

  const resetParallax = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

  const heroScale = 1 - scrollProgress * 0.1;
  const heroOpacity = 1 - scrollProgress * 0.55;

  const transform = useMemo(
    () => `translate3d(${parallax.x.toFixed(2)}px, ${parallax.y.toFixed(2)}px, 0) scale(${heroScale.toFixed(3)})`,
    [heroScale, parallax.x, parallax.y],
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-black dark:text-white">
      <CustomCursor isActive={cursorActive} />

      <header className="fixed inset-x-0 top-0 z-30 flex items-start justify-between px-6 pb-8 pt-6 md:px-10 md:pt-8">
        <span className="text-xs tracking-[0.3em] text-slate-700/90 dark:text-white/90">BEYAM</span>

        <div className="flex items-start gap-4">
          <button
            type="button"
            onClick={() => setDarkMode((previousValue) => !previousValue)}
            aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
            className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-slate-300/80 bg-white/80 text-slate-800 shadow-sm backdrop-blur transition hover:scale-105 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/20"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <span className="text-xs tracking-[0.35em] text-slate-600/90 dark:text-white/75 [writing-mode:vertical-rl]">WORK</span>
        </div>
      </header>

      <section
        className="relative z-10 flex min-h-screen items-center justify-center px-4 md:px-8"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetParallax}
        style={{ opacity: heroOpacity, transition: "opacity 220ms linear" }}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-center">
          <div className="w-full" style={{ fontSize: "clamp(9rem, 36vw, 36rem)" }}>
            <AnimatedInitials transform={transform} onHoverChange={setCursorActive} />
          </div>
        </div>

        <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.28em] text-slate-500/80 dark:text-white/50">SCROLL</div>
      </section>

      <div className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
      </div>
    </div>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12H5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.5 14.2a8.5 8.5 0 1 1-10.7-10.7A7 7 0 0 0 20.5 14.2Z" />
    </svg>
  );
}
