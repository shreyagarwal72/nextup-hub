import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, Wrench, Gamepad2, Mail, Youtube, Sparkles, GraduationCap, Rocket, User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TypewriterText } from "@/components/TypewriterText";
import MagneticCursor from "@/components/MagneticCursor";
import ParallaxOrbs from "@/components/ParallaxOrbs";
import { useTheme } from "@/components/ThemeProvider";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import StatsSection from "@/components/sections/StatsSection";
import SiteFooter from "@/components/sections/SiteFooter";

const Index = () => {
  return (
    <div className="mesh-bg min-h-screen">
      <MagneticCursor />
      <ParallaxOrbs />

      <div className="relative z-10">
        {/* Navigation */}
        <header className="sticky top-0 z-50 px-3 py-3 md:px-6">
          <nav className="nav-glass max-w-5xl mx-auto rounded-2xl px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2" data-magnetic>
              <div className="icon-glass-sm">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="gradient-text text-lg font-bold tracking-tight">
                Nextup Studio
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button 
                className="liquid-btn hidden sm:flex items-center gap-2 text-sm px-5 py-2.5"
                data-magnetic
                onClick={() => {
                  window.location.href = `mailto:sanjayvansu1973@gmail.com?subject=${encodeURIComponent("Contact from Nextup Studio")}`;
                }}
              >
                <Mail className="h-3.5 w-3.5" />
                Contact
              </Button>
            </div>
          </nav>
        </header>

        <HeroSection />
        <PortfolioGrid />
        <StatsSection />
        <SiteFooter />
      </div>
    </div>
  );
};

export default Index;
