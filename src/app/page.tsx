import About from "@/components/About";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
