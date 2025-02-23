import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-blue-500 p-3 shadow-md'>
            <div className='container mx-auto flex justify-between items-center px-3'>
                <div className='logo'>
                    <img src='' alt='Logo' className='h-10' />
                </div>

                <ul className='hidden md:flex gap-5'>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>Home</li>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>About</li>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>Skills</li>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>Projects</li>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>Connect</li>
                </ul>

                <button
                    className='md:hidden text-white'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <ul className='p-3 flex flex-col items-center gap-3'>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>Home</li>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>About</li>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>Skills</li>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>Projects</li>
                    <li className='hover:underline text-white font-semibold px-2 cursor-pointer'>Connect</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
