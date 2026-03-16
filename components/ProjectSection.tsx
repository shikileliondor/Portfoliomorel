"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  architecture: string;
  technologies: string[];
  mockupLabel: string;
  gallery: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: ProjectItem[] = [
  {
    id: "Project 01",
    title: "ERP Vilora",
    description:
      "ERP modulaire orienté opérations internes, pilotage RH et suivi financier en temps réel. Interface pensée pour des workflows complexes avec accès contextualisé.",
    longDescription:
      "ERP Vilora centralise les flux métier critiques : ventes, approvisionnement, reporting et automatisation documentaire. L'objectif était de proposer une plateforme unifiée, rapide et fiable pour les équipes opérationnelles.",
    architecture:
      "Architecture services + API REST, dashboard Next.js connecté à un back office Laravel, cache Redis et base MySQL normalisée.",
    technologies: ["Next.js", "Laravel", "MySQL", "Redis"],
    mockupLabel: "Command center / Opérations",
    gallery: ["Dashboard KPI global", "Pipeline opérations", "Module finance avancé"],
    liveUrl: "https://example.com/vilora",
    githubUrl: "https://github.com/example/vilora",
  },
  {
    id: "Project 02",
    title: "Système RFID Intelligent",
    description:
      "Solution RFID pour contrôle d'accès et traçabilité instantanée. Monitoring live avec alertes et historique d'événements sécurisés.",
    longDescription:
      "Le système RFID a été conçu pour orchestrer les entrées/sorties physiques avec une couche analytique en temps réel. Chaque événement est consolidé pour faciliter les audits et renforcer la sécurité.",
    architecture:
      "API sécurisée Laravel, workers de traitement d'événements, application Flutter de supervision et stockage PostgreSQL.",
    technologies: ["Laravel", "Flutter", "PostgreSQL", "WebSocket"],
    mockupLabel: "Live tracking / Access control",
    gallery: ["Console sécurité", "Timeline des badges", "Carte interactive des zones"],
    liveUrl: "https://example.com/rfid",
    githubUrl: "https://github.com/example/rfid-system",
  },
  {
    id: "Project 03",
    title: "FleetOps Platform",
    description:
      "Gestion de flotte nouvelle génération avec maintenance prédictive. Rapports automatisés et cockpit de performance logistique.",
    longDescription:
      "FleetOps améliore la disponibilité des véhicules grâce à la maintenance préventive et aux alertes intelligentes. La plateforme simplifie la collaboration entre responsables terrain, support et direction.",
    architecture:
      "Front Next.js App Router, API routes serverless, pipelines n8n pour notifications et stockage PostgreSQL optimisé analytics.",
    technologies: ["Next.js", "TypeScript", "n8n", "PostgreSQL"],
    mockupLabel: "Logistics cockpit / Analytics",
    gallery: ["Vue disponibilité flotte", "Module maintenance", "Rapports hebdomadaires"],
    liveUrl: "https://example.com/fleetops",
    githubUrl: "https://github.com/example/fleetops",
  },
];

export function ProjectSection() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative z-20 border-t border-slate-300 bg-white text-slate-950">
      <div className="relative z-10">
        <div className="px-6 pt-20 md:px-10 md:pt-24">
          <p className="text-xs uppercase tracking-[0.38em] text-slate-600">Portfolio</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Projects</h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-700 md:text-base">
            Un scroll storytelling cinématique : chaque projet se révèle en plein écran, avec une transition immersive
            et une lecture claire des choix produit et techniques.
          </p>
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
