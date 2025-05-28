import { useState, useEffect } from 'react';
import { AuthContext } from '@context/Context';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const subscribed = localStorage.getItem('subscribed') === 'true';
    if (token) {
      setUser({ token, subscribed });
    }
  }, []);

  const login = (token, subscribed = false) => {
    localStorage.setItem('token', token);
    localStorage.setItem('subscribed', subscribed);
    setUser({ token, subscribed });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};