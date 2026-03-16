import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12 dark:bg-slate-900 dark:ring-slate-700">
        <div className="space-y-5">
          <span className="w-fit rounded-full bg-white px-4 py-1 text-sm text-slate-600 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-600">
            Portfolio Développeur
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-100">
            Hi, I&apos;m <span className="text-cyan-600 dark:text-cyan-400">BEYAM</span>
          </h1>
          <h2 className="text-xl font-medium text-slate-700 md:text-2xl dark:text-slate-200">
            Backend Developer & Junior Software Architect
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
            Développeur spécialisé dans la création d’applications backend et web modernes avec
            Laravel, Next.js et Flutter. Mon objectif est de devenir Software Architect et DevOps
            Engineer.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-cyan-600 dark:hover:bg-cyan-500"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-md dark:border-slate-700 dark:bg-slate-800">
            <Image
              src="/images/morel.jpg"
              alt="Photo de Morel"
              width={600}
              height={700}
              priority
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
