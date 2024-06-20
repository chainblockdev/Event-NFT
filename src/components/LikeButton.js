import React, { useEffect, useRef, useState } from 'react';
import mojs from '@mojs/core';
import './LikeButton.css'; // Create and style this CSS file accordingly
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const likeButtonRef = useRef(null);
  const redHeartRef = useRef(null);
  const firstStrokeRef = useRef(null);
  const secondStrokeRef = useRef(null);
  const navigate = useNavigate(); // Use navigate for navigation

  useEffect(() => {
    const colors = {
      yellow: "#fde36d",
      blue: "#97e8f5",
      orange: "#fd706a",
      purple: "#ba7fdd",
      green: "#85f981"
    };

    const likeButton = likeButtonRef.current;
    const redHeart = redHeartRef.current;
    const firstStroke = firstStrokeRef.current;
    const secondStroke = secondStrokeRef.current;

    const likeTimeline = new mojs.Timeline();

    const delay = 0.5,
      from = 5,
      to = 15;

    const stroke = new mojs.Tween({
      duration: 400,
      easing: "expo.out",
      onUpdate: (progress) => {
        if (firstStroke && secondStroke) {
          firstStroke.setAttribute(
            "r",
            (progress / (1 - delay)) * (to - from) + from
          );
          secondStroke.setAttribute(
            "r",
            (Math.max(progress - delay, 0) / (1 - delay)) * (to - from) + from
          );
        }
      }
    });

    const scale = new mojs.Tween({
      duration: 400,
      delay: 250,
      onUpdate: (progress) => {
        const bounceProgress = mojs.easing.elastic.out(1.005 * progress - 0.005);
        if (redHeart) {
          redHeart.style.transform = `scale3d(${bounceProgress}, ${bounceProgress}, 1)`;
        }
      }
    });

    const burst = new mojs.Burst({
      parent: likeButton,
      delay: 350,
      duration: 600,
      shape: "circle",
      x: "50%",
      y: "50%",
      opacity: 1,
      childOptions: {
        radius: { 5: 0 },
        type: "line",
        stroke: [colors.yellow, colors.blue],
        strokeWidth: 2
      },
      radius: { 25: 40 },
      count: 6,
      isSwirl: true,
      swirlSize: 20,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    const burst2 = new mojs.Burst({
      parent: likeButton,
      delay: 400,
      duration: 600,
      shape: "circle",
      x: "50%",
      y: "50%",
      opacity: 1,
      childOptions: {
        radius: { 5: 0 },
        type: "line",
        stroke: [colors.orange, colors.purple, colors.blue],
        strokeWidth: 2
      },
      radius: { 25: 50 },
      count: 6,
      angle: 25,
      isSwirl: true,
      swirlSize: 20,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    const burst3 = new mojs.Burst({
      parent: likeButton,
      delay: 500,
      duration: 600,
      shape: "circle",
      fill: colors.green,
      x: "50%",
      y: "50%",
      opacity: 1,
      radius: { 20: 30 },
      childOptions: {
        radius: { 2: 0 }
      },
      count: 6,
      isRunLess: true,
      easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
    });

    likeTimeline.add(stroke, scale, burst, burst2, burst3);

    const reset = () => {
      if (redHeart) {
        redHeart.style.transform = `scale3d(0, 0, 1)`;
      }
    };

    const toggleLike = (e) => {
      e.preventDefault();

      setLiked(!liked);

      if (!liked) likeTimeline.play();
      else reset();
    };

    if (likeButton) {
      likeButton.addEventListener("click", toggleLike);
      likeButton.addEventListener("touchstart", toggleLike);
    }

    return () => {
      if (likeButton) {
        likeButton.removeEventListener("click", toggleLike);
        likeButton.removeEventListener("touchstart", toggleLike);
      }
    };
  }, [liked, navigate]);

  const handleIconClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="like-button" ref={likeButtonRef}>
      <svg width="0" height="0">
        <circle ref={firstStrokeRef} id="first-stroke" cx="0" cy="0" r="0" />
        <circle ref={secondStrokeRef} id="second-stroke" cx="0" cy="0" r="0" />
      </svg>
      <button className="icon-button" onClick={() => handleIconClick('/like')}>
        <div className="heart-icon red" ref={redHeartRef}>❤️</div>
      </button>
      <button className="icon-button" onClick={() => handleIconClick('/search')}>
        <div className="magnifier-icon">🔍</div>
      </button>
    </div>
  );
};

export default LikeButton;
