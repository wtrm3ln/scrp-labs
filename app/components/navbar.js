'use client'
import { useState } from 'react';
import Image from 'next/image';
import Underline from './underline';
import Circle from './circle';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGetInTouchHovered, setIsGetInTouchHovered] = useState(false);
  const router = useRouter();

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      // For in-page navigation
      const sectionId = href.slice(1); // Remove the '#' to get the section ID
      if (router.pathname === "/") {
        // If already on the home page, scroll to the section
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If not on the home page, navigate to it and scroll after rendering
        router.push(`/#${sectionId}`);
      }
    } else {
      // Navigate to other pages normally
      router.push(href);
    }
  };

  const MenuItem = ({ href, text, showUnderline = true }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className="cursor-default flex flex-col items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleNavigation(href)}
      >
        <p href={href} className={`relative flex flex-col items-center justify-center`}>
          {text}
          {showUnderline && <Underline isVisible={isHovered} />}
        </p>
      </div>
    );
  };

  const menuItems = [
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "/store", text: "Store" },
    { href: "/projects", text: "Projects" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="text-white fixed bg-primary z-[99] w-screen top-0 left-0 right-0">
      <div className="container max-w-[90vw] py-2 md:py-0 md:max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center md:hidden">
          <Image src="/logo.svg" width={80} height={10} alt="Logo" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center w-full font-medium space-x-10">

        <div className="flex justify-end items-center space-x-10">
                {menuItems.slice(0, 3).map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>

          {/* Center Logo */}
          <div className="flex justify-center items-center">
            <a href="/" className="flex items-center">
              <Image src="/logo.svg" width={80} height={10} alt="Logo" />
            </a>
          </div>

          {/* Right Menu Items */}
          <div className="flex justify-start items-center space-x-10">
            {menuItems.slice(3).map((item, index) => (
              <MenuItem key={index + 3} {...item} />
            ))}
            <a
              href="/contact"
              className="relative p-6 whitespace-nowrap"
              onMouseEnter={() => setIsGetInTouchHovered(true)}
              onMouseLeave={() => setIsGetInTouchHovered(false)}
            >
              Get in Touch
              <div className="absolute inset-0">
                <Circle isVisible={isGetInTouchHovered} />
              </div>
            </a>
          </div>
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
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;