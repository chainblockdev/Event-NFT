// src/components/TicketPurchase.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './TicketPurchase.css';
import icon1 from '../assets/icons/Add to Favorites.png'; // Update the path according to your project structure
import icon2 from '../assets/icons/Wallet.png';
import icon3 from '../assets/icons/NFT.png';

const TicketPurchase = () => {
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle the click event
  const handleCreateWalletClick = () => {
    navigate('/signin'); // Navigate to the sign-in page
  };

  return (
    <section className="purchase-section">
      <h2 className="purchase-title">Acquista il tuo biglietto in 3 click</h2>
      <div className="purchase-cards">
        <div className="purchase-card">
          <img src={icon1} alt="Icon 1" className="icon" />
          <h3>Scegli l’evento a cui partecipare</h3>
          <p>
            Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.
          </p>
        </div>
        <div className="purchase-card">
          <img src={icon2} alt="Icon 2" className="icon" />
          <h3>Crea o connetti il tuo wallet</h3>
          <p>
            Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.
          </p>
        </div>
        <div className="purchase-card">
          <img src={icon3} alt="Icon 3" className="icon" />
          <h3>Ottieni il tuo ticket NFT</h3>
          <p>
            Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.
          </p>
        </div>
      </div>
      <div className="purchase-buttons">
        <button className="purchase-button primary">Connetti wallet</button>
        <button className="purchase-button" onClick={handleCreateWalletClick}>Crea Wallet</button> {/* Add onClick handler */}
      </div>
    </section>
  );
};

export default TicketPurchase;
