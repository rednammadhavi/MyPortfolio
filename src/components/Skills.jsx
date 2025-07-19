import React from "react";

const skillImages = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
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
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
};

const Skills = () => {
  const skills = Object.keys(skillImages);
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="w-full px-4 sm:px-10 py-16 flex flex-col items-center scroll-mt-20">

      <div className="max-w-7xl w-full mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Technical Skills
        </h2>

        <div className="relative overflow-hidden">
          <div className="animate-scroll flex gap-6 w-max">
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="skill-card w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-300 flex flex-col items-center justify-center p-6 aspect-square"
              >
                <img
                  src={skillImages[skill]}
                  alt={`${skill} logo`}
                  className="w-12 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-800text-center">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
`}</style>

    </section>
  );
};

export default Skills;
