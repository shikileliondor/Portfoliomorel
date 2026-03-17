"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

type NodeName =
  | "Laravel"
  | "NestJS"
  | "PHP"
  | "TypeScript"
  | "JavaScript"
  | "Flutter"
  | "Dart"
  | "PostgreSQL"
  | "MySQL"
  | "Docker"
  | "n8n"
  | "Agents IA"
  | "API REST";

const stackItems = [
  { name: "Laravel", type: "Framework", level: 98, opinion: "Mon terrain de jeu principal. Élégant, rapide à shipper, batteries incluses" },
  { name: "NestJS", type: "Framework", level: 91, opinion: "Quand on veut la structure de Laravel mais en TypeScript" },
  { name: "PHP", type: "Langage", level: 95, opinion: "Mal aimé, sous-estimé. En prod depuis 2019 sans une plainte" },
  { name: "TypeScript", type: "Langage", level: 94, opinion: "JavaScript avec une ceinture de sécurité. Je reviens plus en arrière" },
  { name: "JavaScript", type: "Langage", level: 90, opinion: "Partout, tout le temps, pour le meilleur et pour le pire" },
  { name: "Flutter", type: "Framework mobile", level: 88, opinion: "Un seul codebase, iOS et Android. La magie quand ça compile" },
  {
    name: "PostgreSQL",
    type: "Base de données",
    level: 93,
    opinion: "La base de tout. JSON, full-text search, transactions — il fait tout",
  },
  { name: "MySQL", type: "Base de données", level: 90, opinion: "Le classique. Fiable, prévisible, pas de surprises" },
  { name: "Docker", type: "Infra", level: 92, opinion: "Works on my machine — and yours. Fin du débat" },
  {
    name: "n8n",
    type: "Automatisation",
    level: 87,
    opinion: "L'automatisation visuelle qui fait le travail de 3 scripts Python moches",
  },
  { name: "Agents IA", type: "IA", level: 89, opinion: "RAG, LLMs, intégrations API — le nouveau backend invisible" },
  { name: "Dart", type: "Langage", level: 82, opinion: "Propre et typé. On l'oublie vite tellement Flutter l'abstrait bien" },
] as const;

const nodePositions: Record<
  NodeName,
  { x: number; y: number; size: "sm" | "md" | "lg"; cluster: string }
> = {
  Laravel: { x: 50, y: 47, size: "lg", cluster: "backend" },
  NestJS: { x: 29, y: 35, size: "md", cluster: "backend" },
  PHP: { x: 38, y: 61, size: "md", cluster: "backend" },
  TypeScript: { x: 22, y: 53, size: "md", cluster: "backend" },
  JavaScript: { x: 16, y: 68, size: "sm", cluster: "backend" },
  Flutter: { x: 79, y: 69, size: "md", cluster: "mobile" },
  Dart: { x: 90, y: 69, size: "sm", cluster: "mobile" },
  PostgreSQL: { x: 61, y: 33, size: "md", cluster: "data" },
  MySQL: { x: 56, y: 64, size: "sm", cluster: "data" },
  Docker: { x: 74, y: 39, size: "md", cluster: "infra" },
  n8n: { x: 74, y: 19, size: "sm", cluster: "ia" },
  "Agents IA": { x: 56, y: 15, size: "sm", cluster: "ia" },
  "API REST": { x: 90, y: 44, size: "sm", cluster: "api" },
};

const nodeLinks: Array<[NodeName, NodeName]> = [
  ["Laravel", "PHP"],
  ["Laravel", "PostgreSQL"],
  ["Laravel", "MySQL"],
  ["Laravel", "Docker"],
  ["NestJS", "TypeScript"],
  ["NestJS", "PostgreSQL"],
  ["NestJS", "Docker"],
  ["PHP", "MySQL"],
  ["TypeScript", "JavaScript"],
  ["JavaScript", "NestJS"],
  ["Flutter", "Dart"],
  ["Flutter", "API REST"],
  ["PostgreSQL", "Docker"],
  ["MySQL", "PHP"],
  ["Docker", "PostgreSQL"],
  ["n8n", "Docker"],
  ["n8n", "Agents IA"],
  ["n8n", "API REST"],
  ["Agents IA", "NestJS"],
  ["Agents IA", "API REST"],
];

const iaCards = [
  {
    title: "Agents IA",
    description:
      "Construction d'agents autonomes avec LLMs (GPT-4, Claude). RAG sur bases documentaires, chaînes de traitement, intégrations API métier. Le backend qui pense.",
    tags: ["LLM", "RAG", "LangChain", "API OpenAI", "Vector DB"],
  },
  {
    title: "Automatisation n8n",
    description:
      "Workflows visuels complexes connectant APIs, bases de données, webhooks et services tiers. Remplacement de scripts répétitifs, synchronisation de données, alerting intelligent.",
    tags: ["n8n", "Webhooks", "ETL", "Zapier-killer", "Self-hosted"],
  },
] as const;

