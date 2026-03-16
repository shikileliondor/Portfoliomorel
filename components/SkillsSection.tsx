"use client";

import { motion } from "framer-motion";

type TechItem = {
  name: string;
  category: "Backend" | "Web" | "Mobile" | "DevOps" | "Version Control" | "Project Management";
  logo: string;
};

const techStack: TechItem[] = [
  { name: "PHP", category: "Backend", logo: "php" },
  { name: "Laravel", category: "Backend", logo: "laravel" },
  { name: "JavaScript", category: "Web", logo: "javascript" },
  { name: "TypeScript", category: "Web", logo: "typescript" },
  { name: "Next.js", category: "Web", logo: "next" },
  { name: "Flutter", category: "Mobile", logo: "flutter" },
  { name: "Android Studio", category: "Mobile", logo: "android" },
  { name: "Docker", category: "DevOps", logo: "docker" },
  { name: "Git", category: "Version Control", logo: "git" },
  { name: "GitHub", category: "Version Control", logo: "github" },
  { name: "Trello", category: "Project Management", logo: "trello" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function TechLogo({ logo, name }: { logo: TechItem["logo"]; name: string }) {
  const glyphs: Record<TechItem["logo"], string> = {
    php: "PHP",
    laravel: "L",
    javascript: "JS",
    typescript: "TS",
    next: "N",
    flutter: "F",
    android: "A",
    docker: "DK",
    git: "G",
    github: "GH",
    trello: "TR",
  };

  return (
    <div className="relative mb-6 h-14 w-14 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(70,190,255,0.3),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(147,112,255,0.25),transparent_55%)]" />
      <div className="relative flex h-full items-center justify-center text-xs font-semibold tracking-[0.14em] text-white/95" aria-label={`${name} logo`}>
        {glyphs[logo]}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(66,220,255,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="text-xs uppercase tracking-[0.32em] text-white/55">Skills / Tech Stack</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Modern Stack, Production Mindset.</h2>
        <p className="mt-4 max-w-3xl text-sm text-white/70 md:text-base">
          Technologies utilisées au quotidien pour concevoir des expériences web, mobile et backend performantes.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {techStack.map((tech, index) => (
            <motion.article
              key={tech.name}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] p-5 shadow-[0_12px_34px_rgba(0,0,0,0.34)] backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 28px rgba(96, 235, 255, 0.22), 0 0 24px rgba(96, 235, 255, 0.2)" }} />

              <TechLogo logo={tech.logo} name={tech.name} />
              <h3 className="text-2xl font-semibold tracking-tight text-white">{tech.name}</h3>
              <span className="mt-4 inline-flex rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-xs font-medium tracking-[0.08em] text-cyan-100/90">
                {tech.category}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
