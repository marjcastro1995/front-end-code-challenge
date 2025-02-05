import React, { useState } from 'react';
import { sendDroneInstructions } from '../services/api';

interface DroneControlsProps {
  onResults: (data: any) => void;
}

const DroneControlsComponent: React.FC<DroneControlsProps> = ({ onResults }) => {
  const [droneInstructions, setDroneInstructions] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      // Send drone instructions (convert to lowercase) to the backend API
      const data = await sendDroneInstructions(droneInstructions.toLowerCase());
      
      // Pass the result to the parent component
      onResults(data);
    } catch (err: any) {
      // Handle any error from the API
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2>Enter Drone Instructions Below</h2>
      <input
        type="text"
        value={droneInstructions}
        onChange={(e) => setDroneInstructions(e.target.value)} // Allow user input as-is, but submit in lowercase
        placeholder="Example: x^xv"
        style={{ width: '200px', padding: '10px', fontSize: '16px' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error display */}
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleSubmit} disabled={loading} style={{ padding: '10px 20px', fontSize: '16px' }}>
          {loading ? 'Loading...' : 'Send Instructions'}
        </button>
      </div>
    </div>
  );
};

export default DroneControlsComponent;
