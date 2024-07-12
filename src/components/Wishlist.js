import React from 'react';
import './Wishlist.css';
import logo from '../assets/icons/Logo.png';
import cartIcon from '../assets/icons/cart.jpg';
import profileIcon from '../assets/icons/profile.jpg';
import searchIcon from '../assets/icons/search.png';
import filterIcon from '../assets/icons/filter.svg';
import image1 from '../assets/event/image1.jpg';
import image2 from '../assets/event/image2.jpg';
import image3 from '../assets/event/image3.jpg';
import concertImage from '../assets/event/party.png';
import WalletSection from './WalletSection'; // Importing WalletSection component

const events = [
  {
    id: 1,
    date: { month: 'Giu', day: 14 },
    title: 'Matera Film Festival',
    description: "Scopri un'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.",
    image: image1,
  },
  {
    id: 2,
    date: { month: 'Lug', day: 20 },
    title: 'Concerto sotto le stelle',
    description: "Vivi una serata magica con un concerto all'aperto nelle suggestive cornici dei Sassi.",
    image: image2,
  },
  {
    id: 3,
    date: { month: 'Ago', day: 18 },
    title: "Mostra d'Arte Contemporanea",
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    image: image3,
  },
  {
    id: 4,
    date: { month: 'Giu', day: 14 },
    title: 'Matera Film Festival',
    description: "Scopri un'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.",
    image: image1,
  },
  {
    id: 5,
    date: { month: 'Lug', day: 20 },
    title: 'Concerto sotto le stelle',
    description: "Vivi una serata magica con un concerto all'aperto nelle suggestive cornici dei Sassi.",
    image: image2,
  },
  {
    id: 6,
    date: { month: 'Ago', day: 18 },
    title: "Mostra d'Arte Contemporanea",
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    image: image3,
  },
];

const nearbyEvents = [
  {
    id: 1,
    date: 'Aug 13',
    time: 'Sun · 10:00am',
    title: 'Elements Music and Arts Festival - Sunday',
    location: 'Pocono Raceway',
    image: concertImage,
  },
  {
    id: 2,
    date: 'Aug 13',
    time: 'Sun · 10:00am',
    title: 'Elements Music and Arts Festival - Sunday',
    location: 'Pocono Raceway',
    image: concertImage,
  },
  {
    id: 3,
    date: 'Aug 13',
    time: 'Sun · 10:00am',
    title: 'Elements Music and Arts Festival - Sunday',
    location: 'Pocono Raceway',
    image: concertImage,
  },
  {
    id: 4,
    date: 'Aug 13',
    time: 'Sun · 10:00am',
    title: 'Elements Music and Arts Festival - Sunday',
    location: 'Pocono Raceway',
    image: concertImage,
  },
];

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <header className="wishlist-hero">
        <nav className="wishlist-navbar">
          <img src={logo} alt="EventiNFT Logo" className="wishlist-logo" />
          <ul className="wishlist-nav-links">
            <li>Eventi</li>
            <li>Acquista</li>
            <li>Ticket</li>
            <li>Contatti</li>
          </ul>
          <div className="wishlist-icons">
            <button className="connect-wallet-btn">Connetti Wallet</button>
            <img src={cartIcon} alt="Cart Icon" className="wishlist-icon" />
            <img src={profileIcon} alt="Profile Icon" className="wishlist-icon" />
          </div>
        </nav>
      </header>

      <main>
        <section className="wishlist-favorites">
          <h2>I tuoi Preferiti</h2>
          <hr />
          <div className="wishlist-event-cards">
            {events.map(event => (
              <div key={event.id} className="wishlist-event-card">
                <img src={event.image} alt={event.title} />
                <div className="wishlist-event-info">
                  <div className="wishlist-event-date">
                    <p className="month">{event.date.month}</p>
                    <p className="day">{event.date.day}</p>
                  </div>
                  <div className="wishlist-event-details">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                  <button className="wishlist-search-btn">
                    <img src={searchIcon} alt="Search" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="view-all-btn">Vedi tutto</button>
        </section>

        <section className="wishlist-filter unique-filter">
          <div className="filter-item">
            <label htmlFor="eventType">Tipo di Evento</label>
            <input id="eventType" name="eventType" type="text" value="Concerto Jazz" readOnly />
          </div>
          <div className="filter-item">
            <label htmlFor="location">Luogo</label>
            <select id="location" name="location">
              <option value="Sassi di Matera">Sassi di Matera</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="date">Data</label>
            <select id="date" name="date">
              <option value="Luglio">Luglio</option>
            </select>
          </div>
        </section>

        <WalletSection />

        <section className="nearbyEvents-container">
          <div className="nearbyEvents-header">
            <h2>I migliori Eventi vicino a te</h2>
            <div className="nearbyEvents-filter-icon">
              <img src={filterIcon} alt="Filter Icon" />
              <span>Filtri</span>
            </div>
          </div>
          <hr className="nearbyEvents-divider" />
          <div className="nearbyEvents-list">
            {nearbyEvents.map(event => (
              <div key={event.id} className="nearbyEvents-item">
                <img src={event.image} alt="Event" />
                <div className="nearbyEvents-details">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                </div>
                <div className="nearbyEvents-buttons">
                  <button className="nearbyEvents-details-btn">Vedi i dettagli</button>
                  <button className="nearbyEvents-buy-now-btn">Acquista ora</button>
                </div>
              </div>
            ))}
          </div>
          <button className="nearbyEvents-show-more-btn">Show More</button>
        </section>
      </main>
    </div>
  );
}

export default Wishlist;
