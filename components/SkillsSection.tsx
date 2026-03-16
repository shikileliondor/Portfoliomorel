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
    <div className="relative mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 shadow-sm">
      <div className="relative text-xs font-semibold tracking-[0.14em] text-slate-800" aria-label={`${name} logo`}>
        {glyphs[logo]}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 border-t border-slate-300 bg-slate-50 px-6 py-20 text-slate-950 md:px-10 md:py-24">
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-600">Skills / Tech Stack</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Modern Stack, Production Mindset.</h2>
        <p className="mt-4 max-w-3xl text-sm text-slate-700 md:text-base">
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
              className="group relative overflow-hidden rounded-2xl border border-slate-300 bg-white p-5 shadow-sm"
            >
              <TechLogo logo={tech.logo} name={tech.name} />
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{tech.name}</h3>
              <span className="mt-4 inline-flex rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-medium tracking-[0.08em] text-slate-700">
                {tech.category}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
