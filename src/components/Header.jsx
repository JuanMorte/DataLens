import React, { useState, useEffect } from 'react';
import Logo from '@assets/Logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['services', 'insights'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-screen top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-grey-900 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`} 
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="DataLens Logo" className="w-8 h-8 mr-2" />
            <h2 className="text-xl font-bold tracking-tight text-white">DataLens</h2>
          </div>
          
          {/* Navigation Bar*/}
          <nav className="hidden md:flex space-x-8">
            {['Services', 'Insights'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'text-[#2ECC40]' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <a 
              href="#demo" 
              className="px-5 py-2 bg-gradient-to-r from-[#2ECC40] to-[#29B737] rounded-full font-medium shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute w-full bg-[#122023]/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 py-4 shadow-xl' : 'max-h-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex flex-col space-y-4">
            {['Home', 'Services', 'Pricing', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'text-[#2ECC40]' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#demo" 
              className="px-5 py-2 bg-gradient-to-r from-[#2ECC40] to-[#29B737] rounded-full font-medium shadow-md hover:shadow-lg transition-all text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
    </header>
  );
};

export default Header;