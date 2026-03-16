const technologies = ["Laravel", "Next.js", "Flutter", "n8n", "Git", "GitHub", "VS Code", "Trello"];

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h3 className="mb-8 text-3xl font-semibold text-slate-900">Stack & Technologies</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <article
              key={tech}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-medium text-slate-700">{tech}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
