import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Linkedin, 
  Instagram,
  Send,
  ExternalLink
} from "lucide-react";
import { toast } from "sonner";
import { portfolioButtonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      label: "Email",
      value: "fathimanuhama@gmail.com",
      icon: Mail,
      href: "mailto:fathimanuhama@gmail.com",
      description: "Send me an email"
    },
    {
      label: "LinkedIn",
      value: "Fathima Nuha Mohamed Ameen",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/fathimanuha-mohamedameen",
      description: "Connect professionally"
    },
    {
      label: "WhatsApp",
      value: "0775281956",
      icon: MessageCircle,
      href: "https://wa.me/775281956",
      description: "Quick messaging"
    },
    {
      label: "Phone",
      value: "0775281956",
      icon: Phone,
      href: "tel:0775281956",
      description: "Call me directly"
    },
    {
      label: "Instagram",
      value: "@f.nuha_m.ameen",
      icon: Instagram,
      href: "https://instagram.com/f.nuha_m.ameen",
      description: "Follow my journey"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="portfolio-gradient-text">Contact</span> Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect! I'd love to hear from you and discuss opportunities
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="portfolio-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={cn(portfolioButtonVariants({ variant: "hero", size: "lg" }), "w-full")}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  I'm always open to discussing new opportunities, 
                  collaborations, or just having a friendly chat about technology!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{contact.label}</span>
                          {contact.href.startsWith('http') && (
                            <ExternalLink className="w-3 h-3 text-muted-foreground" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{contact.value}</p>
                        <p className="text-xs text-muted-foreground">{contact.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="portfolio-card bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.location.href = "mailto:fathimanuhama@gmail.com"}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Direct Email
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://wa.me/775281956", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => window.open("https://www.linkedin.com/in/fathimanuha-mohamedameen", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;