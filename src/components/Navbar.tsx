"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Stack", href: "#stack" },
    { label: "Projets", href: "#projets" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-accent/10 transition-all duration-300 ${
        scrolled ? "bg-surface/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-mono text-xl text-accent">
          ~/alex.dev
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative font-mono text-xs uppercase tracking-[0.24em] text-white/70"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 font-mono text-sm text-accent md:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          disponible
        </div>
      </nav>
    </motion.header>
  );
}
