import React from 'react';
import { useAuth0 } from '../components/Auth0Provider'; // Adjust path if necessary
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return <div>You need to sign in to access your profile.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Profile</h1>
        <img src={user.picture} alt="Profile" className="profile-image" />
        <p className="profile-name">Name: {user.name}</p>
        <p className="profile-email">Email: {user.email}</p>
        <button onClick={() => logout({ returnTo: window.location.origin })} className="profile-logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
