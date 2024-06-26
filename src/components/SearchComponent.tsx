// components/Header.js

import React from 'react';

type SearchComponentProps = {
    query: string;
    setQuery: (query: string) => void;
}

export const SearchComponent = ({ query, setQuery }: SearchComponentProps) => {
    return (
        <div className="w-full">
            <input
                type="text"
                placeholder="Search video..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-2 border rounded text-black font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
        </div>
    );
};
