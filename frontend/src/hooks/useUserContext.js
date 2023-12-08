import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

// Step 1: Create a Context
const UserContext = createContext();

// Step 2: Define a Provider Component
export const UserProvider = ({ children }) => {
  // Step 3: Use a State to Store User Data
  const [token, setToken] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [user, setUser] = useState({
    userId: '',
    username: "",
    email: "",
    created_at: "",
    age: 0,
    country_code: "",
    gender: "",
    profile_content: "",
    provider: "",
    updated_at: "",
    country_name: "",
  });

  useEffect(() => {
    console.log("useEffect in useUserContext.js")
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const decoded = jwtDecode(jwt);
      const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
      const isExpired = currentTime > decoded.exp; // Check if current time is past the 'exp' time

      if (!isExpired) {
        setToken(jwt);
        setUser({
          ...decoded,
          userId: decoded.id,
        });

      } else {
        localStorage.removeItem('jwt');
        setToken(null);
        setUser({
          id: '',
          username: "",
          email: "",
          created_at: "",
          age: 0,
          country_code: "",
          gender: "",
          profile_content: "",
          provider: "",
          updated_at: "",
          country_name: "",
        });
      }
    }
  }, []);


  // function getLocation() {
  //   try {
  //     navigator.geolocation.getCurrentPosition(
  //       (e) => {
  //         // console.log(e)
  //         setLocation({ lat: e.coords.latitude, lng: e.coords.longitude })
  //       },
  //       (e) => {
  //         // console.log(e)
  //         setLocation({ lat: 0, lng: 0 })
  //       },
  //       { timeout: 200000 });
  //   } catch (e) {
  //     console.log("Geolocation is not supported by this browser.", e)
  //   }
  // }

  // useEffect(() => {
  //   getLocation();
  // }, []);

  // Step 4: Pass User Data and Functions to Change It to the Context
  const value = {
    user,
    setUser, // This function allows components to update the user state
    token,
    setToken,
    location,
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