export default function MoviesWatched({movies}) {

    const moviesWatched = movies.length;

    const moviesAverageIMDBRating = movies.reduce((prevRating, currentRating) => prevRating + Number(currentRating.imdbRating), 0) / moviesWatched;

    const moviesAverageTime = movies.reduce((initialValue, movie) => initialValue + Number(movie.Runtime.split(" ").at(0)), 0) / moviesWatched;

    const moviesAverageUserRating = movies.reduce((initialValue, movie) => initialValue + movie.userRating, 0) / moviesWatched;


    return (movies &&
        <div className="movies-watched">
            <h4>MOVIES YOU WATCHED</h4>
            <div className="row">
                <p>#️⃣ {moviesWatched}</p>
                <p>⭐ {moviesAverageIMDBRating.toFixed(2)}</p>
                <p>🌟 {moviesAverageUserRating}</p>
                <p>⌛ {Math.floor(moviesAverageTime)} min</p>
            </div>
        </div>
    )
}