import { FaReact, FaNodeJs, FaAngular, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";

const techs = [
  { icon: <FaReact />, label: "React" },
  { icon: <FaAngular />, label: "Angular" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiDotnet />, label: ".NET" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <FaDatabase />, label: "SQL" },
];

const About = () => (
  <section
    id="about"
    className="py-20 px-6 sm:px-10 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 text-center text-brown-900"
  >
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-amber-900">
      About Me
    </h2>
    <p className="max-w-3xl mx-auto text-base sm:text-lg text-brown-800 leading-relaxed mb-8">
      I’m a Computer Science graduate with strong experience in full-stack
      development. I specialize in building modern, scalable web applications
      using React, Angular, Node.js, .NET, MongoDB, and SQL - with a strong
      focus on performance, clean architecture, and intuitive UI.
    </p>

    <div className="flex justify-center flex-wrap gap-6">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="group relative w-16 h-16 flex items-center justify-center text-3xl sm:text-4xl bg-white bg-opacity-90 text-amber-800 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
        >
          {tech.icon}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-amber-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default About;
