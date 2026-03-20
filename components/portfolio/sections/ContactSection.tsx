import { motion } from "framer-motion";
import { RefObject } from "react";
import { ease } from "../data";

export function ContactSection({ contactInView, sectionRef }: { contactInView: boolean; sectionRef: RefObject<HTMLDivElement | null> }) {
  return (
    <section id="contact" ref={sectionRef} className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="font-mono text-xl text-[#00ff88]"
      >
        $ ping me@moreldev
      </motion.p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
        {[
          { icon: "mail", label: "Email", value: "me@moreldev", href: "mailto:morelyann10@gmail.com" },
          { icon: "github", label: "GitHub", value: "github.com/moreldev", href: "https://github.com/shikileliondor" },
        ].map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 28 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="rounded-xl border border-white/15 bg-[#0f1020]/70 p-4 text-left transition hover:border-[#00ff88] sm:p-5"
          >
            <span className="mb-3 inline-block text-[#00ff88]">{item.icon === "mail" ? "✉" : "⌘"}</span>
            <p className="font-syne text-xl sm:text-2xl">{item.label}</p>
            <p className="font-mono text-sm text-white/65 sm:text-base">{item.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
