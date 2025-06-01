import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import SignInModal from '@components/SignInModal.jsx';
import { useAuth } from '@context/useAuth'

const Header = () => {
  const dict = {
    'Home': '',
    'Services': "services",
    'Insights': "insights",
    'About Us': "about-us"
  }
  const { user, logout } = useAuth()
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getInitialSection = () => {
    const path = location.pathname.slice(1)
    const reverseDict = Object.entries(dict).find(([_, value]) => value === path)
    return (reverseDict ? reverseDict[0] : "Home").toLowerCase()
  }

  const [activeSection, setActiveSection] = useState(getInitialSection);

  useEffect(() => {
    setActiveSection(getInitialSection())
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full h-20 ${isScrolled ? 'fixed top-0 z-40 ' : 'relative'} transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md py-5 shadow-lg' : 'bg-[#181f22] py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center h-full">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img src={`https://${import.meta.env.VITE_AWS_BUCKET_NAME}.s3.${import.meta.env.VITE_AWS_REGION}.amazonaws.com/images/Logo.png`} alt="DataLens Logo" className="w-8 h-8 mr-2" />
          <h2 className="text-xl font-bold tracking-tight text-white">DataLens</h2>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {['Home', 'Services', 'Insights', 'About Us'].map((item) => (
            <Link 
              key={item}
              to={`/${dict[item]}`} 
              className={`font-bold text-[17px] transition-colors px-5 items-center ${
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

        {/* Right Side: Sign In/User */}
        <div className="hidden md:flex items-center justify-end flex-shrink-0 min-w-[120px] ml-4">
          {user ? (
            <div className='relative'>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-10 h-10 rounded-full bg-[#2ECC40] flex items-center justify-center text-white hover:bg-green-600 transition-colors"
              >
                {user.email ? user.email[0].toUpperCase() : 'U'}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 text-[15px] bg-white rounded-md shadow-lg py-1 z-50">
                  {!user.isSubscribed && (
                    <Link 
                      to="/subscribe" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Upgrade to Premium
                    </Link>
                  )}
                  <button 
                    onClick={logout} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={() => setIsSignInOpen(true)}
              className="px-5 py-2 bg-[#2ECC40] rounded font-medium shadow-md hover:shadow-lg transition-all hover:bg-white"
            >
              Sign In
            </button>
          )}
        </div>

        <div className="md:hidden flex-1 flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="md:hidden fixed left-0 w-full z-[999] bg-gray-900 shadow-lg text-center"
          style={{
            top: isScrolled ? '5rem' : '5rem',
          }}
        >
          <nav className="flex flex-col space-y-2 px-4 pb-4 pt-2">
            {['Home', 'Services', 'Insights', 'About Us'].map((item) => (
              <Link 
                key={item}
                to={`/${dict[item]}`} 
                className={`font-bold text-[17px] transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? 'text-[#2ECC40]' 
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
              >
                {item}
              </Link>
            ))}
            <div className="mt-2">
              {user ? (
                <button 
                  onClick={logout}
                  className="w-full px-5 py-2 bg-[#2ECC40] rounded font-medium shadow-md hover:shadow-lg transition-all hover:bg-white text-black"
                >
                  Sign Out
                </button>
              ) : (
                <button 
                  onClick={() => {
                    setIsSignInOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-5 py-2 bg-[#2ECC40] rounded font-medium shadow-md hover:shadow-lg transition-all hover:bg-white text-black"
                >
                  Sign In
                </button>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </header>
  );
};

export default Header;