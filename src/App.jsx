import React from 'react';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import News from '@components/News';


const App = () => {
  return (
    <div className="min-h-screen w-screen bg text-white">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <News />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;