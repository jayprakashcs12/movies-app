import axios from 'axios';

let baseURL = "http://localhost:3000/";

let axiosInstance = axios.create({baseURL: baseURL });

export default axiosInstance;