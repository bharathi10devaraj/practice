import React from 'react';  // ADD THIS LINE

function TreatmentList({ treatments }) {
  if (!treatments || treatments.length === 0) {
    return <p>No treatment needed for healthy plants</p>;
  }

  return (
    <div className="treatment-list">
      <h4>Treatment Options:</h4>
      <ul>
        {treatments.map((treatment, index) => (
          <li key={index}>{treatment}</li>
        ))}
      </ul>
    </div>
  );
}

export default TreatmentList;