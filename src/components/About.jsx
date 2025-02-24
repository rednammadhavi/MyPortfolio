import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-black w-full p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>

      <div className="w-full max-w-7xl p-2">
        <h1 className="text-2xl font-bold text-pink-900 mb-2">Career Objective</h1>
        <p className="text-justify font-light">
          Aspiring Full Stack Developer with a strong foundation in front-end and back-end technologies, eager to apply coding skills, problem-solving abilities, and a passion for building scalable web applications. Seeking an opportunity to contribute to innovative projects while continuously learning and growing in a dynamic development environment. Enthusiastic about collaborating with teams to create efficient, user-friendly, and performance-driven solutions.
        </p>
      </div>

      <div className="w-full max-w-7xl p-2">
        <h1 className="text-2xl font-bold text-pink-900 mb-2">Personal Info</h1>
        <div className="text-justify space-y-2">
          <h1 className="font-semibold text-sm">Name : <span className="font-light">Rednam Naga Madhavi</span></h1>
          <h1 className="font-semibold text-sm">Nationality : <span className="font-light">Indian</span></h1>
          <h1 className="font-semibold text-sm">Location : <span className="font-light">Kakinada</span></h1>
          <h1 className="font-semibold text-sm">Phone : <span className="font-light">+91 9100736575</span></h1>
          <h1 className="font-semibold text-sm">Gmail : <span className="font-light">rednammadhavi@gmail.com</span></h1>
        </div>
      </div>

      <div className="w-full max-w-7xl p-2">
        <h1 className="text-2xl font-bold text-pink-900 mb-2">Education</h1>
        <div className="text-justify space-y-2">
          <div className='flex flex-col py-1'>
            <span className='text-sm font-extralight text-pink-900'>2022 - 2026</span>
            <h1 className="font-semibold text-sm">Btech (CSE - AI & ML) : <span className="font-light">Pragati Engineering College, Kakinada</span></h1>
          </div>
          <div className='flex flex-col py-1'>
            <span className='text-sm font-extralight text-pink-900'>2020 - 2022</span>
            <h1 className="font-semibold text-sm">Intermediate : <span className="font-light">Madhuri Junior College, Gollaprolu</span></h1>
          </div>
          <div className='flex flex-col py-1'>
            <span className='text-sm  font-extralight text-pink-900'>2019 - 2020</span>
            <h1 className="font-semibold text-sm">10th Borad : <span className="font-light">Madhuri Vidyalaya, Gollaprolu</span></h1>
          </div>
        </div>
      </div>

      {/* ragati
      CGPA: 9.0
      
      
      Percentage: 96.4%
      Madhuri Vidyalaya
      
      Percentage: 95.1% */}
    </div>
  );
};

export default About;
