import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md transition duration-500 ease-in-out sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <span className="heading text-xl font-bold cursor-pointer transform hover:scale-110 transition duration-300">Rise&Grind</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 transform hover:-translate-y-1">Home</Link>
            <Link to="/Blog" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 transform hover:-translate-y-1">Blog</Link>
            <Link to="/Menu" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 transform hover:-translate-y-1">Menu</Link>
            <Link to="/ContactForm">
              <button className="animated-button px-4 py-2 text-sm font-medium text-white bg-[#FFBB00] rounded hover:bg-[#FFBB00] focus:outline-none transition duration-300 transform hover:scale-110">
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-300 transform hover:rotate-180">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden transition duration-500 ease-in-out transform">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 transform hover:translate-x-2">Home</Link>
            <Link to="/Blog" className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 transform hover:translate-x-2">Blog</Link>
            <Link to="/Menu" className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 transform hover:translate-x-2">Menu</Link>
            <Link to="/ContactForm">
              <button className="animated-button px-4 py-2 text-sm font-medium text-white bg-[#FFBB00] rounded hover:bg-[#FFBB00] focus:outline-none transition duration-300 transform hover:scale-110">
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
