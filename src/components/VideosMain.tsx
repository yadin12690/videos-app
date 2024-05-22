'use client'
import React from 'react';
import { VideoCard } from './VideoCard';
import { Videos } from '@/api/types/videos';

type VideosMainProps = {
    videos?: Videos;
}

export const VideosMain = ({ videos }: VideosMainProps) => {
    return (
        <section>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {videos && videos.videos.map((video, idx) => (
                    <VideoCard video={video} key={idx} />
                ))}
            </div>
        </section>
    );
};
