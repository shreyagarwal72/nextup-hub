import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, Wrench, Archive, Gamepad2, Mail, Youtube, Sparkles, GraduationCap, Rocket, User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypewriterText } from "@/components/TypewriterText";
import MagneticCursor from "@/components/MagneticCursor";
import ParallaxOrbs from "@/components/ParallaxOrbs";

const Index = () => {
  const websites = [
    {
      title: "Main Portfolio",
      description: "Professional portfolio showcasing my work and expertise",
      url: "https://vanshubhai.vercel.app",
      icon: User,
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
      title: "My Youtube",
      description: "Creative content and tutorials on web development",
      url: "https://myyoutube-cyan.vercel.app/",
      icon: Youtube,
      category: "Content"
    },
    {
      title: "Nextup Tools Work 1",
      description: "Collection of useful web development tools",
      url: "https://nextuptool.vercel.app/",
      icon: Wrench,
      category: "Tools"
    },
    {
      title: "Nextup Tools Work 2",
      description: "Advanced web development tools and utilities",
      url: "https://nextuptool2.vercel.app/",
      icon: Wrench,
      category: "Tools"
    },
    {
      title: "Premium Vault",
      description: "Exclusive premium resources and content archive",
      url: "https://nextup-archive.vercel.app/",
      icon: Archive,
      category: "Premium"
    },
    {
      title: "First Website",
      description: "My journey begins here - the first step",
      url: "https://shreyagarwal72.github.io/home.html",
      icon: Code2,
      category: "Legacy"
    },
    {
      title: "Nextup Resources",
      description: "Educational resources and learning materials for developers",
      url: "https://nextup-resource.vercel.app",
      icon: GraduationCap,
      category: "Education"
    },
    {
      title: "Orbital World",
      description: "Explore the cosmic universe and orbital mechanics",
      url: "https://orbital-world.vercel.app",
      icon: Rocket,
      category: "Space"
    }
  ];

  return (
    <div className="mesh-bg min-h-screen">
      <MagneticCursor />
      <ParallaxOrbs />

      <div className="relative z-10">
        {/* Navigation */}
        <header className="sticky top-0 z-50 px-4 py-4 md:px-8">
          <nav className="nav-glass max-w-6xl mx-auto rounded-2xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2" data-magnetic>
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="gradient-text text-xl font-bold tracking-tight">
                Nextup Studio
              </span>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button 
                className="liquid-btn hidden sm:flex items-center gap-2"
                data-magnetic
                onClick={() => {
                  window.location.href = `mailto:sanjayvansu1973@gmail.com?subject=${encodeURIComponent("Contact from Nextup Studio")}`;
                }}
              >
                <Mail className="h-4 w-4" />
                Contact
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="liquid-badge inline-flex items-center gap-2 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome to the future
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Crafting Digital
              <span className="gradient-text block mt-2">
                <TypewriterText 
                  words={["Experiences", "Solutions", "Innovations", "Excellence"]} 
                  typingSpeed={120}
                  deletingSpeed={60}
                  pauseDuration={2500}
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover our collection of professional websites, innovative tools, and creative projects built with precision and passion.
            </p>
            <Button 
              className="liquid-btn text-lg px-8 py-6"
              data-magnetic
              onClick={() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Digital Portfolio
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each project represents our commitment to quality and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto stagger-children">
            {websites.map((site) => {
              const Icon = site.icon;
              return (
                <article 
                  key={site.title} 
                  className="fluid-card p-6 cursor-pointer group"
                  data-magnetic
                  onClick={() => window.open(site.url, '_blank')}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="icon-glass pulse-glow">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="liquid-badge shimmer">
                      {site.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {site.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between hover-lift hover:bg-primary/10 rounded-xl"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </article>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="stats-glass max-w-5xl mx-auto p-8 md:p-14">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center gradient-text">
              Our Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2" data-magnetic>
                <div className="text-4xl md:text-5xl font-bold gradient-text">5+</div>
                <p className="text-muted-foreground font-medium">Active Projects</p>
              </div>
              <div className="space-y-2" data-magnetic>
                <div className="text-4xl md:text-5xl font-bold gradient-text">100%</div>
                <p className="text-muted-foreground font-medium">Responsive Design</p>
              </div>
              <div className="space-y-2" data-magnetic>
                <div className="text-4xl md:text-5xl font-bold gradient-text">24/7</div>
                <p className="text-muted-foreground font-medium">Online Availability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/40">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <a 
                href="https://nextup-studio.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
                data-magnetic
              >
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="gradient-text font-semibold hover:opacity-80 transition-opacity">Nextup Studio</span>
              </a>
              <p className="text-muted-foreground text-sm text-center">
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
