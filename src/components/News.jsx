import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InsightsSection = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [insightTeasers, setInsightTeasers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('http://localhost:https://datalens-32py.onrender.com/api/news'); 
        const data = await res.json();
        setInsightTeasers(data);
      } catch (err) {
        console.log('Error fetching news:', err);
        setError('Failed to load news.');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const handlePrev = () => {
    setActiveSlide(prev => (prev > 0 ? prev - 1 : insightTeasers.length - 1));
  };

  const handleNext = () => {
    setActiveSlide(prev => (prev < insightTeasers.length - 1 ? prev + 1 : 0));
  };

  if (loading) {
    return <div className="text-center text-gray-300 py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-400 py-20">{error}</div>;
  }

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
                    key={teaser._id } 
                    className={`transition-opacity duration-300 ${index === activeSlide ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 h-full flex-shrink-0">
                        <img 
                          src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/${teaser.imageurl}`}
                          alt={teaser.title}
                          className="w-full h-140 object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-white">
                            {teaser.tags.map((tags, index) => {
                              return (
                                <span key={index} 
                                  className="inline-block bg-[#2ECC40]/20 text-[#2ECC40] px-4 py-2 rounded-full mr-3">
                                  {tags}
                                </span>);})}</span>
                          <span className="text-xs text-gray-400">
                            {new Date(teaser.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-5">{teaser.title}</h3>
                        <p className="text-gray-300 mb-6 flex-grow line-clamp-3 max-h-[70px] tracking-wide">{teaser.content}</p>
                        <button
                          className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-[#2ECC40] transition-colors w-fit mt-auto"
                          onClick={() => navigate(`/insights/${teaser.slug}`)}
                        >
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
                <button onClick ={() => navigate('/subscribe')}
                  className="bg-white text-black font-bold py-3 px-6 rounded hover:bg-[#29B737] transition-colors">
                  Subscribe Now
                </button>
                <p className="text-center text-white transition-colors">
                  Subscribe today for the best insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;