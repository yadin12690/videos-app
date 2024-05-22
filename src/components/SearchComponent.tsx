// components/Header.js

import React from 'react';

type SearchComponentProps = {
    query: string;
    setQuery: (query: string) => void;
}

export const SearchComponent = ({ query, setQuery }: SearchComponentProps) => {
    return (
        <div className="w-full flex justify-center mb-4 p-4">
            <input
                type="text"
                placeholder="Search by artist or title"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-2 border rounded text-black font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
        </div>
    );
};
