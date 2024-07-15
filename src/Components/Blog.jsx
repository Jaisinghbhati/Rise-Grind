import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import 'tailwindcss/tailwind.css';
import blogHeaderImage from '/banner.jpg';
import postImage1 from '/Blog2.jpg';
import postImage2 from '/Blog3.jpg';
import postImage3 from '/Blog4.jpg';
import postImage4 from '/Blog1.jpg';
import postImage5 from '/Blog5.jpg';

const BlogPage = () => {
  useEffect(() => {
    gsap.from(".animate-fade-in-down", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".animate-slide-in", { duration: 1, x: -100, opacity: 0, stagger: 0.3 });
    gsap.from(".animate-fade-in", { duration: 1.5, opacity: 0, stagger: 0.3 });
  }, []);

  return (
    <div className="bg-[#B85042] text-white">
      {/* Blog Header */}
      <header className="bg-cover bg-center h-64 text-center flex items-center justify-center" style={{ backgroundImage: `url(${blogHeaderImage})` }}>
        <h1 className="text-5xl font-bold animate-fade-in-down">Rise&Grind Blog</h1>
      </header>

      {/* Blog Content */}
      <section className="container mx-auto py-8">
        {/* Blog Post 1 */}
        <div className="blog-post flex flex-wrap mb-8 p-4 bg-[#A7BEAE] rounded-lg shadow-lg animate-slide-in">
          <img className="w-full md:w-1/3 rounded-lg" src={postImage1} alt="Exploring the Origins of Coffee" />
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in text-black">Exploring the Origins of Coffee</h2>
            <p className="text-lg animate-fade-in text-black">Discover the rich history and origins of coffee from its beginnings in Ethiopia to its global journey.</p>
          </div>
        </div>
        {/* Blog Post 2 */}
        <div className="blog-post flex flex-wrap mb-8 p-4 bg-[#A7BEAE] rounded-lg shadow-lg animate-slide-in">
          <img className="w-full md:w-1/3 rounded-lg" src={postImage2} alt="The Art of Brewing the Perfect Coffee" />
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in text-black ">The Art of Brewing the Perfect Coffee</h2>
            <p className="text-lg animate-fade-in text-black">Learn the secrets and techniques to brew the perfect cup of coffee at home.</p>
          </div>
        </div>
        {/* Blog Post 3 */}
        <div className="blog-post flex flex-wrap mb-8 p-4 bg-[#A7BEAE] rounded-lg shadow-lg animate-slide-in">
          <img className="w-full md:w-1/3 rounded-lg" src={postImage3} alt="Health Benefits of Coffee" />
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in text-black">Health Benefits of Coffee</h2>
            <p className="text-lg animate-fade-in text-black">Explore the various health benefits of coffee and how it can contribute to a healthy lifestyle.</p>
          </div>
        </div>

 {/* Blog Post 4 */}
        <div className="blog-post flex flex-wrap mb-8 p-4 bg-[#A7BEAE] rounded-lg shadow-lg animate-slide-in">
          <img className="w-full md:w-1/3 rounded-lg" src={postImage4} alt="Health Benefits of Coffee" />
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in text-black">Refreshing Moment</h2>
            <p className="text-lg animate-fade-in text-black">Explore the various health benefits of coffee and how it can contribute to a healthy lifestyle.</p>
          </div>
        </div>

 {/* Blog Post 5 */}

        <div className="blog-post flex flex-wrap mb-8 p-4 bg-[#A7BEAE] rounded-lg shadow-lg animate-slide-in">
          <img className="w-full md:w-1/3 rounded-lg" src={postImage5} alt="Health Benefits of Coffee" />
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in text-black">Enjoy the Refreshment</h2>
            <p className="text-lg animate-fade-in text-black">Explore the various health benefits of coffee and how it can contribute to a healthy lifestyle.</p>
          </div>
        </div>

        
      </section>

      {/* Footer */}
   
      <style jsx>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1.5s ease-out forwards;
        }

        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;