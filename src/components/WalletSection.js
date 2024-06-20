import React from 'react';
import './WalletSection.css';

const WalletSection = () => (
  <section className="wallet-section-wrapper">
    <div className="wallet-content">
      <div className="wallet-image">
        <img src="./walletsection.png" alt="Wallet Illustration" />
      </div>
      <div className="wallet-text">
        <h2>Non hai ancora un Wallet?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="wallet-button">Crea Wallet</button>
      </div>
    </div>
  </section>
);

export default WalletSection;
