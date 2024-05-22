'use client'
import React, { useEffect, useState } from 'react';
import { VideoCard } from './VideoCard';
import { Videos } from '@/api/types/videos';

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
            <div className="mb-4 p-4">
                <input
                    type="text"
                    placeholder="Search by artist or title"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-1/3 p-2 border rounded text-black font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
                {filteredVideos.map((video, idx) => (
                    <VideoCard video={video} key={idx} />
                ))}
            </div>
        </section>
    );
};