const careerData = {
  career: [
    {
      company: "AgenceDigital CI",
      role: "Lead Backend Developer",
      period: "2023 → aujourd'hui",
      stack: ["Laravel", "NestJS", "PostgreSQL", "Docker", "n8n"],
      shipped: "Plateforme SaaS multi-tenant avec automatisation complète des workflows métier via n8n",
      war_story:
        "Le client voulait que 47 tâches manuelles soient automatisées en 2 semaines. J'ai tout câblé en n8n + Laravel. Livré en 11 jours. Les 3 derniers jours j'ai pas vu la lumière du soleil.",
    },
    {
      company: "FintechWest Africa",
      role: "Backend Engineer",
      period: "2021 → 2023",
      stack: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Docker"],
      shipped: "API de transfert d'argent mobile gérant 500K transactions/mois",
      war_story:
        "Race condition sur les transactions en prod un samedi matin. De l'argent se créait littéralement de nulle part. ROLLBACK, hotfix, redeploy en 23 minutes. Le plus beau sprint de ma vie.",
    },
    {
      company: "StartupMobile",
      role: "Fullstack Developer",
      period: "2019 → 2021",
      stack: ["Flutter", "Dart", "Laravel", "MySQL"],
      shipped: "App mobile Flutter + backend Laravel livrés en même temps pour 3000 utilisateurs J1",
      war_story:
        "Premier projet Flutter. L'app crashait sur Android 8 seulement. Impossible à reproduire en local. Debuggé à l'aveugle avec des logs pendant 2 jours. C'était un plugin de caméra vieux de 4 ans.",
    },
  ],
} as const;

const terminalLines = [
  'name: "Alex Morel"',
  'role: "Backend Developer"',
  'stack: ["Laravel", "NestJS", "Flutter"]',
  'focus: "API • IA • Automatisation"',
  'status: "open to work"',
];

