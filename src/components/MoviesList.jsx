import Movie from "./Movie";

export default function  MoviesList({movies, onSetSelectedId}) {
    return (movies &&
        <ul>
            { movies.map((movie, index) => 
                <Movie 
                    key={index}
                    movie={movie}
                    onSetSelectedId={onSetSelectedId}
                />
            )}
        </ul>
    )
}