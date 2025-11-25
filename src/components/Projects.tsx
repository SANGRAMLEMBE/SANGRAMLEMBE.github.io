import { MessageSquare, Brain, Image, ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      icon: MessageSquare,
      title: "AI Chatbot",
      description: "Crafted an AI-powered chatbot that brings conversations to life. Let's get Started!!",
      tech: ["Python", "NLP", "AI", "Machine Learning"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Brain,
      title: "Mind Matters: ML for Student Well-being",
      description: "Built an ML model with PCA, PSO, and ensemble techniques to predict mental health risks for 1,000 students. Enabled early interventions, enhancing well-being and resilience through smart analytics.",
      tech: ["Python", "Scikit-learn", "PCA", "PSO"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Image,
      title: "Blur Buster: Image Classification with LLM",
      description: "Tamed the chaos of blurry visuals by fine-tuning CNNs on a dataset of fogged-up images. Hit a solid 70% accuracy, proving sharp results even when the picture's hazy.",
      tech: ["Python", "TensorFlow", "CNNs", "LLM"],
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Terminal header */}
        <div className="mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded-lg terminal-font text-sm text-primary mb-4">
            <span className="text-terminal-green">sangram@portfolio</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="text-foreground">cat projects.json</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions powered by AI and machine learning
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow animate-slide-up group flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with gradient */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="terminal-font text-xs px-2 py-1 bg-secondary border border-primary/20 rounded text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* GitHub Link */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '300ms' }}>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com/SANGRAMLEMBE', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
