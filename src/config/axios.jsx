import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
});

export default axiosApiInstance;
