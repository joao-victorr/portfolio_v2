import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 85, icon: "⚛️" },
        { name: "TypeScript", level: 80, icon: "🔷" },
        { name: "HTML/CSS", level: 90, icon: "🌐" },
        { name: "JavaScript", level: 85, icon: "🟡" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "SQL", level: 70, icon: "🗄️" },
        { name: "Docker", level: 65, icon: "🐳" }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 85, icon: "📚" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "Figma", level: 70, icon: "🎨" },
        { name: "Linux", level: 75, icon: "🐧" }
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
            Tecnologias e ferramentas que utilizo no desenvolvimento de projetos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card/50 border-border/50 hover:bg-card/80 transition-smooth shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-secondary"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-foreground">
            Outras Tecnologias
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Express.js", "REST APIs", "GraphQL", "JWT", "Webpack", 
              "Babel", "Sass", "Bootstrap", "Tailwind CSS", "Jest"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-border/50 hover:bg-secondary transition-smooth hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;