import React, { useState } from "react";
import "./search.css";
import MovieCards from "./components/movieCards";
function SearchMovies(){
    const [query, setQuery]= useState('');
    const [movies, setMovies] = useState([]);

    const Searching =async (event)=>{
        event.preventDefault();
      const url=`https://api.themoviedb.org/3/search/movie?api_key=f91ffd1bbd67f677a17c97c1b0b80fa9&language=en-US&query=${query}&include_adult=false`;
      try{
        const res=await fetch(url);
        const data =await res.json();
        setMovies(data.results);
      }
      catch(err){
        console.log(err);
      }
    
    }
    return (
        <>
        <form className ="form" onSubmit={Searching}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="input" type="text" name="query" placeholder="ex Jurassic Park"
        value={query} onChange={(event)=> setQuery(event.target.value)}/>

        <button className="button" type="submit">Search!</button>
        </form> 
        <div className="movielist">
            {movies.filter(movie=> movie.poster_path).map(movie=>(
              <MovieCards movie={movie} key={movie.id}/> 
            ))}
        </div>
        </>

    )
}
export default SearchMovies;

