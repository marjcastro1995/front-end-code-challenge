import React, { useEffect, useState } from 'react';
import { getBillboardDetails } from '../services/api';

interface BillboardDetailsProps {
  billboardId: string;
}

const BillboardDetailsComponent: React.FC<BillboardDetailsProps> = ({ billboardId }) => {
  const [billboardDetails, setBillboardDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (billboardId) {
      const fetchBillboard = async () => {
        setLoading(true);
        setError(null);
        
        try {
          // Adjusted API call based on getBillboardDetails
          const data = await getBillboardDetails(billboardId);

          setBillboardDetails(data.billboard); // Assigning response data to the state
        } catch (err: any) {
          setError(err.message); // Handle error if any
        } finally {
          setLoading(false);
        }
      };
      fetchBillboard();
    }
  }, [billboardId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  // If no billboard data is found
  if (!billboardDetails) {
    return <div>No details available for this billboard.</div>;
  }

  return (
    <div style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
     }}>
      <h3>Billboard Details</h3>
      <div>ID: {billboardDetails.id}</div>
      <div>Location: {billboardDetails.location}</div>
      <div>Photos Taken: {billboardDetails.photosTaken}</div>
    </div>
  );
};

export default BillboardDetailsComponent;
