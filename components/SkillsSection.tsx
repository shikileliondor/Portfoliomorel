"use client";

import { SkillCategory } from "@/components/SkillCategory";
// import { CodeBackground } from "@/components/CodeBackground";

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["PHP", "Laravel"],
  },
  {
    title: "Frontend Development",
    skills: ["JavaScript", "TypeScript", "Next.js"],
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Android Studio"],
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Project Management",
    skills: ["Trello"],
  },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 border-t border-white/10 bg-black px-6 py-20 text-white md:px-10 md:py-24">
      {/* <CodeBackground /> */}

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="text-xs uppercase tracking-[0.32em] text-white/55">Skills & Expertise</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">Skills & Expertise</h2>
        <p className="mt-4 max-w-3xl text-sm text-white/75 md:text-base">
          Technologies que j&apos;utilise pour concevoir des applications modernes, performantes et scalables.
        </p>

        <div className="mt-10 grid gap-4 md:gap-5">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} title={category.title} skills={[...category.skills]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
