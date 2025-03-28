
import React from 'react';
import { Server, Shield, Database, Cloud, Check, Globe } from 'lucide-react';

const features = [
  {
    icon: <Server className="h-8 w-8 text-elbows-blue" />,
    title: "Canadian Data Centers",
    description: "Your data stays in Canada with our state-of-the-art Toronto and Vancouver data centers."
  },
  {
    icon: <Shield className="h-8 w-8 text-elbows-blue" />,
    title: "Enhanced Security",
    description: "DDoS protection, SSL certificates, and daily backups keep your site secure."
  },
  {
    icon: <Database className="h-8 w-8 text-elbows-blue" />,
    title: "100% SSD Storage",
    description: "Lightning-fast solid-state drives for optimal performance and reliability."
  },
  {
    icon: <Cloud className="h-8 w-8 text-elbows-blue" />,
    title: "Scalable Resources",
    description: "Easily scale your hosting resources as your business grows."
  },
  {
    icon: <Check className="h-8 w-8 text-elbows-blue" />,
    title: "24/7 Support",
    description: "Our Canadian support team is available around the clock to help you."
  },
  {
    icon: <Globe className="h-8 w-8 text-elbows-blue" />,
    title: "99.9% Uptime",
    description: "We guarantee your website will stay online with minimal downtime."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-elbows-dark mb-4">
            Why Choose <span className="text-elbows-blue">Elbows Up</span> Hosting?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide reliable, secure, and fast hosting solutions designed specifically for Canadian businesses and individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 bg-elbows-light inline-block p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-elbows-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-canada-gradient rounded-xl p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-elbows-dark mb-2">Canadian Privacy Compliance</h3>
              <p className="text-gray-600 max-w-2xl">
                With data centers located in Canada, we help you meet Canadian data residency requirements and comply with privacy regulations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg viewBox="0 0 512 512" className="w-12 h-12 text-elbows-red" fill="currentColor">
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

export default FeaturesSection;
