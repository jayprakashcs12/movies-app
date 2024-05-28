import axios from "axios";

let axiosInstance  = axios.create({
    baseURL : "https://pro-movie-apps-default-rtdb.firebaseio.com/"
})

export default axiosInstance;