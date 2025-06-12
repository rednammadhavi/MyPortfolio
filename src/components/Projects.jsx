import React, { useRef, useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const projects = [
  {
    name: "Textify",
    image: "/assets/projects/textify.png",
    description:
      "Textify is a simple text editing app built with React and styled using Bootstrap. It lets users quickly change text case, count words and characters, remove extra spaces, and copy text with one click. The app also includes a dark mode for better readability.",
    tags: ["React", "Bootstrap", "Text Utility"],
    more: "https://github.com/Rednam-madhavi/Textify-SimpleTextUtilsApp",
  },
  {
    name: "EchoNews",
    image: "/assets/projects/echonews.png",
    description:
      "EchoNews is a user-friendly news app built with React and styled using Bootstrap. It delivers real-time news updates and allows users to browse articles by category. Responsive design ensures smooth reading across devices.",
    tags: ["React", "Bootstrap", "API Integration", "Real-time News Aggregation"],
    more: "https://github.com/Rednam-madhavi/EchoNews-NewsApplication",
  },
  {
    name: "TaskManager",
    image: "/assets/projects/taskmanager.png",
    description:
      "TaskManager is a lightweight to-do list app built with Vite, React, and Tailwind CSS. It supports add, edit, delete operations with local storage. Perfect for staying organized across devices.",
    tags: ["React", "Tailwind CSS", "To-Do List", "Local Storage"],
    more: "https://github.com/Rednam-madhavi/TaskManager-SimpleToDoApp",
  },
  {
    name: "SafeOp",
    image: "/assets/projects/safeop.png",
    description:
      "SafeOp is a secure password manager built with Vite, React, and Tailwind CSS. It uses browser’s local storage for safely storing and retrieving passwords with a responsive design.",
    tags: ["React", "Tailwind CSS", "Password Manager", "Local Storage"],
    more: "https://github.com/Rednam-madhavi/SafeOp-PasswordManager",
  },
  {
    name: "GenImg",
    image: "/assets/projects/genimg.png",
    description:
      "GenImg is an AI-powered image generator using MERN, Tailwind CSS, and OpenAI. It transforms text prompts into high-quality visuals, useful for creatives, designers, and marketers.",
    tags: ["MERN Stack", "Tailwind CSS", "OpenAI", "AI Image Generation"],
    more: "https://github.com/Rednam-madhavi/GenImg-ImageGeneratorUsingAI",
  },
  {
    name: "MernHub",
    image: "/assets/projects/mernhub.png",
    description:
      "MernHub is a developer-focused documentation platform with guides, resources, and real-world MERN stack applications. Built using Vite, React, and Tailwind CSS.",
    tags: ["Vite", "React", "Tailwind CSS", "Social Media"],
    more: "https://github.com/Rednam-madhavi/MERN-HUB",
  },
  {
    name: "BotNest",
    image: "/assets/projects/botnest.png",
    description:
      "BotNest is an AI chat app using the MERN stack, Tailwind CSS, and OpenAI. It provides human-like responses ideal for support, productivity, and creative chats.",
    tags: ["MERN Stack", "Tailwind CSS", "OpenAI", "Chatbot"],
    more: "https://github.com/Rednam-madhavi/BotNest",
  },
  {
    name: "LittleLemon",
    image: "/assets/projects/littlelemon.png",
    description:
      "Little Lemon is a modern restaurant website built with React and Tailwind CSS. It includes a table booking system and interactive menu for dining experiences.",
    tags: ["React", "Tailwind CSS", "Restaurant table booking"],
    more: "https://github.com/Rednam-madhavi/LittleLemon",
  },
];

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="w-full px-4 py-16 text-black relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-6">My Projects</h1>

        <div className="relative">
          <div
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: `.scroll-container::-webkit-scrollbar { display: none; }`,
              }}
            />

            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-[320px] bg-white rounded-2xl shadow-lg hover:shadow-pink-200 transition-all duration-300 flex-shrink-0"
              >
                <div className="relative group cursor-pointer p-4 bg-gray-50">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-48 object-contain border border-gray-200 rounded-lg"
                    onClick={() => setModalImage(project.image)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition">
                    <button
                      onClick={() => setModalImage(project.image)}
                      className="opacity-0 group-hover:opacity-100 text-white bg-pink-600 px-4 py-2 rounded-lg transition hover:bg-pink-700"
                    >
                      View Fullscreen
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-pink-700 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.more}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-pink-600 hover:underline font-semibold text-sm mt-2 transition"
                  >
                    View Repo <AiOutlineArrowRight size={16} className="pt-1 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal for Image Preview */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
              onClick={() => setModalImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={modalImage}
              alt="Modal Preview"
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
