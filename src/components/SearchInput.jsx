import { useState } from "react";

export default function SearchInput() {

    const [query, setQuery] = useState("");

    return (
        <>
            <input
             className="search-input"
             placeholder="Search movies..."
             onChange={(e) => setQuery(prev => e.target.value)}
            />
        </>
    )
}