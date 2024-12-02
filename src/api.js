import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your Node.js API server URL
});

export default API;
