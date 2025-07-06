import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('adrashaUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('adrashaUser'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      navigate('/');
      return true;
    } else {
      return false;
    }
  };

  const createAccount = (email, password) => {
    const newUser = { email, password };
    localStorage.setItem('adrashaUser', JSON.stringify(newUser));
    setUser(newUser);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('adrashaUser');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        createAccount,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook to use in any component
export const useAuth = () => useContext(AuthContext);
