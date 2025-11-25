import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "The Joy of Computing using Python",
      issuer: "NPTEL",
      icon: "🎓",
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      icon: "🟢",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary terminal-font">certifications.json</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  <span className="text-3xl">{cert.icon}</span>
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
