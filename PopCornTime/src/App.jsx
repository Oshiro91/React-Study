import { useState } from 'react'
import './App.css'

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Searchbar />
      <NumResults movies={tempMovieData} />
    </nav>
  );
}

function Searchbar() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function ListBox() {
  const [isOppen, setIsopen] = useState(true)
  const [movies, setMovies] = useState(tempMovieData)
  return (
    <div className='box'>
      <button className='btn-toggle' onClick={() => setIsopen(!isOppen)}>{isOppen ? '-' : '+'}</button>
      {isOppen && (
        <ul className='list'>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>📅</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function WatchedBox() {
  function avg(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
  }
  const [isOppen2, setIsopen2] = useState(true)
  const [watched, setWatched] = useState(tempWatchedData)
  const avgImdbRating = avg(watched.map(movie => movie.imdbRating))
  const avgUserRating = avg(watched.map(movie => movie.userRating))
  const avgRuntime = avg(watched.map(movie => movie.runtime))


  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsopen2(!isOppen2)}>
        {isOppen2 ? '-' : '+'}
      </button>
      {isOppen2 && (
        <>
          <div className='summary'>
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>🎬</span>
                <span>{watched.length}</span>
                <span>🌟</span>
                <span>{avgImdbRating}</span>
                <span>🌠</span>
                <span>{avgUserRating}</span>
              </p>
            </div>
          </div>

          <ul className='list'>
            {watched.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

function Main() {
  return (
    <main className='main'>
      <ListBox />
      <WatchedBox />
    </main>
  )
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  )
}

export default App
