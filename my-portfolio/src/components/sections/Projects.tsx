import { useState} from "react";

const projects = [
  {
    title: "TableCore Dashboard – Interactive Data Table & Analytics",
    description:
      "A feature-rich frontend dashboard built with React, TypeScript, and Tailwind CSS. Includes a dynamic, editable table with search, sorting, pagination, and modals for editing and deletion. Integrated Chart.js visualizations show user analytics by age, status, and role. Supports export to CSV and PDF, with persistent state via sessionStorage. Designed with a strong emphasis on responsive UI, accessibility, and real-time interactivity.",
    github: "https://github.com/ofekshp/TableCore",
  },
  {
    title: "SuperEZ – Smart Shopping Comparator",
    description:
      "A full-stack web app that helps users find the most cost-effective supermarket by comparing product prices in real time. Built using the MVC architecture with a React + TypeScript frontend, a Node.js backend, and MongoDB for cart and product storage. A custom Python Selenium scraper collects live data from multiple supermarkets.",
    github: "https://github.com/ofekshp/SuperEZ",
  },
  {
    title: "Dr. Computer – Tech Forum Web App",
    description:
      "A dynamic full-stack forum for tech enthusiasts, built using the MVC architecture. Features include user authentication, post sharing, and interactive Swagger API documentation. Integrates Bing’s REST API to display the latest 10 technology articles. Built with React + TypeScript on the client, Node.js on the server, and MongoDB for data storage.",
    github: "https://github.com/zikili/DrComputerWeb",
  },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const cardWidth = 320 + 24; // 320px + 24px margin

  const handleNext = () => {
    if (startIndex + visibleCount < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-8 bg-gray-100 text-gray-900 text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="text-2xl px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-30"
        >
          ←
        </button>

        <div className="w-full max-w-[1032px] overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out pr-3"
            style={{
              transform: `translateX(-${startIndex * cardWidth}px)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-left w-80 flex-shrink-0 mx-3 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-700">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= projects.length}
          className="text-2xl px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-30"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Projects;
