import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="bg-white p-4 shadow-md sticky top-0 z-50 border-b border-gray-700">
            <div className="container mx-auto flex justify-between items-center px-3">
                <div className="h-10 rounded-xl w-12 bg-cover bg-[url('/logo.jpeg')]"></div>

                <ul className="hidden md:flex gap-5">
                    {['home', 'about', 'skills', 'projects', 'connect'].map((section) => (
                        <li
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className="hover:scale-105 transition-all duration-200 cursor-pointer hover:font-semibold hover:text-pink-900 px-2 hover:bg-pink-100 rounded-md p-2"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </li>
                    ))}
                </ul>

                <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsOpen(false)}>
                    <div
                        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out p-4 z-50"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">Menu</span>
                            <button onClick={() => setIsOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-4 mt-4">
                            {['home', 'about', 'skills', 'projects', 'connect'].map((section) => (
                                <li
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="hover:bg-pink-300 p-2 rounded cursor-pointer"
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
