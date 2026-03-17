const EXPERTISE_ITEMS = [
  "Développement Mobile & Cross-platform",
  "Jeux Vidéo & Expériences Interactives",
  "Réalité Augmentée & Virtuelle (AR/VR)",
  "Intégration d'IA & LLM (Gemini)",
  "Mini-Apps (Telegram / WeChat)",
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-6xl rounded-[2.8rem] border border-cyan-900/30 bg-slate-950/90 p-8 shadow-[0_0_80px_rgba(0,151,255,0.12)] md:p-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <p className="max-w-xl text-3xl leading-relaxed text-slate-300/90 md:text-4xl">
            Du concept initial au déploiement sur les stores, j&apos;accompagne dans la création de
            produits digitaux innovants.
          </p>

          <ul className="space-y-6">
            {EXPERTISE_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-4 text-2xl font-semibold text-slate-100/90">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-950 text-blue-500">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="my-10 border-t border-slate-800" />

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4">
            <span className="h-4 w-4 rounded-full bg-emerald-400" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Délai de réponse...</p>
              <p className="text-4xl font-black uppercase italic text-white">Immediat</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-52 items-center justify-center rounded-full border border-slate-800 px-8 py-4 text-3xl font-semibold text-slate-100 transition hover:border-slate-600"
            >
              LinkedIn
            </a>
            <a
              href="mailto:morelyann10@gmail.com"
              className="inline-flex min-w-60 items-center justify-center rounded-full bg-white px-8 py-4 text-3xl font-semibold text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.35)] transition hover:bg-slate-100"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
