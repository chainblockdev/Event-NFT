// src/components/Dropdown.js
import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ label, options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <label className="dropdown-label">{label}</label>
      <div className="dropdown-selected" onClick={toggleDropdown}>
        {selectedOption}
        <div className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div key={index} className="dropdown-option" onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
