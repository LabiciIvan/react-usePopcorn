import './app.scss';
import { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import BoxColumn from './BoxColumn';
import MoviesList from "./MoviesList";
import MoviesWatched from './MoviesWatched';
import Results from "./Results";
import SearchInput from "./SearchInput";
import Box from './Box';
import Logo from './Logo';
import MovieDetails from './MovieDetails';
import StatusMessage from './StatusMessage';

const API_KEY = atob('OGY1NDAzOA==');

export default function App() {

    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] =  useState("");
    const [searchInput, setSearchInput] = useState("");

    const [selectedId, setSelectedId] = useState(null);

    async function fetchMovies() {

        setIsLoading(true);
        setError("");

        try {
            let response =  await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}`);

            if (!response.ok) {
                throw new Error("Something went wrong with fetching movies.")
            }

            let data = await response.json();

            if (data.Response === "False" && !searchInput.length < 1) {
                setMovies([]);
                throw new Error("Movie not found");
            }

            setMovies(prev => data.Search);

        } catch (err) {
            console.log('fetchMovies ERROR', err.message);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    function closeViewMovieDetails() {
        setSelectedId(null);
    }

    function handleSetWatched(movie) {
        const exists = watched.some(item => item.imdbID === movie.imdbID);

        if (exists) return;

        setWatched([...watched, movie]);
    }

    useEffect(() => {
        fetchMovies();
    }, [searchInput])

    return (
        <div className="usePopcorn-app">
            <NavigationBar>
                <Logo />
                <SearchInput onSetSearchInput={setSearchInput} searchInput={searchInput}/>
                <Results movies={movies}/>
            </NavigationBar>
            <Box>
                <BoxColumn>
                    { isLoading ? <StatusMessage message={'LOADING'} /> : <MoviesList movies={movies} onSetSelectedId={setSelectedId}/>}
                    { error && <StatusMessage message={error}/> }
                </BoxColumn>
                <BoxColumn>
                    <MoviesWatched movies={watched}/>
                    <MoviesList movies={watched}/>
                    {selectedId && 
                        <MovieDetails
                         selectedID={selectedId} 
                         onCloseViewMovieDetails={closeViewMovieDetails}
                         onSetWatched={handleSetWatched}
                        />
                    }
                </BoxColumn>
            </Box>
        </div>
    )
}