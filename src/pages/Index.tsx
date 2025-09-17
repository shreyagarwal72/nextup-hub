import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, Code2, Wrench, Archive, Gamepad2, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <div className="min-h-screen animated-bg relative overflow-hidden">
      {/* Professional Motion Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs with enhanced motion */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/25 rounded-full blur-3xl floating pulse-glow depth-1"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating-slow pulse-glow depth-1" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/15 rounded-full blur-2xl floating motion-blur depth-1" style={{ animationDelay: "6s" }}></div>
        
        {/* Orbiting elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full orbit-1 depth-2"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent rounded-full orbit-2 depth-2"></div>
        
        {/* Geometric motion shapes */}
        <div className="absolute top-32 right-32 w-24 h-24 border border-primary/30 rounded-lg rotate-45 floating pulse-glow depth-2" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-32 w-16 h-16 border border-accent/30 rounded-full floating-slow pulse-glow depth-2" style={{ animationDelay: "4s" }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 motion-blur"></div>
      </div>

      <div className="relative z-10 depth-3">
        {/* Enhanced Header */}
        <header className="container mx-auto px-6 py-8">
          <nav className="nav-glass rounded-2xl px-8 py-4 flex items-center justify-between depth-4">
            <div className="gradient-text text-3xl font-bold">
              Nextup Studio
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button 
                variant="outline" 
                className="glass-pro border-primary/30 hover:bg-primary/10 transition-elastic flex items-center gap-2"
                onClick={() => window.open('https://wa.me/919412104618', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
                Contact
              </Button>
            </div>
          </nav>
        </header>

        {/* Enhanced Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-5xl mx-auto fade-in-scale">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
              Welcome to{" "}
              <span className="gradient-text block mt-4">Nextup Studio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of professional websites, innovative tools, and creative projects. 
              Each platform represents a unique aspect of our digital craftsmanship and technical excellence.
            </p>
            <Button size="lg" className="btn-hero text-lg px-12 py-6 rounded-2xl">
              Explore Our Work
              <ExternalLink className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </section>

        {/* Enhanced Websites Grid */}
        <section className="container mx-auto px-6 py-24">
          <div className="text-center mb-20 slide-up">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Digital Portfolio</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our diverse collection of websites and applications, each crafted with precision, 
              creativity, and cutting-edge technology to deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-8xl mx-auto">
            {websites.map((site, index) => {
              const Icon = site.icon;
              return (
                <Card 
                  key={site.title} 
                  className="card-3d tilt-effect group cursor-pointer border-0 rounded-3xl overflow-hidden depth-2"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onClick={() => window.open(site.url, '_blank')}
                >
                  <CardHeader className="space-y-6 p-8">
                    <div className="flex items-center justify-between">
                      <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <span className="text-sm bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold tracking-wide">
                        {site.category}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <CardTitle className="text-2xl mb-3 group-hover:gradient-text transition-all duration-500">
                        {site.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-base leading-relaxed">
                        {site.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <Button 
                      variant="secondary" 
                      className="w-full group-hover:bg-gradient-primary group-hover:text-white transition-all duration-500 py-3 rounded-xl"
                    >
                      Visit Website
                      <ExternalLink className="ml-3 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="glass-pro rounded-3xl p-12 md:p-20 text-center depth-2 tilt-effect">
            <h3 className="text-4xl font-bold mb-12 gradient-text">Our Impact & Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="fade-in-scale group">
                <div className="text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-elastic">5+</div>
                <p className="text-muted-foreground text-lg">Active Websites</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Professional platforms serving users globally</p>
              </div>
              <div className="fade-in-scale group" style={{ animationDelay: "0.3s" }}>
                <div className="text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-elastic">100%</div>
                <p className="text-muted-foreground text-lg">Responsive Design</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Optimized for all devices and screen sizes</p>
              </div>
              <div className="fade-in-scale group" style={{ animationDelay: "0.6s" }}>
                <div className="text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-elastic">24/7</div>
                <p className="text-muted-foreground text-lg">Online Availability</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Reliable uptime with global CDN support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="border-t border-border/30 mt-24 depth-1">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="gradient-text text-2xl font-bold mb-6 md:mb-0">
                Nextup Studio
              </div>
              <div className="text-center md:text-right space-y-2">
                <p className="text-muted-foreground">
                  © 2025 Nextup Studio. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Crafting exceptional digital experiences with passion and precision
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;