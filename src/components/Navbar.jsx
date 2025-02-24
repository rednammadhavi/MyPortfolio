import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ["Home", "About", "Skills", "Projects", "Connect"];

    return (
        <nav className='bg-white p-2 shadow-md sticky top-0 z-50 border-b border-gray-700'>
            <div className='container mx-auto flex justify-between items-center px-3'>

                <div className='bg-cover'>
                    <img className='w-12 rounded-2xl' src="/logo.jpeg" alt="Logo" />
                </div>

                <ul className='hidden md:flex gap-5'>
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className='hover:underline text-black font-semibold px-2 cursor-pointer hover:text-pink-950 transition-all duration-200'
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                <button className='md:hidden text-black' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div className={`fixed top-0 left-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4 flex justify-between items-center">
                    <button onClick={() => setIsOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 p-4">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="hover:bg-gray-200 p-2 rounded cursor-pointer hover:text-pink-900 transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {isOpen && (
                <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
            )}
        </nav>
    );
};

export default Navbar;
