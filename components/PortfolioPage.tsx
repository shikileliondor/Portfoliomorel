"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { badges, nodeLinks, nodePositions, pseudoRandom, terminalLines } from "./portfolio/data";
import { ContactSection } from "./portfolio/sections/ContactSection";
import { CareerSection } from "./portfolio/sections/CareerSection";
import { HeroSection } from "./portfolio/sections/HeroSection";
import { IASection } from "./portfolio/sections/IASection";
import { StackSection } from "./portfolio/sections/StackSection";
import type { GraphNode, NodeName, NodeVelocity } from "./portfolio/types";

export default function PortfolioPage() {
  const [blurNav, setBlurNav] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [lineCount, setLineCount] = useState(0);

  const { scrollY } = useScroll();
  const springX = useSpring(mouse.x, { damping: 20, stiffness: 300 });
  const springY = useSpring(mouse.y, { damping: 20, stiffness: 300 });
  const heroY = useTransform(scrollY, [0, 500], [0, 70]);

  const stackRef = useRef<HTMLDivElement | null>(null);
  const iaRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-120px" });
  const iaInView = useInView(iaRef, { once: true, margin: "-120px" });
  const projectInView = useInView(projectsRef, { once: true, margin: "-120px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setBlurNav(v > 18));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileNavOpen]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const timers = terminalLines.map((_, index) => window.setTimeout(() => setLineCount(index + 1), 350 + index * 500));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  const stackGraphRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<NodeName | null>(null);
  const [draggedNode, setDraggedNode] = useState<NodeName | null>(null);
  const [graphNodes, setGraphNodes] = useState<Record<NodeName, GraphNode>>(nodePositions);
  const nodeVelocitiesRef = useRef<NodeVelocity>(
    (Object.keys(nodePositions) as NodeName[]).reduce((acc, node, index) => {
      acc[node] = {
        vx: (pseudoRandom(index + 401) - 0.5) * 0.018,
        vy: (pseudoRandom(index + 461) - 0.5) * 0.018,
      };
      return acc;
    }, {} as NodeVelocity),
  );
  const [particles, setParticles] = useState(
    Array.from({ length: 15 }, (_, i) => ({
      x: 50 + pseudoRandom(i + 1) * 700,
      y: 30 + pseudoRandom(i + 31) * 280,
      vx: (pseudoRandom(i + 91) - 0.5) * 0.35,
      vy: (pseudoRandom(i + 141) - 0.5) * 0.35,
      color: i % 2 === 0 ? "#00ff88" : "#97C459",
    })),
  );

  const flowMeta = useMemo(
    () =>
      nodeLinks.map((_, i) => ({
        duration: 2 + pseudoRandom(i + 11) * 3,
        begin: -(pseudoRandom(i + 101) * 5),
      })),
    [],
  );

  const pulseMeta = useMemo(
    () =>
      (Object.keys(nodePositions) as NodeName[]).reduce((acc, node, i) => {
        acc[node] = {
          duration: 3 + pseudoRandom(i + 201) * 3,
          delay: -(pseudoRandom(i + 301) * 6),
        };
        return acc;
      }, {} as Record<NodeName, { duration: number; delay: number }>),
    [],
  );

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const bounds = stackGraphRef.current?.getBoundingClientRect();
      if (!bounds) {
        raf = window.requestAnimationFrame(update);
        return;
      }
      setParticles((prev) =>
        prev.map((particle) => {
          let x = particle.x + particle.vx;
          let y = particle.y + particle.vy;
          let vx = particle.vx;
          let vy = particle.vy;

          if (x < 0 || x > bounds.width) {
            vx *= -1;
            x = Math.min(Math.max(x, 0), bounds.width);
          }
          if (y < 0 || y > bounds.height) {
            vy *= -1;
            y = Math.min(Math.max(y, 0), bounds.height);
          }

          return { ...particle, x, y, vx, vy };
        }),
      );
      raf = window.requestAnimationFrame(update);
    };
    raf = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let raf = 0;
    const updateNodes = () => {
      setGraphNodes((prev) => {
        const next = { ...prev };
        (Object.keys(prev) as NodeName[]).forEach((node) => {
          if (draggedNode === node) return;

          const velocity = nodeVelocitiesRef.current[node];
          const config = prev[node];
          const floatRangeX =
            config.cluster === "backend"
              ? [14, 48]
              : config.cluster === "data"
                ? [46, 62]
                : config.cluster === "infra"
                  ? [60, 80]
                  : config.cluster === "ia"
                    ? [42, 66]
                    : [58, 82];
          const floatRangeY = config.cluster === "ia" ? [12, 30] : [30, 76];

          let x = config.x + velocity.vx;
          let y = config.y + velocity.vy;
          let vx = velocity.vx;
          let vy = velocity.vy;

          if (x <= floatRangeX[0] || x >= floatRangeX[1]) {
            vx *= -1;
            x = Math.min(Math.max(x, floatRangeX[0]), floatRangeX[1]);
          }
          if (y <= floatRangeY[0] || y >= floatRangeY[1]) {
            vy *= -1;
            y = Math.min(Math.max(y, floatRangeY[0]), floatRangeY[1]);
          }

          nodeVelocitiesRef.current[node] = { vx, vy };
          next[node] = { ...config, x, y };
        });
        return next;
      });
      raf = window.requestAnimationFrame(updateNodes);
    };
    raf = window.requestAnimationFrame(updateNodes);
    return () => window.cancelAnimationFrame(raf);
  }, [draggedNode]);

  useEffect(() => {
    if (!draggedNode) return;

    const onMove = (event: PointerEvent) => {
      const bounds = stackGraphRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;

      setGraphNodes((prev) => ({
        ...prev,
        [draggedNode]: {
          ...prev[draggedNode],
          x: Math.min(Math.max(x, 8), 92),
          y: Math.min(Math.max(y, 10), 90),
        },
      }));
    };

    const onUp = () => setDraggedNode(null);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [draggedNode]);

  const connectedNodes = useMemo(() => {
    if (!hoveredNode) return new Set<NodeName>();
    const set = new Set<NodeName>([hoveredNode]);
    nodeLinks.forEach(([from, to]) => {
      if (from === hoveredNode) set.add(to);
      if (to === hoveredNode) set.add(from);
    });
    return set;
  }, [hoveredNode]);

  const handleNodePointerDown = (node: NodeName, event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDraggedNode(node);
  };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#080810] text-white selection:bg-[#00ff88] selection:text-[#040406]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:3px_3px]" />

      <motion.div style={{ x: springX, y: springY }} className="pointer-events-none fixed z-[70] hidden md:block">
        <div className="-translate-x-1/2 -translate-y-1/2 mix-blend-difference">
          <div className="h-10 w-10 rounded-full border border-white" />
        </div>
      </motion.div>
      <div className="pointer-events-none fixed z-[71] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88] md:block" style={{ left: mouse.x, top: mouse.y }} />

      <motion.nav
        className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition ${
          blurNav ? "border-white/10 bg-[#080810]/60 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 font-mono text-sm sm:px-6 sm:py-5">
          <a href="#home" className="text-[#00ff88]">~/alex.dev</a>
          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Stack", "stack"],
              ["IA", "ia"],
              ["Parcours", "parcours"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="group relative uppercase tracking-[0.2em] text-white/70">
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00ff88] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="md:hidden"
            aria-label="Ouvrir la navigation"
            aria-expanded={mobileNavOpen}
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/75">menu</span>
          </button>
          <div className="hidden items-center gap-2 text-[#00ff88] sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff88]" /> disponible
          </div>
        </div>
        {mobileNavOpen && (
          <div className="border-t border-white/10 bg-[#080810]/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.2em] text-white/80">
              {[
                ["Stack", "stack"],
                ["IA", "ia"],
                ["Parcours", "parcours"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMobileNavOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.nav>

      <HeroSection heroY={heroY} lineCount={lineCount} terminalLines={terminalLines} badges={badges} />

      <StackSection
        stackRef={stackRef}
          stackGraphRef={stackGraphRef}
          stackInView={stackInView}
          particles={particles}
          graphNodes={graphNodes}
          hoveredNode={hoveredNode}
          connectedNodes={connectedNodes}
          flowMeta={flowMeta}
          pulseMeta={pulseMeta}
          onNodeHover={setHoveredNode}
          onNodePointerDown={handleNodePointerDown}
      />

      <IASection iaInView={iaInView} sectionRef={iaRef} />

      <CareerSection projectInView={projectInView} sectionRef={projectsRef} />

      <ContactSection contactInView={contactInView} sectionRef={contactRef} />

      <style jsx global>{`
        @keyframes nodePulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.025);
          }
        }
      `}</style>
    </main>
  );
}
