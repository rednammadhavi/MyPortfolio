import React from "react";
import { FileUser } from "lucide-react";

const Home = () => {
  const resume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="md:px-[10vw] min-h-[82vh] flex flex-col md:flex-row items-center justify-around text-black w-full">

      <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
        <h3 className="text-gray-700 text-2xl md:text-4xl font-light">Hello, I am</h3>
        <h1 className="text-gray-900 text-4xl md:text-6xl font-bold tracking-wide">
          NAGA MADHAVI REDNAM
        </h1>
        <h3 className="text-gray-600 text-lg md:text-xl font-medium">
          Full Stack Developer | UI & UX Designer
        </h3>

        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-pink-700 rounded-full px-6 py-3 text-white font-medium flex items-center gap-1 transition-all duration-300 hover:bg-pink-800 hover:scale-105 shadow-xl"
        >
          <FileUser size={26} />
          View Resume
        </a>

      </div>

      <div className=" md:mt-0 flex justify-center">
        <img
          src="/img.jpg"
          alt="Profile"
          className="w-52 h-52 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-[3px] border-pink-700"
        />
      </div>

    </div>
  );
};

export default Home;