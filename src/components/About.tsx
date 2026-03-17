"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const timeline = [
    ["2024", "Lead Backend Engineer", "FinScale"],
    ["2022", "Senior Backend Engineer", "CloudMesh"],
    ["2020", "Backend Engineer", "DataForge"],
    ["2018", "Software Engineer", "TechNova"],
  ] as const;

  return (
    <section id="about" ref={ref} className="mx-auto grid max-w-6xl gap-12 px-6 py-28 lg:grid-cols-2">
      <div>
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-white/35">// à propos</p>
        <h2 className="font-display text-5xl font-extrabold">Concevoir l&apos;infra qui tient la charge.</h2>
        <p className="mt-6 font-mono text-white/60">
          Je développe des plateformes backend orientées fiabilité, observabilité et scale. Mon approche: code de
          qualité, obsession performance et partage open source pour accélérer les équipes.
        </p>
      </div>
      <div className="space-y-5">
        {timeline.map(([year, role, company], index) => (
          <motion.div
            key={year + company}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: index * 0.12 }}
            className="rounded-xl border border-white/10 bg-surface/70 p-4"
          >
            <p className="font-mono text-xs tracking-[0.22em] text-accent">{year}</p>
            <p className="mt-2 text-xl font-bold">{role}</p>
            <p className="font-mono text-white/55">{company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
