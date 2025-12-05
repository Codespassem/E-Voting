import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout, optional
});

// Optional: Add request/response interceptors if needed
// API.interceptors.request.use(config => {
//   // Do something before request is sent (e.g., add auth token)
//   return config;
// });

// API.interceptors.response.use(response => response, error => {
//   // Handle errors globally
//   return Promise.reject(error);
// });

export default API;
