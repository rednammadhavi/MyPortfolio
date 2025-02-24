import React from 'react'
import { FileUser } from 'lucide-react';

const Home = () => {

  const resume = () => {
    window.open("/resume.pdf")
  };

  return (
    <>
      <div className="h-[90vh] pt-3 bg-cover bg-center bg-opacity-50 bg-[url('/body.avif')] flex w-full justify-center">
        <div className="flex flex-col items-start justify-center h-full bg-opacity-50 pl-[10vw]">
          <h3 className="text-white text-4xl font-light">Hello, I am</h3>
          <h1 className="text-gray-400 text-6xl font-bold">NAGA MADHAVI REDNAM</h1>
          <h3 className="text-white text-xl font-light">Fullstack Developer | UI & UX Designer</h3>
          <button onClick={resume} className='bg-red-700 rounded-full p-2 px-3 my-3 font-semibold text-white flex gap-1 hover:bg-red-800 cursor-pointer'>
            <FileUser />
            Resume
          </button>
        </div>
      </div>

    </>
  )
}

export default Home
