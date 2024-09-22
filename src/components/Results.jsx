export default function Results({movies}) {

    const totalMoview = movies ? movies.length : 0;

    return (
        <div className="third">
            <h4 className="result">
                Found <span>{totalMoview}</span> results
            </h4>
        </div>
    )
}