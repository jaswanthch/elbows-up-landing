
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Globe, Database } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with Canadian-inspired gradient */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Maple leaf watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <svg width="500" height="500" viewBox="0 0 512 512" fill="white">
          <path d="M256,0c0,0,8,96,8,128c0,16.67-8,32-8,32s-3-8-32-8c-28,0-96,16-96,16s80,48,96,48c0,0-16,0-32,16
                 s-16,32-16,32s32-16,64-16c0,0-16,16-16,48c0,48,32,128,32,128s32-80,32-128c0-32-16-48-16-48c32,0,64,16,64,16
                 s0-16-16-32s-32-16-32-16c16,0,96-48,96-48s-64-16-96-16c-32,0-32,8-32,8s-8-16-8-32C248,96,256,0,256,0z"/>
        </svg>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: text content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Canadian Hosting <br />
              with <span className="text-elbows-red">Elbows Up</span> Service
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Premium hosting solutions proudly based in Canada. Fast servers, exceptional support, and guaranteed 99.9% uptime.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-elbows-red hover:bg-red-600 text-white">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Plans
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-elbows-red mr-2" />
                <span className="text-white">Canadian Owned</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-elbows-red mr-2" />
                <span className="text-white">99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <Database className="w-6 h-6 text-elbows-red mr-2" />
                <span className="text-white">100% SSD</span>
              </div>
            </div>
          </div>
          
          {/* Right column: server illustration */}
          <div className="hidden md:block relative">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl animate-float">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-4/5 bg-elbows-dark/20 rounded-md border border-white/20 p-4">
                    <div className="h-2 w-16 bg-elbows-red rounded mb-3"></div>
                    <div className="h-2 w-24 bg-white/40 rounded mb-3"></div>
                    <div className="h-2 w-20 bg-white/40 rounded mb-3"></div>
                    <div className="h-2 w-28 bg-white/40 rounded mb-3"></div>
                    
                    <div className="mt-8 grid grid-cols-3 gap-2">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-elbows-blue/40 h-10 rounded-md flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Canadian flag accent */}
            <div className="absolute -top-4 -right-4 w-12 h-8 bg-white rounded shadow-md flex items-center justify-center overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/4 bg-elbows-red"></div>
              <div className="absolute inset-y-0 right-0 w-1/4 bg-elbows-red"></div>
              <div className="w-3 h-3 text-elbows-red">
                <svg viewBox="0 0 512 512" fill="currentColor">
                  <path d="M256,0c0,0,8,96,8,128c0,16.67-8,32-8,32s-3-8-32-8c-28,0-96,16-96,16s80,48,96,48c0,0-16,0-32,16
                         s-16,32-16,32s32-16,64-16c0,0-16,16-16,48c0,48,32,128,32,128s32-80,32-128c0-32-16-48-16-48c32,0,64,16,64,16
                         s0-16-16-32s-32-16-32-16c16,0,96-48,96-48s-64-16-96-16c-32,0-32,8-32,8s-8-16-8-32C248,96,256,0,256,0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
