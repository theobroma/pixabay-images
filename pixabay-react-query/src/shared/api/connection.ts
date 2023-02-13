import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = 'https://pixabay.com/api';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
    // language: 'uk-UA',
  },
});
