import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const login = (userData) => {
        setIsAuthenticated(true);

        setUser(userData);
        navigate('/'); // Redirect to home page after login
    };

    const logout = () => {
        setIsAuthenticated(false);

        setUser(null);
        navigate('/'); // Redirect to home page after logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated,user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
