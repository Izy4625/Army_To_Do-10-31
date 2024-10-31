import axios from 'axios';
import { Image } from '../types/index';



export const fetchImages = async (): Promise<Image[]> => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos', {
      params: {
        query: 'art',
        per_page: 12,
        client_id: UNSPLASH_API_KEY
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};