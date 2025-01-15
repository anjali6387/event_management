import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development"?  "https://event-backend-pfus.onrender.com":"/api",
    withCredentials: true,
})
