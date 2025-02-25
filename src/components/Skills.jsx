import React from "react";

const technicalSkills = {
  "Programming Languages": ["Python", "Java", "C", "HTML", "CSS", "JavaScript"],
  "Libraries & Frameworks": ["jQuery", "React", "Node", "Express", "Next.js"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code"],
  "Databases": ["MySQL", "MongoDB"]
};

const softSkills = [
  "Communication", "Adaptability", "Critical Thinking",
  "Team Collaboration", "Self-Motivation", "Time Management",
  "Problem-Solving", "Leadership", "Creativity"
];

const Skills = () => {
  return (
    <div className="text-black w-full p-6 flex flex-col items-center py-14">
      <h1 className="text-4xl font-semibold text-center mb-6 text-gray-900">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-pink-900 mb-2">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{category}</h3>
                <ul className="list-disc pl-5 text-gray-900">
                  {skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-pink-900 mb-2">Soft Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
                <p className="text-gray-900 text-sm">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
