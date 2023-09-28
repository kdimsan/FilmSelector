import { api } from "./api";

interface MovieResponseAPIProps {
    results: {
        title:string;
    }
}


export async function getMovies() {
    const { data } = await api.get<MovieResponseAPIProps>(`/movie/top_rated/?page=${Math.floor(Math.random() * 45) + 1}`);
    console.log("get",data);
}