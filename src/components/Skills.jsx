import React from 'react';

const Skills = () => {
  return (
    <div className="bg-black text-white w-full p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-6">Skills</h1>

      <div className="w-full max-w-5xl flex flex-col gap-3 p-2">
        <h1 className="font-semibold text-sm py-1">
          Programming Languages :  
          <span className="font-light"> Python | Java | C | HTML | CSS | JavaScript</span>
        </h1>

        <h1 className="font-semibold text-sm py-1">
          Libraries/Frameworks :  
          <span className="font-light"> jQuery | React | Node | Express | Next.js</span>
        </h1>

        <h1 className="font-semibold text-sm py-1">
          Tools / Platforms :  
          <span className="font-light"> Git | GitHub | VS Code</span>
        </h1>

        <h1 className="font-semibold text-sm py-1">
          Databases :  
          <span className="font-light"> MySQL | MongoDB</span>
        </h1>

        <h1 className="font-semibold text-sm py-1">
          Soft Skills :  
          <span className="font-light"> Effective Communication | Adaptability | Critical Thinking | Team Collaboration | Self-Motivation</span>
        </h1>
      </div>
    </div>
  );
};

export default Skills;
