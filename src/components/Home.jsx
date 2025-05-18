import React from 'react';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Services from '@components/Services';
import Testimonials from '@components/Testimonials';
import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';
import News from '@components/News';

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg text-white">
        <Hero />
        <Services />
        <Testimonials />
        <News />
        <ContactForm />
    </div>
  );
};

export default Home;