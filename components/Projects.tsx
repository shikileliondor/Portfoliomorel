type Project = {
  title: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "ERP Vilora",
    description:
      "Conception d’un ERP orienté gestion d’opérations et automatisation des flux métiers internes.",
    technologies: ["Laravel", "Next.js", "MySQL"],
  },
  {
    title: "ERP DYM Manufacture",
    description:
      "Développement d’une plateforme ERP pour le suivi de production, des stocks et des équipes.",
    technologies: ["Laravel", "n8n", "GitHub"],
  },
  {
    title: "Système RFID",
    description:
      "Mise en place d’un système RFID pour le contrôle d’accès et la traçabilité en temps réel.",
    technologies: ["Laravel", "Flutter", "API"],
  },
  {
    title: "Gestion flotte automobile",
    description:
      "Application de suivi des véhicules, maintenance préventive et rapports d’activité.",
    technologies: ["Next.js", "Laravel", "PostgreSQL"],
  },
  {
    title: "Plateforme Église",
    description:
      "Développement d’une plateforme digitale pour la communication, les événements et la gestion communautaire.",
    technologies: ["Next.js", "Flutter", "Git"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h3 className="mb-8 text-3xl font-semibold text-slate-900 dark:text-slate-100">Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h4 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h4>
              <p className="mb-4 text-slate-600 dark:text-slate-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
