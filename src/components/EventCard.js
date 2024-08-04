import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';
import LikeButton from './LikeButton'; // Import the LikeButton component

const EventCard = ({ image, title, date, description, width, height }) => {
  const navigate = useNavigate();

  const handleHeartClick = () => {
    navigate('/wishlist'); // Navigate to the wishlist page
  };

  return (
    <div className="event-card" style={{ width, height }}>
      <img src={image} alt={title} className="event-card-image" />
      <div className="event-card-content">
        <div className="event-card-date">
          <span className="event-card-month">{date.split(' ')[0]}</span>
          <span className="event-card-day">{date.split(' ')[1]}</span>
        </div>
        <div className="event-card-details">
          <h3 className="event-card-title">{title}</h3>
          <p className="event-card-description">{description}</p>
        </div>
        <div className="event-card-icons">
          <LikeButton onHeartClick={handleHeartClick} /> {/* Pass handleHeartClick to LikeButton */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
