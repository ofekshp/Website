import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiTailwindcss } from "react-icons/si";

const techs = [
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiMongodb />, label: "MongoDB" },
];

const About = () => (
  <section id="about" className="py-16 px-8 bg-white text-gray-800 text-center">
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="max-w-3xl mx-auto text-lg mb-6">
      I'm a Computer Science graduate with strong experience in full-stack
      development. I specialize in building web apps with modern technologies
      including React, Node.js, and MongoDB. I’m passionate about clean code and
      building user-focused interfaces.
    </p>

    <div className="flex justify-center flex-wrap gap-6 mt-8">
      {techs.map((tech, index) => (
        <div key={index} className="relative group text-4xl cursor-pointer">
          {tech.icon}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            {tech.label}
          </span>
        </div>
      ))}
    </div>

    {/* Expandable Section for More Courses */}
    <details className="group mt-12 max-w-xl mx-auto text-left text-gray-700 bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm transition-all duration-300">
      <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-gray-800">
        <span>Technical Skills</span>
        <svg
          className="ml-2 h-5 w-5 transform transition-transform duration-300 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <ul className="list-disc list-inside mt-4 space-y-2 text-sm leading-relaxed">
        <li>Programming Languages: Java, C, C++, Python, JavaScript</li>
        <li>
          Web Fundamentals: HTML, CSS, JavaScript, React, TypeScript, Node.js
        </li>
        <li>API Integration & Docs: REST API, Swagger</li>
        <li>Databases: Firebase, MongoDB</li>
      </ul>
    </details>
  </section>
);

export default About;
