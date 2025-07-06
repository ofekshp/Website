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
  <section
    id="about"
    className="py-16 px-4 sm:px-8 bg-white text-gray-800 text-center"
  >
    <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h2>
    <p className="max-w-md sm:max-w-3xl mx-auto text-base sm:text-lg mb-6">
      I'm a Computer Science graduate with strong experience in full-stack
      development. I specialize in building web apps with modern technologies
      including React, Node.js, and MongoDB. I’m passionate about clean code and
      building user-focused interfaces.
    </p>

    <div className="flex justify-center flex-wrap gap-6 mt-8">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="relative group text-3xl sm:text-4xl cursor-pointer w-16 h-16 flex items-center justify-center"
        >
          {tech.icon}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
            {tech.label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default About;
