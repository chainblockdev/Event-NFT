import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LikeButton.css';
import heartIcon from '../assets/icons/heart.png'; // Import heart icon
import searchIcon from '../assets/icons/search.png'; // Import search icon

const LikeButton = ({ onHeartClick }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const toggleLike = (e) => {
    e.stopPropagation(); // Stop event propagation
    e.preventDefault();
    setLiked(!liked);
    console.log('Heart button clicked'); // Debugging log
    if (onHeartClick) {
      onHeartClick(e);
    }
    navigate('/profile'); // Navigate to profile (wishlist) page
    window.scrollTo(0, 0); // Ensure the scroll position is set to the top
  };

  const handleIconClick = (e) => {
    e.stopPropagation(); // Stop event propagation
    e.preventDefault();
    console.log('Search button clicked, navigating to: /upcomingevents'); // Debugging log
    navigate('/upcomingevents');
    window.scrollTo(0, 0); // Ensure the scroll position is set to the top
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
