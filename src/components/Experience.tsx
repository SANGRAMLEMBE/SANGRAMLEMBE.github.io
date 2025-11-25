import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const timeline = [
    {
      type: "education",
      icon: GraduationCap,
      title: "M.Tech - Data Engineering",
      organization: "S.R.M. Institute of Science and Technology, Chennai",
      period: "2025 - 2027",
      description: "Pursuing advanced studies in Data Engineering and Big Data Analytics",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Python Developer Intern",
      organization: "Flourisence Pvt. Ltd.",
      period: "July 2023 - January 2024",
      description: "Developed and maintained Application Tracking System using Node.js and Sequelize, implemented RESTful APIs",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "B.Tech - Artificial Intelligence",
      organization: "G.H. Raisoni College of Engineering and Management, Pune",
      period: "2020 - 2024",
      description: "CGPA: 8.31 - Specialized in AI, ML, Computer Vision, and NLP",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Terminal header */}
        <div className="mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded-lg terminal-font text-sm text-primary mb-4">
            <span className="text-terminal-green">sangram@portfolio</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="text-foreground">git log --oneline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My journey in tech and academia
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30 hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block z-10" />

                  {/* Content card */}
                  <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:box-glow md:ml-20 group">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-lg border ${
                        item.type === 'work' 
                          ? 'bg-primary/10 border-primary/30' 
                          : 'bg-tech-purple/10 border-tech-purple/30'
                      } group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${
                          item.type === 'work' ? 'text-primary' : 'text-tech-purple'
                        }`} />
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm terminal-font">
                            <Calendar className="w-4 h-4" />
                            {item.period}
                          </div>
                        </div>
                        <p className="text-primary font-medium mb-2">
                          {item.organization}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
