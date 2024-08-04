import React from 'react';
import { useAuth0 } from '../components/Auth0Provider'; // Adjust path if necessary

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return <div>You need to sign in to access your profile.</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <img src={user.picture} alt="Profile" />
      <p>Email: {user.email}</p>
      <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
    </div>
  );
};

export default Profile;
