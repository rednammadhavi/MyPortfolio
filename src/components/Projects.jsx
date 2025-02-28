import React from 'react';

const Projects = () => {

  const projects = [
    {
      name: "Textify",
      link: "https://textify-two.vercel.app/",
      code: "https://github.com/Rednam-madhavi/Textify",
      description: "Textify is a simple React app that helps you edit text quickly. It lets you change text case, count words, remove extra spaces, switch to dark mode, and copy with one click."
    },
    {
      name: "EchoNews",
      link: "https://drive.google.com/file/d/1UEQOhJ_MLKtV6Pi2u1YlORbWZkbzM8Rv/view?usp=sharing",
      code: "https://github.com/Rednam-madhavi/EchoNews",
      description: "EchoNews is a simple and easy-to-use news app that keeps you updated in real time. Built with React and Bootstrap, it lets you browse news by category, search for topics, and enjoy a smooth reading experience on any device."
    },
    {
      name: "TaskManager",
      link: "https://task-manager-six-woad-33.vercel.app/",
      code: "https://github.com/Rednam-madhavi/TaskManager",
      description: "TaskManager is a simple and fast to-do list app built with Vite, React, and Tailwind CSS. It lets you add, edit, and delete tasks while saving them automatically, helping you stay organized effortlessly."
    },
    {
      name: "SafeOp",
      link: "https://safe-op-pasword-manager.vercel.app/",
      code: "https://github.com/Rednam-madhavi/SafeOp-PaswordManager",
      description: "SafeOp is a simple and secure password manager built with Vite, React, and Tailwind CSS. It lets you store, manage, and retrieve passwords safely using local storage, all with a sleek and easy-to-use design."
    }
  ];

  return (
    <div className="  text-black w-full py-14 flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-center mb-6">Projects</h1>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        {projects.map((project, index) => (
          <div key={index} className=" bg-gray-100 shadow-lg rounded-2xl p-4 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-pink-900">{project.name}</h1>
            <p className='text-justify font-light'>{project.description}</p>
            <div className='mt-auto flex justify-end gap-2'>
              <a
                href={project.link}
                target="_blank"
                className='bg-pink-900 text-white px-4 py-2 rounded-lg hover:bg-pink-800 transition-all hover:scale-105'>
                Visit
              </a>
              <a
                href={project.code}
                target="_blank"
                className='bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all hover:scale-105'>
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