function StackCard({ item, index }: { item: (typeof stackItems)[number]; index: number }) {
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

export default function PortfolioPage() {
  const [blurNav, setBlurNav] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [lineCount, setLineCount] = useState(0);

  const { scrollY } = useScroll();
  const springX = useSpring(mouse.x, { damping: 20, stiffness: 300 });
  const springY = useSpring(mouse.y, { damping: 20, stiffness: 300 });
  const heroY = useTransform(scrollY, [0, 500], [0, 70]);

  const stackRef = useRef<HTMLDivElement | null>(null);
  const iaRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-120px" });
  const iaInView = useInView(iaRef, { once: true, margin: "-120px" });
  const projectInView = useInView(projectsRef, { once: true, margin: "-120px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setBlurNav(v > 18));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const timers = terminalLines.map((_, index) => window.setTimeout(() => setLineCount(index + 1), 350 + index * 500));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  const badges = useMemo(() => ["Laravel", "NestJS", "PostgreSQL", "Docker", "n8n", "Flutter"], []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#080810] text-white selection:bg-[#00ff88] selection:text-[#040406]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:3px_3px]" />

      <motion.div style={{ x: springX, y: springY }} className="pointer-events-none fixed z-[70] hidden md:block">
        <div className="-translate-x-1/2 -translate-y-1/2 mix-blend-difference">
          <div className="h-10 w-10 rounded-full border border-white" />
        </div>
      </motion.div>
      <div className="pointer-events-none fixed z-[71] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88] md:block" style={{ left: mouse.x, top: mouse.y }} />

      <motion.nav
        className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition ${
          blurNav ? "border-white/10 bg-[#080810]/60 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 font-mono text-sm">
          <a href="#home" className="text-[#00ff88]">~/alex.dev</a>
          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Stack", "stack"],
              ["IA", "ia"],
              ["Parcours", "parcours"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="group relative uppercase tracking-[0.2em] text-white/70">
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00ff88] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[#00ff88]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff88]" /> disponible
          </div>
        </div>
      </motion.nav>

      <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pb-24 pt-32 md:grid-cols-2">
        <motion.div style={{ y: heroY }}>
          <p className="mb-6 font-mono uppercase tracking-[0.3em] text-[#00ff88]/80">— Backend Engineer</p>
          {(["APIs.", "Automatisation.", "IA."] as const).map((word, i) => (
            <motion.h1
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: i * 0.12, ease }}
              className={`font-syne text-6xl font-bold leading-[0.9] md:text-8xl ${
                i === 2 ? "text-[#00ff88] drop-shadow-[0_0_24px_rgba(0,255,136,0.4)]" : "text-white"
              }`}
            >
              {word}
            </motion.h1>
          ))}
          <p className="mt-8 max-w-lg font-mono text-white/65">
            Je construis des backends Laravel/NestJS, des apps Flutter et des workflows n8n pilotés par des agents IA.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#parcours" className="rounded-lg bg-[#00ff88] px-6 py-3 font-syne font-semibold text-[#041108]">Voir le parcours</a>
            <a href="#contact" className="rounded-lg border border-white/40 px-6 py-3 font-mono">$ curl /contact</a>
          </div>
        </motion.div>

        <motion.div style={{ y: heroY }} className="relative">
          <div className="rounded-2xl border border-[#00ff88]/30 bg-[#0d0f18]/90 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-xs text-white/45">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              bash — alex@backend:~
            </div>
            <div className="space-y-2 p-6 font-mono text-lg">
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
              className="absolute rounded-md border border-[#00ff88]/40 bg-[#0a0b14]/90 px-2 py-1 font-mono text-xs text-[#00ff88]"
              style={{ animation: `float 4s ease-in-out ${i * 0.4}s infinite`, left: `${i % 2 ? 78 : -8}%`, top: `${10 + i * 13}%` }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </section>

      <section id="stack" ref={stackRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={stackInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-10 font-mono text-sm uppercase tracking-[0.3em] text-white/45"
        >
          {"// Stack"}
        </motion.h2>

        <div className="mb-10 rounded-2xl border border-white/10 bg-[#0f1020]/70 p-4 md:p-6">
          <div className="relative h-[420px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#090b14]">
            <svg className="absolute inset-0 h-full w-full">
              {nodeLinks.map(([from, to], i) => {
                const start = nodePositions[from];
                const end = nodePositions[to];
                return (
                  <line
                    key={`${from}-${to}-${i}`}
                    x1={`${start.x}%`}
                    y1={`${start.y}%`}
                    x2={`${end.x}%`}
                    y2={`${end.y}%`}
                    stroke="rgba(0,255,136,0.28)"
                    strokeWidth={from === "Laravel" || to === "Laravel" ? 2.2 : 1.4}
                  />
                );
              })}
            </svg>

            {(Object.keys(nodePositions) as NodeName[]).map((node) => {
              const config = nodePositions[node];
              const sizeClass = config.size === "lg" ? "px-5 py-3 text-base" : config.size === "md" ? "px-4 py-2.5 text-sm" : "px-3 py-2 text-xs";
              return (
                <div
                  key={node}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border font-mono ${sizeClass} ${
                    node === "Laravel"
                      ? "border-[#00ff88]/80 bg-[#00ff88]/15 text-[#baffdc] shadow-[0_0_25px_rgba(0,255,136,0.3)]"
                      : "border-[#00ff88]/40 bg-[#09111a] text-white/85"
                  }`}
                  style={{ left: `${config.x}%`, top: `${config.y}%` }}
                >
                  {node}
                </div>
              );
            })}
          </div>
          <p className="mt-3 font-mono text-xs text-white/45">
            Clusters : backend (Laravel, NestJS, PHP, TypeScript) • data (PostgreSQL, MySQL) • infra (Docker) • automatisation/IA (n8n, Agents IA) • mobile (Flutter, Dart)
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stackItems.map((item, i) => (
            <StackCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </section>

      <section id="ia" ref={iaRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={iaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="font-syne text-4xl"
        >
          IA & Automatisation
        </motion.h2>
        <p className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-white/45">{"// le nouveau backend invisible"}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {iaCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              animate={iaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.1, ease }}
              className="group relative rounded-2xl border border-white/10 bg-[#0f1020]/80 p-6 transition hover:-translate-y-1 hover:border-[#00ff88]/70 hover:shadow-[0_0_24px_rgba(0,255,136,0.2)]"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 14, ease: "linear", repeat: Infinity }}
                className="absolute right-4 top-4 text-lg text-[#00ff88]/70"
              >
                ⟳
              </motion.span>
              <h3 className="font-syne text-3xl">{card.title}</h3>
              <p className="mt-3 font-mono text-white/65">{card.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-[#00ff88]/30 bg-[#00ff88]/10 px-2 py-1 font-mono text-xs text-[#8fffc3]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="parcours" ref={projectsRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={projectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-10 font-mono text-sm uppercase tracking-[0.3em] text-white/45"
        >
          {"// Parcours"}
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {careerData.career.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 36 }}
              animate={projectInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.1, ease }}
              className="rounded-2xl border border-white/10 bg-[#0f1020]/80 p-6 transition hover:-translate-y-1 hover:border-[#00ff88]/60"
            >
              <p className="font-mono text-sm text-white/35">{job.period}</p>
              <h3 className="mt-2 font-syne text-2xl">{job.company}</h3>
              <p className="font-mono text-sm text-[#00ff88]">{job.role}</p>
              <p className="mt-3 font-mono text-white/65">{job.shipped}</p>
              <p className="mt-3 border-l-2 border-[#00ff88]/35 pl-3 font-mono text-xs text-white/55">{job.war_story}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((tag) => (
                  <span key={tag} className="rounded-md border border-[#00ff88]/30 bg-[#00ff88]/10 px-2 py-1 font-mono text-xs text-[#8fffc3]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" ref={contactRef} className="mx-auto max-w-3xl px-6 py-24 text-center">
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
    </main>
  );
}
