import { ExternalLink, Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: crypto.randomUUID(),
      title: "Perdomo Doces – Site Institucional",
      description: "Desenvolvimento do site institucional da Perdomo Doces, com design moderno, otimizado e preparado para expansão futura, incluindo área exclusiva para colaboradores.",
      image: "https://res.cloudinary.com/dn4te44ha/image/upload/v1756005689/c69f7f74-8300-4f15-9eb9-1a6417d9aa93.png",
      technologies: ["TypeScript", "Docker", "Fastify", "PostgreSQL", "React", "Tailwind"],
      liveUrl: "https://perdomodoces.com.br",
      githubUrl: "#",
      featured: true
    },
    {
      id: crypto.randomUUID(),
      title: "Rocket Coffee",
      description: "Landing page moderna para uma cafeteria, desenvolvida com HTML, CSS e JavaScript. Design responsivo com animações suaves e interface intuitiva.",
      image: "https://res.cloudinary.com/dn4te44ha/image/upload/v1755412466/rocketcoffe_kvtuoh.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://joao-victorr.github.io/RocketCoffee/",
      githubUrl: "https://github.com/joao-victorr/RocketCoffee",
      featured: false
    },
    {
      id: crypto.randomUUID(),
      title: "Portfolio Pessoal",
      description: "Este portfolio que você está vendo agora! Desenvolvido com React, TypeScript e Tailwind CSS, com foco em performance e experiência do usuário.",
      image: "https://res.cloudinary.com/dn4te44ha/image/upload/v1755412467/portifolio_qziluc.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/joao-victorr/portfolio_v2",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/30" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Projetos
            <span className="text-primary"> /&gt;</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, mostrando minhas habilidades em diferentes tecnologias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              className={`bg-card/50 border-border/50 hover:bg-card/80 transition-smooth hover:shadow-card hover:scale-105 group overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              key={project.id} 
            >
              <div className="relative overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                {project.featured && (
                  <Badge className="absolute top-4 right-4 gradient-accent border-0">
                    Destaque
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      className="text-xs bg-secondary/50 hover:bg-secondary transition-smooth"
                      key={tech}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    className="flex-1 gradient-primary shadow-glow hover:scale-105 transition-spring"
                    size="sm"
                  >
                    <a href={project.liveUrl} rel="noopener noreferrer" target="_blank">
                      <Globe className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                  
                  {project.githubUrl !== "#" && (
                    <Button
                      asChild
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                      size="sm"
                      variant="outline"
                    >
                      <a href={project.githubUrl} rel="noopener noreferrer" target="_blank">
                        <SiGithub className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            size="lg"
            variant="outline"
          >
            <a href="https://github.com/joao-victorr" rel="noopener noreferrer" target="_blank">
              <SiGithub className="h-5 w-5 mr-2" />
              Ver mais no GitHub
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;