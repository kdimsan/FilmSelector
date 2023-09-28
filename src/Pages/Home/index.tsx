import { useState } from "react";
import { api } from "../../services/api";

import "./styles.css";
import logo from "../../assets/logo.svg";
import { DataResponseProps, MovieDetails } from "../../components/movieDetails";

export function Home() {

    const [data, setData] = useState<DataResponseProps>();

    const handleFilmOpener = async () => {
        const response = await api.get(`/movie/top_rated?page=${Math.floor(Math.random() * 45) + 1}&language=pt-BR`);
        const pageResolve = response.data.results[Math.floor(Math.random() * 19)];
        setData(pageResolve);
        console.log("pageResolve", pageResolve);
    };

    return(
        <main>
            <img src={logo} alt="logo" />
            <h1>Não sabe o que assistir?</h1>
            {
                data && 
                <MovieDetails value={data}/>
            }
            <button onClick={ handleFilmOpener }><img src={logo} alt="logo" /> Encontrar filme</button>
            <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
        </main>
    )
}