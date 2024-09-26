import Button from "./Button"

export default function Movie({movie, onSetSelectedId = (() => {console.log('Calling Movie prop funcion')}), onRemovingWatched = null}) {
    return (
        <li className="movie-item" onClick={() => onSetSelectedId(prev => movie.imdbID)}>
            <img src={movie.Poster} alt="Movie Image"/>
            <div className="details">
                <div className="details-header-wrapper">
                    <h4>{movie.Title}</h4>
                    {onRemovingWatched &&
                        <Button
                         content="x"
                         bgColor="#b61515"
                         hoverColor="#f04a4a"
                         onHandleClick={() => onRemovingWatched(movie)}
                        />
                    }
                </div>
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