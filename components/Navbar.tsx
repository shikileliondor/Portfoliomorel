const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Événements", href: "#stack" },
  { label: "Campus", href: "#projects" },
  { label: "Communautés", href: "#experience" },
  { label: "Partenariat", href: "#services", active: true },
];

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.7 2.7 4 6.4 4 10s-1.3 7.3-4 10m0-20C9.3 4.7 8 8.4 8 12s1.3 7.3 4 10m-9-10h18M4.7 7h14.6M4.7 17h14.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M13.8 2.5a9 9 0 1 0 7.7 12.8A7.5 7.5 0 1 1 13.8 2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 lg:px-8">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[2rem] border border-slate-200/70 bg-white/90 px-4 py-3 shadow-sm backdrop-blur md:px-6">
        <a href="#hero" className="flex items-center gap-3">
          <span className="grid grid-cols-2 gap-1">
            <span className="h-3.5 w-3.5 rounded-[3px] bg-[#e84f8a]" />
            <span className="h-3.5 w-3.5 rounded-[3px] bg-[#5e79ff]" />
            <span className="h-3.5 w-3.5 rounded-[3px] bg-[#f6c229]" />
            <span className="h-3.5 w-3.5 rounded-[3px] bg-[#4ab9b5]" />
          </span>
          <span className="hidden text-sm font-semibold leading-tight text-slate-900 sm:block">
            MOREL
            <br />
            PORTFOLIO
          </span>
        </a>

        <ul className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`rounded-xl px-5 py-3 text-[1.05rem] font-semibold transition-colors duration-200 ${
                  item.active
                    ? "bg-blue-100 text-blue-700"
                    : "text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-xl px-3 py-2 text-slate-900 hover:bg-slate-100 md:flex">
            <GlobeIcon />
            <span className="text-lg font-semibold">FR</span>
          </button>
          <button
            aria-label="Activer le mode sombre"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-blue-600 hover:bg-slate-50"
          >
            <MoonIcon />
          </button>
          <a
            href="#contact"
            className="rounded-2xl border-2 border-blue-600 px-6 py-2.5 text-xl font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-50"
          >
            Connexion
          </a>
        </div>
      </nav>
    </header>
  );
}
