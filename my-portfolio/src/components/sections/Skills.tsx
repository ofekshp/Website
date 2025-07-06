const Skills = () => (
  <section
    id="skills"
    className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 text-center"
  >
    <details className="group max-w-xl mx-auto text-left bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-sm transition-all duration-300">
      <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg sm:text-xl text-gray-800">
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

      <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base leading-relaxed text-gray-700">
        <li>
          <strong>Fullstack Development:</strong> React, TypeScript, Node.js,
          Express.js
        </li>
        <li>
          <strong>Programming Languages:</strong> Java, C, C++, JavaScript,
          Python
        </li>
        <li>
          <strong>Databases:</strong> MongoDB, Firebase
        </li>
        <li>
          <strong>APIs & Documentation:</strong> REST API, Swagger
        </li>
        <li>
          <strong>Styling & Tools:</strong> Tailwind CSS, Git
        </li>
      </ul>
    </details>
  </section>
);

export default Skills;
