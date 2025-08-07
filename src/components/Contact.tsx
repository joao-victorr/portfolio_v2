import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
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
      value: "joao.victor@email.com",
      link: "mailto:joao.victor@email.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/joao-victorr",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      name: "Email",
      url: "mailto:joao.victor@email.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">
                Envie uma mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary shadow-glow hover:scale-105 transition-spring"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

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
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <a 
                        href={item.link}
                        className="text-muted-foreground hover:text-primary transition-smooth"
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
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className={`hover:scale-110 transition-spring ${social.color}`}
                      asChild
                    >
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={social.name}
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
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-smooth"
                  asChild
                >
                  <a href="mailto:joao.victor@email.com">
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