import { useState, useEffect } from 'react';
import Logo from '@assets/Logo.png';
import { Link } from 'react-router-dom'; 
import SignInModal from '@components/SignInModal.jsx'; // Adjust the import path as necessary

const Header = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const dict = {
  'Home': '',
  'Services': "services",
  'Insights': "insights",
  'About Us': "about-us"
}

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
            {['Home', 'Services', 'Insights', 'About Us'].map((item) => (
              <Link 
                key={item}
                to={`/${dict[item]}`} 
                className={`font-medium transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'text-[#2ECC40]' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </Link>
            ))}
          </nav>
        
        {/* Sign In Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => setIsSignInOpen(true)}
            className="px-5 py-2 bg-[#2ECC40] rounded font-medium shadow-md hover:shadow-lg transition-all hover:bg-white"
          >
            Sign In
          </button>
        </div>

        {/* Mobile menu button (keep your existing) */}
        {/* Mobile menu content (update links to use Link component) */}
      </div>

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </header>
  );
};

export default Header;