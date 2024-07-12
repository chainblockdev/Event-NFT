import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Handle sign out logic here
    console.log('Signed out');
    navigate('/');
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;
