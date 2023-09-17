import React from "react";
import "../components/movieCards.css";
export default function MovieCards({movie}){
    return (
        <div className="cards">
        <img className="cards-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title + ' poster'}/>

        <div className="cards-content">
            <h3 className="cards-title">{movie.title}</h3>
            <p><small>RELEASE DATE: {movie.release_date}</small></p>
            <p><small>RATING: {movie.vote_average}</small></p> 
            <p className="cards-description">{movie.overview}</p>
            </div>
        </div>
    )
}