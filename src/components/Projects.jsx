import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

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
    name: "News Aggregation App",
    image: "/assets/projects/newsaggapp.png",
    description:
      "News aggregator app using React and NewsAPI to display real-time news across categories.",
    tags: ["React", "Bootstrap", "NewsAPI", "News App"],
    more: "https://github.com/rednammadhavi/NewsAggregationApplication",
  },
];

const Projects = () => {
  return (
    <section className="w-full px-6 sm:px-10 py-16 flex flex-col items-center scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 border border-pink-100 transform hover:-translate-y-1"
            >
              {/* Image Container with consistent size and full image display */}
              <div className="bg-gray-50 rounded-t-2xl overflow-hidden flex items-center justify-center h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-h-full object-contain p-2 rounded-2xl"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg text-center font-semibold text-pink-700 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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
