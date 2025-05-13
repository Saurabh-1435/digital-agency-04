
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for joining our newsletter.",
    });
    setEmail('');
  };

  return (
    <footer className="bg-lovable-black pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-16 py-10 px-6 glass-panel rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join our AI Movement</h3>
              <p className="opacity-80">
                Subscribe to receive the latest updates, insights, and exclusive offers.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="flex-grow bg-lovable-black/50 border-lovable-grey/30 focus:border-lovable-neon rounded-r-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="rounded-l-none bg-lovable-neon text-lovable-black hover:bg-lovable-neon/80 animate-pulse"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="text-lovable-neon font-bold text-xl mr-1">LOVABLE</span>
              <span className="text-lovable-text font-bold text-xl">AI</span>
            </a>
            <p className="mb-6 opacity-80">
              Crafting Digital Intelligence That Inspires. We create cutting-edge AI solutions for forward-thinking businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover-glow">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover-glow">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover-glow">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover-glow">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover-glow">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="opacity-80 hover:opacity-100 hover:text-lovable-neon transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'AI Consulting', 'UX Design', 'Branding', 'Mobile Development'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="opacity-80 hover:opacity-100 hover:text-lovable-neon transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="opacity-80">123 Tech Plaza, San Francisco</li>
              <li>
                <a 
                  href="mailto:hello@lovable.ai" 
                  className="opacity-80 hover:opacity-100 hover:text-lovable-neon transition-all duration-300"
                >
                  hello@lovable.ai
                </a>
              </li>
              <li>
                <a 
                  href="tel:+15551234567" 
                  className="opacity-80 hover:opacity-100 hover:text-lovable-neon transition-all duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-lovable-grey/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LOVABLE AI. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm opacity-70">
            <a href="#" className="hover:text-lovable-neon transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-lovable-neon transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
