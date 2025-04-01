import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen select-none">
      <Header />
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
