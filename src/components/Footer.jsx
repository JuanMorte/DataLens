import Logo from '@assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black">
      {/* Basic footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={Logo} 
                alt="DataLens Logo" 
                className="w-10 h-10 mr-3" 
              />
              <h2 className="text-2xl font-bold tracking-tight text-black">DataLens</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming raw data into clear business intelligence for forward-thinking organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-black">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-black" >More</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  Find Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot text-[#2ECC40] mt-1 mr-3"></i>
                <span className="text-gray-400">
                  111 Data Analytics St.<br />
                  Causeway Bay, Hong Kong
                </span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope text-[#2ECC40] mr-3"></i>
                <a href="mailto:info@datalens.io" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  info@datalens.ai
                </a>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone text-[#2ECC40] mr-3"></i>
                <a href="tel:+18005551234" className="text-gray-400 hover:text-[#2ECC40] transition-colors">
                  +852 1234 5678
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-bold mb-3">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-black bg-grey-300 border border-[#1a2c30] rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2ECC40] focus:border-transparent w-full"
                />
                <button className="bg-[#2ECC40] hover:bg-[#29B737] text-white px-4 rounded-full transition-colors">
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-[#1a2c30] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            ©️ {new Date().getFullYear()} DataLens Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
      
      {/* External CSS Dependencies Notice */}
      <div className="sr-only">
        This component requires Font Awesome icons to be properly displayed.
        Add the following to your HTML:
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </div>
    </footer>
  );
};

export default Footer;