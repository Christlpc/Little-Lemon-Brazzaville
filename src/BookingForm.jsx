import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateAvailableTimes }) => {
  // Déclaration des variables d'état pour les champs du formulaire
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Liste des heures disponibles
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  // Mise à jour des heures disponibles

  // Gestionnaire d'événements pour la sélection de la date
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Gestionnaire d'événements pour la sélection de l'heure
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </form>
  );
};

export default BookingForm;
