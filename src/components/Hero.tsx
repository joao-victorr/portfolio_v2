import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/joao-victor-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 17, 23, 0.8), rgba(13, 17, 23, 0.8)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-lg md:text-xl text-primary mb-2 animate-fade-in">
                Olá, eu sou
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
                <span className="gradient-primary bg-clip-text text-transparent">
                  João Victor
                </span>
                <br />
                <span className="text-foreground">Rodrigues</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
                Desenvolvedor FullStack apaixonado por tecnologia, criando soluções 
                digitais inovadoras e experiências web excepcionais.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up animation-delay-400">
              <Button 
                size="lg" 
                className="gradient-primary shadow-glow hover:scale-105 transition-spring"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Entre em Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:scale-110 transition-spring"
                asChild
              >
                <a href="https://github.com/joao-victorr" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:scale-110 transition-spring"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:scale-110 transition-spring"
                asChild
              >
                <a href="mailto:joao@email.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right animation-delay-300">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-card animate-float">
                <img
                  src={profilePhoto}
                  alt="João Victor Rodrigues"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="rounded-full hover:bg-primary/10"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;