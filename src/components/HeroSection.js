import React, { useState } from 'react';
import './HeroSection.css';
import Navbar from './Navbar'; // Import the Navbar component
import SearchBar from './SearchBar';

const HeroSection = ({ eventListRef, footerRef }) => {
  const [eventType, setEventType] = useState('Concerto Jazz');
  const [location, setLocation] = useState('Sassi di Matera');
  const [date, setDate] = useState('Luglio');

  // Handler to scroll to the Event List section
  const handleScrollToEvents = () => {
    if (eventListRef && eventListRef.current) {
      eventListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler to scroll to the Footer section
  const handleScrollToFooter = () => {
    if (footerRef && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-wrapper">
      <div className="gradient-overlay" />
      <Navbar handleScrollToEvents={handleScrollToEvents} handleScrollToFooter={handleScrollToFooter} /> {/* Include the Navbar component */}
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
          <button className="hero-button primary" aria-label="Purchase Tickets" onClick={handleScrollToEvents}>Acquista</button>
          <button className="hero-button" aria-label="Discover More" onClick={handleScrollToEvents}>Scopri</button>
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
