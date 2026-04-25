import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <div className="border-t border-[#1e1e2a]" />
      <About />
      <div className="border-t border-[#1e1e2a]" />
      <Projects />
      <div className="border-t border-[#1e1e2a]" />
      <Skills />
      <div className="border-t border-[#1e1e2a]" />
      <Experience />
      <div className="border-t border-[#1e1e2a]" />
      <Education />
      <div className="border-t border-[#1e1e2a]" />
      <Writing />
      <div className="border-t border-[#1e1e2a]" />
      <Contact />
      <Footer />
    </main>
  );
}
