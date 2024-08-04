import React, { useEffect } from 'react';
import { useAuth0 } from './Auth0Provider'; // Import the Auth0 context
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import logo from '../assets/icons/Frame 55.png';  // Import the logo

const SignIn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile'); // Redirect to profile if already authenticated
    }
  }, [isAuthenticated, navigate]);

  const handleSignIn = (event) => {
    event.preventDefault();
    loginWithRedirect(); // Trigger the Auth0 login process
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    navigate('/signout'); // Navigate to the SignOut page
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <div className="sign-in-header">
          <div className="sign-in-logo-container">
            <img src={logo} alt="EventiNFT Logo" className="sign-in-logo-icon" />
            <span className="sign-in-logo-text">EventiNFT</span>
          </div>
        </div>
        <div className="sign-in-form">
          <button onClick={handleSignIn} className="sign-in-btn-primary">SIGN IN</button>
        </div>
        <div className="sign-in-links">
          <a href="/forgot-password">Forgot password?</a>
          <a href="/signout" onClick={handleSignUp}>Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
