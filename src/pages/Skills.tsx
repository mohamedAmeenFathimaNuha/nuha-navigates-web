import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    {
      name: "Java",
      category: "Programming Language",
      level: "Intermediate",
      icon: "☕",
      description: "Object-oriented programming, data structures, and application development"
    },
    {
      name: "C",
      category: "Programming Language", 
      level: "Intermediate",
      icon: "⚡",
      description: "System programming, memory management, and algorithmic problem solving"
    },
    {
      name: "HTML",
      category: "Web Technology",
      level: "Intermediate",
      icon: "🌐",
      description: "Semantic markup, web standards, and document structure"
    },
    {
      name: "CSS",
      category: "Web Technology",
      level: "Intermediate", 
      icon: "🎨",
      description: "Responsive design, layouts, animations, and modern CSS features"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "intermediate":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "advanced":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      default:
        return "bg-muted/10 text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="portfolio-gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and programming languages I'm currently working with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="portfolio-card group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-foreground">
                        {skill.name}
                      </h3>
                      <Badge className={getLevelColor(skill.level)}>
                        {skill.level}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-primary font-medium">
                      {skill.category}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Journey */}
        <Card className="portfolio-card mt-12">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold">Continuous Learning</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm constantly expanding my skillset and exploring new technologies. 
                These are the foundations I'm building upon as I grow as a software engineer.
                My goal is to master these technologies and add new ones to my toolkit.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Future Skills */}
        <Card className="portfolio-card mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Next on My Learning Path</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["JavaScript", "Python", "React", "Node.js", "Database Design", "Software Architecture"].map((skill) => (
                <Badge key={skill} variant="outline" className="text-muted-foreground border-dashed">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;