// EventList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from './EventCard';
import './EventList.css';

const events = [
  {
    image: './image1.jpg',
    title: 'Matera Film Festival',
    date: 'June 14',
    location: 'Sassi di Matera',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    width: '358px',
    height: '280px',
    price: '0.0001 ETH'
  },
  {
    image: './image2.jpg',
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    location: 'Sassi di Matera',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    width: '358px',
    height: '280px',
    price: '0.0001 ETH'
  },
  {
    image: './image3.jpg',
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    location: 'Sassi di Matera',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    width: '358px',
    height: '280px',
    price: '0.0003 ETH'
  },
  {
    image: './image1.jpg',
    title: 'Matera Film Festival',
    date: 'June 14',
    location: 'Sassi di Matera',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    width: '358px',
    height: '280px',
    price: '0.0001 ETH'
  },
  {
    image: './image2.jpg',
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    location: 'Sassi di Matera',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    width: '358px',
    height: '280px',
    price: '0.0001 ETH'
  },
  {
    image: './image3.jpg',
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    location: 'Sassi di Matera',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    width: '358px',
    height: '280px',
    price: '0.0003 ETH'
  },
  {
    image: './image1.jpg',
    title: 'Matera Film Festival',
    date: 'June 14',
    location: 'Sassi di Matera',
    description: 'Scopri un\'esperienza unica con esibizioni artistiche, workshop e incontri con autori di fama internazionale.',
    width: '358px',
    height: '280px',
    price: '0.0001 ETH'
  },
  {
    image: './image2.jpg',
    title: 'Concerto sotto le stelle',
    date: 'June 20',
    location: 'Sassi di Matera',
    description: 'Vivi una serata magica con un concerto all\'aperto nelle suggestive cornici dei Sassi.',
    width: '358px',
    height: '280px',
    price: '0.0001 ETH'
  },
  {
    image: './image3.jpg',
    title: 'Mostra d\'Arte Contemporanea',
    date: 'June 18',
    location: 'Sassi di Matera',
    description: 'Esplora le opere di artisti emergenti e affermati in una mostra innovativa.',
    width: '358px',
    height: '280px',
    price: '0.0003 ETH'
  }
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

const categories = ['Concert', 'Sports', 'Theater', 'Family'];

const EventList = ({ eventListRef }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showHiddenEvents, setShowHiddenEvents] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setShowDropdown(true);
    if (filter === 'Data') {
      setFilterOptions(months);
    } else if (filter === 'Categoria') {
      setFilterOptions(categories);
    } else {
      setFilterOptions([]);
    }
  };

  const handleToggleHiddenEvents = () => {
    setShowHiddenEvents(!showHiddenEvents);
  };

  const handleEventClick = (event) => {
    navigate(`/event/${events.indexOf(event)}`, { state: { event } });
  };

  const handleHeartClick = (e) => {
    e.stopPropagation(); // Stop event propagation
    navigate('/profile'); // Navigate to the Wishlist page
  };

  const handleOptionSelect = (option) => {
    console.log(`Selected ${option}`);
    setShowDropdown(false);
    // Implement filter logic based on selected option here
  };

  return (
    <div ref={eventListRef} className="event-section">
      <div className="section-header">
        <h2 className="section-title">Prossimi Eventi</h2>
        <div className="filter-buttons">
          <FilterButton
            filter="Data"
            selectedFilter={selectedFilter}
            handleFilterClick={handleFilterClick}
            showDropdown={showDropdown && selectedFilter === 'Data'}
            filterOptions={filterOptions}
            handleOptionSelect={handleOptionSelect}
          />
          <FilterButton
            filter="Tipologia"
            selectedFilter={selectedFilter}
            handleFilterClick={handleFilterClick}
            showDropdown={showDropdown && selectedFilter === 'Tipologia'}
            filterOptions={filterOptions}
            handleOptionSelect={handleOptionSelect}
          />
          <FilterButton
            filter="Categoria"
            selectedFilter={selectedFilter}
            handleFilterClick={handleFilterClick}
            showDropdown={showDropdown && selectedFilter === 'Categoria'}
            filterOptions={filterOptions}
            handleOptionSelect={handleOptionSelect}
          />
        </div>
      </div>
      <div className="event-list">
        {events.slice(0, 6).map((event, index) => (
          <div key={index} style={{ cursor: 'pointer' }} onClick={() => handleEventClick(event)}>
            <EventCard
              image={event.image}
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
              width={event.width}
              height={event.height}
              onHeartClick={handleHeartClick}
            />
          </div>
        ))}
        {showHiddenEvents && events.slice(6).map((event, index) => (
          <div key={index + 6} style={{ cursor: 'pointer' }} onClick={() => handleEventClick(event)}>
            <EventCard
              image={event.image}
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
              width={event.width}
              height={event.height}
              onHeartClick={handleHeartClick}
            />
          </div>
        ))}
      </div>
      <button className="load-more-button" onClick={handleToggleHiddenEvents}>
        {showHiddenEvents ? 'Nascondi' : 'Scopri tutti'}
      </button>
    </div>
  );
};

const FilterButton = ({ filter, selectedFilter, handleFilterClick, showDropdown, filterOptions, handleOptionSelect }) => (
  <div className="filter-button-wrapper">
    <button
      className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
      onClick={() => handleFilterClick(filter)}
    >
      {filter}
      <SvgArrow />
    </button>
    {showDropdown && (
      <div className="filter-dropdown">
        {filterOptions.map((option, index) => (
          <div key={index} className="filter-option" onClick={() => handleOptionSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    )}
  </div>
);

const SvgArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none" aria-hidden="true">
    <path d="M1.3396 1L6.3396 6L11.3396 1" stroke="#1D275F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default EventList;