import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
