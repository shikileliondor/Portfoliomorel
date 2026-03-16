import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <section id="services" className="scroll-mt-24 px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <h3 className="mb-8 text-3xl font-semibold text-slate-900 dark:text-slate-100">Services</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Développement Backend",
                "Architecture logicielle junior",
                "Conception d’applications web modernes",
              ].map((service) => (
                <article
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
                >
                  <p className="text-slate-700 dark:text-slate-300">{service}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
