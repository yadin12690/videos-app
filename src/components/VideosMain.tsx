'use client'
import React, { useEffect, useState } from 'react';
import { VideoCard } from './VideoCard';
import { Videos } from '@/api/types/videos';
import { SearchComponent } from './SearchComponent';

type VideosMainProps = {
    videos?: Videos;
}

export const VideosMain = ({ videos }: VideosMainProps) => {
    const [query, setQuery] = useState('');
    const [filteredVideos, setFilteredVideos] = useState(videos?.videos || []);

    useEffect(() => {
        if (videos) {
            const lowercasedQuery = query.toLowerCase();
            const filtered = videos.videos.filter(video =>
                video.artist.toString().toLowerCase().includes(lowercasedQuery) ||
                video.title.toString().toLowerCase().includes(lowercasedQuery)
            );
            setFilteredVideos(filtered);
        }
    }, [query, videos]);

    return (
        <section>
            <SearchComponent query={query} setQuery={setQuery} />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                {!filteredVideos.length ? <h1 className='text-center font-bold text-black text-lg'>No videos found </h1> : filteredVideos.map((video, idx) => (
                    <VideoCard video={video} key={idx} />
                ))}
            </div>
        </section>
    );
};
