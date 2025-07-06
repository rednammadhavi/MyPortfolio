import React from 'react';

const Footer = () => {
    return (
        <>

            <div className="  text-black w-full flex flex-col items-center">

                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-3 md:px-16 text-center">

                    <div className="mt-2 md:mt-0 font-light text-sm md:text-base">
                        &copy; {new Date().getFullYear()} rednammadhavi. All rights reserved.
                    </div>

                </div>
            </div>

            <div className="  w-full flex flex-col md:flex-row items-center justify-center p-4 pt-0 md:px-16 text-pink-900 gap-2">
                <span className="text-lg md:text-xl font-semibold">
                    Thanks for Visiting.
                </span>
            </div>
            
        </>
    );
};

export default Footer;
