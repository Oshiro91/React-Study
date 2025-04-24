export default function WatchedMovie({ watchedMovieList, selectedMovieData }) {
    function handleOnClick(id) {
        console.log(id)
    }
    return (
        <ul>
            {watchedMovieList.map(movie => 
            <li 
            key={movie.imdbID} 
            onClick={() => handleOnClick(movie.imdbID)}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
            </li>)}
        </ul>
    )
}