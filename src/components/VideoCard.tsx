'use client';
import React from 'react';
import Image from 'next/image'
import { VideoInfo } from './VideoInfo';
import { Video } from '@/api/types/videos';

type VideoCardProps = {
    video: Video;
    key: number;
}

export const VideoCard = ({ video }: VideoCardProps) => {
    return (
        <div className="bg-gray-100 p-4">
            <div className="flex flex-col">
                <Image
                    src={video.image_url}
                    width={800}
                    height={800}
                    className='rounded-lg px-2 py-2'
                    alt="Picture of the artist"
                />
                <VideoInfo title={video.title} artist={video.artist} year={video.release_year} />
            </div>
        </div>

    );
};
