const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Stack", href: "#stack" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-slate-900">
          Morel Yann
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-600 transition-colors duration-300 hover:text-slate-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
