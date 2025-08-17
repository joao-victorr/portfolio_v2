import { SiGithub, SiGmail, SiLinkedin, } from "react-icons/si";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <SiGithub className="h-5 w-5" />,
      href: "https://github.com/joao-victorr",
      label: "GitHub"
    },
    {
      icon: <SiLinkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <SiGmail className="h-5 w-5" />,
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
            <h3 className="text-xl font-bold gradient-primary bg-clip-text mb-2 px-2 rounded-sm">
              João Victor Rodrigues
            </h3>
            <p className="text-sm text-muted-foreground">
              FullStack Developer
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Home", "Sobre", "Skills", "Projetos", "Contato"].map((item) => (
              <button
                className="text-muted-foreground hover:text-primary transition-colors"
                key={item}
                onClick={(e) => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                  e.currentTarget.blur(); // remove o foco após clique para melhorar UX
                }}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Button
                asChild
                className="hover:text-primary hover:scale-110 transition-spring"
                key={social.href}
                size="icon"
                variant="ghost"
              >
                <a
                  aria-label={social.label}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
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
            <p className="flex items-center gap-2">
              © {currentYear} João Victor Rodrigues.
            </p>
            
            <button
              className="text-primary hover:underline transition-smooth"
              onClick={scrollToTop}
              type="button"
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