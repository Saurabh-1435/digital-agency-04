
import React from 'react';
import { Code, PenTool, Lightbulb, Database, LayoutGrid, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-lovable-neon" />,
    title: "Web Development",
    description: "Custom websites built with modern frameworks, optimized for performance and conversions."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-lovable-neon" />,
    title: "AI Consulting",
    description: "Strategic AI integration to automate processes and enhance business intelligence."
  },
  {
    icon: <PenTool className="w-10 h-10 text-lovable-neon" />,
    title: "Branding",
    description: "Identity design that communicates your values and resonates with your target audience."
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-lovable-neon" />,
    title: "UX Design",
    description: "User-centered design that creates intuitive, engaging digital experiences."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-lovable-neon" />,
    title: "Mobile Development",
    description: "Native and cross-platform apps designed for seamless user experience across devices."
  },
  {
    icon: <Database className="w-10 h-10 text-lovable-neon" />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights to drive strategic business decisions."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-lovable-black">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            Comprehensive digital solutions powered by the latest AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg hover:neon-border transition-all duration-500 group"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="mb-5 w-16 h-16 rounded-full flex items-center justify-center bg-lovable-grey/30 group-hover:bg-lovable-neon/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="opacity-80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
