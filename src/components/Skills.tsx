import { Code, Database, Brain, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      name: "Python",
      level: "Advanced",
      description: "Expert in Python for AI/ML, backend development, and data processing",
    },
    {
      icon: Brain,
      name: "Machine Learning",
      level: "Advanced",
      description: "TensorFlow, Scikit-learn, Neural Networks, and Ensemble Methods",
    },
    {
      icon: Database,
      name: "SQL & Databases",
      level: "Intermediate",
      description: "Database design, optimization, and complex query operations",
    },
    {
      icon: Globe,
      name: "Web Technologies",
      level: "Intermediate",
      description: "HTML, CSS, JavaScript for frontend development",
    },
  ];

  const specializations = [
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Deep Learning",
    "Data Engineering",
    "PCA & Dimensionality Reduction",
    "Jupyter Notebook",
    "Matplotlib & Plotly",
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Terminal header */}
        <div className="mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded-lg terminal-font text-sm text-primary mb-4">
            <span className="text-terminal-green">sangram@portfolio</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="text-foreground">ls -la skills/</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Core competencies and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      <span className="terminal-font text-xs text-primary px-2 py-1 bg-primary/10 rounded">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-semibold mb-6 text-center">Specializations</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {specializations.map((spec, index) => (
              <div
                key={spec}
                className="px-4 py-2 bg-secondary border border-primary/20 rounded-lg terminal-font text-sm hover:border-primary/50 hover:bg-secondary/80 transition-all cursor-default"
              >
                <span className="text-primary mr-2">›</span>
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
