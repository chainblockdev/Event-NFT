import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from './FooterSection'; // Import the FooterSection component
import './UpcomingEvents.css';
import logo from './Logo.png'; // Adjust the import path as needed
import backgroundImage from '../assets/background/unsplash.png'; // Import your background image

import image1 from '../assets/event/image1.jpg';
import image2 from '../assets/event/image2.jpg';
import image3 from '../assets/event/image3.jpg';
import concertImage from '../assets/event/party.png'; // Corrected image path

import iconFavorites from '../assets/icons/Add to Favorites.png'; // Corrected Add to Favorites icon path
import iconWallet from '../assets/icons/Wallet.png';
import iconNFT from '../assets/icons/NFT.png';
import iconSearch from '../assets/icons/search.png'; // Search button path
import iconHeart from '../assets/icons/heart.png'; // Heart button path for like

import walletImage from '../assets/wallet.png'; // Corrected path for the wallet image
import filterIcon from '../assets/icons/filter.svg'; // Added

const UpcomingEvents = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const eventsOfTheWeek = [
    {
      id: 0,
      title: 'Matera Film Festival',
      date: 'June 14',
      image: image1,
      description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    },
    {
      id: 1,
      title: 'Concerto sotto le stelle',
      date: 'June 20',
      image: image2,
      description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    },
    {
      id: 2,
      title: 'Mostra d\'Arte Contemporanea',
      date: 'June 18',
      image: image3,
      description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    },
  ];

  const upcomingEvents = [
    {
      id: 0,
      title: 'Matera Film Festival',
      date: 'June 14',
      image: image1,
      description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    },
    {
      id: 1,
      title: 'Concerto sotto le stelle',
      date: 'June 20',
      image: image2,
      description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    },
    {
      id: 2,
      title: 'Mostra d\'Arte Contemporanea',
      date: 'June 18',
      image: image3,
      description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    },
    // Add more events as needed
  ];

  const handleSearchClick = (eventId) => {
    navigate(`/search/${eventId}`);
  };

  const handleHeartClick = (eventId) => {
    navigate(`/favorites/${eventId}`);
  };

  return (
    <div>
      <div className="UpcomingEvents-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <nav className="nav-barUpcomingEvents">
          <div className="logo-containerUpcomingEvents">
            <img src={logo} alt="EventiNFT Logo" className="logo-imgUpcomingEvents" />
          </div>
          <div className="nav-linksUpcomingEvents">
            <a className="nav-linkUpcomingEvents" href="#Tipo di Evento">Tipo di Evento</a>
            <a className="nav-linkUpcomingEvents" href="#Luogo">Luogo</a>
            <a className="nav-linkUpcomingEvents" href="#Data">Data</a>
            <button className="wallet-buttonUpcomingEvents" aria-label="Connect Wallet">Connetti Wallet</button>
          </div>
        </nav>
      </div>

      <div className="search-barUpcomingEvents">
        <div className="search-select-containerUpcomingEvents">
          <label htmlFor="event-type" className="search-select-labelUpcomingEvents">Tipo di Evento</label>
          <select id="event-type" className="search-selectUpcomingEvents">
            <option>Concerto Jazz</option>
            {/* Add other event types here */}
          </select>
        </div>
        <div className="search-select-containerUpcomingEvents">
          <label htmlFor="location" className="search-select-labelUpcomingEvents">Luogo</label>
          <select id="location" className="search-selectUpcomingEvents">
            <option>Sassi di Matera</option>
            {/* Add other locations here */}
          </select>
        </div>
        <div className="search-select-containerUpcomingEvents">
          <label htmlFor="date" className="search-select-labelUpcomingEvents">Data</label>
          <select id="date" className="search-selectUpcomingEvents">
            <option>Luglio</option>
            {/* Add other dates here */}
          </select>
        </div>
      </div>

      <div className="events-containerUpcomingEvents">
        <h2 className="events-titleUpcomingEvents">Gli Eventi della Settimana</h2>
        <div className="event-cardsUpcomingEvents">
          {eventsOfTheWeek.map((event) => (
            <Link key={event.id} to={`/event/${event.id}`} className="event-cardUpcomingEvents">
              <img src={event.image} alt={event.title} />
              <div className="event-card-contentUpcomingEvents">
                <div className="event-card-dateUpcomingEvents">
                  <span className="month">GIU</span>
                  <span className="day">14</span>
                </div>
                <div className="event-card-textUpcomingEvents">
                  <div className="event-card-titleUpcomingEvents">{event.title}</div>
                  <div className="event-card-descriptionUpcomingEvents">{event.description}</div>
                </div>
                <div className="event-card-buttonsUpcomingEvents">
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="dot-containerUpcomingEvents">
          <span className={`dotUpcomingEvents ${activeIndex === 0 ? 'active' : ''}`} onClick={() => setActiveIndex(0)}></span>
          <span className={`dotUpcomingEvents ${activeIndex === 1 ? 'active' : ''}`} onClick={() => setActiveIndex(1)}></span>
          <span className={`dotUpcomingEvents ${activeIndex === 2 ? 'active' : ''}`} onClick={() => setActiveIndex(2)}></span>
        </div>
      </div>

      {/* New Concerts Section */}
      <div className="concerts-containerUpcomingEvents">
        <div className="concerts-headerUpcomingEvents">
          <h2 className="concerts-titleUpcomingEvents">I migliori Concerti vicino a te</h2>
          <div className="filter-containerUpcomingEvents">
            <img src={filterIcon} alt="Filter Icon" className="filter-iconUpcomingEvents" />
            <span className="filter-textUpcomingEvents">Filtri</span>
          </div>
        </div>
        <div className="lineUpcomingEvents"></div>
        <div className="concert-cardsUpcomingEvents">
          {[1, 2, 3, 4].map((_, index) => (
            <div className={`concert-cardUpcomingEvents ${index === 3 ? 'faded' : ''}`} key={index}>
              <img src={concertImage} alt="Concert" />
              <div className="concert-card-contentUpcomingEvents">
                <div className="concert-card-dateUpcomingEvents">Aug 13</div>
                <div className="concert-card-timeUpcomingEvents">Sun • 10:00am</div>
                <div className="concert-card-titleUpcomingEvents">Elements Music and Arts Festival - Sunday</div>
                <div className="concert-card-locationUpcomingEvents">Pocono Raceway</div>
                <div className="concert-card-buttonsUpcomingEvents">
                  <button className="details-buttonUpcomingEvents">Vedi i dettagli</button>
                  <button className="buy-buttonUpcomingEvents">Acquista ora</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="show-moreUpcomingEvents">Show More</div>
      </div>

      {/* New Purchase Section */}
      <div className="purchase-containerUpcomingEvents">
        <h2 className="purchase-titleUpcomingEvents">Acquista il tuo biglietto in 3 click</h2>
        <div className="purchase-stepsUpcomingEvents">
          <div className="purchase-stepUpcomingEvents">
            <img src={iconFavorites} alt="Choose Event" className="purchase-iconUpcomingEvents" />
            <h3>Scegli l'evento a cui partecipare</h3>
            <p className="purchase-descriptionUpcomingEvents">Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.</p>
          </div>
          <div className="purchase-stepUpcomingEvents">
            <img src={iconWallet} alt="Connect Wallet" className="purchase-iconUpcomingEvents" />
            <h3>Crea o connetti il tuo wallet</h3>
            <p className="purchase-descriptionUpcomingEvents">Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.</p>
          </div>
          <div className="purchase-stepUpcomingEvents">
            <img src={iconNFT} alt="Get NFT Ticket" className="purchase-iconUpcomingEvents" />
            <h3>Ottieni il tuo ticket NFT</h3>
            <p className="purchase-descriptionUpcomingEvents">Grazie alla tecnologia NFT (Non-Fungible Token), puoi acquistare biglietti unici e collezionabili per una vasta gamma di eventi culturali, concerti, spettacoli e molto altro.</p>
          </div>
        </div>
        <div className="purchase-buttonsUpcomingEvents">
          <button className="purchase-buttonUpcomingEvents">Acquista</button>
          <button className="wallet-buttonUpcomingEvents">Connetti wallet</button>
        </div>
      </div>

      {/* New Wallet Prompt Section */}
      <div className="wallet-prompt-containerUpcomingEvents">
        <div className="wallet-prompt-contentUpcomingEvents">
          <img src={walletImage} alt="Wallet" className="wallet-prompt-imageUpcomingEvents" />
          <div className="wallet-prompt-textUpcomingEvents">
            <h3>Non hai ancora un Wallet?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="wallet-prompt-buttonUpcomingEvents">Crea Wallet</button>
          </div>
        </div>
      </div>

      {/* New Upcoming Events Section */}
      <div className="upcoming-events-containerUpcomingEvents">
  <div className="upcoming-events-headerUpcomingEvents">
    <h2 className="upcoming-events-titleUpcomingEvents">Prossimi Eventi</h2>
    <div className="upcoming-events-filterUpcomingEvents">
      <button className="filter-buttonUpcomingEvents">Data</button>
      <button className="filter-buttonUpcomingEvents">Tipologia</button>
      <button className="filter-buttonUpcomingEvents">Categoria</button>
    </div>
  </div>
  <div className="upcoming-events-line"></div>
  <div className="upcoming-event-cardsUpcomingEvents">
    {upcomingEvents.map((event) => (
      <Link key={event.id} to={`/event/${event.id}`} className="upcoming-event-cardUpcomingEvents">
        <img src={event.image} alt={event.title} />
        <div className="upcoming-event-card-contentUpcomingEvents">
          <div className="upcoming-event-card-dateUpcomingEvents">
            <span className="month">GIU</span>
            <span className="day">14</span>
          </div>
          <div className="upcoming-event-card-titleUpcomingEvents">{event.title}</div>
          <div className="upcoming-event-card-descriptionUpcomingEvents">{event.description}</div>
          <div 
            className="event-card-buttonsUpcomingEvents"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="event-card-buttonUpcomingEvents favorite" 
              onClick={(e) => {
                e.preventDefault();
                handleHeartClick(event.id);
              }}
            >
              <img src={iconHeart} alt="Add to Favorites" />
            </button>
            <button 
              className="event-card-buttonUpcomingEvents search" 
              onClick={(e) => {
                e.preventDefault();
                handleSearchClick(event.id);
              }}
            >
              <img src={iconSearch} alt="Search" />
            </button>
          </div>
        </div>
      </Link>
    ))}
  </div>
  <button className="upcoming-events-show-moreUpcomingEvents">Scoprili tutti</button>
</div>


      {/* New Footer Section */}
       {/* Use the imported FooterSection component */}
       <FooterSection />

</div>
);
};


export default UpcomingEvents;
