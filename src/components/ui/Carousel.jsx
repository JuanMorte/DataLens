import React, { useState, useEffect, useCallback } from 'react';

const Carousel = ({
  slides = [],
  renderSlide,
  initialSlide = 0,
  autoplayInterval = 0,
  showDots = true,
  showArrows = true,
  dotsPosition = 'inside-bottom',
  arrowsPosition = 'inside-center',
  dotActiveClass = 'bg-[#2ECC40]',
  dotInactiveClass = 'bg-gray-600',
  arrowClass = 'w-10 h-10 flex items-center justify-center bg-[#1a2c30] rounded-full border border-[#2ECC40]/30 text-[#2ECC40] hover:bg-[#2ECC40] hover:text-black transition-colors'
}) => {
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  
  const handlePrev = useCallback(() => {
    setActiveSlide(prev => (prev > 0 ? prev - 1 : slides.length - 1));
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setActiveSlide(prev => (prev < slides.length - 1 ? prev + 1 : 0));
  }, [slides.length]);
  
  const goToSlide = useCallback((index) => {
    setActiveSlide(index);
  }, []);
  
  useEffect(() => {
    if (autoplayInterval > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, autoplayInterval);
      
      return () => clearInterval(interval);
    }
  }, [autoplayInterval, handleNext]);
  
  const getDotsContainerClass = () => {
    switch (dotsPosition) {
      case 'inside-bottom':
        return 'absolute bottom-6 left-0 right-0 flex justify-center space-x-2';
      case 'inside-top':
        return 'absolute top-6 left-0 right-0 flex justify-center space-x-2';
      case 'outside-bottom':
        return 'mt-4 flex justify-center space-x-2';
      default:
        return 'absolute bottom-6 left-0 right-0 flex justify-center space-x-2';
    }
  };
  
  const getArrowsContainerClass = () => {
    switch (arrowsPosition) {
      case 'inside-center':
        return 'absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4';
      case 'inside-bottom':
        return 'absolute bottom-6 right-6 flex space-x-2';
      case 'outside-center':
        return 'absolute top-1/2 -translate-y-1/2 w-full left-0 right-0 flex justify-between -mx-4 px-2';
      default:
        return 'absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4';
    }
  };

  return (
    <div className="relative h-full">
      <div className="h-full">
        {slides.map((slide, index) => (
          <div 
            key={typeof slide === 'object' && slide.id ? slide.id : index} 
            className={`transition-opacity duration-300 ${index === activeSlide ? 'block' : 'hidden'}`}
          >
            {renderSlide(slide, index, index === activeSlide)}
          </div>
        ))}
      </div>

      {showArrows && slides.length > 1 && (
        <div className={getArrowsContainerClass()}>
          <button 
            onClick={handlePrev}
            className={arrowClass}
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button 
            onClick={handleNext}
            className={arrowClass}
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}

      {showDots && slides.length > 1 && (
        <div className={getDotsContainerClass()}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${activeSlide === index ? dotActiveClass : dotInactiveClass}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;