'use client'
import React, { useEffect, useState } from 'react';
import { VideoCard } from './VideoCard';
import { Videos } from '@/api/types/videos';
import { SearchComponent } from './SearchComponent';
import { SearchByYearFilter } from './SearchByYearFilterProps';

type VideosMainProps = {
    videos?: Videos;
}

export const VideosMain = ({ videos }: VideosMainProps) => {
    const [query, setQuery] = useState('');
    const [filteredVideos, setFilteredVideos] = useState(videos?.videos || []);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);


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
            <div className='grid grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-1 gap-4 p-4'>
                <SearchComponent query={query} setQuery={setQuery} />
                <SearchByYearFilter videos={videos?.videos || []} setSelectedYear={setSelectedYear} />
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                {!filteredVideos.length ? <h1 className='text-center font-bold text-black text-lg'>No videos found </h1> : filteredVideos.map((video, idx) => (
                    <VideoCard video={video} key={idx} />
                ))}
            </div>
        </section>
    );
};
