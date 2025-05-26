import Hero from '@components/Hero';
import Services from '@components/Services';
import Testimonials from '@components/Testimonials';
import ContactForm from '@components/ContactForm';
import News from '@components/News';

console.log('Home page loaded');
const Home = () => {
  return (
    <div className="min-h-screen w-screen text-white">
        <Hero />
        <Services />
        <Testimonials />
        <News />
        <ContactForm />
    </div>
  );
};

export default Home;