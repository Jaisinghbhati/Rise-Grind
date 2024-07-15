import React, { useEffect, useState } from 'react';
import backgroundImage from '/bgimage1.jpg'; // Replace with your actual path

const ContactForm = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Feel Free to Contact Us';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.8
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes inputFocus {
            from { transform: scale(1); }
            to { transform: scale(1.05); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out forwards;
          }
          .animate-fadeInLeft {
            animation: fadeInLeft 1s ease-in-out forwards;
          }
          .animate-fadeInRight {
            animation: fadeInRight 1s ease-in-out forwards;
          }
          .animate-inputFocus:focus {
            animation: inputFocus 0.3s ease-in-out forwards;
          }
          .button-text-hover {
            position: relative;
            overflow: hidden;
            display: inline-block;
            color: white;
          }
          .button-text-hover::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-image: linear-gradient(to right, transparent, #5a67d8, transparent);
            transform: scaleX(0);
            transition: transform 0.4s;
            transform-origin: left;
          }
          .button-text-hover:hover::before {
            transform: scaleX(1);
          }
          .button-dark {
            background-color: #5a67d8;
            color: white;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          .button-dark:hover {
            background-color: #3e4a7c;
          }
          ::placeholder {
            color: #2d3748; /* Tailwind's gray-800 */
          }
        `}
      </style>
      <div className="w-full md:w-1/2 p-4 md:p-8 rounded-lg mb-8 md:mb-0 md:mr-8 animate-fadeInLeft">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center md:text-left">
          <span className="typing text-5xl ">{displayText}</span>
          {displayText === fullText && <span className="blinking-cursor">|</span>}
        </h1>
        <p className="text-white text-lg text-center md:text-left">
          We are here to assist you. If you have any questions, feel free to reach out to us using the contact form on the right. We will get back to you as soon as possible.
        </p>
      </div>
      <div className="w-full md:w-1/2 max-w-lg bg-white bg-opacity-20 p-4 md:p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-md animate-fadeInRight">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h1>
        <form className="space-y-5">
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="w-full p-4 text-white placeholder-gray-800 bg-transparent border-b-2 border-white focus:outline-none focus:border-black transition-colors animate-inputFocus"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-4 text-white placeholder-gray-800 bg-transparent border-b-2 border-white focus:outline-none focus:border-black transition-colors animate-inputFocus"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-4 text-white placeholder-gray-800 bg-transparent border-b-2 border-white focus:outline-none focus:border-black transition-colors animate-inputFocus"
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full p-4 text-white placeholder-gray-800 bg-transparent border-b-2 border-white focus:outline-none focus:border-black transition-colors animate-inputFocus"
            ></textarea>
          </div>
       
        </form>
        <div className="flex justify-end space-x-4">
            <button
             
              className="py-2 px-6 bg-gray-800 hover:bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105  "
            >
              <span className="button-text-hover">Send</span>
            </button>
            <button
              type="button"
              className="py-2 px-6 bg-gray-800 hover:bg-black text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105  "
            >
              <span className="button-text-hover">Cancel</span>
            </button>
          </div>
      </div>
    </section>
  );
};

export default ContactForm;
