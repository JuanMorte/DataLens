import {useState} from 'react';

const SignInModal = ({ isOpen, onClose}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Sign In</h3>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                </div>
                
                <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    required
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-[#2ECC40] text-white py-2 px-4 rounded hover:bg-[#29B737] transition-colors"
                >
                    Sign In
                </button>
                </form>
                
                <div className="mt-4 text-center text-sm">
                <p>Don't have an account? <a href="#" className="text-[#2ECC40]">Sign up</a></p>
                </div>
            </div>
            </div>
    );
};

export default SignInModal;