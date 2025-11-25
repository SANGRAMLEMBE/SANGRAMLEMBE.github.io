import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Publications />
      <Certifications />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground terminal-font text-sm">
            © 2024 Sangram Lembe. Crafted with{" "}
            <span className="text-primary">AI</span> and{" "}
            <span className="text-primary">passion</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
