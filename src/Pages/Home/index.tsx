import { useState } from "react";

import "./styles.css";
import logo from "../../assets/logo.svg";

export function Home() {

    const [filmOpener, setFilmOpener] = useState(false);

    const handleFilmOpener = () => {
        setFilmOpener(true);
    }

    return(
        <main>
            <img src={logo} alt="logo" />
            <h1>Não sabe o que assistir?</h1>
            {
                filmOpener && 
                <div>Filme do Momento: Fast and Furious</div> 
            }
            <button onClick={ handleFilmOpener }><img src={logo} alt="logo" /> Encontrar filme</button>
            <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
        </main>
    )
}