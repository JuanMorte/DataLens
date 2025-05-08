import { useState, useEffect } from 'react';

// Hook for carousel auto-rotation
export const useCarousel = (items, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);
    
    return () => clearInterval(intervalId);
  }, [items.length, interval]);
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return { currentIndex, goToSlide };
};

export default useCarousel;