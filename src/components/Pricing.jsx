import React from 'react';
import PricingTier from './ui/PricingTier';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups looking to harness the power of data.",
      features: [
        { included: true, text: "Up to 5 users" },
        { included: true, text: "Basic data integration" },
        { included: true, text: "Standard dashboards" },
        { included: true, text: "Email support" },
        { included: false, text: "Advanced analytics" },
        { included: false, text: "AI-powered insights" }
      ]
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses that need more advanced analytics and insights.",
      popular: true,
      features: [
        { included: true, text: "Up to 20 users" },
        { included: true, text: "Advanced data integration" },
        { included: true, text: "Custom dashboards" },
        { included: true, text: "Advanced analytics" },
        { included: true, text: "Priority support" },
        { included: false, text: "AI-powered insights" }
      ]
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "Comprehensive solution for organizations that need the full power of data intelligence.",
      features: [
        { included: true, text: "Unlimited users" },
        { included: true, text: "Enterprise data integration" },
        { included: true, text: "Custom dashboards" },
        { included: true, text: "Advanced analytics" },
        { included: true, text: "AI-powered insights" },
        { included: true, text: "24/7 dedicated support" }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#1a2c30] to-[#0f1a1c]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2ECC40] to-[#29B737] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs with no hidden fees or long-term commitments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier 
              key={index} 
              {...tier} 
              featured={index === 1} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">Need a custom solution? Contact our sales team for a tailored package.</p>
          <a href="#contact" className="inline-flex items-center text-[#2ECC40] hover:text-[#29B737] font-medium">
            <span>Contact Sales</span>
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;