// src/components/LikeButton.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LikeButton.css';
import heartIcon from '../assets/icons/heart.png'; // Import heart icon
import searchIcon from '../assets/icons/search.png'; // Import search icon

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const toggleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
    console.log('Heart button clicked'); // Debugging log
    navigate('/profile'); // Navigate to the Wishlist page
  };

  const handleIconClick = (e) => {
    e.preventDefault();
    console.log('Search button clicked, navigating to: /search'); // Debugging log
    navigate('/search');
  };

  return (
    <div className="like-button">
      <button className="icon-button heart-button" onClick={toggleLike}>
        <div className="button-icon">
          <img src={heartIcon} alt="Like" className={`icon ${liked ? 'liked' : ''}`} />
        </div>
      </button>
      <button className="icon-button search-button" onClick={handleIconClick}>
        <div className="button-icon">
          <img src={searchIcon} alt="Search" className="icon" />
        </div>
      </button>
    </div>
  );
};

export default LikeButton;
