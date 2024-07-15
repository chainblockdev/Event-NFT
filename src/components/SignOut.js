// src/components/SignOut.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SignOut.css';
import lockIcon from '../assets/icons/Frame 55.png';  // Adjust the path if necessary

const SignOut = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        <div className="sign-up-header">
          <div className="sign-up-icon">
            <img src={lockIcon} alt="Lock Icon" className="lock-icon" />
          </div>
          <h2>Sign up</h2>
        </div>
        <form className="sign-up-form">
          <div className="form-group">
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address *" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password *" required />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" />
              I want to receive inspiration, marketing promotions and updates via email.
            </label>
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <Link to="/signin" className="sign-in-link">Already have an account? Sign in</Link>
      </div>
    </div>
  );
};

export default SignOut;