'use client'
import React, { useEffect, useState } from 'react';
import { VideoCard } from './VideoCard';
import { Genre, Videos } from '@/api/types/videos';
import { SearchComponent } from './SearchComponent';
import { NoVideoFound } from './NoVideoFound';
import { SearchByGenreFilter } from './SearchByGenreFilter';
import { SearchByYearFilter } from './SearchByYearFilter';

type VideosMainProps = {
    videos?: Videos;
}

export const VideosMain = ({ videos }: VideosMainProps) => {
    const [filteredVideos, setFilteredVideos] = useState(videos?.videos || []);
    const [query, setQuery] = useState(''); // Query state for search input.
    const [selectedYear, setSelectedYear] = useState<number | null>(null); // State for selected year filter.
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

    useEffect(() => {
        if (videos) {
            let filtered = videos.videos;
            const lowercasedQuery = query.toLowerCase();

            // Filter by query
            filtered = filtered.filter(video =>
                video.artist.toString().toLowerCase().includes(lowercasedQuery) ||
                video.title.toString().toLowerCase().includes(lowercasedQuery)
            );

            // Filter by selected year
            if (selectedYear !== null) {
                filtered = filtered.filter(video => video.release_year === selectedYear);
            }

            // Filter by selected genres
            if (selectedGenres.length > 0) {
                const selectedGenreIds = selectedGenres.map(genre => genre.id);
                filtered = filtered.filter(video => selectedGenreIds.includes(video.genre_id));
            }

            setFilteredVideos(filtered);
        }
    }, [query, selectedYear, selectedGenres, videos]);

    return (
        <section>
            <div className='flex flex-col xs:flex-col sm:flex-row gap-4 p-4'>
                <SearchComponent query={query} setQuery={setQuery} />
                <SearchByYearFilter videos={videos?.videos || []} setSelectedYear={setSelectedYear} />
                <SearchByGenreFilter genres={videos?.genres || []} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                {!filteredVideos.length ? <NoVideoFound /> : filteredVideos.map((video, idx) => (
                    <VideoCard video={video} key={idx} />
                ))}
            </div>
        </section>
    );
};
