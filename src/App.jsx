import Header from '@components/Header';
import Footer from '@components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import ServicesPage from '@pages/ServicesPage';
import AboutUsPage from '@pages/AboutUsPage';
import InsightPage from '@pages/InsightPage';
import NewsDetail from '@pages/NewsDetail'
import AllNews from '@pages/AllNews';
import { AuthProvider } from '@context/Auth'
import ProtectedRoute from './components/ProtectedRoute';
import SubscriptionPage from '@pages/Subscription';
import Login from '@pages/Login';

const AppContent = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/services" element={<ServicesPage />} />
          <Route path ="/insights" element={<InsightPage />} />
          <Route path ="/about-us" element={<AboutUsPage />} />
          <Route path ="/insights/:slug" element={<ProtectedRoute><NewsDetail /></ProtectedRoute>} />
          <Route path ="/insights/allnews" element={<ProtectedRoute><AllNews /></ProtectedRoute>} />
          <Route path ="/subscribe" element={<SubscriptionPage/>} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

const App = () => {
  return (
  <AuthProvider>
      <AppContent />
  </AuthProvider>
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