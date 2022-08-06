import axios from "axios";


export const apiClient = axios.create({
  // baseURL: "http://localhost:8080/api",
  baseURL: "https://final-project-bt.herokuapp.com/api",
  
});