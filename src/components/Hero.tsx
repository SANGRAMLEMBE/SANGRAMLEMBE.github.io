import { Terminal, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-purple/10 rounded-full blur-[120px] animate-pulse delay-75" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Terminal prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded-lg terminal-font text-sm text-primary mb-4">
            <Terminal className="w-4 h-4" />
            <span className="text-terminal-green">sangram@portfolio</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="text-foreground">whoami</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-glow">Sangram Lembe</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground font-light">
            <Code2 className="inline-block w-8 h-8 mr-2 text-primary" />
            AI Engineer & ML Specialist
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions with{" "}
            <span className="text-primary font-semibold">Machine Learning</span>,{" "}
            <span className="text-primary font-semibold">NLP</span>, and{" "}
            <span className="text-primary font-semibold">Computer Vision</span>.
            Turning data into actionable insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold box-glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="/Sangram's_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
