import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css';
import logo from '../assets/icons/Logo.png';
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
  const navigate = useNavigate();

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
            <div onClick={() => navigate('/cart')} className="wishlist-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M1.60352 1.61035H4.98672L6.19204 13.5873C6.24214 13.9174 6.40995 14.2184 6.66454 14.4347C6.91913 14.6509 7.24335 14.768 7.57747 14.7642H16.3056C16.6078 14.78 16.9067 14.6965 17.1569 14.5264C17.4071 14.3564 17.5947 14.1092 17.6911 13.8227L19.5337 8.2842C19.6025 8.07599 19.6208 7.85441 19.5871 7.63774C19.5533 7.42108 19.4686 7.21552 19.3397 7.03804C19.2056 6.84929 19.0263 6.69716 18.8181 6.59557C18.61 6.49398 18.3797 6.44616 18.1483 6.45651H5.47162" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.0701 19.6104C15.8864 19.6104 15.7102 19.5375 15.5803 19.4077C15.4504 19.2778 15.3774 19.1017 15.3774 18.9181C15.3774 18.7345 15.4504 18.5584 15.5803 18.4286C15.7102 18.2988 15.8864 18.2258 16.0701 18.2258C16.2538 18.2258 16.43 18.2988 16.5599 18.4286C16.6899 18.5584 16.7628 18.7345 16.7628 18.9181C16.7628 19.1017 16.6899 19.2778 16.5599 19.4077C16.43 19.5375 16.2538 19.6104 16.0701 19.6104Z" fill="white" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.06484 19.6104C6.88112 19.6104 6.70493 19.5375 6.57502 19.4077C6.44511 19.2778 6.37213 19.1017 6.37213 18.9181C6.37213 18.7345 6.44511 18.5584 6.57502 18.4286C6.70493 18.2988 6.88112 18.2258 7.06484 18.2258C7.24856 18.2258 7.42476 18.2988 7.55467 18.4286C7.68457 18.5584 7.75756 18.7345 7.75756 18.9181C7.75756 19.1017 7.68457 19.2778 7.55467 19.4077C7.42476 19.5375 7.24856 19.6104 7.06484 19.6104Z" fill="white" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.1654 9.22583V11.9951" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.3217 9.22583V11.9951" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div onClick={() => navigate('/signin')} className="wishlist-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.09456 5.30882C7.85943 4.54395 8.89682 4.11425 9.97851 4.11425C11.0602 4.11425 12.0976 4.54395 12.8625 5.30882C13.6273 6.0737 14.057 7.11108 14.057 8.19278C14.057 9.27447 13.6273 10.3119 12.8625 11.0767C12.0976 11.8416 11.0602 12.2713 9.97851 12.2713C8.89682 12.2713 7.85943 11.8416 7.09456 11.0767C6.32969 10.3119 5.89999 9.27447 5.89999 8.19278C5.89999 7.11108 6.32969 6.0737 7.09456 5.30882ZM9.97851 5.49447C9.26288 5.49447 8.57655 5.77875 8.07052 6.28478C7.56449 6.79081 7.2802 7.47714 7.2802 8.19278C7.2802 8.90841 7.56449 9.59474 8.07052 10.1008C8.57655 10.6068 9.26288 10.8911 9.97851 10.8911C10.6942 10.8911 11.3805 10.6068 11.8865 10.1008C12.3925 9.59474 12.6768 8.90841 12.6768 8.19278C12.6768 7.47714 12.3925 6.79081 11.8865 6.28478C11.3805 5.77875 10.6942 5.49447 9.97851 5.49447Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.97852 14.3062C8.93439 14.3062 7.90782 14.5748 6.99749 15.0862C6.08716 15.5975 5.32368 16.3345 4.78045 17.2262C4.58215 17.5517 4.15754 17.6548 3.83205 17.4565C3.50656 17.2582 3.40345 16.8336 3.60174 16.5081C4.26816 15.4142 5.20476 14.5101 6.32151 13.8828C7.43827 13.2555 8.69762 12.926 9.97852 12.926C11.2594 12.926 12.5188 13.2555 13.6355 13.8828C14.7523 14.5101 15.6889 15.4142 16.3553 16.5081C16.5536 16.8336 16.4505 17.2582 16.125 17.4565C15.7995 17.6548 15.3749 17.5517 15.1766 17.2262C14.6334 16.3345 13.8699 15.5975 12.9595 15.0862C12.0492 14.5748 11.0226 14.3062 9.97852 14.3062Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.261 3.50832C5.0426 1.72672 7.45896 0.72583 9.97852 0.72583C12.4981 0.72583 14.9144 1.72672 16.696 3.50832C18.4776 5.28991 19.4785 7.70627 19.4785 10.2258C19.4785 12.7454 18.4776 15.1617 16.696 16.9433C14.9144 18.7249 12.4981 19.7258 9.97852 19.7258C7.45896 19.7258 5.0426 18.7249 3.261 16.9433C1.47941 15.1617 0.478516 12.7454 0.478516 10.2258C0.478516 7.70627 1.47941 5.28991 3.261 3.50832ZM9.97852 2.10605C7.82502 2.10605 5.75972 2.96152 4.23696 4.48428C2.71421 6.00703 1.85873 8.07233 1.85873 10.2258C1.85873 12.3793 2.71421 14.4446 4.23696 15.9674C5.75972 17.4901 7.82502 18.3456 9.97852 18.3456C12.132 18.3456 14.1973 17.4901 15.7201 15.9674C17.2428 14.4446 18.0983 12.3793 18.0983 10.2258C18.0983 8.07233 17.2428 6.00703 15.7201 4.48428C14.1973 2.96152 12.132 2.10605 9.97852 2.10605Z" fill="white" />
              </svg>
            </div>
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
};

export default Wishlist;
