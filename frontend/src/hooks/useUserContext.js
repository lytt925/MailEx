import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
// import axios from '../axios';

// Step 1: Create a Context
const UserContext = createContext();

// Step 2: Define a Provider Component
export const UserProvider = ({ children }) => {
  // Step 3: Use a State to Store User Data
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({
    username: '',
    userId: '',
    email: '',
    provider: ''
  });

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setToken(jwt);

      try {
        // Decode the JWT and extract user information
        const decoded = jwtDecode(jwt);
        setUser({
          username: decoded.username,
          userId: decoded.id,
          email: decoded.email,
          provider: decoded.provider
        });
      } catch (error) {
        console.error("Failed to decode JWT:", error);
      }
    }
  }, []);

  // Step 4: Pass User Data and Functions to Change It to the Context
  const value = {
    user,
    setUser, // This function allows components to update the user state
    token,
    setToken,
    logout: () => {
      setToken(null);
      setUser({
        username: '',
        userId: '',
        email: '',
        provider: ''
      });
      localStorage.removeItem('jwt');

    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Step 5: Consume the Context in Your Components
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};