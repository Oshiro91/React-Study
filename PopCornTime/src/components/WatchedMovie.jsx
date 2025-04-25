import { useState } from "react";
export default function WatchedMovie({ watchedMovieList, selectedMovieData }) {
    const [imdbRating, setImdbRating] = useState(0);
    function handleOnClick(id) {
        console.log(id)
    }

    function handleOnChange(e) {
        setImdbRating(e.target.value)
    }

    return (
        <ul>
            {watchedMovieList.map(movie => 
            <li 
            key={movie.imdbID} 
            onClick={() => {handleOnClick(movie.imdbID)
                
            }}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <h4>OVERALL RATING</h4>
                <input type="range" min="1" max="10" value={movie.imdbRating} onChange={handleOnChange} /> <span>{movie.imdbRating} 🌟</span>
                <h4>Your Rating</h4>
                <input type="range" min="1" max="10" value={movie.userRating} /> <span>{movie.userRating} 🌟</span>
                <h4>Watched: {movie.runtime} minutes</h4>
            </li>)}
        </ul>
    )
}