import React from 'react';
import './EventsOfTheWeek.css';
import LikeButton from './LikeButton'; // Import the LikeButton component

const events = [
  {
    image: './image1.jpg',
    title: 'Matera Film Festival',
    date: '14 Giu',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.'
  },
  {
    image: './image2.jpg',
    title: 'Concerto sotto le stelle',
    date: '20 Lug',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.'
  },
  {
    image: './image3.jpg',
    title: 'Mostra d\'Arte Contemporanea',
    date: '18 Ago',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.'
  },
];

const EventsOfTheWeek = () => (
  <section className="events-wrapper">
    <div className="events-title">Eventi della Settimana</div>
    <div className="events-carousel">
      <button className="carousel-button left">&lt;</button>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} />
            <div className="event-card-content">
              <div className="event-card-date">
                <span className="event-card-month">{event.date.split(' ')[1]}</span>
                <span className="event-card-day">{event.date.split(' ')[0]}</span>
              </div>
              <div className="event-card-details">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-description">{event.description}</p>
              </div>
            </div>
            <div className="event-card-icons">
              <LikeButton /> {/* Replace static heart icon with LikeButton component */}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button right">&gt;</button>
    </div>
    <div className="carousel-indicators">
      {events.map((_, index) => (
        <span key={index} className="indicator"></span>
      ))}
    </div>
  </section>
);

export default EventsOfTheWeek;
