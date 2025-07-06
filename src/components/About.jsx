import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 sm:px-10 py-16 flex flex-col items-center scroll-mt-20"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        About Me
      </h2>

      {/* Description */}
      <div className="flex items-center justify-center">
        <div className="text-center max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            I am a{' '}
            <span className="font-semibold text-pink-700">
              Full Stack Developer
            </span>{' '}
            passionate about building scalable web applications with
            user-friendly experiences. I specialize in responsive interfaces,
            backend logic, and integrating databases and APIs.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            My focus is on writing clean, maintainable code while ensuring
            security, efficiency, and scalability. My goal is to gain real-world
            experience and create impactful, user-friendly applications.
          </p>
        </div>
      </div>

      {/* Education Section (Uncommented) */}
      {/* <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 w-full max-w-5xl">
        <div className="w-full md:w-1/2 p-6 rounded-xl shadow-md border border-pink-200 bg-white">
          <h2 className="text-2xl font-semibold text-pink-800 mb-4 border-b border-pink-300 pb-2">
            Education
          </h2>
          <div className="text-gray-800 space-y-4">
            <div>
              <p className="text-sm text-pink-700 font-medium">2022 - 2026</p>
              <p className="font-semibold">
                B.Tech (CSE - AI & ML):{' '}
                <span className="font-normal text-gray-700">
                  Pragati Engineering College, Kakinada
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-pink-700 font-medium">2020 - 2022</p>
              <p className="font-semibold">
                Intermediate:{' '}
                <span className="font-normal text-gray-700">
                  Madhuri Junior College, Gollaprolu
                </span>
              </p>
            </div>
            <div>
              <p className="text-sm text-pink-700 font-medium">2019 - 2020</p>
              <p className="font-semibold">
                10th Board:{' '}
                <span className="font-normal text-gray-700">
                  Madhuri Vidyalaya, Gollaprolu
                </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
