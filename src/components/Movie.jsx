export default function Movie({movie, onSetSelectedId = () => {console.log('Calling Movie prop funcion')}}) {
    return (
        <li className="movie-item" onClick={() => onSetSelectedId(prev => movie.imdbID)}>
            <img src={movie.Poster} alt="Movie Image"/>
            <div className="details">
                <h4>{movie.Title}</h4>
                <div className="specifics">

                    <p className="year">📅{movie.Year}</p>
                    <p className="rating-imdb">{movie.imdbRating ? <>⭐{movie.imdbRating}</>  : ''}</p>
                    <p className="rating-user">{movie.userRating ?  <>🌟{movie.userRating}</> : ''}</p>
                    <p className="length">⌛ {movie.Year}</p>
                </div>
            </div>
        </li>
    )
}