
import React from 'react';

const testimonials = [
  {
    quote: "Elbows Up Hosting has been a game-changer for our business. Their Canadian-based servers ensure our data stays within the country, and their support team is always ready to help.",
    name: "Sarah Thompson",
    title: "CTO, MapleCommerce",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "After switching to Elbows Up, our website load times decreased by 40%. Their technical team went above and beyond to optimize our WordPress installation.",
    name: "David Chen",
    title: "Owner, VancouverDesigns",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    quote: "As a small business owner, I appreciate that Elbows Up offers Canadian-based support. No more waiting for overseas support teams – they're right here in my time zone!",
    name: "Michelle Rodriguez",
    title: "Founder, TorontoEats",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-elbows-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-elbows-red">Canadian</span> Businesses
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            See what our customers have to say about our hosting solutions and dedicated support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-elbows-red opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white/90 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-elbows-red"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="text-white/60 font-bold text-xl">CanadaTech</div>
            <div className="text-white/60 font-bold text-xl">MapleCommerce</div>
            <div className="text-white/60 font-bold text-xl">NorthSystems</div>
            <div className="text-white/60 font-bold text-xl">TrueNorth</div>
            <div className="text-white/60 font-bold text-xl">BeaverHost</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
