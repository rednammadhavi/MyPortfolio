import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="bg-black text-white w-full p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
        <div className="w-full max-w-5xl flex flex-col gap-1 p-2">

          <h1 className="text-2xl font-semibold text-red-700">TEXTUTILS</h1>
          <p className='text-justify font-light'>
            TextUtils is a simple and efficient React app for text manipulation. Built with Bootstrap, it offers text transformation, word and character count, extra space removal, dark mode, and one-click copy. With real-time preview and optimized performance, it’s perfect for writers, developers, and professionals needing quick text edits.
          </p>

          <h3 className="text-xl font-light text-red-700"> Key Features : </h3>
          <p className='text-sm font-extralight'>Text Transformation | Word & Character Count | Remove Extra Spaces | Dark Mode Support | Clipboard Copy | Real-Time Text Preview | Fully Responsive</p>

        </div>

        <div className="w-full max-w-5xl flex flex-col gap-1 p-2">
          <h1 className="text-2xl font-semibold text-red-700">ECHONEWS</h1>
          <p className='text-justify font-light'>
            EchoNews is a modern and responsive news aggregator built with React and Bootstrap, leveraging NewsAPI for real-time updates. It offers a clean, intuitive interface that works seamlessly across all devices. With categorized news, search functionality, and smooth navigation, EchoNews provides a fast and efficient way to stay informed anytime, anywhere.
          </p>

          <h3 className="text-xl font-light text-red-700"> Key Features : </h3>
          <p className='text-sm font-extralight'>Latest News Updates | Category-Based Filtering | Remove Extra Spaces | Fast & Efficient | Real-Time Text Preview | Fully Responsive</p>

        </div>

        <div className="w-full max-w-5xl flex flex-col gap-1 p-2">
          <h1 className="text-2xl font-semibold text-red-700">TaskMaster</h1>
          <p className='text-justify font-light'>
            TaskMaster is a user-friendly and efficient to-do list application built with Vite, React, and Tailwind CSS. It allows seamless task management with the ability to add, edit, and delete tasks while ensuring data persistence through local storage. Designed for speed, simplicity, and responsiveness, TaskMaster helps users stay organized with ease.
          </p>

          <h3 className="text-xl font-light text-red-700"> Key Features : </h3>
          <p className='text-sm font-extralight'>Easy Access | Persistent Storage | Fast & Lightweight | Real-Time Updates | Minimal & Intuitive UI | Fully Responsive</p>

        </div>

        <div className="w-full max-w-5xl flex flex-col gap-1 p-2">
          <h1 className="text-2xl font-semibold text-red-700">SafeOp</h1>
          <p className='text-justify font-light '>
            SafeOp is a secure and user-friendly password manager built with Vite, React, and Tailwind CSS. It helps users store, manage, and retrieve passwords safely using local storage. With a sleek, responsive design and intuitive interface, SafeOp ensures seamless password management while keeping your credentials protected and easily accessible.
          </p>

          <h3 className="text-xl font-light text-red-700"> Key Features : </h3>
          <p className='text-sm font-extralight'>Secure Password Storage | Easy Access | Persistent Data | Fast & Lightweight | Real-Time Updates | Minimal & Intuitive UI | Fully Responsive</p>


        </div>


      </div>
    </>
  )
}

export default Projects
