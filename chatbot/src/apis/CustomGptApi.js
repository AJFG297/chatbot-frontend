import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Adjust the URL as needed

export const queryMainApi = async (query) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/query`,
            { query },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error querying main API:', error);
        throw error;
    }
};