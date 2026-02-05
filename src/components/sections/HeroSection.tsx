import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";
import { TypewriterText } from "@/components/TypewriterText";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 text-center fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="liquid-badge inline-flex items-center gap-2 mb-8 text-xs">
          <Sparkles className="h-3 w-3" />
          Welcome to the future
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8 leading-[1.05] tracking-tighter">
          Crafting Digital
          <span className="gradient-text block mt-1">
            <TypewriterText
              words={["Experiences", "Solutions", "Innovations", "Excellence"]}
              typingSpeed={120}
              deletingSpeed={60}
              pauseDuration={2500}
            />
          </span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Discover our collection of professional websites, innovative tools, and creative projects built with precision and passion.
        </p>
        <Button
          className="liquid-btn text-base px-10 py-7 rounded-2xl"
          data-magnetic
          onClick={() => {
            document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Our Work
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
