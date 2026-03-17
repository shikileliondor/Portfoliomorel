"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type TerminalLine = {
  type: "cmd" | "out" | "kv" | "success";
  text: string;
  delay: number;
};

const terminalLines: TerminalLine[] = [
  { type: "cmd", text: "whoami --verbose", delay: 250 },
  { type: "out", text: "Loading profile...", delay: 500 },
  { type: "kv", text: 'name "Alex Kofi"', delay: 800 },
  { type: "kv", text: 'role "Senior Backend Engineer"', delay: 1000 },
  { type: "kv", text: 'languages ["Go", "TypeScript", "Python"]', delay: 1200 },
  { type: "kv", text: 'focus "APIs · Perf · Infra"', delay: 1400 },
  { type: "cmd", text: "status", delay: 1700 },
  { type: "success", text: "open to new opportunities", delay: 2000 },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 700], [0, -100]);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = terminalLines.map((line, index) =>
      setTimeout(() => setVisible(index + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const badges = useMemo(
    () =>
      ["Node.js", "PostgreSQL", "Docker", "Redis", "Go", "AWS"].map((name, i) => ({
        name,
        top: 10 + ((i * 13) % 70),
        right: 2 + ((i * 11) % 25),
        delay: i * 0.4,
      })),
    []
  );

  return (
    <section className="mesh-bg grid-bg relative flex min-h-screen items-center pt-24" id="top">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-[8%] top-[20%] h-44 w-44 rounded-full bg-accent/10 blur-3xl" />
        <div className="animate-float absolute bottom-[12%] right-[22%] h-40 w-40 rounded-full bg-blue-500/10 blur-3xl [animation-delay:1.2s]" />
      </div>

      <motion.div style={{ y: parallax }} className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-14 bg-accent" />
            <p className="font-mono text-sm uppercase tracking-[0.32em] text-accent">Backend Engineer</p>
          </motion.div>

          <div className="space-y-1 font-display text-6xl font-extrabold leading-[0.92] md:text-8xl">
            {["APIs.", "Systèmes.", "Performance."].map((word, index) => (
              <motion.h1
                key={word}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: index * 0.15, ease: EASE }}
                className={index === 2 ? "text-accent text-glow" : "text-white"}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="max-w-xl font-mono text-lg text-white/60"
          >
            Je construis des architectures backend robustes — microservices, pipelines de données et infra cloud.
            J&apos;optimise chaque milliseconde du chemin critique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projets" className="rounded-xl bg-accent px-7 py-3 font-display text-xl font-bold text-background transition hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]">
              Voir les projets
            </a>
            <a href="#contact" className="rounded-xl border border-white/20 px-7 py-3 font-mono text-2xl text-white transition hover:border-accent hover:text-accent">
              $ curl /contact
            </a>
          </motion.div>
        </div>

        <div className="relative space-y-6">
          {badges.map((badge) => (
            <span
              key={badge.name}
              className="pointer-events-none absolute hidden rounded-full border border-accent/20 bg-surface/60 px-3 py-1 font-mono text-xs text-accent/70 opacity-40 lg:block"
              style={{ top: `${badge.top}%`, right: `${badge.right}%`, animationDelay: `${badge.delay}s` }}
            >
              <span className="animate-float inline-block">{badge.name}</span>
            </span>
          ))}

          <div className="glow-accent rounded-2xl border border-accent/20 bg-surface/80">
            <div className="flex items-center justify-between border-b border-accent/20 px-4 py-3 font-mono text-sm text-white/40">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-lime-400" />
              </div>
              bash — alex@backend:~
            </div>
            <div className="space-y-2 p-5 font-mono text-lg">
              {terminalLines.slice(0, visible).map((line) => (
                <p key={line.text} className={line.type === "out" ? "text-white/45" : line.type === "success" ? "text-accent" : "text-amber-200"}>
                  {line.type === "cmd" && <span className="mr-2 text-accent">❯</span>}
                  {line.type === "kv" && <span className="mr-2 text-lime-300">{line.text.split(" ")[0]}</span>}
                  {line.type === "kv" ? line.text.replace(`${line.text.split(" ")[0]} `, "") : line.text}
                </p>
              ))}
              <span className="inline-block h-5 w-2 animate-blink bg-accent" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              ["5+", "années XP"],
              ["99.9%", "uptime"],
              ["<50ms", "latence"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-surface/80 p-4 text-center">
                <p className="font-display text-3xl font-extrabold text-accent">{value}</p>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/40">scroll</p>
        <div className="mx-auto mt-2 h-12 w-px bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
