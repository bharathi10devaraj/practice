import React from 'react';  // ADD THIS LINE

function DiseaseInfo({ disease }) {
  if (!disease) {
    return <p>Select a plant to see disease info</p>;
  }

  return (
    <div className="disease-info">
      <h3>Disease: {disease.name}</h3>
      <p>{disease.description}</p>
      <p>Common in: {disease.plants.join(', ')}</p>
    </div>
  );
}

export default DiseaseInfo;