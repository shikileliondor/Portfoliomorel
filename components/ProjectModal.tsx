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
          className="fixed inset-0 z-50 overflow-y-auto bg-black/90 px-4 py-6 backdrop-blur-md md:px-8 md:py-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto w-full max-w-6xl border border-white/20 bg-black p-6 md:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="ml-auto block border border-white/30 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white/80 transition hover:border-white hover:text-white"
            >
              Close
            </button>

            <div className="mt-8 grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.34em] text-white/50">{project.id}</p>
                <h3 className="text-3xl font-semibold md:text-5xl">{project.title}</h3>
                <p className="text-sm leading-relaxed text-white/75 md:text-base">{project.longDescription}</p>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.28em] text-white/50">Architecture</h4>
                  <p className="text-sm text-white/75 md:text-base">{project.architecture}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={`modal-${project.title}-${tech}`} className="border border-white/20 px-3 py-1 text-xs text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-transparent hover:text-white"
                  >
                    Voir le projet
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white"
                  >
                    Github
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                {project.gallery.map((item, index) => (
                  <div
                    key={`${project.title}-gallery-${index}`}
                    className="flex min-h-[120px] items-end border border-white/15 bg-gradient-to-br from-white/10 via-white/[0.04] to-transparent p-4 md:min-h-[180px]"
                  >
                    <p className="text-sm font-medium text-white/90">{item}</p>
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
