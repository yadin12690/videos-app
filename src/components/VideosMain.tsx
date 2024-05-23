'use client'
import React, { useEffect, useState } from 'react';
import { VideoCard } from './VideoCard';
import { Genre, Videos } from '@/api/types/videos';
import { SearchComponent } from './SearchComponent';
import { SearchByYearFilter } from './SearchByYearFilterProps';
import { NoVideoFound } from './NoVideoFound';
import { SearchByGenreFilter } from './SearchByGenreFilter';

type VideosMainProps = {
    videos?: Videos;
}

export const VideosMain = ({ videos }: VideosMainProps) => {
    const [query, setQuery] = useState('');
    const [filteredVideos, setFilteredVideos] = useState(videos?.videos || []);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const genres = Array.from(new Set(videos?.genres.map(genre => genre.id)));
    const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);


    useEffect(() => {
        if (videos) {
            let filtered = videos.videos;
            const lowercasedQuery = query.toLowerCase();
            filtered = videos.videos.filter(video =>
                video.artist.toString().toLowerCase().includes(lowercasedQuery) ||
                video.title.toString().toLowerCase().includes(lowercasedQuery)
            );
            setFilteredVideos(filtered);
            // Filter by selected year
            if (selectedYear !== null) {
                filtered = filtered.filter(video => video.release_year === selectedYear);
            }
            setFilteredVideos(filtered);
        }
    }, [query, selectedYear, videos]);

    return (
        <section>
            <div className='flex flex-col xs:flex-col sm:flex-row gap-4 p-4'>
                <SearchComponent query={query} setQuery={setQuery} />
                <SearchByYearFilter videos={videos?.videos || []} setSelectedYear={setSelectedYear} />
                <SearchByGenreFilter genre={selectedGenres || []} setSelectedGenres={setSelectedGenres} />
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                {!filteredVideos.length ? <NoVideoFound /> : filteredVideos.map((video, idx) => (
                    <VideoCard video={video} key={idx} />
                ))}
            </div>
        </section>
    );
};
