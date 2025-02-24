import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="bg-black text-white w-full p-6 flex flex-col items-center">

        <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>

        <div className="w-full max-w-5xl flex flex-col gap-1 p-2">

          <h1 className="text-2xl font-semibold text-red-700">
            TEXTUTILS - <a href='https://textify-two.vercel.app/' target='_blank' className='font-light'>Link</a>
          </h1>
          <p className='text-justify font-light'>
            Textify is a simple React app that helps you edit text quickly. It lets you change text case, count words, remove extra spaces, switch to dark mode, and copy with one click.
          </p>

        </div>

        <div className="w-full max-w-5xl flex flex-col gap-1 p-2">

          <h1 className="text-2xl font-semibold text-red-700">
            ECHONEWS - <a href='https://echonews-daily-news-app.vercel.app/' target='_blank' className='font-light'>Link</a>
          </h1>
          <p className='text-justify font-light'>
            EchoNews is a simple and easy-to-use news app that keeps you updated in real time. Built with React and Bootstrap, it lets you browse news by category, search for topics, and enjoy a smooth reading experience on any device.
          </p>

        </div>

        <div className="w-full max-w-5xl flex flex-col gap-1 p-2">

          <h1 className="text-2xl font-semibold text-red-700">
            TaskManager - <a href='https://task-manager-six-woad-33.vercel.app/' target='_blank' className='font-light'>Link</a>
          </h1>
          <p className='text-justify font-light'>
            TaskManager is a simple and fast to-do list app built with Vite, React, and Tailwind CSS. It lets you add, edit, and delete tasks while saving them automatically, helping you stay organized effortlessly.
          </p>

        </div>

        <div className="w-full max-w-5xl flex flex-col gap-1 p-2">

          <h1 className="text-2xl font-semibold text-red-700">
            SafeOp - <a href='https://safe-op-pasword-manager.vercel.app/' target='_blank' className='font-light'>Link</a>
          </h1>
          <p className='text-justify font-light '>
            SafeOp is a simple and secure password manager built with Vite, React, and Tailwind CSS. It lets you store, manage, and retrieve passwords safely using local storage, all with a sleek and easy-to-use design.
          </p>

        </div>

      </div>
    </>
  )
}

export default Projects
