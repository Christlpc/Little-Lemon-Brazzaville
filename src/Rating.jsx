import React, { useState } from "react";

const Star = ({ selected = false, onClick = () => {} }) => (
  <span onClick={onClick}>{selected ? "★" : "☆"}</span>
);

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={i < rating} onClick={() => setRating(i + 1)} />
      ))}
    </div>
  );
};

export default Rating;
