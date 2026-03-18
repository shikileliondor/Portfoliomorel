import type { CareerJob, ClusterName, GraphNode, IaCard, NodeName, StackItem } from "./types";

export const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const stackItems: StackItem[] = [
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
];

export const nodePositions: Record<NodeName, GraphNode> = {
  Laravel: { x: 44, y: 46, size: "lg", cluster: "backend" },
  NestJS: { x: 33, y: 34, size: "md", cluster: "backend" },
  PHP: { x: 35, y: 60, size: "md", cluster: "backend" },
  TypeScript: { x: 28, y: 48, size: "md", cluster: "backend" },
  JavaScript: { x: 22, y: 67, size: "sm", cluster: "backend" },
  Flutter: { x: 64, y: 56, size: "md", cluster: "mobile" },
  Dart: { x: 73, y: 64, size: "sm", cluster: "mobile" },
  PostgreSQL: { x: 54, y: 34, size: "md", cluster: "data" },
  MySQL: { x: 53, y: 63, size: "sm", cluster: "data" },
  Docker: { x: 68, y: 41, size: "md", cluster: "infra" },
  n8n: { x: 60, y: 20, size: "sm", cluster: "ia" },
  "Agents IA": { x: 48, y: 17, size: "sm", cluster: "ia" },
  "API REST": { x: 72, y: 48, size: "sm", cluster: "mobile" },
};

export const clusterColors: Record<ClusterName, string> = {
  backend: "#00ff88",
  data: "#FAC775",
  infra: "#378ADD",
  ia: "#D4537E",
  mobile: "#97C459",
};

export const clusterLabels: Array<{ key: ClusterName; label: string }> = [
  { key: "backend", label: "Backend" },
  { key: "data", label: "Data" },
  { key: "infra", label: "Infra" },
  { key: "ia", label: "IA / Automatisation" },
  { key: "mobile", label: "Mobile" },
];

export const nodeLinks: Array<[NodeName, NodeName]> = [
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

export const nodeInfo: Record<NodeName, { years: string; type: string; opinion: string }> = {
  Laravel: { years: "6 ans", type: "Backend", opinion: "Mon framework MVP: livré vite, propre et scalable." },
  NestJS: { years: "4 ans", type: "Backend", opinion: "Architecture clean côté Node, parfait pour les APIs ambitieuses." },
  PHP: { years: "6 ans", type: "Langage", opinion: "Stable, mature, zéro drama en prod." },
  TypeScript: { years: "5 ans", type: "Langage", opinion: "Le meilleur garde-fou quand le projet grossit." },
  JavaScript: { years: "7 ans", type: "Langage", opinion: "Indispensable, mais je préfère le garder typé." },
  Flutter: { years: "3 ans", type: "Mobile", opinion: "Un codebase, deux plateformes, time-to-market agressif." },
  Dart: { years: "3 ans", type: "Langage", opinion: "Simple et efficace, parfait pour shipper mobile." },
  PostgreSQL: { years: "6 ans", type: "Data", opinion: "Mon couteau suisse SQL pour les apps sérieuses." },
  MySQL: { years: "6 ans", type: "Data", opinion: "Fiable et rapide quand il faut aller droit au but." },
  Docker: { years: "5 ans", type: "Infra", opinion: "La base pour des environnements reproductibles sans friction." },
  n8n: { years: "2 ans", type: "Automatisation", opinion: "Je remplace des tâches manuelles par des flux robustes." },
  "Agents IA": { years: "2 ans", type: "IA", opinion: "Le backend qui raisonne, décide et agit via API." },
  "API REST": { years: "6 ans", type: "Interface", opinion: "Le contrat clair entre mobile, web et backend." },
};

export const iaCards: IaCard[] = [
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
];

export const careerData: { career: CareerJob[] } = {
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
};

export const terminalLines = [
  'name: "Alex Morel"',
  'role: "Backend Developer"',
  'stack: ["Laravel", "NestJS", "Flutter"]',
  'focus: "API • IA • Automatisation"',
  'status: "open to work"',
];

export const badges = ["Laravel", "NestJS", "PostgreSQL", "Docker", "n8n", "Flutter"];

export const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
};
