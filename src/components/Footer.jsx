import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black w-full flex flex-col md:flex-row items-center justify-center p-4 md:px-16 text-red-600 gap-2">
            <span className="text-lg md:text-xl font-semibold hover:text-red-500 transition-colors duration-200">
                Thanks for Visiting.
            </span>
        </div>
    );
};

export default Footer;
