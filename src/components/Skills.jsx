import React, { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// Skill images
const skillImages = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind Css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  JQuery: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
};

const allSkills = Object.keys(skillImages);

const Skills = () => {
  const scrollRef = useRef(null);

  return (
    <div className="  text-black w-full py-16 flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-center mb-6">
        Technical Skills
      </h1>

      <div className="relative w-full max-w-6xl px-8">
        {/* Scrollable Row (No scrollbar visible) */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-4 pb-2 scroll-smooth "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Hide scrollbar for Chrome/Safari */}
          <style dangerouslySetInnerHTML={{
            __html: `
              .scroll-container::-webkit-scrollbar {
                display: none;
              }
            `}}
          />

          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="min-w-[170px] min-h-[200px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img
                  src={skillImages[skill]}
                  alt={skill}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-md font-semibold text-pink-600 bg-pink-50 px-3 py-1.5 rounded-lg group-hover:bg-pink-100 transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;