import React, { useState, useEffect, useContext, createContext } from 'react';
import { createAuth0Client } from '@auth0/auth0-spa-js';

const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({ children }) => {
  const [auth0Client, setAuth0Client] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0 = await createAuth0Client({
        domain: "dev-c3j4ngfsizd3n5ey.us.auth0.com",
        clientId: "SfrKlzWHVwMJylwORMhB1J2Hry3uWV4n",
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      });
      setAuth0Client(auth0);

      if (window.location.search.includes("state=") &&
          (window.location.search.includes("code=") ||
           window.location.search.includes("error="))) {
        await auth0.handleRedirectCallback();
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0.getUser();
        setUser(user);
      }

      setLoading(false);
    };

    initAuth0();
  }, []);

  const loginWithRedirect = () => auth0Client.loginWithRedirect();
  const logout = (options) => auth0Client.logout(options);

  return (
    <Auth0Context.Provider value={{ isAuthenticated, user, loading, loginWithRedirect, logout }}>
      {children}
    </Auth0Context.Provider>
  );
};
