export default function SearchInput({onSetSearchInput, searchInput}) {

    return (
        <div className="second">
            <input
             className="search-input"
             placeholder="Search movies..."
             onChange={(e) => onSetSearchInput(prev => e.target.value)}
             value={searchInput}
            />
        </div>
    )
}