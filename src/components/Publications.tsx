import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  const publications = [
    {
      title: "Features Preserving Blurred Image Classification Using Large Language Model",
      journal: "International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET)",
      pages: "pp. 8474-8480",
      date: "May 5, 2024",
      location: "Pune",
      doi: "10.15680/IJIRSET.2024.1305313",
      link: "https://www.ijirset.com/upload/2024/may/313_Features.pdf",
    },
  ];

  return (
    <section id="publications" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-primary terminal-font">research_output.log</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contributing to the academic community through research and publications
          </p>
        </div>

        <div className="grid gap-6 animate-slide-up">
          {publications.map((pub, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {pub.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium text-foreground">{pub.journal}</p>
                  <p className="text-sm">{pub.pages} • {pub.date} • {pub.location}</p>
                  <p className="text-sm terminal-font">
                    <span className="text-primary">DOI:</span> {pub.doi}
                  </p>
                </div>

                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors pt-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Publication</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
