import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://c9bc-142-181-45-69.ngrok-free.app', // Ruby for Good CASA QA
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default authApi;
