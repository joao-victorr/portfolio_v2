import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SiGithub, SiGmail, SiLinkedin, } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "joaovictorr.info@gmail.com",
      link: "mailto:joaovictorr.info@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      value: "+55 (62) 9 9626-9258",
      link: "tel:+5562996269258"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Localização",
      value: "Goiânia, GO - Brasil",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <SiGithub className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/joao-victorr",
      color: "hover:text-gray-400"
    },
    {
      icon: <SiLinkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joao-victorr",
      color: "hover:text-blue-400"
    },
    {
      icon: <SiGmail className="h-5 w-5" />,
      name: "Email",
      url: "mailto:joaovictorr.info@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Contato
            <span className="text-primary"> /&gt;</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vamos trabalhar juntos? Entre em contato e vamos transformar suas ideias em realidade!
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Form */}
          {/* <Card className="bg-card/50 border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Envie uma mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    value={formData.name}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    type="email"
                    value={formData.email}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth resize-none"
                    id="message"
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    required
                    rows={5}
                    value={formData.message}
                    />
                </div>

                <Button
                  className="w-full gradient-primary shadow-glow hover:scale-105 transition-spring"
                  size="lg"
                  type="submit"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card> */}

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-card/50 border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item) => (
                  <div className="flex items-center gap-4" key={item.title} >
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <a 
                        className="text-muted-foreground hover:text-primary transition-smooth"
                        href={item.link}
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      asChild
                      className={`hover:scale-110 transition-spring ${social.color}`}
                      key={social.name}
                      size="icon"
                      variant="ghost"
                    >
                      <a 
                        aria-label={social.name}
                        href={social.url} 
                        rel="noopener noreferrer"
                        target="_blank" 
                      >
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Conecte-se comigo nas redes sociais e acompanhe meus projetos!
                </p>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">
                  Pronto para começar seu projeto?
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Vamos transformar suas ideias em realidade digital!
                </p>
                <Button
                  asChild
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-smooth"
                  variant="secondary"
                >
                  <a href="mailto:joaovictorr.info@email.com">
                    Vamos conversar!
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;