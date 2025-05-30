import { useState, useEffect } from 'react';
import { AuthContext } from '@context/Context';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData && userData !== 'undefined') {
            setUser(JSON.parse(userData));
        }
        setAuthLoading(false);
    }, []);

    const login = (token, _id, email, subscribed) => {
        localStorage.setItem('token', token);
        const userObj = { _id, email, subscribed };
        localStorage.setItem('userData', JSON.stringify(userObj));
        setUser(userObj);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setUser(null);
    };

    const updateUser = (userObj) => {
        localStorage.setItem('userData', JSON.stringify(userObj));
        setUser(userObj)
    };

    return (
        <AuthContext.Provider value={{ user, authLoading, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};