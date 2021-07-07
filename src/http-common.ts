import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL:
    "https://vue-coach-f57dd-default-rtdb.asia-southeast1.firebasedatabase.app/",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
