import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, Wrench, Gamepad2, Youtube, GraduationCap, Rocket, User } from "lucide-react";

const websites = [
  {
    title: "Main Portfolio",
    description: "Professional portfolio showcasing my work and expertise",
    url: "https://vanshubhai.vercel.app",
    icon: User,
    category: "Portfolio",
  },
  {
    title: "Minecraft Studio",
    description: "Creative Minecraft projects and builds by Nextup Studio",
    url: "https://shreyagarwal72.github.io/Nextup-Studio",
    icon: Gamepad2,
    category: "Gaming",
  },
  {
    title: "My Youtube",
    description: "Creative content and tutorials on web development",
    url: "https://myyoutube-cyan.vercel.app/",
    icon: Youtube,
    category: "Content",
  },
  {
    title: "Nextup Tools Work 1",
    description: "Collection of useful web development tools",
    url: "https://nextuptool.vercel.app/",
    icon: Wrench,
    category: "Tools",
  },
  {
    title: "Nextup Tools Work 2",
    description: "Advanced web development tools and utilities",
    url: "https://nextuptool2.vercel.app/",
    icon: Wrench,
    category: "Tools",
  },
  {
    title: "First Website",
    description: "My journey begins here - the first step",
    url: "https://shreyagarwal72.github.io/home.html",
    icon: Code2,
    category: "Legacy",
  },
  {
    title: "Nextup Resources",
    description: "Educational resources and learning materials for developers",
    url: "https://nextup-resource.vercel.app",
    icon: GraduationCap,
    category: "Education",
  },
  {
    title: "Orbital World",
    description: "Explore the cosmic universe and orbital mechanics",
    url: "https://orbital-world.vercel.app",
    icon: Rocket,
    category: "Space",
  },
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 gradient-text tracking-tight">
          Digital Portfolio
        </h2>
        <p className="text-muted-foreground text-base max-w-lg mx-auto">
          Each project represents our commitment to quality and innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto stagger-children">
        {websites.map((site) => {
          const Icon = site.icon;
          return (
            <article
              key={site.title}
              className="fluid-card p-5 cursor-pointer group"
              data-magnetic
              onClick={() => window.open(site.url, "_blank")}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="icon-glass pulse-glow">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="liquid-badge text-[10px] tracking-wider uppercase">
                  {site.category}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-1.5 group-hover:text-primary transition-colors duration-200">
                {site.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {site.description}
              </p>

              <Button
                variant="ghost"
                className="w-full justify-between hover-lift hover:bg-primary/10 rounded-xl text-sm h-10"
              >
                Visit Website
                <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioGrid;
