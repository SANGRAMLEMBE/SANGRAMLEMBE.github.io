import { Brain, Code, Cpu, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Specializing in predictive modeling, natural language processing, and computer vision. Proficient in Python, TensorFlow, and scikit-learn with expertise in data preprocessing, feature engineering, and model deployment.",
      features: [
        "Predictive Analytics",
        "NLP Solutions",
        "Computer Vision",
        "Model Optimization",
      ],
    },
    {
      icon: Code,
      title: "Backend Development",
      description:
        "Expert in Python backend development, specializing in RESTful APIs, Django, Flask, and comprehensive database management with both SQL and NoSQL technologies.",
      features: [
        "RESTful API Design",
        "Django & Flask",
        "Database Architecture",
        "Microservices",
      ],
    },
    {
      icon: Cpu,
      title: "Deep Learning",
      description:
        "Building sophisticated neural network architectures for complex problem-solving. Experience with CNNs, RNNs, and transformer models for various applications.",
      features: [
        "Neural Networks",
        "Transfer Learning",
        "Model Fine-tuning",
        "Performance Optimization",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "End-to-end data pipeline development, from collection and preprocessing to storage and analysis. Ensuring data quality and scalability for ML workflows.",
      features: [
        "ETL Pipelines",
        "Data Warehousing",
        "Feature Engineering",
        "Data Quality",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Terminal header */}
        <div className="mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded-lg terminal-font text-sm text-primary mb-4">
            <span className="text-terminal-green">sangram@portfolio</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="text-foreground">cat about.txt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            I'm an AI Engineer with a passion for solving complex problems using machine learning
            and data science. With a degree in Artificial Intelligence from Pune University, I have
            experience working on projects in healthcare, finance, and e-commerce.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="text-primary">›</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
