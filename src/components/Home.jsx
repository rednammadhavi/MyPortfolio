import React from 'react'

const Home = () => {

  const resume = () => {
    alert("resume downloaded")
  }

  return (
    <>
      <div className="h-[70vh] pt-3 bg-cover bg-center bg-[url('/body.avif')]">
        <div className="flex flex-col items-start justify-center h-full bg-black bg-opacity-50 pl-[10vw]">
          <h3 className="text-white text-4xl font-light">Hello, I am</h3>
          <h1 className="text-gray-400 text-6xl font-bold">NAGA MADHAVI REDNAM</h1>
          <h3 className="text-white text-xl font-light">Fullstack Developer | UI & UX Designer</h3>
          <button onClick={resume} className='bg-red-700 rounded-full p-2 px-3 my-3 font-semibold text-white flex gap-2 hover:bg-red-800 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" /><rect x="6" y="14" width="12" height="8" rx="1" /></svg>
            Print resume
          </button>
        </div>
      </div>

    </>
  )
}

export default Home
