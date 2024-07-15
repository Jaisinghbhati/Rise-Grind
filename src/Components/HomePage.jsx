import { useState, useEffect, useRef } from 'react';
import coffeeImage1 from '/image1.jpg';
import coffeeImage2 from '/image2.jpg';
import coffeeImage3 from '/image3.jpg';
import coffeeImage5 from '/image5.jpg';
import coffeeImage6 from '/image6.jpg';
import coffeepng from '/cup.png';
import heroBackgroundImage from '/Image4.jpg';

const HomePage = () => {
  const images = [
      { src: coffeeImage1, text: "Enrich your day with our flavorful brews." },
      { src: coffeeImage2, text: "Savor the rich aroma of our freshly roasted beans." },
      { src: coffeeImage3, text: "Discover the perfect balance of taste and quality." },
      { src: coffeeImage5, text: "Experience the essence of coffee culture." },
      { src: coffeeImage6, text: "Enjoy a moment of bliss with our specialty coffees." }
  ];

  const aboutUsRef = useRef(null);

  const handleExploreClick = () => {
      document.getElementById('discoverCoffeeSection').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  if (entry.target.classList.contains('slide-left')) {
                      entry.target.classList.add('animate-slide-in-left');
                  } else if (entry.target.classList.contains('slide-right')) {
                      entry.target.classList.add('animate-slide-in-right');
                  }
              }
          });
      }, {
          threshold: 0.1,
      });

      const elements = document.querySelectorAll('.slide-in');
      elements.forEach((element) => {
          observer.observe(element);
      });

      return () => {
          elements.forEach((element) => {
              observer.unobserve(element);
          });
      };
  }, []);

  return (
      <div className="bg-gray-900 text-white">
          <style>
              {`
              .rainbow-line {
                  width: 100%;
                  height: 4px;
                  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
                  background-size: 400% 100%;
                  animation: rainbow 5s linear infinite;
              }

              @keyframes rainbow {
                  0% {
                      background-position: 0% 50%;
                  }
                  100% {
                      background-position: 100% 50%;
                  }
              }

              @keyframes slideInFromLeft {
                  0% {
                      transform: translateX(-100%);
                      opacity: 0;
                  }
                  100% {
                      transform: translateX(0);
                      opacity: 1;
                  }
              }

              @keyframes slideInFromRight {
                  0% {
                      transform: translateX(100%);
                      opacity: 0;
                  }
                  100% {
                      transform: translateX(0);
                      opacity: 1;
                  }
              }

              @keyframes fadeIn {
                  0% {
                      opacity: 0;
                  }
                  100% {
                      opacity: 1;
                  }
              }

              @keyframes pulse {
                  0% {
                      transform: scale(1);
                  }
                  50% {
                      transform: scale(1.05);
                  }
                  100% {
                      transform: scale(1);
                  }
              }

              @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
              }

              .animate-slide-in-left {
                  animation: slideInFromLeft 1s ease-out forwards;
              }

              .animate-slide-in-right {
                  animation: slideInFromRight 1s ease-out forwards;
              }

              .animate-fade-in {
                  animation: fadeIn 2s ease-out forwards;
              }

              .animate-pulse {
                  animation: pulse 2s infinite;
              }

              .blink-animation {
                  animation: blink 2s infinite;
              }

              .slide-in {
                  opacity: 0;
              }

              .form-input {
                  width: 100%;
                  padding: 0.75rem 1rem;
                  font-size: 1rem;
                  line-height: 1.5;
                  color: #4a5568;
                  background-color: #fff;
                  background-clip: padding-box;
                  border: 1px solid #cbd5e0;
                  border-radius: 0.25rem;
                  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              }
              .form-input:focus {
                  outline: 0;
                  border-color: #38a169;
                  box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.5);
              }

              .form-textarea {
                  resize: none;
              }

              .form-button {
                  background-color: #f6e05e;
                  color: #1a202c;
                  border: none;
                  padding: 0.75rem 1rem;
                  font-size: 1rem;
                  line-height: 1.5;
                  border-radius: 0.25rem;
                  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
              }

              .form-button:hover {
                  background-color: #ecc94b;
                  color: #1a202c;
              }
              `}
          </style>

          {/* Hero Section */}
          <section
              className="relative flex items-center justify-center h-screen overflow-hidden"
              style={{
                  backgroundImage: `url(${heroBackgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
              }}
          >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                  <h1 className="text-5xl font-bold mb-4 animate-fade-in p-3">Welcome to Rise&Grind Coffee</h1>
                  <p className="text-lg mb-8 animate-fade-in">Enjoy the best coffee in town!</p>

    <button onClick={handleExploreClick} className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter text-black bg-[#FFBB00] rounded-lg group">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#F1F1F2] rounded-full group-hover:w-56 group-hover:h-56 opacity-30"></span>
      <span className="relative text-lg text-black transition duration-500 ease-in-out transform group-hover:text-white">
        Explore More
      </span>
    </button>
              </div>
          </section>

          {/* About Us Section */}
          <section ref={aboutUsRef} className="lg:flex lg:flex-row lg:items-center bg-[#A7BEAE] w-full pt-6 lg:pl-[170px]">
              {/* Text Section */}
              <div className="container mx-auto px-4 lg:w-1/2 lg:px-16 lg:py-24">
                  <h2 className="text-5xl font-bold mb-6 flex justify-center text-gray-600 lg:pr-[300px]">ABOUT US</h2>
                  <p className="text-xl text-gray-500   mb-4 leading-relaxed">
                      At rise&grind Coffee, we are dedicated to crafting exceptional coffee experiences. Our passion drives us to source the finest beans from across the globe, ensuring every cup is a celebration of flavor and aroma. Step into our cozy cafes, where coffee aficionados find solace and delight in their favorite brews, amidst an ambiance that inspires relaxation and community.
                  </p>
              </div>
              
              {/* Image Section */}
              <div className="lg:w-1/2 lg:ml-auto">
                  <img
                      src={coffeepng} // Image source
                      alt="Coffee Shop"
                      className="w-[300px] h-auto object-cover sm:p-12 lg:w-[50vh] lg:p-16 ml-[50px] blink-animation p-4" // Adjusted size and centered
                  />
              </div>
          </section>

          {/* Discover Our Coffee Section */}
          <section id="discoverCoffeeSection" className="py-12 bg-[#B85042] pt-12">
              <div className="container mx-auto px-4">
                  <h2 className="text-8xl font-bold mb-6 flex justify-center">Discover Our Coffee</h2>
                  <div className="flex flex-wrap justify-center">
                      {images.map((image, index) => (
                          <div
                              key={index}
                              className={`w-full md:w-1/2 lg:w-1/3 p-4 slide-in ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
                          >
                              <div className="relative overflow-hidden rounded-lg">
                                  <img
                                      src={image.src}
                                      alt={`Coffee ${index + 1}`}
                                      className="w-full h-auto object-cover"
                                  />
                                  <p className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-75 text-white text-center py-2 opacity-0 slide-up">
                                      {image.text}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>

          {/* Feedback Form Section */}
          <section className="bg-[#375E97] text-white py-12 ">
              <div className="container mx-auto px-4 ">
                  <h2 className="text-7xl font-bold mb-6 flex justify-center">GIVE US YOUR FEEDBACK</h2>
                  <form className="max-w-lg mx-auto P-3">
                      <div className="mb-4">
                          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
                              Name
                          </label>
                          <input
                              className="form-input"
                              id="name"
                              type="text"
                              placeholder="Enter your name"
                          />
                      </div>
                      <div className="mb-4">
                          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                              Email
                          </label>
                          <input
                              className="form-input"
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                          />
                      </div>
                      <div className="mb-4">
                          <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">
                              Message
                          </label>
                          <textarea
                              className="form-input form-textarea"
                              id="message"
                              placeholder="Enter your message"
                              rows="4"
                          ></textarea>
                      </div>
                      <div className="flex items-center justify-center">
                          <button
                              className="form-button"
                              type="button"
                          >
                              Submit
                          </button>
                      </div>
                  </form>
              </div>
          </section>

          {/* Footer Section */}
          

         
      </div>
  );
};

export default HomePage;
