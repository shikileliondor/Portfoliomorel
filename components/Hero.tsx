export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl bg-slate-50 p-10 shadow-sm ring-1 ring-slate-200 md:p-14">
        <span className="w-fit rounded-full bg-white px-4 py-1 text-sm text-slate-600 ring-1 ring-slate-200">
          Portfolio Développeur
        </span>
        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Morel Yann Aimé Effobi Brou
          </h1>
          <h2 className="text-xl font-medium text-slate-700 md:text-2xl">
            Backend Developer & Junior Software Architect
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Développeur spécialisé dans la création d’applications backend et web modernes avec
            Laravel, Next.js et Flutter. Mon objectif est de devenir Software Architect et DevOps
            Engineer.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-100"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
