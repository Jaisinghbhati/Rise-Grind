import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black  text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="flex justify-center">
          <span className="text-sm text-lg">Rise&amp;grind</span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-4 space-x-4">
          <span className="text-white text-lg">
            <FontAwesomeIcon icon={faX} />
          </span>
          <span className="text-white text-lg ">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span className="text-white text-lg">
            <FontAwesomeIcon icon={faYoutube} />
          </span>
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <p className="text-center text-gray-200 text-sm ">&copy; {new Date().getFullYear()} rise&amp;grind. All rights reserved.</p>
          <p className='flex justify-center text-sm text-[12px] '>By-Jai Singh Bhati</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
