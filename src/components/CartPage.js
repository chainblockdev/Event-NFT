// src/components/CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import WalletSection from './WalletSection'; // Import WalletSection component
import logo from '../assets/icons/Logo.png'; // Adjust the import path as needed
import cartIcon from '../assets/icons/cart.jpg'; // Correct import path for cart icon
import profileIcon from '../assets/icons/profile.jpg'; // Correct import path for profile icon
import concertImage from '../assets/event/party.png'; // Corrected image path
import filterIcon from '../assets/icons/filter.svg'; // Added filter icon
import productImage from '../assets/event/Productimage.png'; // Corrected image path for product image

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
    <div className="cart-page">
      <nav className="cart-page-nav-bar">
        <div className="cart-page-logo-container">
          <img src={logo} alt="EventiNFT Logo" className="cart-page-logo-img" />
        </div>
        <div className="cart-page-nav-links">
          <Link className="cart-page-nav-link" to="/upcomingevents">Eventi</Link>
          <a className="cart-page-nav-link" href="#acquista">Acquista</a>
          <a className="cart-page-nav-link" href="#ticket">Ticket</a>
          <a className="cart-page-nav-link" href="#contatti">Contatti</a>
          <button className="cart-page-wallet-button" aria-label="Connect Wallet">Connetti Wallet</button>
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" className="cart-page-nav-icon" />
          </Link>
          <Link to="/profile">
            <img src={profileIcon} alt="Profile" className="cart-page-nav-icon" />
          </Link>
        </div>
      </nav>
      <header className="cart-page-header">
        <h1>Il tuo Carrello</h1>
      </header>
      <main className="cart-page-main">
      <section className="cart-page-items">
  <h2>Eventi nel carrello</h2>
  <div className="section-divider"></div> {/* Divider line section */}
  <div className="cart-page-item">
    <img src={productImage} alt="Event" className="cart-page-item-image" />
    <div className="cart-page-item-details">
      <h3>Concerto sotto le stelle</h3>
      <p>Data: 18 agosto</p>
    </div>
    <div className="cart-page-item-price">
      <p>0.05 ETH</p>
    </div>
    <div className="cart-page-item-quantity">
      <button>-</button>
      <span>2</span>
      <button>+</button>
    </div>
    <button className="cart-page-item-remove">x</button>
  </div>
</section>

        <aside className="cart-page-summary">
          <h2>Order Summary</h2>
          <div className="cart-page-summary-details">
            <p>Subtotal: <span>0.10 ETH</span></p>
            <p>Shipping: <span>Free</span></p>
            <hr />
            <p className="cart-page-total">Totale: <span>0.10 ETH</span></p>
          </div>
          <button className="cart-page-checkout-button">Acquista ora</button>
          <a href="/events" className="cart-page-back-to-events">Torna agli eventi</a>
        </aside>
      </main>
      <div className="wallet-section-wrapper">
        <div className="wallet-content">
          <WalletSection /> {/* Include the WalletSection component */}
        </div>
      </div>
      <section className="event-list-section">
        <div className="event-list-header">
          <h2 className="event-list-title">I migliori Eventi vicino a te</h2>
          <div className="event-list-filter">
            <img src={filterIcon} alt="Filter" className="filter-icon" />
            <button className="filter-button">Filtri</button>
          </div>
        </div>
        <div className="event-list">
          {events.map((event, index) => (
            <div key={event.id} className={`event-item ${index === 3 ? 'faded-event' : ''}`}>
              <img src={concertImage} alt="Event" className="event-image" />
              <div className="event-details">
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.day} • {event.time}</p>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">{event.location}</p>
              </div>
              <div className="event-actions">
                <button className="details-button">Vedi i dettagli</button>
                <button className="purchase-button">Acquista ora</button>
              </div>
            </div>
          ))}
        </div>
        <div className="show-more">
          <button className="show-more-button">Show More</button>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
