import { motion } from "framer-motion";
import { RefObject } from "react";
import { careerData, ease } from "../data";

export function CareerSection({ projectInView, sectionRef }: { projectInView: boolean; sectionRef: RefObject<HTMLDivElement | null> }) {
  return (
    <section id="parcours" ref={sectionRef} className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        animate={projectInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="mb-10 font-mono text-sm uppercase tracking-[0.3em] text-white/45"
      >
        {"// Parcours"}
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-3">
        {careerData.career.map((job, i) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, y: 36 }}
            animate={projectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: i * 0.1, ease }}
            className="rounded-2xl border border-white/10 bg-[#0f1020]/80 p-6 transition hover:-translate-y-1 hover:border-[#00ff88]/60"
          >
            <p className="font-mono text-sm text-white/35">{job.period}</p>
            <h3 className="mt-2 font-syne text-2xl">{job.company}</h3>
            <p className="font-mono text-sm text-[#00ff88]">{job.role}</p>
            <p className="mt-3 font-mono text-white/65">{job.shipped}</p>
            <p className="mt-3 border-l-2 border-[#00ff88]/35 pl-3 font-mono text-xs text-white/55">{job.war_story}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {job.stack.map((tag) => (
                <span key={tag} className="rounded-md border border-[#00ff88]/30 bg-[#00ff88]/10 px-2 py-1 font-mono text-xs text-[#8fffc3]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
