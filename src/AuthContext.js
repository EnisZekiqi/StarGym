// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedNickname = Cookies.get('nickname');
    const storedPassword = Cookies.get('password');
    if (storedNickname && storedPassword) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (nickname, password) => {
    const storedNickname = Cookies.get('nickname');
    const storedPassword = Cookies.get('password');

    if (nickname.trim() === storedNickname && password === storedPassword) {
      setIsAuthenticated(true);
      return true;
    } else {
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    Cookies.remove('nickname');
    Cookies.remove('password');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
