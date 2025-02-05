import React, { useState } from 'react';
import DroneControlsComponent from '../components/DroneControlsComponent';
import BillboardDetailsComponent from '../components/BillboardDetailsComponent';

const HomePage: React.FC = () => {
  const [billboardList, setBillboardList] = useState<any[]>([]);
  const [selectedBillboard, setSelectedBillboard] = useState<string | null>(null);

  const handleResults = (data: any) => {
    if (data) {
      setBillboardList(data.billboards); // Set billboards from the drone instructions
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Bigdatr Drone Challenge</h1>

      <DroneControlsComponent onResults={handleResults} />

      {billboardList.length > 0 && (
        <div style={{ 
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
         }}>
          <h3>List of Billboards Found</h3>
          <ul>
            {billboardList.map((billboard) => (
              <li key={billboard.id}>
                <button
                  onClick={() => setSelectedBillboard(billboard.id)}
                  style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
                >
                  View Details for Billboard: {billboard.id}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedBillboard && <BillboardDetailsComponent billboardId={selectedBillboard} />}
    </div>
  );
};

export default HomePage;
