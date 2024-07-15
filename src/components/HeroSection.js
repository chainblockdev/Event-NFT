// src/components/HeroSection.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HeroSection.css';
import logo from '../assets/icons/Logo.png';
import cartIcon from '../assets/icons/cart.jpg';
import profileIcon from '../assets/icons/profile.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleProfileClick = () => {
    navigate('/signin');
  };

  const handleAcquistaClick = () => {
    navigate('/cart');
  };

  return (
    <section className="hero-wrapper">
      <div className="gradient-overlay" />
      <nav className="nav-bar">
        <div className="logo-container">
          <img src={logo} alt="EventiNFT Logo" className="logo-img" />
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/upcomingevents">Eventi</Link>
          <a className="nav-link" href="#acquista">Acquista</a>
          <a className="nav-link" href="#ticket">Ticket</a>
          <a className="nav-link" href="#contatti">Contatti</a>
          <button className="wallet-button" aria-label="Connect Wallet">Connetti Wallet</button>
          <img src={cartIcon} alt="Cart" className="nav-icon" onClick={handleCartClick} />
          <img src={profileIcon} alt="Profile" className="nav-icon" onClick={handleProfileClick} />
        </div>
      </nav>
      <div className="hero-content">
        <h1 className="hero-title">
          Benvenuti a Matera
          <br />
          <span className="hero-title-sub">NFT Tickets</span>
        </h1>
        <p className="hero-subtitle">
          Scopri un nuovo modo di vivere gli eventi nella storica città di Matera. Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro. Sperimenta la fusione tra tradizione e innovazione in una delle città più affascinanti del mondo.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary" aria-label="Purchase Tickets" onClick={handleAcquistaClick}>Acquista</button>
          <button className="hero-button" aria-label="Discover More">Scopri</button>
        </div>
      </div>
      <div className="search-bar">
        <div className="search-select-container">
          <label htmlFor="event-type" className="search-select-label">Tipo di Evento</label>
          <select id="event-type" className="search-select">
            <option>Concerto Jazz</option>
            {/* Add other event types here */}
          </select>
        </div>
        <div className="search-select-container">
          <label htmlFor="location" className="search-select-label">Luogo</label>
          <select id="location" className="search-select">
            <option>Sassi di Matera</option>
            {/* Add other locations here */}
          </select>
        </div>
        <div className="search-select-container">
          <label htmlFor="date" className="search-select-label">Data</label>
          <select id="date" className="search-select">
            <option>Luglio</option>
            {/* Add other dates here */}
          </select>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
