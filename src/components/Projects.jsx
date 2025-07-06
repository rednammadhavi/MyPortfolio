import React, { useRef, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const projects = [
  {
    name: "Table Reservation App",
    image: "/assets/projects/bookatable.png",
    description:
      "Full-stack restaurant table reservation system with real-time availability, secure auth, and a responsive UI.",
    tags: ["MERN Stack", "Tailwind CSS", "Table Booking"],
    more: "https://github.com/rednammadhavi/RestaurantTableReservationApp",
  },
  {
    name: "Ecommerce Application",
    image: "/assets/projects/ecommerce.png",
    description:
      "Full-stack ecommerce app with real-time cart, wishlist, JWT auth, category-based filters and responsive UI.",
    tags: ["MERN Stack", "Tailwind CSS", "JWT", "Ecommerce"],
    more: "https://github.com/rednammadhavi/EcommerceApplicationUsingMern",
  },
  {
    name: "Documentation App",
    image: "/assets/projects/mern.png",
    description:
      "Developer-focused documentation web application for MERN stack with guides, tutorials, and project examples.",
    tags: ["React", "Tailwind CSS", "Docs", "MERN Developers"],
    more: "https://github.com/rednammadhavi/DocumentationApplicationForMernDevelopers",
  },
  {
    name: "Image Generator",
    image: "/assets/projects/imagegenerator.png",
    description:
      "An AI-powered web application that transforms text prompts into unique images using OpenAI's API.",
    tags: ["MERN Stack", "Tailwind CSS", "OpenAI", "Image Generator"],
    more: "https://github.com/rednammadhavi/ImageGeneratorUsingOpenAI",
  },
  {
    name: "News Aggregation App",
    image: "/assets/projects/newsaggapp.png",
    description:
      "News aggregator app using React and NewsAPI to display real-time news across categories.",
    tags: ["React", "Bootstrap", "NewsAPI", "News App"],
    more: "https://github.com/rednammadhavi/NewsAggregationApplication",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && scrollRef.current?.blur();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="w-full px-4 py-16 text-black relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Projects
        </h2>

        {/* Left Scroll Button - hidden on large screens */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-pink-200 shadow-md rounded-full p-2 lg:hidden"
        >
          <AiOutlineArrowLeft className="text-pink-600" size={22} />
        </button>

        {/* Right Scroll Button - hidden on large screens */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border border-pink-200 shadow-md rounded-full p-2 lg:hidden"
        >
          <AiOutlineArrowRight className="text-pink-600" size={22} />
        </button>


        {/* Scrollable Cards (All Screens) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[300px] max-w-[320px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-pink-100 flex-shrink-0"
            >
              <div className="p-4 bg-gray-50 rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-contain border border-gray-200 rounded-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-700 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-100 text-pink-800 text-xs px-2 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.more}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-pink-600 hover:text-pink-800 font-semibold text-sm"
                >
                  View Repo <AiOutlineArrowRight size={16} className="ml-1 pt-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
