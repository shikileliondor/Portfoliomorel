import { motion } from "framer-motion";
import { RefObject } from "react";
import { ease } from "../data";

export function ContactSection({ contactInView, sectionRef }: { contactInView: boolean; sectionRef: RefObject<HTMLDivElement | null> }) {
  return (
    <section id="contact" ref={sectionRef} className="mx-auto max-w-3xl px-6 py-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="font-mono text-xl text-[#00ff88]"
      >
        $ ping me@alex.dev
      </motion.p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[
          { icon: "mail", label: "Email", value: "me@alex.dev", href: "mailto:me@alex.dev" },
          { icon: "github", label: "GitHub", value: "github.com/alexdev", href: "https://github.com/alexdev" },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 28 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="rounded-xl border border-white/15 bg-[#0f1020]/70 p-5 text-left transition hover:border-[#00ff88]"
          >
            <span className="mb-3 inline-block text-[#00ff88]">{item.icon === "mail" ? "✉" : "⌘"}</span>
            <p className="font-syne text-2xl">{item.label}</p>
            <p className="font-mono text-white/65">{item.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
