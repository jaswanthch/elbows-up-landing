
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Startup",
    price: 5.99,
    features: [
      "10 GB SSD Storage",
      "Unlimited Bandwidth",
      "1 Website",
      "Free SSL Certificate",
      "24/7 Support",
      "99.9% Uptime Guarantee"
    ],
    popular: false,
    buttonText: "Get Started"
  },
  {
    name: "Business",
    price: 12.99,
    features: [
      "50 GB SSD Storage",
      "Unlimited Bandwidth",
      "10 Websites",
      "Free SSL Certificates",
      "Daily Backups",
      "24/7 Priority Support",
      "99.9% Uptime Guarantee",
      "Free Domain"
    ],
    popular: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: 29.99,
    features: [
      "100 GB SSD Storage",
      "Unlimited Bandwidth",
      "Unlimited Websites",
      "Free SSL Certificates",
      "Hourly Backups",
      "24/7 Priority Support",
      "99.99% Uptime Guarantee",
      "Free Domain",
      "Advanced Security",
      "Dedicated Resources"
    ],
    popular: false,
    buttonText: "Get Started"
  }
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-elbows-dark mb-4">
            Affordable <span className="text-elbows-blue">Canadian</span> Hosting Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect hosting plan for your needs with our transparent pricing. All prices in CAD.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-lg border ${
                plan.popular ? 'border-elbows-blue' : 'border-gray-100'
              } w-full md:w-80 flex flex-col transition-transform duration-300 hover:-translate-y-2`}
            >
              {plan.popular && (
                <div className="bg-elbows-blue text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-elbows-dark mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-elbows-dark">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-elbows-blue flex-shrink-0 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-elbows-blue hover:bg-elbows-lightblue' 
                      : 'bg-elbows-dark hover:bg-gray-800'
                  } text-white`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">Need a custom solution?</p>
          <a href="#contact" className="text-elbows-blue font-medium hover:underline">
            Contact us for custom plans tailored to your specific requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
