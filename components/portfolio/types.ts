export type NodeName =
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

export type ClusterName = "backend" | "data" | "infra" | "ia" | "mobile";

export type GraphNode = {
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
  cluster: ClusterName;
};

export type NodeVelocity = Record<NodeName, { vx: number; vy: number }>;

export type StackItem = {
  name: NodeName;
  type: string;
  level: number;
  opinion: string;
};

export type IaCard = {
  title: string;
  description: string;
  tags: string[];
};

export type CareerJob = {
  company: string;
  role: string;
  period: string;
  stack: string[];
  shipped: string;
  war_story: string;
};
