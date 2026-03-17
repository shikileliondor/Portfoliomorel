"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const skills = [
  ["Go", "Langage", 92],
  ["Node.js", "Runtime", 90],
  ["TypeScript", "Langage", 88],
  ["PostgreSQL", "Base de données", 91],
  ["Redis", "Cache", 89],
  ["Docker", "Container", 93],
  ["Kubernetes", "Orchestration", 82],
  ["AWS", "Cloud", 86],
  ["Kafka", "Streaming", 80],
  ["gRPC", "Protocol", 84],
  ["CI/CD", "DevOps", 85],
  ["Linux", "Système", 90],
] as const;

export default function Stack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="stack" ref={ref} className="grid-bg relative mx-auto max-w-6xl px-6 py-28">
      <p className="mb-12 font-mono text-xs uppercase tracking-[0.35em] text-white/35">// stack technique</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skills.map(([name, type, level], index) => (
          <motion.article
            key={name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl border border-white/10 bg-surface/80 p-5 transition hover:border-accent/30"
          >
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">{type}</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${level}%` } : {}}
                transition={{ duration: 1, ease: EASE, delay: 0.3 + index * 0.05 }}
                className="h-full rounded-full bg-accent"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
