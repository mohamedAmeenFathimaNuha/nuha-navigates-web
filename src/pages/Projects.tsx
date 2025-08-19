import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, Github, Code2, Lightbulb } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="portfolio-gradient-text">Projects</span>
            <span className="text-muted-foreground text-2xl ml-4">(Coming Soon)</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exciting projects are in development - stay tuned!
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Coming Soon Card */}
          <Card className="portfolio-card">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Construction className="w-12 h-12 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Under Construction</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    I am still learning and practicing. I will add my projects here in the future.
                    Currently working on building my skills and creating meaningful projects
                    to showcase my journey as a software engineer.
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="grid gap-4 md:grid-cols-3 mt-8">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                      <Code2 className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold">Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Mastering programming fundamentals
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Planning</h3>
                    <p className="text-sm text-muted-foreground">
                      Designing meaningful projects
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mx-auto">
                      <Github className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="font-semibold">Building</h3>
                    <p className="text-sm text-muted-foreground">
                      Creating portfolio projects
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Projects Preview */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="portfolio-card opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  Java Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Desktop application showcasing object-oriented programming principles
                  and data structure implementation.
                </p>
                <div className="mt-4">
                  <span className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded">
                    In Planning
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card opacity-60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Web Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Responsive website demonstrating HTML, CSS, and modern web development
                  techniques.
                </p>
                <div className="mt-4">
                  <span className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded">
                    In Development
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="portfolio-card bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
              <p className="text-muted-foreground mb-6">
                Follow my journey as I build and share my projects. 
                I'll be updating this section regularly with new work!
              </p>
              <Button variant="outline" className="hover:border-primary/50">
                Get Notified
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;