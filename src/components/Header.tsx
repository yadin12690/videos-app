// components/Header.js

import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-center items-center p-4 bg-white border-b border-gray-500">
            <div className="flex justify-center">
                <h1 className="text-black font-bold text-2xl">Video Browser</h1>
            </div>
        </header>
    );
};
