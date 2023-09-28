import axios from "axios";
const apiKey = import.meta.env.VITE_API_TOKEN

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        Authorization: apiKey
    }
});
