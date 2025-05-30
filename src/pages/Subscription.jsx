import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/useAuth';

const SubscribePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  console.log(user)

  const plans = [
    {
      name: 'Monthly',
      price: 29.99,
      features: [
        'Access to all market insights',
        'Daily market analysis',
        'Monthly reports',
        'Expert commentary'
      ]
    },
    {
      name: 'Annual',
      price: 299.99,
      features: [
        'All monthly features',
        '2 months free',
        'Priority access to new reports',
        'Exclusive webinars'
      ]
    }
  ];

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const now = new Date();
      const end = (selectedPlan === 'Monthly'
              ? new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
              : new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()) )
      const response = await fetch(`http://localhost:3000/api/subscribe/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscription: {
            isSubscribed: true,
            plan: selectedPlan,
            startDate: now,
            endDate: end
          }
        }),
        credentials: 'include'
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      updateUser({
        _id: user._id,
        email: user.email,
        subscribed: true
      })

      navigate('/insights');

    } catch (error) {
      console.error('Subscription error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Please log in to subscribe</h2>
          <button
            onClick={() => navigate('/login')}
            className="bg-[#2ECC40] text-black font-bold py-2 px-6 rounded hover:bg-[#29B737] transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-[#1a2c30] to-[#121b1d] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#2ECC40] hover:text-[#29B737] transition-colors"
          >
            <span className="text-xl">←</span>
            <span className="font-medium">Back</span>
          </button>
          <h1 className="text-4xl font-bold">Subscribe to DataLens Premium</h1>
          <div className="w-[100px]"></div> {/* Spacer for alignment */}
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-[#1a2c30]/50 rounded-xl p-8 border ${
                selectedPlan === plan.name 
                  ? 'border-[#2ECC40]' 
                  : 'border-gray-700'
              } hover:border-[#2ECC40]/50 transition-colors cursor-pointer`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-3xl font-bold mb-6 text-[#2ECC40]">
                ${plan.price}
                <span className="text-lg text-gray-400">
                  /{plan.name === 'Monthly' ? 'mo' : 'yr'}
                </span>
              </div>
              
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-[#2ECC40] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full font-bold py-3 px-6 rounded transition-colors ${
                  selectedPlan === plan.name
                    ? 'bg-[#2ECC40] text-black hover:bg-[#29B737]'
                    : 'border border-[#2ECC40] text-[#2ECC40] hover:bg-[#2ECC40] hover:text-black'
                }`}
              >
                {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
        
        {selectedPlan && (
          <div className="mt-12 text-center">
            <button 
              onClick={handleSubscribe}
              disabled={loading}
              className={`bg-[#2ECC40] text-black font-bold py-4 px-8 rounded-lg 
                hover:bg-[#29B737] transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Processing...' : 'Subscribe Now'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribePage;