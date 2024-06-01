import React from 'react';

function Search() {

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="rounded-xl p-1 focus:outline-none focus:ring focus-border-purple-500 w-72"
            />
        </div>
    )
}

export default Search;