import { Sparkles } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const SiteFooter = () => {
  const { designMode, toggleDesignMode } = useTheme();

  return (
    <footer className="border-t border-border/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://nextup-studio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
            data-magnetic
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="gradient-text text-sm font-semibold hover:opacity-80 transition-opacity">
              Nextup Studio
            </span>
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDesignMode}
              className="group flex items-center gap-1.5 px-3 py-1 rounded-full liquid-badge transition-all duration-500 hover:scale-105"
              data-magnetic
              title={
                designMode === "alpha"
                  ? "Switch to Material 3 Expressive theme"
                  : "Switch to default theme"
              }
            >
              <span className="text-xs font-bold tracking-wider">
                {designMode === "alpha" ? "β" : "α"}
              </span>
              <span className="text-[10px] font-medium opacity-60">
                {designMode === "alpha" ? "Beta" : "Alpha"}
              </span>
            </button>
            <p className="text-muted-foreground text-xs">
              © 2025 Nextup Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
