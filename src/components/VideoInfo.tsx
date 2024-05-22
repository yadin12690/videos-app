'use client'

import React from 'react';

type VideoInfoProps = {
    title: string;
    artist: string;
    year: number;
};


export const VideoInfo = ({ title, artist, year }: VideoInfoProps) => {
    return (
        <div className='flex justify-center flex-col text-center bg-[#f5f5dc]'>
            <h2 className="text-lg font-extrabold text-black">{title}</h2>
            <h3 className='text-md font-semibold text-black'>{artist}</h3>
            <p className="text-sm text-gray-800 font-medium">{year}</p>
        </div>
    );
};
