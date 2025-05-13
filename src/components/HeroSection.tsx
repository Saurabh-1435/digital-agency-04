
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-lovable-black via-lovable-black/90 to-lovable-black/70 z-10"></div>
        <video
          className="w-full h-full object-cover clip-diagonal"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475"
        >
          <source src="https://cdn.coverr.co/videos/coverr-data-visualization-3643/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="overflow-hidden mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold animate-text-reveal">
              <span className="text-gradient">We Build </span> 
              <br className="md:hidden" />
              <span>AI-Driven </span>
              <br className="hidden md:block" />
              <span>Digital Futures</span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <p className="text-xl md:text-2xl text-lovable-text/80 animate-text-reveal animate-delay-300">
              Crafting Digital Intelligence That Inspires
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-700">
            <Button 
              className="bg-lovable-neon text-lovable-black hover:bg-lovable-neon/80 hover:shadow-[0_0_20px_rgba(0,255,247,0.5)] transition-all duration-300 text-lg px-8 py-6" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <ArrowRight className="ml-2 animate-bounce" />
            </Button>
            <Button 
              variant="outline" 
              className="border-lovable-neon text-lovable-neon hover:bg-lovable-neon/10 hover:text-lovable-neon transition-all duration-300 text-lg px-8 py-6"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-lovable-neon flex justify-center pt-2">
          <div className="w-1 h-3 bg-lovable-neon rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
