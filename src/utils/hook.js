import { useState, useEffect } from 'react';

// Hook for handling scroll effects
export const useScrollEffect = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
  
  return isScrolled;
};

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

// Hook for accordion/expand functionality
export const useAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };
  
  return { expandedIndex, toggleAccordion };
};