import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="portfolio-gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey in software engineering
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Personal Story */}
          <Card className="portfolio-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! My name is <span className="text-foreground font-medium">Mohamed Ameen Fathima Nuha</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am a Software Engineering undergraduate at Sabaragamuwa University of Sri Lanka.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am learning programming and improving my skills step by step.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Right now, I know <span className="text-primary font-medium">Java</span>, 
                <span className="text-primary font-medium"> C</span>, 
                <span className="text-primary font-medium"> HTML</span>, and 
                <span className="text-primary font-medium"> CSS</span>.
              </p>
            </CardContent>
          </Card>

          {/* Education & Goals */}
          <div className="space-y-6">
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Software Engineering</h3>
                  <p className="text-muted-foreground">Sabaragamuwa University of Sri Lanka</p>
                  <p className="text-sm text-muted-foreground">Undergraduate Student</p>
                </div>
              </CardContent>
            </Card>

            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-foreground" />
                  </div>
                  Current Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Continuously expanding my programming knowledge and building practical skills
                  in software development. I'm passionate about learning new technologies
                  and applying them to real-world problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Qualities */}
        <Card className="portfolio-card mt-8">
          <CardHeader>
            <CardTitle className="text-center text-2xl">What Drives Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-xl">💡</span>
                </div>
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Always looking for creative solutions to challenging problems
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent font-bold text-xl">🎯</span>
                </div>
                <h3 className="font-semibold">Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to continuous learning and skill development
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-foreground font-bold text-xl">🚀</span>
                </div>
                <h3 className="font-semibold">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Aspiring to create technology that makes a difference
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;