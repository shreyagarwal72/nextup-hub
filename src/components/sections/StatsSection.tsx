const StatsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="stats-glass max-w-4xl mx-auto p-8 md:p-12">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-10 text-center gradient-text tracking-tight">
          Our Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1.5" data-magnetic>
            <div className="text-4xl md:text-5xl font-black gradient-text">5+</div>
            <p className="text-muted-foreground text-sm font-medium">Active Projects</p>
          </div>
          <div className="space-y-1.5" data-magnetic>
            <div className="text-4xl md:text-5xl font-black gradient-text">100%</div>
            <p className="text-muted-foreground text-sm font-medium">Responsive Design</p>
          </div>
          <div className="space-y-1.5" data-magnetic>
            <div className="text-4xl md:text-5xl font-black gradient-text">24/7</div>
            <p className="text-muted-foreground text-sm font-medium">Online Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
