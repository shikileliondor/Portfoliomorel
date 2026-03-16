"use client";

import { useCallback, useEffect, useMemo, useState, type PointerEvent } from "react";
import { AnimatedInitials } from "@/components/hero/AnimatedInitials";
import { CustomCursor } from "@/components/hero/CustomCursor";
import { AboutSection } from "@/components/AboutSection";

export function HeroLanding() {
  const [cursorActive, setCursorActive] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <CustomCursor isActive={cursorActive} />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-start justify-between px-6 pb-8 pt-6 md:px-10 md:pt-8">
        <span className="text-xs tracking-[0.3em] text-white/90">BEYAM</span>
        <span className="text-xs tracking-[0.35em] text-white/75 [writing-mode:vertical-rl]">WORK</span>
      </header>

      <section
        className="relative flex min-h-screen items-center justify-center px-4 md:px-8"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetParallax}
        style={{ opacity: heroOpacity, transition: "opacity 220ms linear" }}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-center">
          <div className="w-full" style={{ fontSize: "clamp(9rem, 36vw, 36rem)" }}>
            <AnimatedInitials transform={transform} onHoverChange={setCursorActive} />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.28em] text-white/50 hero-scroll-indicator">SCROLL</div>
      </section>

      <AboutSection />
    </div>
  );
}
