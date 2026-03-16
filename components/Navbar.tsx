"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#stack" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5V5.5M12 18.5V21.5M21.5 12H18.5M5.5 12H2.5M18.7 5.3L16.5 7.5M7.5 16.5L5.3 18.7M18.7 18.7L16.5 16.5M7.5 7.5L5.3 5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 px-4 py-4 lg:px-8">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[2rem] border border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur md:px-6 dark:border-slate-700 dark:bg-slate-900/90">
        <a href="#hero" className="flex items-center gap-3">
          <span className="grid grid-cols-2 gap-1">
            <span className="h-3.5 w-3.5 rounded-[3px] bg-[#e84f8a]" />
            <span className="h-3.5 w-3.5 rounded-[3px] bg-[#5e79ff]" />
            <span className="h-3.5 w-3.5 rounded-[3px] bg-[#f6c229]" />
            <span className="h-3.5 w-3.5 rounded-[3px] bg-[#4ab9b5]" />
          </span>
          <span className="hidden text-sm font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:block">
            BEYAM
            <br />
            PORTFOLIO
          </span>
        </a>

        <ul className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-xl px-5 py-3 text-[1.05rem] font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Activer le mode sombre"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-blue-600 hover:bg-slate-50 dark:border-slate-700 dark:text-amber-300 dark:hover:bg-slate-800"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#contact"
            className="rounded-2xl border-2 border-blue-600 px-5 py-2 text-base font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-slate-800"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
