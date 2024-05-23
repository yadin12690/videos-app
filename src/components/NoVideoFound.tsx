'use cline'

import React from 'react';

export const NoVideoFound: React.FC = () => {
    return (
        <>
            <div className="col-span-1 md:col-span-1 lg:col-span-1" />
            <div className="col-span-1 flex justify-center items-center">
                <h1 className="text-center font-bold text-black text-lg">No videos were found 😓</h1>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-1" />
        </>
    );
};
