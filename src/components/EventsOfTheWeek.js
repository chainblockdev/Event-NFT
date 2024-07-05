import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EventsOfTheWeek.css';
import LikeButton from './LikeButton'; // Import the LikeButton component

const events = [
  {
    id: 1, // Add an ID to each event
    image: './image1.jpg',
    title: 'Matera Film Festival',
    date: '14 Giu',
    description: "Scopri un'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale."
  },
  {
    id: 2, // Add an ID to each event
    image: './image2.jpg',
    title: 'Concerto sotto le stelle',
    date: '20 Lug',
    description: "Vivi una serata magica con un concerto all'aperto nelle suggestive cornici dei Sassi."
  },
  {
    id: 3, // Add an ID to each event
    image: './image3.jpg',
    title: "Mostra d'Arte Contemporanea", // Use double quotes or escape single quote
    date: '18 Ago',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.'
  },
];

const EventsOfTheWeek = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="events-week-wrapper">
      <div className="events-week-title">Eventi della Settimana</div>
      <div className="events-week-carousel">
        <button className="carousel-week-button left" onClick={handleLeftClick}>&lt;</button>
        <div className="events-week-list" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
          {events.map((event, index) => (
            <Link to={`/event/${event.id}`} key={index} className="event-week-card-link"> {/* Wrap event card with Link */}
              <div className="event-week-card">
                <img src={event.image} alt={event.title} className="event-week-image" />
                <div className="event-week-card-content">
                  <div className="event-week-card-details-wrapper">
                    <div className="event-week-card-date">
                      <span className="event-week-card-month">{event.date.split(' ')[1]}</span>
                      <span className="event-week-card-day">{event.date.split(' ')[0]}</span>
                    </div>
                    <div className="event-week-card-details">
                      <h3 className="event-week-card-title">{event.title}</h3>
                      <p className="event-week-card-description">{event.description}</p>
                    </div>
                  </div>
                </div>
                <div className="event-week-card-icons">
                  <LikeButton /> {/* Replace static heart icon with LikeButton component */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button className="carousel-week-button right" onClick={handleRightClick}>&gt;</button>
      </div>
      <div className="carousel-week-indicators">
        {events.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default EventsOfTheWeek;
