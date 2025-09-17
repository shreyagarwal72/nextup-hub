import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, Code2, Wrench, Archive, Gamepad2 } from "lucide-react";

const Index = () => {
  const websites = [
    {
      title: "Main Portfolio",
      description: "Professional portfolio showcasing my work and expertise",
      url: "https://vanshubhai.vercel.app",
      icon: Globe,
      category: "Portfolio"
    },
    {
      title: "Minecraft Studio", 
      description: "Creative Minecraft projects and builds by Nextup Studio",
      url: "https://shreyagarwal72.github.io/Nextup-Studio",
      icon: Gamepad2,
      category: "Gaming"
    },
    {
      title: "Web Tools",
      description: "Collection of useful web development tools and utilities",
      url: "https://nextuptool.vercel.app/",
      icon: Wrench,
      category: "Tools"
    },
    {
      title: "Premium Vault",
      description: "Exclusive premium resources and content archive",
      url: "https://nextup-archive.lovable.app/",
      icon: Archive,
      category: "Premium"
    },
    {
      title: "First Website",
      description: "My journey begins here - the first step in web development",
      url: "https://shreyagarwal72.github.io",
      icon: Code2,
      category: "Legacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl floating" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className="flex items-center justify-between">
            <div className="gradient-text text-2xl font-bold">
              Nextup Studio
            </div>
            <Button variant="outline" className="glass">
              Contact
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="gradient-text">Nextup Studio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our collection of professional websites, tools, and creative projects. 
              Each site represents a unique aspect of our digital craftsmanship.
            </p>
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              Explore Our Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Websites Grid */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Digital Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our diverse collection of websites and applications, each crafted with precision and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {websites.map((site, index) => {
              const Icon = site.icon;
              return (
                <Card 
                  key={site.title} 
                  className="card-3d tilt-effect group cursor-pointer border-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => window.open(site.url, '_blank')}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-gradient-primary rounded-xl">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                        {site.category}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:gradient-text transition-all duration-300">
                        {site.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {site.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="glass rounded-3xl p-8 md:p-16 text-center">
            <h3 className="text-3xl font-bold mb-8">Our Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-glow-pulse">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <p className="text-muted-foreground">Active Websites</p>
              </div>
              <div className="animate-glow-pulse" style={{ animationDelay: "0.5s" }}>
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <p className="text-muted-foreground">Responsive Design</p>
              </div>
              <div className="animate-glow-pulse" style={{ animationDelay: "1s" }}>
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-muted-foreground">Online Availability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/20 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="gradient-text text-xl font-bold mb-4 md:mb-0">
                Nextup Studio
              </div>
              <p className="text-muted-foreground text-center md:text-right">
                © 2025 Nextup Studio. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;