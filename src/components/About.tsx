import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "FullStack Developer",
      description: "Desenvolvimento completo de aplicações web modernas"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Backend & Database",
      description: "APIs robustas e gerenciamento eficiente de dados"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Frontend Moderno",
      description: "Interfaces responsivas e experiências intuitivas"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Performance",
      description: "Otimização e melhores práticas de desenvolvimento"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Sobre mim
            <span className="text-primary"> /&gt;</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meu nome é <span className="text-primary font-semibold">João Victor Rodrigues</span> e eu sou um 
              apaixonado por tecnologia que decidiu trilhar o caminho da programação.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atualmente estou cursando <span className="text-primary font-semibold">Análise e Desenvolvimento de Sistemas (ADS)</span> e 
              focando no desenvolvimento FullStack, sempre buscando aprender novas tecnologias 
              e metodologias para criar soluções inovadoras.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Tenho paixão por transformar ideias em código e criar experiências digitais 
              que fazem a diferença na vida das pessoas. Estou sempre em busca de novos 
              desafios e oportunidades para crescer profissionalmente.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Disponível para projetos</span>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover:bg-card/80 transition-smooth hover:shadow-card hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-spring">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;