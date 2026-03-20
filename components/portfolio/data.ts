import type { CareerJob, ClusterName, GraphNode, IaCard, NodeName, StackItem } from "./types";

export const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const stackItems: StackItem[] = [
  { 
    name: "Laravel", 
    type: "Framework", 
    level: 98, 
    opinion: "Framework principal pour concevoir des architectures backend robustes, maintenables et orientées métier." 
  },
  { 
    name: "NestJS", 
    type: "Framework", 
    level: 91, 
    opinion: "Excellente base pour des applications scalables en TypeScript avec une architecture modulaire claire." 
  },
  { 
    name: "PHP", 
    type: "Langage", 
    level: 95, 
    opinion: "Langage mature et éprouvé, parfaitement adapté aux applications web critiques et aux environnements de production." 
  },
  { 
    name: "TypeScript", 
    type: "Langage", 
    level: 94, 
    opinion: "Apporte rigueur, typage fort et maintenabilité aux applications JavaScript complexes." 
  },
  { 
    name: "JavaScript", 
    type: "Langage", 
    level: 90, 
    opinion: "Fondation du développement web moderne, essentiel pour les interfaces dynamiques et interactives." 
  },
  { 
    name: "Vue.js", 
    type: "Framework frontend", 
    level: 92, 
    opinion: "Framework réactif et performant, idéal pour concevoir des interfaces utilisateurs fluides et modulaires." 
  },
  { 
    name: "Flutter", 
    type: "Framework mobile", 
    level: 88, 
    opinion: "Solution efficace pour le développement cross-platform avec une expérience utilisateur cohérente." 
  },
  {
    name: "PostgreSQL",
    type: "Base de données",
    level: 93,
    opinion: "Système de gestion de base de données avancé, adapté aux applications complexes nécessitant performance et intégrité des données."
  },
  { 
    name: "MySQL", 
    type: "Base de données", 
    level: 90, 
    opinion: "Solution fiable et largement adoptée pour des applications web nécessitant stabilité et simplicité." 
  },
  { 
    name: "Docker", 
    type: "Infrastructure", 
    level: 92, 
    opinion: "Standard de conteneurisation pour garantir la reproductibilité et la portabilité des environnements." 
  },
  {
    name: "n8n",
    type: "Automatisation",
    level: 87,
    opinion: "Outil clé pour orchestrer des workflows métier complexes et automatiser les processus à forte valeur."
  },
  { 
    name: "Agents IA", 
    type: "Intelligence Artificielle", 
    level: 89, 
    opinion: "Conception d’agents intelligents intégrés aux systèmes pour automatiser les décisions et les processus métiers." 
  },
  { 
    name: "Dart", 
    type: "Langage", 
    level: 82, 
    opinion: "Langage moderne optimisé pour les applications mobiles performantes via Flutter." 
  },
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
  n8n: { years: "2 ans", type: "Automatjjisation", opinion: "Je remplace des tâches manuelles par des flux robustes." },
  "Agents IA": { years: "2 ans", type: "IA", opinion: "Le backend qui raisonne, décide et agit via API." },
  "API REST": { years: "6 ans", type: "Interface", opinion: "Le contrat clair entre mobile, web et backend." },
};

export const iaCards: IaCard[] = [
  {
    title: "Agents IA",
    description:
      "Construction d'agents autonomes pour l'automatisation d'un système ERP de gestion CRM : clients, signatures de devis, relances clients, etc.",
    tags: ["LLM", "API DEEPSEEK", "Whatssap cloud", "Google tool"],
  },
  {
    title: "Automatisation n8n",
    description:
      "Conception de workflows visuels complexes intégrant des APIs, des systèmes ERP et des chatbots pour automatiser les processus métiers.",
    tags: ["n8n", "Webhooks", "API DEPPSEEK"],
  },
];

export const careerData: { career: CareerJob[] } = {
  career: [
    {
     company: "DYM Manufacture",
      role: "Développeur Fullstack",
     period: "2025 → aujourd'hui",
      stack: ["Laravel", "PHP", "JavaScript", "Vue.js", "MySQL"],
      shipped: "Conception et développement d’ERP pour digitaliser les opérations internes (gestion clients, facturation, suivi des activités).",
    war_story:
      " Déployements de modules ERP critiques en combinant Laravel pour une architecture backend robuste. Ces solutions ont permis d’automatiser les processus métiers, d’améliorer la productivité et de structurer les données de l’entreprise."
    },
    // {
    //   company: "FintechWest Africa",
    //   role: "Backend Engineer",
    //   period: "2021 → 2023",
    //   stack: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Docker"],
    //   shipped: "API de transfert d'argent mobile gérant 500K transactions/mois",
    //   war_story:
    //     "Race condition sur les transactions en prod un samedi matin. De l'argent se créait littéralement de nulle part. ROLLBACK, hotfix, redeploy en 23 minutes. Le plus beau sprint de ma vie.",
    // },
    // {
    //   company: "StartupMobile",
    //   role: "Fullstack Developer",
    //   period: "2019 → 2021",
    //   stack: ["Flutter", "Dart", "Laravel", "MySQL"],
    //   shipped: "App mobile Flutter + backend Laravel livrés en même temps pour 3000 utilisateurs J1",
    //   war_story:
    //     "Premier projet Flutter. L'app crashait sur Android 8 seulement. Impossible à reproduire en local. Debuggé à l'aveugle avec des logs pendant 2 jours. C'était un plugin de caméra vieux de 4 ans.",
    // },
  ],
};

export const terminalLines = [
  'name: "Brou Effobi Morel Yann Aime"',
  'role: "Backend Developer  Software Architect"',
  'stack: ["Laravel", "NestJS", "Flutter"]',
  'focus: "API • IA • Automatisation"',
  // 'status: "open to wor"',
];

 export const badges = ["Laravel", "NestJS", "PostgreSQL", "Docker", "n8n", "Flutter"];

export const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
};
