import Axios from "axios";
import config from "./config";

const axios = Axios.create({
  timeout: 6 * 1000, // 6 seconds
  baseURL: config.VITE_PUBLIC_API_URL,
});

export default axios;
