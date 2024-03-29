// withAuth.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/hooks/useUserContext';
import { jwtDecode } from 'jwt-decode';

const withAuth = (WrappedComponent) => {
  function WithAuthComponent(props) {
    const { user, token, location } = useUser();
    const router = useRouter();

    useEffect(() => {

      try {
        const token = localStorage.getItem('jwt');
        if (!token) {
          router.push(`/login?redirect=${encodeURIComponent(router.asPath)}`);
        }

        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
        const isExpired = currentTime > decoded.exp; // Check if current time is past the 'exp' time

        if (isExpired) {
          localStorage.removeItem('jwt');
          router.push(`/login?redirect=${encodeURIComponent(router.asPath)}`);
        }
      } catch (error) {
        if (error.name === 'InvalidTokenError') {
          console.log('Invalid token in withAuth',);
          localStorage.removeItem('jwt');
          router.push(`/login?redirect=${encodeURIComponent(router.asPath)}`);
        } else {
          console.error(error);
        }
        router.push(`/login?redirect=${encodeURIComponent(router.asPath)}`);
      }
    }, [router]);
    return <WrappedComponent {...props} user={user} token={token} location={location} />;
  };

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  withAuth.displayName = `withAuth(${wrappedComponentName})`;
  return WithAuthComponent;
};

export default withAuth;

// export default function withFoo(WrappedComponent) {
//   function WithFoo(props) {
//     return <WrappedComponent {...props} foo />;
//   }

//   const wrappedComponentName = WrappedComponent.displayName
//     || WrappedComponent.name
//     || 'Component';

//   WithFoo.displayName = `withFoo(${wrappedComponentName})`;
//   return WithFoo;
// }
