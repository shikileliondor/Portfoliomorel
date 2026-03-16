"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative z-20 border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="group overflow-hidden border border-white/60 bg-black/40">
            <Image
              src="/images/morel.jpg"
              alt="Photo de BEYAM"
              width={720}
              height={900}
              className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-white/55">Présentation</p>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">À propos de moi</h2>
          <p className="max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Je suis BEYAM, développeur backend passionné par la création d’applications modernes
            et performantes. J’aime concevoir des architectures robustes et construire des produits
            digitaux scalables.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
