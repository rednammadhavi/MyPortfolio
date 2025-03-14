import React from 'react';

const Footer = () => {
    return (
        <>

            <div className="  text-black w-full p-4 flex flex-col items-center">

                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-3 md:px-16 text-center">

                    <div className="mt-2 md:mt-0 font-light text-sm md:text-base">
                        &copy; {new Date().getFullYear()} Rednam Madhavi. All rights reserved.
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Rednam-madhavi" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/github.svg" alt="GitHub" className="w-6 md:w-7 hover:scale-125 transition-transform duration-200" />
                        </a>
                        <a href="https://www.linkedin.com/in/rednam-naga-madhavi-242825318/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 md:w-7 hover:scale-125 transition-transform duration-200" />
                        </a>
                        <a href="https://leetcode.com/u/rednammadhavi/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/leetcode.svg" alt="LeetCode" className="w-6 md:w-7 hover:scale-125 transition-transform duration-200" />
                        </a>
                        <a href="https://www.hackerrank.com/profile/22A31A42E8" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/hackerrank.svg" alt="HackerRank" className="w-6 md:w-7 hover:scale-125 transition-transform duration-200" />
                        </a>
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
