const Skills = () => (
  <section
    id="skills"
    className="py-20 px-6 sm:px-10 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 text-brown-900 text-center"
  >
    <div className="max-w-3xl mx-auto bg-white border border-amber-200 rounded-2xl shadow-md p-6 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-900 mb-6 text-center">
        Technical Skills
      </h2>

      <ul className="list-disc list-inside space-y-4 text-base sm:text-lg text-brown-800 leading-relaxed text-left">
        <li>
          <strong className="text-brown-900">Fullstack Development:</strong>{" "}
          React, TypeScript, Node.js, Express.js
        </li>
        <li>
          <strong className="text-brown-900">Programming Languages:</strong>{" "}
          Java, C, C++, JavaScript, Python
        </li>
        <li>
          <strong className="text-brown-900">Databases:</strong> MongoDB,
          Firebase
        </li>
        <li>
          <strong className="text-brown-900">APIs & Documentation:</strong> REST
          API, Swagger
        </li>
        <li>
          <strong className="text-brown-900">Styling & Tools:</strong> Tailwind
          CSS, Git
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
