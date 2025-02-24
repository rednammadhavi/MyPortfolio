import React from 'react';
import { FileUser } from 'lucide-react';

const Home = () => {

  const resume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="bg-black h-[90vh] py-5 bg-cover bg-center bg-[url('/body.avif')] flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-[10vw]">

      <div className="flex flex-col items-start justify-center h-full w-full bg-opacity-50 text-center md:text-left">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-white text-2xl md:text-4xl font-light">Hello, I am</h3>
          <h1 className="text-gray-500 text-4xl md:text-6xl font-bold">NAGA MADHAVI REDNAM</h1>
          <h3 className="text-white text-lg md:text-xl font-light">Fullstack Developer | UI & UX Designer</h3>
        </div>


        <button
          onClick={resume}
          className="bg-red-700 rounded-full p-2 px-4 my-3 font-semibold text-white flex items-center gap-2 transition-all duration-200 hover:bg-red-800 hover:scale-105"
        >
          <FileUser size={20} />
          Resume
        </button>
      </div>

      {/* <div className="mt-6 md:mt-0">
        <img
          src="/img.jpg"
          alt="Profile"
          className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover shadow-lg"
        />
      </div> */}

    </div>
  );
};

export default Home;
