"use client";

import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" ref={ref} className="mx-auto max-w-6xl px-6 pb-10 pt-28 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-display text-5xl font-extrabold"
      >
        Let&apos;s build something resilient.
      </motion.h2>
      <p className="mt-4 font-mono text-lg text-accent">$ ping me@alex.dev</p>
      <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
        <a href="mailto:me@alex.dev" className="rounded-2xl border border-white/10 bg-surface/70 p-6 text-left transition hover:border-accent">
          <Mail className="mb-4 text-accent" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">Email</p>
          <p className="mt-2 text-xl font-bold">me@alex.dev</p>
        </a>
        <div className="rounded-2xl border border-white/10 bg-surface/70 p-6 text-left transition hover:border-accent">
          <div className="mb-4 flex gap-3 text-accent">
            <Github />
            <Linkedin />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">GitHub / LinkedIn</p>
          <p className="mt-2 text-xl font-bold">github.com/alexdev · linkedin.com/in/alexdev</p>
        </div>
      </div>
      <footer className="mt-16 border-t border-white/10 pt-6 font-mono text-xs text-white/45">
        © {new Date().getFullYear()} Alex.dev — Built with Next.js + ☕
      </footer>
    </section>
  );
}
