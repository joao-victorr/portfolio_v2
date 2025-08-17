import { GitBranch, Globe, Lock, Server } from "lucide-react";
import { SiCss3, SiDbeaver, SiDocker, SiExpress, SiFastify, 
  SiGit, SiGrafana, SiHtml5, SiJavascript, SiK6, 
  SiLinux, SiMysql,SiNginx,
  SiNodedotjs, SiPostgresql, SiPostman, SiPrisma, SiProxmox, 
  SiReact, SiTailwindcss,SiTypescript 
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      id: crypto.randomUUID(),
      title: "Frontend",
      description: "Criação de interfaces modernas e responsivas",
      skills: [
        { id: crypto.randomUUID(), name: "React", icon: SiReact },
        { id: crypto.randomUUID(), name: "TypeScript", icon: SiTypescript },
        { id: crypto.randomUUID(), name: "HTML5", icon: SiHtml5 },
        { id: crypto.randomUUID(), name: "CSS3", icon: SiCss3 },
        { id: crypto.randomUUID(), name: "JavaScript", icon: SiJavascript },
        { id: crypto.randomUUID(), name: "Tailwind CSS", icon: SiTailwindcss }
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Backend",
      description: "Desenvolvimento de APIs robustas e escaláveis",
      skills: [
        { id: crypto.randomUUID(), name: "Node.js", icon: SiNodedotjs },
        { id: crypto.randomUUID(), name: "Fastify", icon: SiFastify },
        { id: crypto.randomUUID(), name: "Express.js", icon: SiExpress },
        { id: crypto.randomUUID(), name: "Prisma ORM", icon: SiPrisma },
        { id: crypto.randomUUID(), name: "PostgreSQL", icon: SiPostgresql },
        { id: crypto.randomUUID(), name: "MySQL", icon: SiMysql },
        // { id: crypto.randomUUID(), name: "SQL Server", icon: SiMicrosoftsqlserver }
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Infraestrutura",
      description: "Gestão completa de servidores e ambientes",
      skills: [
        { id: crypto.randomUUID(), name: "Linux Server", icon: SiLinux },
        // { id: crypto.randomUUID(), name: "Windows Server", icon: SiWindows },
        { id: crypto.randomUUID(), name: "Docker", icon: SiDocker },
        { id: crypto.randomUUID(), name: "Proxmox", icon: SiProxmox },
        { id: crypto.randomUUID(), name: "Nginx", icon: SiNginx },
        { id: crypto.randomUUID(), name: "SSL/HTTPS", icon: Lock }
      ]
    },
    {
      id: crypto.randomUUID(),
      title: "Ferramentas",
      description: "Tecnologias que otimizam meu workflow",
      skills: [
        { id: crypto.randomUUID(), name: "Git", icon: SiGit },
        { id: crypto.randomUUID(), name: "Grafana", icon: SiGrafana },
        { id: crypto.randomUUID(), name: "Postman", icon: SiPostman },
        { id: crypto.randomUUID(), name: "DBeaver", icon: SiDbeaver },
        { id: crypto.randomUUID(), name: "K6", icon: SiK6 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Skills
            <span className="text-primary"> /&gt;</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo na gestão de infraestrutura e desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="bg-card/50 border-border/50 hover:bg-card/80 transition-smooth shadow-card group">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary text-center">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.id} 
                      className="flex flex-col items-center p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth group-hover:scale-105"
                    >
                      {typeof skill.icon === "string" ? (
                        <span className="text-2xl mb-2">{skill.icon}</span>
                      ) : (
                        <skill.icon className="text-2xl mb-2" />
                      )}
                      <span className="text-sm font-medium text-center text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
