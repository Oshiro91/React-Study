import WatchedMovie from "./WatchedMovie"
export default function WatchedMoviesList({ WatchedMoviesList, selectedMovieData }) {
    return (
        <div className="box">
            <h2>Watched Movies</h2>
            <ul className="list">
                <WatchedMovie watchedMovieList={WatchedMoviesList} selectedMovieData={selectedMovieData} />
            </ul>
        </div>
    )
}