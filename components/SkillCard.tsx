"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
  name: string;
  index: number;
};

export function SkillCard({ name, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.04 }}
      className="group relative overflow-hidden rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm font-medium tracking-wide text-white/90 transition-colors duration-300 will-change-transform hover:border-cyan-300/70"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 28px rgba(96, 235, 255, 0.25), 0 0 22px rgba(96, 235, 255, 0.18)" }} />
      <span className="relative z-10">{name}</span>
    </motion.div>
  );
}
