// components/SearchByYearFilter.tsx

import { Video } from '@/api/types/videos';
import React from 'react';

interface SearchByYearFilterProps {
    videos: Video[];
    setSelectedYear: (year: number | null) => void;
}

export const SearchByYearFilter: React.FC<SearchByYearFilterProps> = ({ videos, setSelectedYear }) => {
    // Extract unique years from the videos array
    const years = Array.from(new Set(videos.map(video => video.release_year)));

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const year = parseInt(event.target.value);
        setSelectedYear(year !== 0 ? year : null); // If "All Years" is selected, set year to null
    };

    return (
        <div className='w-full content-center'>
            <select
                id="yearFilter"
                className="w-full mt-2 p-2 border rounded text-black font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                onChange={handleChange}
            >
                <option value="0">All Years</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    );
};

