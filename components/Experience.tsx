type TimelineItem = {
  year: string;
  title: string;
};

const timeline: TimelineItem[] = [
  { year: "2026", title: "Licence Génie Logiciel (en cours)" },
  { year: "2025", title: "Développeur Web – DYM Manufacture" },
  { year: "2024", title: "BTS Informatique – Développement d'applications" },
  { year: "2023", title: "Baccalauréat Scientifique" },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <h3 className="mb-8 text-3xl font-semibold text-slate-900 dark:text-slate-100">Experience / Timeline</h3>
        <div className="space-y-6 border-l border-slate-200 pl-6 dark:border-slate-700">
          {timeline.map((item) => (
            <article
              key={item.year}
              className="relative rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700"
            >
              <span className="absolute -left-[34px] top-6 h-3 w-3 rounded-full bg-slate-900 dark:bg-slate-100" />
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.year}</p>
              <p className="mt-1 text-base text-slate-700 dark:text-slate-300">{item.title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
