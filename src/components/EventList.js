// EventList.js
import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import './EventList.css';

const events = [
  {
    image: './image1.jpg',
    title: 'Matera Film Festival',
    date: 'June 14',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    width: '358px',
    height: '280px'
  },
  {
    image: './image2.jpg',
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    width: '358px',
    height: '280px'
  },
  {
    image: './image3.jpg',
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    width: '358px',
    height: '280px'
  },
  {
    image: './image1.jpg',
    title: 'Matera Film Festival',
    date: 'June 14',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    width: '358px',
    height: '280px'
  },
  {
    image: './image2.jpg',
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    width: '358px',
    height: '280px'
  },
  {
    image: './image3.jpg',
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    width: '358px',
    height: '280px'
  },
];

const EventList = () => (
  <div className="event-section">
    <div className="section-header">
      <h2 className="section-title">Prossimi Eventi</h2>
      <div className="filter-buttons">
        <button className="filter-button">Data</button>
        <button className="filter-button">Tipologia</button>
        <button className="filter-button">Categoria</button>
      </div>
    </div>
    <div className="event-list">
      {events.map((event, index) => (
        <Link to={`/event/${index}`} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
          <EventCard image={event.image} title={event.title} date={event.date} description={event.description} width={event.width} height={event.height} />
        </Link>
      ))}
    </div>
    <button className="load-more-button">Scopri tutti</button>
  </div>
);

export default EventList;
