import React from 'react';

const TestimonialCard = ({ name, title, quote, rating }) => {
  // Start rating system
  const renderStars = (rating) => {
    const stars = [];
    
    // Full stars
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars.push(<i key={`star-${i}`} className="fa-solid fa-star"></i>);
    }
    
    // Half stars
    if (rating % 1 !== 0) {
      stars.push(<i key="star-half" className="fa-solid fa-star-half-stroke"></i>);
    }
    
    return stars;
  };

  return (
    <div className="bg-gradient-to-b from-[#1a2c30] to-[#122023] rounded-xl p-6 border border-[#1a2c30] shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#2ECC40]/20 flex items-center justify-center mr-4">
          <i className="fa-solid fa-quote-left text-[#2ECC40]"></i>
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">
        "{quote}"
      </p>
      <div className="flex text-[#2ECC40]">
        {renderStars(rating)}
      </div>
    </div>
  );
};

export default TestimonialCard;