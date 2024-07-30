import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-bar-select-container">
      <label htmlFor="event-type" className="search-bar-select-label">Tipo di Evento</label>
      <select id="event-type" className="custom-select">
        <option>Concerto Jazz</option>
        {/* Add other event types here */}
      </select>
    </div>
    <div className="search-bar-select-container">
      <label htmlFor="location" className="search-bar-select-label">Luogo</label>
      <select id="location" className="custom-select">
        <option>Sassi di Matera</option>
        {/* Add other locations here */}
      </select>
    </div>
    <div className="search-bar-select-container">
      <label htmlFor="date" className="search-bar-select-label">Data</label>
      <select id="date" className="custom-select luglio-selected">
        <option>Luglio</option>
        {/* Add other dates here */}
      </select>
    </div>
  </div>
);

export default SearchBar;
