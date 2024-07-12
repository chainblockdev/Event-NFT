// src/components/CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import WalletSection from './WalletSection';
import logo from '../assets/icons/Logo.png';
import cartIcon from '../assets/icons/cart.jpg';
import profileIcon from '../assets/icons/profile.jpg';
import concertImage from '../assets/event/party.png';
import filterIcon from '../assets/icons/filter.svg';
import productImage from '../assets/event/Productimage.png';

const CartPage = () => {
  const events = [
    {
      id: 1,
      date: 'Aug 13',
      day: 'Sun',
      time: '10:00am',
      title: 'Elements Music and Arts Festival – Sunday',
      location: 'Pocono Raceway',
    },
    {
      id: 2,
      date: 'Aug 13',
      day: 'Sun',
      time: '10:00am',
      title: 'Elements Music and Arts Festival – Sunday',
      location: 'Pocono Raceway',
    },
    {
      id: 3,
      date: 'Aug 13',
      day: 'Sun',
      time: '10:00am',
      title: 'Elements Music and Arts Festival – Sunday',
      location: 'Pocono Raceway',
    },
    {
      id: 4,
      date: 'Aug 13',
      day: 'Sun',
      time: '10:00am',
      title: 'Elements Music and Arts Festival – Sunday',
      location: 'Pocono Raceway',
    },
  ];

  return (
    <div className="best-event-cart-page">
      <nav className="best-event-cart-page-nav-bar">
        <div className="best-event-cart-page-logo-container">
          <img src={logo} alt="EventiNFT Logo" className="best-event-cart-page-logo-img" />
        </div>
        <div className="best-event-cart-page-nav-links">
          <Link className="best-event-cart-page-nav-link" to="/upcomingevents">Eventi</Link>
          <a className="best-event-cart-page-nav-link" href="#acquista">Acquista</a>
          <a className="best-event-cart-page-nav-link" href="#ticket">Ticket</a>
          <a className="best-event-cart-page-nav-link" href="#contatti">Contatti</a>
          <button className="best-event-cart-page-wallet-button" aria-label="Connect Wallet">Connetti Wallet</button>
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" className="best-event-cart-page-nav-icon" />
          </Link>
          <Link to="/profile">
            <img src={profileIcon} alt="Profile" className="best-event-cart-page-nav-icon" />
          </Link>
        </div>
      </nav>
      <header className="best-event-cart-page-header">
        <h1>Il tuo Carrello</h1>
      </header>
      <main className="best-event-cart-page-main">
        <section className="best-event-cart-page-items">
          <div className="best-event-title-wrapper">
            <h2>Eventi nel carrello</h2>
          </div>
          <div className="best-event-section-divider"></div>
          <div className="best-event-cart-page-item">
            <img src={productImage} alt="Event" className="best-event-cart-page-item-image" />
            <div className="best-event-cart-page-item-details">
              <h3>Concerto sotto le stelle</h3>
              <p>Data: 18 agosto</p>
            </div>
            <div className="best-event-cart-page-item-price">
              <p>0.05 ETH</p>
            </div>
            <div className="best-event-cart-page-item-quantity">
              <button>-</button>
              <span>2</span>
              <button>+</button>
            </div>
            <button className="best-event-cart-page-item-remove">x</button>
          </div>
        </section>
        <aside className="best-event-cart-page-summary">
          <h2>Order Summary</h2>
          <div className="best-event-cart-page-summary-details">
            <p>Subtotal: <span>0.10 ETH</span></p>
            <p>Shipping: <span>Free</span></p>
            <hr />
            <p className="best-event-cart-page-total">Totale: <span>0.10 ETH</span></p>
          </div>
          <button className="best-event-cart-page-checkout-button">Acquista ora</button>
          <a href="/events" className="best-event-cart-page-back-to-events">Torna agli eventi</a>
        </aside>
      </main>
      <div className="best-event-wallet-section-wrapper">
        <div className="best-event-wallet-content">
          <WalletSection />
        </div>
      </div>
      <section className="best-event-best-events-section">
        <div className="best-event-event-list-header">
          <h2 className="best-event-event-list-title">I migliori Eventi vicino a te</h2>
          <div className="best-event-event-list-filter">
            <img src={filterIcon} alt="Filter" className="best-event-filter-icon" />
            <button className="best-event-filter-button">Filtri</button>
          </div>
        </div>
        <div className="best-event-event-list">
          {events.map((event, index) => (
            <div key={event.id} className={`best-event-event-item ${index === 3 ? 'best-event-faded-event' : ''}`}>
              <img src={concertImage} alt="Event" className="best-event-event-image" />
              <div className="best-event-event-details">
                <p className="best-event-event-date">{event.date}</p>
                <p className="best-event-event-time">{event.day} • {event.time}</p>
                <h3 className="best-event-event-title">{event.title}</h3>
                <p className="best-event-event-location">{event.location}</p>
              </div>
              <div className="best-event-event-actions">
                <button className="best-event-details-button">Vedi i dettagli</button>
                <button className="best-event-purchase-button">Acquista ora</button>
              </div>
            </div>
          ))}
        </div>
        <div className="best-event-show-more">
          <button className="best-event-show-more-button">Show More</button>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
