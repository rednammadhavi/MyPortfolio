import React from 'react';

const About = () => {
  return (
    <div className="  text-black w-full p-6 flex flex-col items-center py-14">
      <h1 className="text-4xl font-semibold text-center">About Me</h1>

      <div className="flex items-center justify-center pt-3 p-10">
        <div className="text-center max-w-3xl">
          <div className="font-normal space-y-4">

            <p className=' p-4 text-center'>
              I am a Full Stack Developer passionate about building scalable web applications with user friendly experiences. I specialize in responsive interfaces, backend logic, and integrating databases and APIs.
            </p>

            <p className='p-4 text-center'>
              My focus is on writing clean, maintainable code while ensuring security, efficiency, and scalability. My goal is to gain real-world experience and create impactful, user-friendly applications.
            </p>

          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row justify-around gap-6 w-full max-w-7xl">

        <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-pink-900 mb-2">Personal Info</h2>
          <div className="text-justify space-y-2">
            <p className="font-semibold text-sm">Name: <span className="font-normal">Rednam Naga Madhavi</span></p>
            <p className="font-semibold text-sm">Nationality: <span className="font-normal">Indian</span></p>
            <p className="font-semibold text-sm">Location: <span className="font-normal">Kakinada</span></p>
            <p className="font-semibold text-sm">Phone: <span className="font-normal">+91 9100736575</span></p>
            <p className="font-semibold text-sm">Gmail: <span className="font-normal">rednammadhavi@gmail.com</span></p>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-pink-900 mb-2">Education</h2>
          <div className="text-justify space-y-2">
            <div className='flex flex-col py-1'>
              <span className='text-sm text-pink-900'>2022 - 2026</span>
              <p className="font-semibold text-sm">B.Tech (CSE - AI & ML): <span className="font-normal">Pragati Engineering College, Kakinada</span></p>
            </div>
            <div className='flex flex-col py-1'>
              <span className='text-sm text-pink-900'>2020 - 2022</span>
              <p className="font-semibold text-sm">Intermediate: <span className="font-normal">Madhuri Junior College, Gollaprolu</span></p>
            </div>
            <div className='flex flex-col py-1'>
              <span className='text-sm text-pink-900'>2019 - 2020</span>
              <p className="font-semibold text-sm">10th Board: <span className="font-normal">Madhuri Vidyalaya, Gollaprolu</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
