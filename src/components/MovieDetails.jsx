import { useEffect, useState } from "react";
import Button from "./Button";
import StatusMessage from "./StatusMessage";
import StarRating from "./StartRating";

const API_KEY = atob('OGY1NDAzOA==');

export default function MovieDetails({selectedID, onCloseViewMovieDetails, onSetWatched}) {

    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState(0);

    const {
        Poster: image,
        Title: title,
        Runtime: duration,
        Genre: genre,
        Actors: actors,
        Plot: description,
        imdbRating: imdbRating,
        imdbID: id,
        Year: year,
    } = movie;

    function handleMovieCreation() {

        const watchedMovie = {
            Title: title,
            imdbID: id,
            imdbRating: Number(imdbRating),
            runtime: Number(duration.split(" ").at(0)),
            userRating: Number(userRating),
            Year: year,
            Poster: image,
        };

        onSetWatched(watchedMovie)
    }

    async function fetchMovieById() {
        try {
            if (selectedID && (selectedID === id)) return;

            setIsLoading(true);

            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedID}`);

            const data = await response.json();

            if (data.Response === "False") {
                setMovie({});
                return;
            }

            setIsLoading(false);
            setMovie(data);

        } catch (err) {
            console.log('fetchMovieById ERROR:', err.message);
            setMovie([]);
        }
    }

    useEffect(() => {
        fetchMovieById();
    }, [selectedID]);

    return (
        <div className='movie-details'>
            <div className='close-details'>
                <Button 
                 content="x"
                 circle={true}
                 onHandleClick={onCloseViewMovieDetails}
                />
            </div>
            {isLoading ? <StatusMessage message={"LOADING"}/> :
            <>
                <div className='row-1'>
                    <img src={image} alt={title} className='col-1-image'/>
                    <div className='col-2'>
                        <h4><span>Title:</span> {title}</h4>
                        <h4><span>Duration:</span> {duration}</h4>
                        <h4><span>Genre:</span> {genre}</h4>
                        <h4><span>Actors:</span> {actors}</h4>
                    </div>
                </div>
                <div className='row-2'>
                    <h4>Description:</h4>
                    <p>{description}</p>
                </div>
                <div className="row-3">
                    <div className="star-rating">
                        <StarRating size={33} maxRating={10} onSetUserRating={setUserRating}/>
                    </div>
                    <Button
                    content="Watched 💜"
                    onHandleClick={() => handleMovieCreation()}
                    />
                </div>
            </>
            }
        </div>
    )
}