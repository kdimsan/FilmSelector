import "./styles.css";

export interface DataResponseProps {
    title: string,
    overview: string,
    poster_path: string,
    release_date: string;
}

interface DataProps { 
    value: DataResponseProps; 
}

export function MovieDetails({ value }:DataProps) {

    return(
        <div className="container">
            <div className="image-content">
                <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt="Movie poster" />
                <span>Lançamento:   {value.release_date}</span>
            </div>
            <div className="title-content">
                <h1>{value.title}</h1>
                <p>{value.overview}</p>
            </div>
        </div>
    )
}