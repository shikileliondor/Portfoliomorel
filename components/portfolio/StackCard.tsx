"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ease } from "./data";
import type { StackItem } from "./types";

export function StackCard({ item, index }: { item: StackItem; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05, ease }}
      className="rounded-xl border border-white/10 bg-[#0f1020]/70 p-5"
    >
      <p className="font-syne text-xl text-white">{item.name}</p>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00ff88]/80">{item.type}</p>
      <p className="mt-3 font-mono text-xs leading-relaxed text-white/60">{item.opinion}</p>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${item.level}%` } : {}}
          transition={{ duration: 0.9, delay: 0.1 + index * 0.03, ease }}
          className="h-full rounded-full bg-[#00ff88]"
        />
      </div>
    </motion.div>
  );
}
