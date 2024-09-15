export default function Results({movies}) {

    const totalMoview = movies.length;

    return (
        <h4 className="result">
            Found <span>{totalMoview}</span> results
        </h4>
    )
}