import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Puniora Luxury Perfume Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-gold mb-6">
            The Collection
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Essence of
            <br />
            <span className="italic">Every Mood</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-10">
            Discover our curated collection of luxury fragrances, 
            crafted to capture your unique moments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="xl"
              asChild
            >
              <a href="#collection">Explore Collection</a>
            </Button>
            <Button
              variant="luxuryOutline"
              size="xl"
              asChild
            >
              <a href="#about">Our Story</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* USP Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-background">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-xs uppercase tracking-[0.2em]">Cruelty-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-xs uppercase tracking-[0.2em]">Paraben-Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-xs uppercase tracking-[0.2em]">25% Parfum Concentration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
