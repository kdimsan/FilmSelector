import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGM0MzMzZDM1YjVmMGY2ZDRiOTYwMGRkMDMzYmI4NSIsInN1YiI6IjY1MTJlZDg3YTkxMTdmNzY1ZTBjYzlmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7yF3MujxBFyMHEepGy5bVE3pz3mEGed0zMmymyBT284'
    }   
});

