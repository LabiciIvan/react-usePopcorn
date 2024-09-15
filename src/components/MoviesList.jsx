import Movie from "./Movie";

export default function MoviesList({movies}) {
    return (
        <ul>
            { movies.map((movie, index) => 
                <Movie 
                    key={index}
                    movie={movie}
                />
            )}
        </ul>
    )
}