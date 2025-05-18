import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-scree flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center py-32">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
    <a href="/" className="px-6 py-3 bg-[#2ECC40] rounded-lg">Return Home</a>
  </div>
);

export default App;