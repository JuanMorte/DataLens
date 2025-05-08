import React from 'react';
import TestimonialCard from './ui/TestimonialCard';

// Testimonials (fake)
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CFO, TechGrowth Inc.",
      quote: "DataLens transformed our financial forecasting accuracy by 86%. Their interactive dashboards have become essential tools for our executive decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "VP of Marketing, RetailPlus",
      quote: "The competitor analysis tools from DataLens helped us identify untapped market segments and refine our targeting strategy, resulting in a 42% increase in conversion rates.",
      rating: 4.5
    },
    {
      name: "Dr. James Wilson",
      title: "CIO, HealthFirst Network",
      quote: "DataLens' predictive analytics helped us optimize patient flow and resource allocation, reducing wait times by 35% while improving overall care quality and staff satisfaction.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#162527] to-[#1a2c30]">
      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2ECC40] to-[#29B737] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-5xl mx-auto">
            Hear from our clients about how DataLens has transformed their businesses with data-driven insights and analytics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;