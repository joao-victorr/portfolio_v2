import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rocket Coffee",
      description: "Landing page moderna para uma cafeteria, desenvolvida com HTML, CSS e JavaScript. Design responsivo com animações suaves e interface intuitiva.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&crop=center",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://joao-victorr.github.io/RocketCoffee/",
      githubUrl: "https://github.com/joao-victorr/RocketCoffee",
      featured: true
    },
    {
      title: "Calculadora",
      description: "Aplicação de calculadora funcional com interface limpa e moderna. Implementada com JavaScript vanilla e CSS Grid para layout responsivo.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://calculadora-eta-nine.vercel.app/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Pessoal",
      description: "Este portfolio que você está vendo agora! Desenvolvido com React, TypeScript e Tailwind CSS, com foco em performance e experiência do usuário.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
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
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 border-border/50 hover:bg-card/80 transition-smooth hover:shadow-card hover:scale-105 group overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
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
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-secondary transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 gradient-primary shadow-glow hover:scale-105 transition-spring"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            asChild
          >
            <a href="https://github.com/joao-victorr" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
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