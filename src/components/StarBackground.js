import React from "react";
import "./StarBackground.css";

const StarsBackground = () => {
  // Generate 30 stars with random positions and delays
  const stars = Array.from({ length: 30 }, (_, index) => {
    const top = Math.floor(Math.random() * 100) + "%";
    const left = Math.floor(Math.random() * 100) + "%";
    const delay = Math.random() * 10 + "s";
    const duration = 10 + Math.random() * 10 + "s"; // 10–20s

    return (
      <div
        key={index}
        className="star"
        style={{ top, left, animationDelay: delay, animationDuration: duration }}
      ></div>
    );
  });

  return <div className="stars-container">{stars}</div>;
};

export default StarsBackground;
