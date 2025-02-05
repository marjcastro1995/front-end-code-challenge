import axios from 'axios';

const BASE_URL = 'http://localhost:4001';

export async function sendDroneInstructions(instructions: string) {
  try {
    const response = await axios.get(`${BASE_URL}/instruct-drone`, {
      params: { instructions },
    });

    return response.data;
  } catch (error) {
    console.error('Error sending drone instructions:', error);
    throw new Error('An error occurred while instructing the drone.');
  }
}

export async function getBillboardDetails(billboardId: string) {
  try {
    const response = await axios.get(`${BASE_URL}/get-billboard`, {
      params: { id: billboardId },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching billboard details:', error);
    throw new Error('An error occurred while retrieving billboard details.');
  }
}
