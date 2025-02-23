import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-700 w-full flex flex-wrap items-center justify-between p-3 md:px-16 text-gray-100 flex-col md:flex-row gap-3">
            <div className="flex items-center gap-3">
                <span>&copy; Rednam Madhavi</span>
            </div>
            <div className="flex gap-5 flex-wrap items-center justify-center">
                <a href="https://github.com/Rednam-madhavi" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/github.svg" alt="GitHub" className="w-6 md:w-7 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/rednam-naga-madhavi-242825318/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/linkedin.svg" alt="LinkedIn" className="w-6 md:w-7 cursor-pointer" />
                </a>
                <a href="https://leetcode.com/u/rednammadhavi/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/leetcode.svg" alt="LeetCode" className="w-6 md:w-7 cursor-pointer" />
                </a>
                <a href="https://www.hackerrank.com/profile/22A31A42E8" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/hackerrank.svg" alt="HackerRank" className="w-6 md:w-7 cursor-pointer" />
                </a>
            </div>
            <div className="flex items-center gap-3">
                <span>Thanks for Visiting.</span>
            </div>
        </div>
    );
};

export default Footer;