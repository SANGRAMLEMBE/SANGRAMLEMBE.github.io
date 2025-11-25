import { Mail, Phone, Github, Linkedin, Download, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sangramlembe9696@gmail.com",
      href: "mailto:sangramlembe9696@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9158416688",
      href: "tel:+919158416688",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SANGRAMLEMBE",
      href: "https://github.com/SANGRAMLEMBE",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Terminal header */}
        <div className="mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded-lg terminal-font text-sm text-primary mb-4">
            <span className="text-terminal-green">sangram@portfolio</span>
            <span className="text-muted-foreground">:~$</span>
            <span className="text-foreground">./connect.sh</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's collaborate on your next AI project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 bg-card border-primary/20">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg border border-primary/30 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Download CV Button */}
              <div className="mt-6 pt-6 border-t border-primary/20">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => window.open("/Sangram's_Resume.pdf", '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <Card className="p-6 bg-card border-primary/20">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-secondary border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-secondary border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-secondary border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-secondary border-primary/20 focus:border-primary min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
