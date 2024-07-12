// src/components/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import lockIcon from '../assets/icons/Frame 55.png';  // Import the icon

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <div className="sign-in-header">
          <div className="sign-in-icon">
            <img src={lockIcon} alt="Lock Icon" className="lock-icon" />  {/* Use the imported icon */}
          </div>
          <h2>Sign in</h2>
        </div>
        <form className="sign-in-form">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" name="password" required autoComplete="current-password" />
          </div>
          <div className="form-group remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" autoComplete="off" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="btn-primary">SIGN IN</button>
        </form>
        <div className="sign-in-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <Link to="/signout">Don't have an account? SignOut</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
