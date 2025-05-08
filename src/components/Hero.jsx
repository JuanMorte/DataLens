import React, { useState, useEffect } from 'react';
import { useCarousel } from '../utils/hooks';
import hero_bg1 from '@assets/hero-bg-1.jpg';
import hero_bg2 from '@assets/hero-bg-2.webp';
import hero_bg3 from '@assets/hero-bg-3.webp';
import Logo from '@assets/Logo.png';

const HeroCarousel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  
  // Carousel content
  const carouselSlides = [
    {
      backgroundImage: hero_bg1,
      heading: "See beyond the data.",
      subheading: "Turn data into actionable insights with real-time analytics, competitor benchmarking, and industry trend forecasting."
    },
    {
      backgroundImage: hero_bg2,
      heading: "Visualize your success.",
      subheading: "Transform complex information into clear visualizations that drive strategic decisions and business growth."
    },
    {
      backgroundImage: hero_bg3,
      heading: "Predict market trends.",
      subheading: "Stay ahead of the competition with AI-powered forecasting and data-driven market intelligence."
    }
  ];
  
  const metrics = [
    { value: '86%', label: 'Decision accuracy improvement' },
    { value: '3.2x', label: 'ROI on analytics investment' },
    { value: '42%', label: 'Time saved on reporting' }
  ];
  
  // Use custom carousel hook
  const { currentIndex: currentSlide } = useCarousel(carouselSlides);
  
  // Cycle through metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [metrics.length]);
  
  // Show animation after load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#122023] text-white" style={{ minHeight: '100vh' }}>
      {/* Carousel background images */}
      <div className="absolute inset-0 w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div 
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-center bg-cover"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              opacity: currentSlide === index ? 0.5 : 0,
              zIndex: currentSlide === index ? 1 : 0
            }}
          ></div>
        ))}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#122023] via-[#122023]/60 to-[#122023] opacity-90 z-10"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 py-20 md:py-32 flex flex-col h-screen justify-center">
        {/* Logo and Header */}
        <div className={`transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          
          {/* Carousel Headers */}
          <div className="relative h-32 md:h-40 mt-40">
            {carouselSlides.map((slide, index) => (
              <div
                key={index}
                className="absolute w-full transition-all duration-1000 ease-in-out transform"
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  transform: `translateY(${(index - currentSlide) * 20}px)`,
                  pointerEvents: currentSlide === index ? 'auto' : 'none'
                }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 custom-font">
                  <span className="block">{slide.heading.split('.')[0]}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC40] to-[#29B737]">
                    {slide.heading.includes('.') ? slide.heading.split('.')[1]: ''}
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 custom-font">
                  {slide.subheading}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6 mt-4">
            <a href="#demo" className="px-8 py-4 bg-white text-[#122023] rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center">
              <span>Request a Demo</span>
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
            <a href="#services" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center">
              <span>Explore Features</span>
            </a>
          </div>
          
          {/* Metrics */}
          <div className="relative h-20 overflow-hidden">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="absolute w-full transition-all duration-500 ease-in-out transform"
                style={{
                  opacity: currentMetric === index ? 1 : 0,
                  transform: `translateY(${(index - currentMetric) * 20}px)`,
                  pointerEvents: currentMetric === index ? 'auto' : 'none'
                }}
              >
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-[#2ECC40] mr-3 custom-font">{metric.value}</span>
                  <span className="text-gray-300 custom-font">{metric.label}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel navigation dots */}
        
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;