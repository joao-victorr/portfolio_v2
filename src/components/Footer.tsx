import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/joao-victorr",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:joao.victor@email.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              João Victor Rodrigues
            </h3>
            <p className="text-sm text-muted-foreground">
              FullStack Developer
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "Sobre", "Skills", "Projetos", "Contato"].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:scale-110 transition-spring"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {currentYear} João Victor Rodrigues. Feito com 
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              usando React & TypeScript
            </p>
            
            <button
              onClick={scrollToTop}
              className="text-primary hover:underline transition-smooth"
            >
              Voltar ao topo ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;