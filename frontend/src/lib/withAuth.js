// withAuth.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks/useUserContext';
import { jwtDecode } from 'jwt-decode';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, token } = useUser();
    const router = useRouter();
    useEffect(() => {
      try {
        const token = localStorage.getItem('jwt');
        if (!token) {
          router.push('/login');
        }

        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
        const isExpired = currentTime > decoded.exp; // Check if current time is past the 'exp' time

        if (isExpired) {
          localStorage.removeItem('jwt');
          router.push('/login');
        }
      } catch (error) {
        if (error.name === 'InvalidTokenError') {
          console.log('Invalid token in withAuth',);
          localStorage.removeItem('jwt');
          router.push('/login');
        } else {
          console.error(error);
        }
        router.push('/login');
      }
    }, []);
    return <WrappedComponent {...props} user={user} token={token} />;
  };
};

export default withAuth;
