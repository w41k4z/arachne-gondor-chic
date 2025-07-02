import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  
});
console.log('BASE URL = ', process.env.NEXT_PUBLIC_API_BASE_URL);

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Attach token
    // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
