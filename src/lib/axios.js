import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: "https://catering-backend-sa1h.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically to all requests 
AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // get token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // a
  return config;
});

export default AxiosInstance;
// https://catering-backend-sa1h.onrender.com asgits
// http://localhost:4000
