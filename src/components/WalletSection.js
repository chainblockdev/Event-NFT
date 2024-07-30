import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './WalletSection.css';
import walletImage from '../assets/wallet.png';

const WalletSection = () => {
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle the click event
  const handleCreateWalletClick = () => {
    navigate('/signin'); // Navigate to the sign-in page
  };

  return (
    <section className="wallet-section-wrapper">
      <div className="wallet-content">
        <div className="wallet-image">
          <img src={walletImage} alt="Wallet Illustration" />
        </div>
        <div className="wallet-text">
          <h2>Non hai ancora un Wallet?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="wallet-button" onClick={handleCreateWalletClick}>Crea Wallet</button> {/* Add onClick handler */}
        </div>
      </div>
    </section>
  );
};

export default WalletSection;
