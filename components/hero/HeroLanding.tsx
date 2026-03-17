"use client";

import { useCallback, useEffect, useMemo, useState, type PointerEvent } from "react";
import { AnimatedInitials } from "@/components/hero/AnimatedInitials";
import { CustomCursor } from "@/components/hero/CustomCursor";
import { AboutSection } from "@/components/AboutSection";
import { ProjectSection } from "@/components/ProjectSection";
import Contact from "@/components/Contact";
import { SkillsSection } from "@/components/SkillsSection";

export function HeroLanding() {
  const [cursorActive, setCursorActive] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
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
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-950 transition-colors duration-300">
      <CustomCursor isActive={cursorActive} />

      <header className="fixed inset-x-0 top-0 z-30 flex items-start justify-between px-6 pb-8 pt-6 md:px-10 md:pt-8">
        <span className="text-xs tracking-[0.3em] text-slate-900">BEYAM</span>

        <span className="text-xs tracking-[0.35em] text-slate-700 [writing-mode:vertical-rl]">WORK</span>
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

        <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.28em] text-slate-600">
          SCROLL
        </div>
      </section>

      <div className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <Contact />
      </div>
    </div>
  );
}
