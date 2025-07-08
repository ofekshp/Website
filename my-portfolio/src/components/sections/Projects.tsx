import { useEffect, useState } from "react";

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
  {
    title: "Test 1 – Sample Project",
    description:
      "This is a sample project description for testing purposes. It showcases the basic structure and functionality of the project.",
    github: "",
  },
  {
    title: "Test 2 – Sample Project",
    description:
      "This is a sample project description for testing purposes. It showcases the basic structure and functionality of the project.",
    github: "",
  },
  {
    title: "Test 3 – Sample Project",
    description:
      "This is a sample project description for testing purposes. It showcases the basic structure and functionality of the project.",
    github: "",
  },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const peekSize = 50;

  useEffect(() => {
    const updateLayout = () => {
      const mobile = window.innerWidth < 640;
      const width = mobile ? window.innerWidth * 0.8 : 320;
      setCardWidth(width);
      setVisibleCount(mobile ? 1 : 3);
      setIsMobile(mobile);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handleNext = () => {
    if (startIndex + visibleCount < projects.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-8 bg-gray-100 text-gray-900 text-center"
    >
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="flex flex-col items-center justify-center w-full">
        {/* Carousel */}
        <div
          className="w-full relative mx-auto transition-all duration-300"
          style={{
            maxWidth: isMobile
              ? startIndex + visibleCount < projects.length
                ? `${cardWidth + peekSize}px`
                : `${cardWidth}px`
              : startIndex + visibleCount < projects.length
              ? "1100px"
              : "1008px",
            overflow: "hidden",
          }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (cardWidth + 24)}px)`,
            }}
          >
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index;
              const shortText = project.description.slice(0, 200);

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-left flex-shrink-0 hover:shadow-lg transition duration-300"
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: index === projects.length - 1 ? "0px" : "24px",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-700">
                    {isExpanded ? project.description : shortText + "..."}
                  </p>
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="text-blue-600 text-sm mb-4 hover:underline"
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 font-medium hover:underline"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrows below */}
        <div className="mt-4 flex items-center gap-4">
          {/* Left Arrow (unclickable when disabled) */}
          <button
            onClick={(e) => {
              handlePrev();
              (e.currentTarget as HTMLButtonElement).blur();
            }}
            disabled={startIndex === 0}
            className={`
    text-4xl px-4 py-2 rounded
    hover:bg-gray-200
    focus:outline-none focus:ring-0 focus-visible:ring-0
    active:outline-none active:ring-0 active:bg-transparent
    outline-none ring-0 select-none
    ${
      startIndex === 0
        ? "opacity-30 cursor-not-allowed pointer-events-none"
        : ""
    }
  `}
          >
            ←
          </button>

          {/* Right Arrow (unclickable when disabled) */}
          <button
            onClick={(e) => {
              handleNext();
              (e.currentTarget as HTMLButtonElement).blur();
            }}
            disabled={startIndex + visibleCount >= projects.length}
            className={`
    text-4xl px-4 py-2 rounded
    hover:bg-gray-200
    focus:outline-none focus:ring-0 focus-visible:ring-0
    active:outline-none active:ring-0 active:bg-transparent
    outline-none ring-0 select-none
    ${
      startIndex + visibleCount >= projects.length
        ? "opacity-30 cursor-not-allowed pointer-events-none"
        : ""
    }
  `}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
