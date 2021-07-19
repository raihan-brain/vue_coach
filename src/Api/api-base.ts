import axios, { AxiosInstance } from "axios";

const Api:AxiosInstance = axios.create({
  baseURL: "https://vue-coach-5e739-default-rtdb.asia-southeast1.firebasedatabase.app/",
  headers:{
    "Content-type": "application/json"
  }
});

export default Api;