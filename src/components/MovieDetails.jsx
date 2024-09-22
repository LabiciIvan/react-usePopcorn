import Button from "./Button";

export default function MovieDetails({movie, onCloseViewMovieDetails}) {

    return (
        <div className='movie-details'>
            <div className='close-details'>
                <Button 
                 content="x"
                 circle={true}
                 onHandleClick={onCloseViewMovieDetails}
                />
            </div>
            <div className='row-1'>
                <img src={movie.Poster} alt={movie.Title} className='col-1-image'/>
                <div className='col-2'>
                    <h4><span>Title:</span> {movie.Title}</h4>
                    <h4><span>Duration:</span> {movie.Runtime}</h4>
                    <h4><span>Genre:</span> {movie.Genre}</h4>
                    <h4><span>Actors:</span> {movie.Actors}</h4>
                </div>
            </div>
            <div className='row-2'>
                <h4>Description:</h4>
                <p>{movie.Plot}</p>
            </div>
            <div>

            </div>
        </div>
    )
}