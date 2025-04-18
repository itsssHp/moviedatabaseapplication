import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b6a80da022ac2b59185462b8cda79521';

export const fetchMovies = async (query = '') => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
