"use client";

import { motion } from "framer-motion";
import { SkillCard } from "@/components/SkillCard";

type SkillCategoryProps = {
  title: string;
  skills: string[];
  index: number;
};

export function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm md:p-6"
    >
      <h3 className="mb-4 text-base font-semibold tracking-[0.08em] text-white/95 md:text-lg">{title}</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, skillIndex) => (
          <SkillCard key={skill} name={skill} index={skillIndex} />
        ))}
      </div>
    </motion.article>
  );
}
