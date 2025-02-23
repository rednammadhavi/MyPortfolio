import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-black p-3 shadow-md sticky top-0 z-50 border-b border-gray-700'>
            <div className='container mx-auto flex justify-between items-center px-3'>
                <div className='h-10 w-12 bg-cover bg-[url("/logo.jpeg")]'></div>

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

            <div className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4 flex justify-between items-center">
                    <button onClick={() => setIsOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 p-4 text-white">
                    <li className="hover:bg-gray-600 p-2 rounded cursor-pointer">Home</li>
                    <li className="hover:bg-gray-600 p-2 rounded cursor-pointer">About</li>
                    <li className="hover:bg-gray-600 p-2 rounded cursor-pointer">Skills</li>
                    <li className="hover:bg-gray-600 p-2 rounded cursor-pointer">Projects</li>
                    <li className="hover:bg-gray-600 p-2 rounded cursor-pointer">Contact</li>
                </ul>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;
