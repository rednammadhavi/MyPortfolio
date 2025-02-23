import React from 'react'

const About = () => {
  return (
    <>
      <div className='bg-black text-white w-full p-10 items-center gap-4'>
        <h1 className='text-4xl '>About Me</h1>
        <div className='p-4'>
          <h1 className='text-2xl font-bold text-red-700 mb-2'>Career Objective</h1>
          <p className='text-justify font-light'>
            Aspiring Full Stack Developer with a strong foundation in front-end and back-end technologies, eager to apply coding skills, problem-solving abilities, and a passion for building scalable web applications. Seeking an opportunity to contribute to innovative projects while continuously learning and growing in a dynamic development environment. Enthusiastic about collaborating with teams to create efficient, user-friendly, and performance-driven solutions.</p>
        </div>
        <div className='p-4 flex flex-col '>
          <h1 className='text-2xl font-bold text-red-700 mb-2'>Personal Info</h1>
          <div className='text-justify'>
            <h1 className='font-semibold text-sm py-1'>Name : <span className='font-light'>Rednam Naga Madhavi</span></h1>
            <h1 className='font-semibold text-sm py-1'>Nationality : <span className='font-light'>Indian</span></h1>
            <h1 className='font-semibold text-sm py-1'>Location : <span className='font-light'>Kakinada</span></h1>
            <h1 className='font-semibold text-sm py-1'>Phone : <span className='font-light'>+91 9100736575</span></h1>
            <h1 className='font-semibold text-sm py-1'>Gmail : <span className='font-light'>rednammadhavi@gmail.com</span></h1>
          </div>
        </div>
      </div >
    </>
  )
}

export default About
