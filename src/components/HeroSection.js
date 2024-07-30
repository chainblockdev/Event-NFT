import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HeroSection.css';
import logo from '../assets/icons/Logo.png';
import cartIcon from '../assets/icons/cart.jpg';
import profileIcon from '../assets/icons/profile.jpg';
import SearchBar from './SearchBar';

const HeroSection = ({ eventListRef }) => {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState('Concerto Jazz');
  const [location, setLocation] = useState('Sassi di Matera');
  const [date, setDate] = useState('Luglio');

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleProfileClick = () => {
    navigate('/signin');
  };

  const handleAcquistaClick = () => {
    if (eventListRef && eventListRef.current) {
      eventListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScopriClick = () => {
    if (eventListRef && eventListRef.current) {
      eventListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
          <button className="hero-button" aria-label="Discover More" onClick={handleScopriClick}>Scopri</button>
        </div>
      </div>
      <SearchBar
        eventType={eventType}
        location={location}
        date={date}
        setEventType={setEventType}
        setLocation={setLocation}
        setDate={setDate}
      />
    </section>
  );
};

export default HeroSection;
