import { useState } from 'react';
import { useAuth } from '@context/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    try {
      const endpoint = (activeTab === 'signin' ? '/api/auth/login' : '/api/auth/register');
      const res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }
      login(data.token, data._id, data.email, data.isSubscribed);
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a2c30] to-[#121b1d]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex mb-6">
          <button className={`px-4 py-2 ${activeTab === 'signin'
            ? 'border-b-2 border-[#2ECC40] text-[#2ECC40]'
            : 'text-gray-500'}`}
            onClick={() => setActiveTab('signin')}
          >
            Sign in
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'register'
              ? 'border-b-2 border-[#2ECC40] text-[#2ECC40]'
              : 'text-gray-500'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4">{activeTab === 'signin' ? 'Sign In' : 'Register'}</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
              className="w-full p-2 border border-gray-300 rounded"
              required
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full p-2 border border-gray-300 rounded"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2ECC40] text-white py-2 rounded hover:bg-green-600 transition-colors"
            disabled={isLoading}
          >
            {isLoading
              ? (activeTab === 'signin' ? 'Signing in...' : 'Registering...')
              : (activeTab === 'signin' ? 'Sign In' : 'Create Account')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;