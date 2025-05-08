import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-[#121b1d] to-[#1a2c30]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Data Strategy?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Get started with DataLens today and unlock the full potential of your business intelligence.
        </p>
        
        <div className="bg-[#1a2c30]/70 rounded-xl p-8 border border-[#1a2c30] max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#122023] border border-[#1a2c30] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2ECC40] focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#122023] border border-[#1a2c30] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2ECC40] focus:border-transparent"
                  placeholder="your.email@company.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">Company</label>
              <input 
                type="text" 
                id="company" 
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#122023] border border-[#1a2c30] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2ECC40] focus:border-transparent"
                placeholder="Your company name"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#122023] border border-[#1a2c30] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#2ECC40] focus:border-transparent"
                placeholder="Tell us about your data challenges..."
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-3 px-4 bg-white text-black rounded-lg font-medium hover:bg-[#29B737] transition-colors"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;