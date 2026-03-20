import { motion } from "framer-motion";
import { RefObject } from "react";
import { ease, iaCards } from "../data";

export function IASection({ iaInView, sectionRef }: { iaInView: boolean; sectionRef: RefObject<HTMLDivElement | null> }) {
  return (
    <section id="ia" ref={sectionRef} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        animate={iaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="font-syne text-3xl sm:text-4xl"
      >
        IA & Automatisation
      </motion.h2>
      <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-white/45">{"// le nouveau backend invisible"}</p>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
        {iaCards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 36 }}
            animate={iaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: i * 0.1, ease }}
            className="group relative rounded-2xl border border-white/10 bg-[#0f1020]/80 p-5 transition hover:-translate-y-1 hover:border-[#00ff88]/70 hover:shadow-[0_0_24px_rgba(0,255,136,0.2)] sm:p-6"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 14, ease: "linear", repeat: Infinity }}
              className="absolute right-4 top-4 text-lg text-[#00ff88]/70"
            >
              ⟳
            </motion.span>
            <h3 className="pr-8 font-syne text-2xl sm:text-3xl">{card.title}</h3>
            <p className="mt-3 font-mono text-sm text-white/65 sm:text-base">{card.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {card.tags.map((tag) => (
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
