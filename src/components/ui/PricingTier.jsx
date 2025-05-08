import React from 'react';

const PricingTier = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false,
  featured = false 
}) => {
  return (
    <div className={`${featured ? 'bg-gradient-to-b from-[#1a2c30] to-[#122023]' : 'bg-[#1a2c30]/50'} rounded-xl overflow-hidden border ${featured ? 'border-[#2ECC40]' : 'border-[#1a2c30]'} transition-all hover:shadow-lg ${featured ? 'shadow-[#2ECC40]/20 relative transform scale-105 z-10' : 'hover:shadow-[#2ECC40]/10 hover:border-[#2ECC40]/30'}`}>
      {popular && (
        <div className="absolute top-0 left-0 w-full bg-[#2ECC40] text-[#122023] text-center py-1 font-bold text-sm">
          MOST POPULAR
        </div>
      )}
      <div className={`p-8 ${popular ? 'pt-12' : ''}`}>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-400 ml-2">{period}</span>
        </div>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
              <i className={`fa-solid ${feature.included ? 'fa-check text-[#2ECC40]' : 'fa-xmark'} mt-1 mr-3`}></i>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <a 
          href="#demo" 
          className={`block w-full py-3 px-4 text-center ${
            featured 
              ? 'bg-[#2ECC40] text-white hover:bg-[#29B737]' 
              : 'bg-white text-[#122023] hover:bg-[#2ECC40]'
          } rounded-lg font-medium transition-colors`}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default PricingTier;