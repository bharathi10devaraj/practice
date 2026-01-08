import React, { useState } from 'react';
import PlantCard from './components/PlantCard';    // No need to add .jsx
import DiseaseInfo from './components/DiseaseInfo'; // Vite will find it
import TreatmentList from './components/TreatmentList';

function App() {
  // Demo data
  const plants = [
    { name: 'Tomato', isHealthy: false },
    { name: 'Potato', isHealthy: false },
    { name: 'Corn', isHealthy: true },
    { name: 'Wheat', isHealthy: true }
  ];

  const diseaseData = {
    Tomato: {
      name: 'Early Blight',
      description: 'Fungal disease causing dark spots',
      plants: ['Tomato', 'Potato'],
      treatments: ['Remove infected leaves', 'Use fungicide spray', 'Water in morning']
    },
    Potato: {
      name: 'Late Blight',
      description: 'Water-soaked spots on leaves',
      plants: ['Potato', 'Tomato'],
      treatments: ['Destroy infected plants', 'Use copper fungicide', 'Improve drainage']
    }
  };

  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <div style={styles.app}>
      <h1>🌱 Simple Plant Disease Detector</h1>
      
      <div style={styles.container}>
        {/* Left side - Plant list */}
        <div style={styles.leftPanel}>
          <h2>Select a Plant</h2>
          {plants.map((plant, index) => (
            <PlantCard
              key={index}
              plantName={plant.name}
              isHealthy={plant.isHealthy}
              onClick={() => setSelectedPlant(plant.name)}
            />
          ))}
        </div>

        {/* Right side - Disease info */}
        <div style={styles.rightPanel}>
          <h2>Disease Information</h2>
          
          {selectedPlant && (
            <p>Selected: <strong>{selectedPlant}</strong></p>
          )}

          <DiseaseInfo disease={selectedPlant ? diseaseData[selectedPlant] : null} />
          
          <TreatmentList 
            treatments={selectedPlant ? diseaseData[selectedPlant]?.treatments : []} 
          />
        </div>
      </div>

      <footer style={styles.footer}>
        <p>Click on a plant to see its disease info</p>
      </footer>
    </div>
  );
}

// Inline styles
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  container: {
    display: 'flex',
    gap: '30px',
    marginTop: '20px'
  },
  leftPanel: {
    flex: 1,
    borderRight: '1px solid #ddd',
    paddingRight: '20px'
  },
  rightPanel: {
    flex: 2
  },
  footer: {
    marginTop: '40px',
    textAlign: 'center',
    color: '#666'
  }
};

export default App;


