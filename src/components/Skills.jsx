import React from 'react';

const Skills = () => {
  return (
    <div className="bg-white text-black w-full p-6 flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-center mb-4 text-gray-900">Skills</h1>
      <div className=" bg-gray-100  shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-sm text-pink-800 py-1">
            Programming Languages:
            <span className="text-gray-900"> Python | Java | C | HTML | CSS | JavaScript</span>
          </h1>

          <h1 className="font-semibold text-sm text-pink-800 py-1">
            Libraries/Frameworks:
            <span className="text-gray-900"> jQuery | React | Node | Express | Next.js</span>
          </h1>

          <h1 className="font-semibold text-sm text-pink-800 py-1">
            Tools/Platforms:
            <span className="text-gray-900"> Git | GitHub | VS Code</span>
          </h1>

          <h1 className="font-semibold text-sm text-pink-800 py-1">
            Databases:
            <span className="text-gray-900"> MySQL | MongoDB</span>
          </h1>

          <h1 className="font-semibold text-sm text-pink-800 py-1">
            Soft Skills:
            <span className="text-gray-900"> Effective Communication | Adaptability | Critical Thinking | Team Collaboration | Self-Motivation</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;