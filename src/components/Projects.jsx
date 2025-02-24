import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="bg-black text-white w-full p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
        <div className="w-full max-w-5xl flex flex-col gap-3 p-2">
          <h1 className="text-2xl font-semibold text-red-700">TEXTUTILS</h1>
          <p className='text-justify font-light'>
            TextUtils is a simple and efficient React app for text manipulation. Built with Bootstrap, it offers text transformation, word and character count, extra space removal, dark mode, and one-click copy. With real-time preview and optimized performance, it’s perfect for writers, developers, and professionals needing quick text edits.
          </p>

          <h3 className="text-xl font-light text-red-700"> Key Features : </h3>
          <p className='font-light'><strong className='text-sm font-semibold'>Text Transformation : </strong> Convert text to uppercase, lowercase, or capitalize with a single click.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Word & Character Count : </strong> Instantly analyze the length of your text.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Remove Extra Spaces : </strong> Clean up unwanted spaces for better readability.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Dark Mode Support : </strong> Switch between light and dark themes for a comfortable user experience.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Clipboard Copy : </strong> Quickly copy modified text with one click.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Real-Time Text Preview : </strong> See changes instantly as you type.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Fully Responsive : </strong> Works seamlessly on desktops, tablets, and mobile devices.</p>
        </div>

        <div className="w-full max-w-5xl flex flex-col gap-3 p-2">
          <h1 className="text-2xl font-semibold text-red-700">ECHONEWS</h1>
          <p className='text-justify font-light'>
            EchoNews is a modern and responsive news aggregator built with React and Bootstrap, leveraging NewsAPI for real-time updates. It offers a clean, intuitive interface that works seamlessly across all devices. With categorized news, search functionality, and smooth navigation, EchoNews provides a fast and efficient way to stay informed anytime, anywhere.
          </p>

          <h3 className="text-xl font-light text-red-700"> Key Features : </h3>
          <p className='font-light'><strong className='text-sm font-semibold'>Latest News Updates : </strong> Get breaking news and trending stories from top publishers. </p>
          <p className='font-light'><strong className='text-sm font-semibold'>Category-Based Filtering : </strong>  Browse news by categories like Technology, Business, Sports, Health, and more. </p>
          <p className='font-light'><strong className='text-sm font-semibold'>Remove Extra Spaces : </strong> Optimized for desktop, tablet, and mobile devices using Bootstrap. </p>
          <p className='font-light'><strong className='text-sm font-semibold'>Fast & Efficient : </strong> React-powered for smooth performance and quick content rendering.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Real-Time Text Preview : </strong> See changes instantly as you type.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Fully Responsive : </strong> Works seamlessly on desktops, tablets, and mobile devices.</p>
        </div>

        <div className="w-full max-w-5xl flex flex-col gap-3 p-2">
          <h1 className="text-2xl font-semibold text-red-700">TaskMaster</h1>
          <p className='text-justify font-light'>
            TaskMaster is a user-friendly and efficient to-do list application built with Vite, React, and Tailwind CSS. It allows seamless task management with the ability to add, edit, and delete tasks while ensuring data persistence through local storage. Designed for speed, simplicity, and responsiveness, TaskMaster helps users stay organized with ease.
          </p>

          <h3 className="text-xl font-light text-red-700"> Key Features : </h3>
          <p className='font-light'><strong className='text-sm font-semibold'>Easy Access : </strong> Add, edit, and delete tasks effortlessly.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Persistent Storage : </strong> Saves tasks in local storage for seamless access.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Fast & Lightweight : </strong> Built with Vite and React for smooth performance.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Real-Time Updates : </strong> Instantly see changes as you add or modify tasks.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Minimal & Intuitive UI : </strong> Styled with Tailwind CSS for a clean and user-friendly experience.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Fully Responsive : </strong> Optimized for desktops, tablets, and mobile devices.</p>
        </div>

        <div className="w-full max-w-5xl flex flex-col gap-3 p-2">
          <h1 className="text-2xl font-semibold text-red-700">SafeOp</h1>
          <p className='text-justify font-light'>
            SafeOp is a secure and user-friendly password manager built with Vite, React, and Tailwind CSS. It helps users store, manage, and retrieve passwords safely using local storage. With a sleek, responsive design and intuitive interface, SafeOp ensures seamless password management while keeping your credentials protected and easily accessible.
          </p>

          <h3 className="text-xl font-light text-red-700"> Key Features : </h3>
          <p className='font-light'><strong className='text-sm font-semibold'>Secure Password Storage: </strong> Safely store and manage your passwords.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Easy Access: </strong> Add, edit, and delete passwords effortlessly.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Persistent Data: </strong> Saves passwords in local storage for seamless retrieval.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Fast & Lightweight: </strong> Built with Vite and React for smooth performance.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Real-Time Updates: </strong> Instantly see changes as you manage your credentials.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Minimal & Intuitive UI: </strong> Styled with Tailwind CSS for a clean and user-friendly experience.</p>
          <p className='font-light'><strong className='text-sm font-semibold'>Fully Responsive: </strong> Optimized for desktops, tablets, and mobile devices.</p>
        </div>


      </div>
    </>
  )
}

export default Projects
