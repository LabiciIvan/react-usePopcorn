import { useEffect, useRef } from 'react';

export default function SearchInput({onSetSearchInput, searchInput}) {

    const searchElement = useRef(null);

    useEffect(() => {
        function callback(e) {
            if (e.code === 'Enter') {
                searchElement.current.focus();
            }

            if (e.code === 'Escape') {
                searchElement.current.blur();
                onSetSearchInput(prev => '');
            }
        }

        document.addEventListener('keydown', callback);

        return () => document.removeEventListener('keydown', callback);
    }, []);

    return (
        <div className="second">
            <input
             className="search-input"
             placeholder="Search movies..."
             onChange={(e) => onSetSearchInput(prev => e.target.value)}
             value={searchInput}
             ref={searchElement}
            />
        </div>
    )
}