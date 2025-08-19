import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink } from "lucide-react";
import { portfolioButtonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const Home = () => {
  const handleDownloadResume = () => {
    // In a real application, this would trigger a download
    console.log("Download resume clicked");
  };

  const handleContactEmail = () => {
    window.location.href = "mailto:fathimanuhama@gmail.com";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Hi, I'm{" "}
              <span className="portfolio-gradient-text">
                Nuha Ameen
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Software Engineering Undergraduate
            </p>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating innovative solutions through code. 
              Currently pursuing Software Engineering at Sabaragamuwa University of Sri Lanka, 
              constantly learning and growing in the world of technology.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={handleDownloadResume}
              className={cn(portfolioButtonVariants({ variant: "hero", size: "xl" }))}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <Button
              onClick={handleContactEmail}
              variant="outline"
              size="lg"
              className="group hover:border-primary/50"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              Contact Me
              <ExternalLink className="w-4 h-4 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;