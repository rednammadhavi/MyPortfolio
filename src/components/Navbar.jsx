import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className='bg-white p-4 shadow-md sticky top-0 z-50 border-b border-gray-700'>
            <div className='container mx-auto flex justify-between items-center px-3'>
                <div className='h-10 rounded-xl w-12 bg-cover bg-[url("/logo.jpeg")]'></div>

                <ul className='hidden md:flex gap-5'>
                    <li onClick={() => scrollToSection('home')} className='hover:scale-105 transition-all duration-200 cursor-pointer hover:font-semibold hover:text-pink-900 px-2 hover:bg-pink-100 rounded-md p-2'>Home</li>
                    <li onClick={() => scrollToSection('about')} className='hover:scale-105 transition-all duration-200 cursor-pointer hover:font-semibold hover:text-pink-900 px-2 hover:bg-pink-100 rounded-md p-2'>About</li>
                    <li onClick={() => scrollToSection('skills')} className='hover:scale-105 transition-all duration-200 cursor-pointer hover:font-semibold hover:text-pink-900 px-2 hover:bg-pink-100 rounded-md p-2'>Skills</li>
                    <li onClick={() => scrollToSection('projects')} className='hover:scale-105 transition-all duration-200 cursor-pointer hover:font-semibold hover:text-pink-900 px-2 hover:bg-pink-100 rounded-md p-2'>Projects</li>
                    <li onClick={() => scrollToSection('connect')} className='hover:scale-105 transition-all duration-200 cursor-pointer hover:font-semibold hover:text-pink-900 px-2 hover:bg-pink-100 rounded-md p-2'>Connect</li>
                </ul>

                <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4 flex justify-between items-center">
                    <button onClick={() => setIsOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 p-4">
                    <li onClick={() => scrollToSection('home')} className="hover:bg-pink-300 p-2 rounded cursor-pointer">Home</li>
                    <li onClick={() => scrollToSection('about')} className="hover:bg-pink-300 p-2 rounded cursor-pointer">About</li>
                    <li onClick={() => scrollToSection('skills')} className="hover:bg-pink-300 p-2 rounded cursor-pointer">Skills</li>
                    <li onClick={() => scrollToSection('projects')} className="hover:bg-pink-300 p-2 rounded cursor-pointer">Projects</li>
                    <li onClick={() => scrollToSection('connect')} className="hover:bg-pink-300 p-2 rounded cursor-pointer">Connect</li>
                </ul>
            </div>

            {isOpen && (
                <div className="fixed inset-0 opacity-30" onClick={() => setIsOpen(false)} />
            )}
        </nav>
    );
};

export default Navbar;
