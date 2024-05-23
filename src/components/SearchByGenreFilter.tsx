// components/SearchByGenreFilter.tsx

import React, { useState } from 'react';
import { Genre, Video } from '@/api/types/videos';

interface SearchByGenreFilterProps {
    genre: Genre[];
    setSelectedGenres: (genres: Genre[]) => void;
}

export const SearchByGenreFilter = ({ genre, setSelectedGenres }: SearchByGenreFilterProps) => {
    // Extract unique genres from the videos array
    const genres = Array.from(new Set(genre.map(genre => genre.id)));
    const [selectedGenres, setSelectedGenresLocal] = useState<number[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genreId = parseInt(event.target.value);
        setSelectedGenresLocal(prevGenres => {
            if (!prevGenres.includes(genreId)) {
                return [...prevGenres, genreId];
            }
            return prevGenres;
        });
    };

    const handleRemoveGenre = (genreId: number) => {
        setSelectedGenresLocal(prevGenres => prevGenres.filter(id => id !== genreId));
    };

    return (
        <div className='content-center'>
            <select
                id="genreFilter"
                className="h-[63%] mt-2 p-2 border rounded"
                onChange={handleChange}
                value={''} // This is an empty value to prevent the select from being controlled by state
            >
                <option value="">Search by genre</option>
                {genres.map(genreId => (
                    <option key={genreId} value={genreId}>{genreId}</option>
                ))}
            </select>
            <div className="mt-2">
                {selectedGenres.map(genreId => (
                    <span
                        key={genreId}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        {genreId}
                        <button
                            type="button"
                            className="ml-2 text-xs font-semibold text-red-500"
                            onClick={() => handleRemoveGenre(genreId)}
                        >
                            Remove
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};

