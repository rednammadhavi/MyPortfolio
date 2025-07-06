import React from "react";
import { File } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] w-full flex flex-col-reverse md:flex-row items-center justify-around px-4 sm:px-8 lg:px-20 py-10 scroll-mt-20"
    >
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 max-w-2xl">
        <h3 className="text-gray-700 text-lg sm:text-2xl">Hello, I am</h3>

        <h1 className="text-gray-900 text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
          NAGA MADHAVI REDNAM
        </h1>

        <h3 className="text-gray-600 text-base sm:text-xl font-medium">
          Full Stack Developer | UI & UX Designer
        </h3>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-700 rounded-lg px-6 py-3 text-white text-base sm:text-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-pink-800 hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <File size={20} />
          Resume
        </a>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
          {[
            {
              href: "https://github.com/rednammadhavi",
              alt: "GitHub",
              icon: "/assets/github.svg",
            },
            {
              href: "https://www.linkedin.com/in/rednammadhavi/",
              alt: "LinkedIn",
              icon: "/assets/linkedin.svg",
            },
            {
              href: "https://leetcode.com/u/rednammadhavi/",
              alt: "LeetCode",
              icon: "/assets/leetcode.svg",
            },
            {
              href: "https://www.hackerrank.com/profile/22A31A42E8",
              alt: "HackerRank",
              icon: "/assets/hackerrank.svg",
            },
          ].map(({ href, alt, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
              className="p-2 bg-white hover:bg-pink-100 rounded-full border border-pink-600 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <img
                src={icon}
                alt={alt}
                className="w-5 h-5 sm:w-6 sm:h-6"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src="/img.jpg"
          alt="Naga Madhavi Rednam"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-pink-700"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Home;
