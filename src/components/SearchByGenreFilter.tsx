import React from 'react';
import { Genre } from '@/api/types/videos';

interface SearchByGenreFilterProps {
    genres: Genre[];
    selectedGenres: Genre[];
    setSelectedGenres: (genres: Genre[]) => void;
}

export const SearchByGenreFilter = ({ genres, selectedGenres, setSelectedGenres }: SearchByGenreFilterProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genreId = parseInt(event.target.value);
        const selectedGenre = genres.find(genre => genre.id === genreId);
        if (selectedGenre && !selectedGenres.some(genre => genre.id === genreId)) {
            setSelectedGenres([...selectedGenres, selectedGenre]);
        }
    };

    const handleRemoveGenre = (genreId: number) => {
        setSelectedGenres(selectedGenres.filter(genre => genre.id !== genreId));
    };

    return (
        <div className='content-center'>
            <select
                id="genreFilter"
                className="h-[63%] mt-2 p-2 border rounded text-black"
                onChange={handleChange}
                value={''} // This is an empty value to prevent the select from being controlled by state
            >
                <option disabled value="">Search by genre</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
            <div className="mt-2">
                {selectedGenres.map(genre => (
                    <span
                        key={genre.id}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        {genre.name}
                        <button
                            type="button"
                            className="ml-2 text-xs font-semibold text-red-500"
                            onClick={() => handleRemoveGenre(genre.id)}
                        >
                            Remove
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};
