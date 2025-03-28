
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Server } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Server className="h-8 w-8 text-elbows-blue" />
            <span className="font-bold text-xl text-elbows-dark">Elbows<span className="text-elbows-red">Up</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-elbows-dark hover:text-elbows-blue transition-colors">Features</a>
            <a href="#pricing" className="text-elbows-dark hover:text-elbows-blue transition-colors">Pricing</a>
            <a href="#testimonials" className="text-elbows-dark hover:text-elbows-blue transition-colors">Testimonials</a>
            <a href="#contact" className="text-elbows-dark hover:text-elbows-blue transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-elbows-blue hover:bg-elbows-lightblue text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-elbows-dark focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-elbows-dark hover:text-elbows-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-elbows-dark hover:text-elbows-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-elbows-dark hover:text-elbows-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-elbows-dark hover:text-elbows-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-elbows-blue hover:bg-elbows-lightblue text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
