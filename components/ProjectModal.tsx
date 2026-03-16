"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ProjectItem } from "@/components/ProjectSection";

type ProjectModalProps = {
  project: ProjectItem | null;
  onClose: () => void;
};

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-100/90 px-4 py-6 backdrop-blur-md md:px-8 md:py-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto w-full max-w-6xl border border-slate-300 bg-white p-6 text-slate-950 md:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="ml-auto block border border-slate-400 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-700 transition hover:border-slate-700 hover:text-slate-900"
            >
              Close
            </button>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.34em] text-slate-600">{project.id}</p>
                <h3 className="text-3xl font-semibold md:text-5xl">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 md:text-base">{project.longDescription}</p>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.28em] text-slate-600">Architecture</h4>
                  <p className="text-sm text-slate-700 md:text-base">{project.architecture}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={`modal-${project.title}-${tech}`} className="border border-slate-300 px-3 py-1 text-xs text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-slate-900 bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-slate-700"
                  >
                    Voir le projet
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-slate-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-800 transition hover:border-slate-800"
                  >
                    Github
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {project.gallery.map((item, index) => (
                  <div
                    key={`${project.title}-gallery-${index}`}
                    className="flex min-h-[120px] items-end border border-slate-300 bg-slate-50 p-4 md:min-h-[180px]"
                  >
                    <p className="text-sm font-medium text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
