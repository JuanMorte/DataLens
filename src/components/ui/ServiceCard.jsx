import React, { useState } from 'react';

const ServiceCard = ({ image, title, description, targetAudience, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#1a2c30]/50 rounded-xl overflow-hidden border border-[#1a2c30] transition-all hover:shadow-lg hover:shadow-[#2ECC40]/10 hover:border-[#2ECC40]/30">
      <div className="h-48 flex items-center justify-center bg-[#1a2c30]/30 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} service`} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-[#2ECC40]">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {/* Target Audience Section */}
        <div className="mb-4 pb-4 border-b border-[#2ECC40]/20">
          <h4 className="font-bold text-white mb-2">Ideal For:</h4>
          <p className="text-gray-400">{targetAudience}</p>
        </div>
        
        {/* Accordion Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="w-full flex justify-between items-center bg-[#131613] text-[#2ECC40] font-medium hover:text-[#29B737] transition-colors"
          aria-expanded={isExpanded}
          aria-controls={`accordion-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <span>{isExpanded ? 'Show less' : 'Learn more'}</span>
          <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} ml-2`}></i>
        </button>
        
        {/* Accordion Content */}
        <div 
          id={`accordion-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className={`mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="space-y-4 pt-2 border-t border-[#2ECC40]/20">
            {details.map((detail, index) => (
              <div key={index}>
                <h4 className="font-bold text-white mb-1">{detail.title}</h4>
                <p className="text-gray-400">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;