import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development"?  "https://event-management-q2bf.onrender.com/api":"/api",
    withCredentials: true,
})
