import React from 'react';  // ADD THIS LINE

function PlantCard({ plantName, isHealthy, onClick }) {
  return (
    <div className="plant-card" onClick={onClick}>
      <h3>{plantName}</h3>
      <p>Status: {isHealthy ? '✅ Healthy' : '⚠️ Sick'}</p>
    </div>
  );
}

export default PlantCard;