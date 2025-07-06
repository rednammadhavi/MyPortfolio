import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TbHexagonLetterM } from 'react-icons/tb';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <TbHexagonLetterM size={40} className="text-pink-700" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {['home', 'about', 'skills', 'projects'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="text-gray-700 hover:text-pink-700 hover:scale-110 font-medium transition duration-200 capitalize"
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    {/* Desktop Connect Button */}
                    <div className="hidden md:block">
                        <a
                            href="mailto:rednammadhavi@gmail.com"
                            className="bg-pink-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-700 transition duration-200 hover:scale-110"
                        >
                            Connect
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="fixed top-0 left-0 w-64 h-full bg-white p-5 shadow-lg z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Drawer Header */}
                        <div className="flex justify-between items-center mb-6">
                            <TbHexagonLetterM size={30} className="text-pink-700" />
                            <button onClick={() => setIsOpen(false)}>
                                <X size={26} />
                            </button>
                        </div>

                        {/* Drawer Nav */}
                        <ul className="flex flex-col gap-4">
                            {['home', 'about', 'skills', 'projects'].map((section) => (
                                <li
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="p-2 rounded hover:bg-pink-600 hover:text-white transition duration-200 cursor-pointer capitalize"
                                >
                                    {section}
                                </li>
                            ))}
                            <li>
                                <a
                                    href="mailto:rednammadhavi@gmail.com"
                                    className="bg-pink-600 text-white px-3 py-2 rounded-full text-sm font-semibold hover:bg-pink-700 transition duration-200 block text-center"
                                >
                                    Connect
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
