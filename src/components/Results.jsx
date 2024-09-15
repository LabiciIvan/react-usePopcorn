export default function Results({movies}) {

    const totalMoview = movies.length;

    return (
        <div className="third">
            <h4 className="result">
                Found <span>{totalMoview}</span> results
            </h4>
        </div>
    )
}