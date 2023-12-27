import React, { useState } from 'react';
import BookingForm from './BookingForm';

const Main = () => {
  // Déclarez l'état et la fonction de mise à jour dans Main
  const [availableTimes, setAvailableTimes] = useState([]);

  // Fonction pour mettre à jour les heures disponibles
  const updateAvailableTimes = (newTimes) => {
    setAvailableTimes(newTimes);
  };

  return (
    <div>
      <h1>Main Component</h1>
      {/* Passez l'état et la fonction de mise à jour comme props à BookingForm */}
      <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} />
    </div>
  );
};

export default Main;
