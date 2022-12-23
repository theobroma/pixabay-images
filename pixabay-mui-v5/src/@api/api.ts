// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY as string;
export const API_URL = process.env.REACT_APP_API_URL as string;

export const pixabayAxiosInstance = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});
