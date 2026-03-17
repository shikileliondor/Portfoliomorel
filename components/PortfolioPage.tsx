"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stackItems = [
  { name: "Node.js", type: "Runtime", level: 95 },
  { name: "TypeScript", type: "Langage", level: 92 },
  { name: "PostgreSQL", type: "Base de données", level: 90 },
  { name: "Redis", type: "Cache", level: 88 },
  { name: "Docker", type: "Container", level: 91 },
  { name: "Kubernetes", type: "Orchestration", level: 82 },
  { name: "Kafka", type: "Messaging", level: 84 },
  { name: "RabbitMQ", type: "Queue", level: 78 },
  { name: "AWS", type: "Cloud", level: 87 },
  { name: "Terraform", type: "IaC", level: 80 },
  { name: "Grafana", type: "Monitoring", level: 85 },
  { name: "GitHub Actions", type: "CI/CD", level: 86 },
];

const projects = [
  {
    number: "01",
    title: "PayFlow Gateway",
    description: "API de paiement haute disponibilité traitant 2M+ transactions/jour avec circuit breaker.",
    tags: ["Node.js", "gRPC", "PostgreSQL", "Redis"],
    featured: true,
  },
  {
    number: "02",
    title: "DataStream Pipeline",
    description: "Pipeline ETL temps réel pour ingestion et transformation de données IoT à grande échelle.",
    tags: ["TypeScript", "Kafka", "ClickHouse"],
    featured: false,
  },
  {
    number: "03",
    title: "AuthCore SDK",
    description: "Librairie d'authentification OAuth2/JWT pour gestion des sessions distribuées.",
    tags: ["TypeScript", "JWT", "OAuth2"],
    featured: false,
  },
];

const terminalLines = [
  'name: "Alex Morel"',
  'role: "Backend Developer"',
  'stack: ["Node.js", "Docker", "Redis"]',
  'focus: "APIs • Perf • Infra"',
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
      transition={{ duration: 0.6, delay: index * 0.06, ease }}
      className="rounded-xl border border-white/10 bg-[#0f1020]/70 p-5"
    >
      <p className="font-syne text-xl text-white">{item.name}</p>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00ff88]/80">{item.type}</p>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${item.level}%` } : {}}
          transition={{ duration: 0.9, delay: 0.1 + index * 0.04, ease }}
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
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-120px" });
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
    const timers = terminalLines.map((_, index) =>
      window.setTimeout(() => setLineCount(index + 1), 350 + index * 500),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  const badges = useMemo(() => ["Node.js", "Docker", "Redis", "Kafka", "PostgreSQL", "AWS"], []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#080810] text-white selection:bg-[#00ff88] selection:text-[#040406]">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:3px_3px]" />

      <motion.div style={{ x: springX, y: springY }} className="pointer-events-none fixed z-[70] hidden md:block">
        <div className="-translate-x-1/2 -translate-y-1/2 mix-blend-difference">
          <div className="h-10 w-10 rounded-full border border-white" />
        </div>
      </motion.div>
      <div
        className="pointer-events-none fixed z-[71] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88] md:block"
        style={{ left: mouse.x, top: mouse.y }}
      />

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
              ["Projets", "projets"],
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
          {(["APIs.", "Systèmes.", "Performance."] as const).map((word, i) => (
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
            Je construis des architectures backend robustes — microservices, pipelines de données et infra cloud.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projets" className="rounded-lg bg-[#00ff88] px-6 py-3 font-syne font-semibold text-[#041108]">Voir les projets</a>
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
              style={{
                animation: `float 4s ease-in-out ${i * 0.4}s infinite`,
                left: `${i % 2 ? 78 : -8}%`,
                top: `${10 + i * 13}%`,
              }}
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stackItems.map((item, i) => (
            <StackCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </section>

      <section id="projets" ref={projectsRef} className="mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={projectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-10 font-mono text-sm uppercase tracking-[0.3em] text-white/45"
        >
          {"// Projets récents"}
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              animate={projectInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.1, ease }}
              className={`rounded-2xl border bg-[#0f1020]/80 p-6 transition hover:-translate-y-1 ${
                project.featured ? "border-[#00ff88]/60" : "border-white/10"
              }`}
            >
              <p className="font-mono text-sm text-white/35">{project.number}</p>
              <h3 className="mt-2 font-syne text-3xl">{project.title}</h3>
              <p className="mt-3 font-mono text-white/65">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
