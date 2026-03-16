"use client";

import { motion } from "framer-motion";
import type { ProjectItem } from "@/components/ProjectSection";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
  onOpen: (project: ProjectItem) => void;
};

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const lines = project.description.split(". ").filter(Boolean);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.94, y: 32 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ amount: 0.5, once: false }}
      transition={{ duration: 0.9, ease: easing }}
      className="group relative flex min-h-screen items-center px-6 py-20 md:px-12"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative mx-auto grid w-full max-w-6xl gap-10 border border-slate-300 bg-slate-50 p-6 text-left transition duration-500 hover:border-slate-500 hover:bg-white md:grid-cols-[1fr_1.05fr] md:p-12"
      >
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-600">Project {String(index + 1).padStart(2, "0")}</p>
          <h3 className="text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">{project.title}</h3>

          <div className="space-y-2 text-sm text-slate-700 md:text-base">
            {lines.map((line, lineIndex) => (
              <motion.p
                key={`${project.title}-line-${lineIndex}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.7, once: false }}
                transition={{ duration: 0.45, delay: 0.1 + lineIndex * 0.12 }}
              >
                {line.trim().endsWith(".") ? line : `${line}.`}
              </motion.p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={`${project.title}-${tech}`}
                className="border border-slate-300 bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ amount: 0.45, once: false }}
          transition={{ duration: 0.8, ease: easing, delay: 0.15 }}
          className="relative flex min-h-[260px] items-end overflow-hidden border border-slate-300 bg-gradient-to-br from-slate-100 to-white p-6 md:min-h-[380px]"
        >
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.38em] text-slate-600">Mockup</p>
            <p className="mt-3 max-w-xs text-lg font-medium text-slate-900 md:text-2xl">{project.mockupLabel}</p>
          </div>
        </motion.div>
      </button>
    </motion.article>
  );
}
