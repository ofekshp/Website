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
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(
    new Set()
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const peekSize = 50;

  useEffect(() => {
    const updateLayout = () => {
      const mobile = window.innerWidth < 640;
      const base = mobile ? window.innerWidth * 0.8 : 360;
      setCardWidth(base);
      setVisibleCount(mobile ? 1 : 3);
      setIsMobile(mobile);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handleNext = () =>
    startIndex + visibleCount < projects.length && setStartIndex((i) => i + 1);
  const handlePrev = () => startIndex > 0 && setStartIndex((i) => i - 1);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }

    setTouchStartX(null);
  };
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-8 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 text-brown-900 text-center"
    >
      <h2 className="text-3xl font-extrabold mb-10 text-amber-900">Projects</h2>

      <div className="flex flex-col items-center w-full">
        <div
          className="w-full relative mx-auto transition-all duration-300"
          style={{
            maxWidth: isMobile
              ? `${
                  cardWidth +
                  (startIndex + visibleCount < projects.length ? peekSize : 0)
                }px`
              : `${
                  3 * cardWidth +
                  2 * 24 +
                  (startIndex + visibleCount < projects.length ? peekSize : 0)
                }px`,
            overflow: "hidden",
          }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (cardWidth + 24)}px)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((p, i) => {
              const expanded = expandedIndices.has(i);
              const text = expanded
                ? p.description
                : p.description.slice(0, 150) + "...";
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col flex-shrink-0 w-full transition-transform duration-300 hover:-translate-y-1 text-brown-900"
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: i !== projects.length - 1 ? "24px" : "0px",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="mb-4 text-sm text-brown-700 leading-relaxed">
                    {text}
                  </p>
                  <div className="mt-auto flex flex-col items-start space-y-2">
                    <button
                      onClick={() => {
                        const newSet = new Set(expandedIndices);
                        newSet.has(i) ? newSet.delete(i) : newSet.add(i);
                        setExpandedIndices(newSet);
                      }}
                      className="text-amber-600 text-sm font-medium hover:underline"
                    >
                      {expanded ? "Show less" : "Read more"}
                    </button>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 text-sm font-semibold hover:underline"
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 hidden sm:flex items-center gap-4">
          <button
            onClick={(e) => (handlePrev(), e.currentTarget.blur())}
            disabled={startIndex === 0}
            className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow text-2xl focus:outline-none ${
              startIndex === 0
                ? "opacity-30 cursor-not-allowed pointer-events-none"
                : "hover:shadow-lg transition"
            }`}
          >
            ←
          </button>
          <button
            onClick={(e) => (handleNext(), e.currentTarget.blur())}
            disabled={startIndex + visibleCount >= projects.length}
            className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow text-2xl focus:outline-none ${
              startIndex + visibleCount >= projects.length
                ? "opacity-30 cursor-not-allowed pointer-events-none"
                : "hover:shadow-lg transition"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
