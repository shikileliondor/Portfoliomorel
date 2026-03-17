"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const projects = [
    {
      title: "PayFlow Gateway",
      description: "API paiement haute dispo, 2M+ tx/jour, circuit breaker et retry logic.",
      stack: ["Go", "gRPC", "PostgreSQL", "Redis"],
      featured: true,
    },
    {
      title: "DataStream Pipeline",
      description: "ETL temps réel IoT à grande échelle.",
      stack: ["Node.js", "Kafka", "ClickHouse"],
      featured: false,
    },
    {
      title: "AuthCore SDK",
      description: "Lib auth open-source OAuth2 + JWT + sessions distribuées.",
      stack: ["TypeScript", "JWT", "OAuth2", "Redis"],
      featured: false,
    },
  ];

  return (
    <section id="projets" ref={ref} className="mx-auto max-w-6xl px-6 py-28">
      <p className="mb-12 font-mono text-xs uppercase tracking-[0.35em] text-white/35">// projets récents</p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: index * 0.12 }}
            whileHover={{ y: -4 }}
            className={`rounded-2xl border bg-surface/70 p-6 transition ${
              project.featured ? "border-accent/30" : "border-white/10 hover:border-accent/20"
            }`}
          >
            {project.featured && (
              <span className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                featured
              </span>
            )}
            <p className="font-mono text-sm text-white/35">{`0${index + 1}`}</p>
            <h3 className="mt-3 text-4xl font-bold">{project.title}</h3>
            <p className="mt-4 min-h-20 font-mono text-white/60">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {project.stack.map((chip) => (
                <span key={chip} className="rounded-md border border-accent/20 bg-accent/10 px-2 py-1 font-mono text-sm text-green-300">
                  {chip}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
