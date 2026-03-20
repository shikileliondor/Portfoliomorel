import { motion, type MotionValue } from "framer-motion";
import { ease } from "../data";

type Props = {
  heroY: MotionValue<number>;
  lineCount: number;
  terminalLines: string[];
  badges: string[];
};

export function HeroSection({ heroY, lineCount, terminalLines, badges }: Props) {
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-4 pb-20 pt-28 sm:px-6 md:gap-14 md:pb-24 md:pt-32 md:grid-cols-2">
      <motion.div style={{ y: heroY }} className="relative z-10">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#00ff88]/80 sm:mb-6 sm:text-sm sm:tracking-[0.3em]">— Backend Engineer</p>
        {(["APIs.", "Automatisation.", "IA."] as const).map((word, i) => (
          <motion.h1
            key={word}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: i * 0.12, ease }}
            className={`font-syne text-[clamp(2.2rem,11vw,4rem)] font-bold leading-[0.9] md:text-8xl ${
              i === 2 ? "text-[#00ff88] drop-shadow-[0_0_24px_rgba(0,255,136,0.4)]" : "text-white"
            }`}
          >
            {word}
          </motion.h1>
        ))}
        <p className="mt-6 max-w-lg font-mono text-sm text-white/65 sm:mt-8 sm:text-base">
          Je construis des backends Laravel/NestJS, des apps Flutter et des workflows n8n pilotés par des agents IA.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
          <a href="#parcours" className="rounded-lg bg-[#00ff88] px-5 py-2.5 font-syne text-sm font-semibold text-[#041108] sm:px-6 sm:py-3 sm:text-base">Voir le parcours</a>
          <a href="#contact" className="rounded-lg border border-white/40 px-5 py-2.5 font-mono text-sm sm:px-6 sm:py-3 sm:text-base">$ curl /contact</a>
        </div>
      </motion.div>

      <motion.div style={{ y: heroY }} className="relative z-30">
        <div className="rounded-2xl border border-[#00ff88]/30 bg-[#0d0f18]/90 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-xs text-white/45">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            bash — alex@backend:~
          </div>
          <div className="space-y-2 p-4 font-mono text-sm sm:p-5 sm:text-base md:p-6 md:text-lg">
            <p className="text-[#00ff88]">❯ whoami --verbose</p>
            {terminalLines.slice(0, lineCount).map((line) => (
              <p key={line} className="text-white/80">
                <span className="text-[#a8ffca]">{line.split(":")[0]}:</span>
                <span className="text-amber-300">{line.slice(line.indexOf(":") + 1)}</span>
              </p>
            ))}
            <p className="text-[#00ff88]">✓ open to new opportunities</p>
            <span className="inline-block h-5 w-2 animate-pulse bg-[#00ff88] align-middle" />
          </div>
        </div>

        {badges.map((badge, i) => (
          <span
            key={badge}
            className="absolute hidden rounded-md border border-[#00ff88]/40 bg-[#0a0b14]/90 px-2 py-1 font-mono text-xs text-[#00ff88] lg:block"
            style={{ animation: `float 4s ease-in-out ${i * 0.4}s infinite`, left: `${i % 2 ? 78 : -8}%`, top: `${10 + i * 13}%` }}
          >
            {badge}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
