import React, { useState, useEffect, useCallback } from 'react';

/**
 * A reusable carousel component
 * @param {Object} props
 * @param {Array} props.slides - Array of slides to be displayed
 * @param {Function} props.renderSlide - Function to render each slide, receives (slide, index, isActive)
 * @param {number} props.initialSlide - Initial slide index
 * @param {number} props.autoplayInterval - Autoplay interval in ms (0 to disable)
 * @param {boolean} props.showDots - Whether to show navigation dots
 * @param {boolean} props.showArrows - Whether to show navigation arrows
 * @param {string} props.dotsPosition - Position of dots ('inside-bottom', 'inside-top', 'outside-bottom')
 * @param {string} props.arrowsPosition - Position of arrows ('inside-center', 'inside-bottom', 'outside-center')
 * @param {string} props.dotActiveClass - CSS class for active dot
 * @param {string} props.dotInactiveClass - CSS class for inactive dot
 * @param {string} props.arrowClass - CSS class for arrows
 */
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
  
  // Handler for going to the previous slide
  const handlePrev = useCallback(() => {
    setActiveSlide(prev => (prev > 0 ? prev - 1 : slides.length - 1));
  }, [slides.length]);

  // Handler for going to the next slide
  const handleNext = useCallback(() => {
    setActiveSlide(prev => (prev < slides.length - 1 ? prev + 1 : 0));
  }, [slides.length]);
  
  // Go to a specific slide
  const goToSlide = useCallback((index) => {
    setActiveSlide(index);
  }, []);
  
  // Set up autoplay if interval is provided
  useEffect(() => {
    if (autoplayInterval > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, autoplayInterval);
      
      return () => clearInterval(interval);
    }
  }, [autoplayInterval, handleNext]);
  
  // Helper to determine dots container class based on position
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
  
  // Helper to determine arrows container class based on position
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
      {/* Carousel Content */}
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

      {/* Navigation Arrows */}
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

      {/* Navigation Dots */}
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