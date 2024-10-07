'use client'
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="text-white fixed bg-primary z-10 top-0 left-0 right-0 p-4">
            <div className="container max-w-4xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center md:hidden">
                    <Image src="/logo.svg" width={80} height={10} alt="Logo" />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex w-full justify-between items-center space-x-4">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/about" className="hover:text-gray-400">About</a>
                    <a href="/services" className="hover:text-gray-400">Shop</a>
                        <a href="/" className="flex items-center">
                        <Image src="/logo.svg" width={80} height={10} alt="Logo" />
                    </a>
                    <a href="/projects" className="hover:text-gray-400">Projects</a>
                    <a href="/contact" className="hover:text-gray-400">Get in touch</a>
                </div>

                {/* Mobile Button and "Get in touch" */}
                <div className="flex md:hidden space-x-4 items-center">
                <a href="/contact" className="hover:text-gray-400">Get in touch</a>
                    <button onClick={toggleSidebar} className="focus:outline-none hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Sidebar for Mobile */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden flex justify-end">
                    <div className="w-64 bg-white p-4 text-dark">
                        <button onClick={toggleSidebar} className="flex justify-end mb-4 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <a href="/" className="block py-2 hover:text-gray-400">Home</a>
                        <a href="/about" className="block py-2 hover:text-gray-400">About</a>
                        <a href="/services" className="block py-2 hover:text-gray-400">Shop</a>
                        <a href="/projects" className="block py-2 hover:text-gray-400">Projects</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
