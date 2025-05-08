import React, { useState } from 'react';
import news_1 from '@assets/news_1.jpg';
import news_2 from '@assets/news_2.jpg';
import news_3 from '@assets/news_3.jpg';

const InsightsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Sample insight teasers
  const insightTeasers = [
    {
      id: 1,
      category: "MARKET ANALYSIS",
      date: "May 5, 2025",
      title: "AI Adoption Surges 400% in Financial Sector - Winners and Losers Revealed",
      excerpt: "Our exclusive analysis shows an unprecedented acceleration in AI implementation across financial institutions, with clear patterns emerging between early adopters and laggards...",
      image: news_1 
    },
    {
      id: 2,
      category: "ECONOMIC FORECAST",
      date: "May 6, 2025",
      title: "Hidden Signals Point to Major Currency Shift in Q3 2025",
      excerpt: "Our data scientists have identified five overlooked indicators suggesting a significant realignment of major currencies that most analysts have missed...",
      image: news_2
    },
    {
      id: 3,
      category: "INDUSTRY SPOTLIGHT",
      date: "May 7, 2025",
      title: "The Next Supply Chain Crisis: Data Reveals Critical Vulnerabilities",
      excerpt: "Exclusive access to shipping and inventory data across 17 countries shows alarming patterns that could trigger the next global supply chain disruption...",
      image: news_3 
    }
  ];

  const handlePrev = () => {
    setActiveSlide(prev => (prev > 0 ? prev - 1 : insightTeasers.length - 1));
  };

  const handleNext = () => {
    setActiveSlide(prev => (prev < insightTeasers.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-[#1a2c30] to-[#121b1d]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DataLens Insights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2ECC40] to-[#29B737] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Data-driven insights on market trends, economic forecasts, and industry analysis to help you make informed decisions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - News Carousel */}
          <div className="w-full lg:w-2/3 bg-[#1a2c30]/50 rounded-xl overflow-hidden border border-[#1a2c30]">
            <div className="relative h-full">
              <div className="h-full">
                {insightTeasers.map((teaser, index) => (
                  <div 
                    key={teaser.id} 
                    className={`transition-opacity duration-300 ${index === activeSlide ? 'block' : 'hidden'}`}
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 h-full flex-shrink-0">
                        <img 
                          src={teaser.image} 
                          alt={teaser.title} 
                          className="w-full h-140 object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-[#2ECC40]">{teaser.category}</span>
                          <span className="text-xs text-gray-400">{teaser.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">{teaser.title}</h3>
                        <p className="text-gray-300 mb-6 flex-grow">{teaser.excerpt}</p>
                        <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-[#2ECC40] transition-colors w-fit">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 flex space-x-2">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 flex items-center justify-center bg-[#1a2c30] rounded-full border border-[#2ECC40]/30 text-[#2ECC40] hover:bg-[#2ECC40] hover:text-black transition-colors"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 flex items-center justify-center bg-[#1a2c30] rounded-full border border-[#2ECC40]/30 text-[#2ECC40] hover:bg-[#2ECC40] hover:text-black transition-colors"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>

            </div>
          </div>

          {/* Right Section - Subscription Offer */}
          <div className="w-full lg:w-1/3 bg-[#1a2c30]/50 rounded-xl overflow-hidden border border-[#1a2c30]">
            <div className="p-6 h-full flex flex-col">
              <div className="mb-6 pb-6 border-b border-[#2ECC40]/20">
                <h3 className="text-2xl font-bold mb-2 text-[#2ECC40]">Premium Insights</h3>
                <p className="text-gray-300">
                  Get unlimited access to our exclusive data-driven reports, market analysis, and predictive insights.
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start">
                  <i className="fa-solid fa-check-circle text-[#2ECC40] mt-1 mr-3"></i>
                  <p className="text-gray-300">Daily market news and updates</p>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-check-circle text-[#2ECC40] mt-1 mr-3"></i>
                  <p className="text-gray-300">Exclusive research reports and industry analysis</p>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-check-circle text-[#2ECC40] mt-1 mr-3"></i>
                  <p className="text-gray-300">Economic forecasts and trends</p>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-check-circle text-[#2ECC40] mt-1 mr-3"></i>
                  <p className="text-gray-300">Analyst investment recommendation</p>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <button className="bg-white text-black font-bold py-3 px-6 rounded hover:bg-[#29B737] transition-colors">
                  Subscribe Now
                </button>
                <a href="#" className="text-center text-white hover:text-[#29B737] transition-colors">
                  Learn more about our subscription plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;