import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section
    id="contact"
    className="py-16 px-4 sm:px-8 bg-white text-center text-gray-800"
  >
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    <p className="mb-6">
      Feel free to reach out via email or connect with me on social media.
    </p>

    <div className="flex justify-center gap-6 text-3xl text-black mt-10">
      {/* GitHub */}
      <a
        href="https://github.com/ofekshp"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative transition"
      >
        <FaGithub className="transition-transform group-hover:scale-125" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
          GitHub
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ofek-shpirer/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative transition"
      >
        <FaLinkedin className="transition-transform group-hover:scale-125" />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
          LinkedIn
        </span>
      </a>
    </div>
  </section>
);

export default Contact;
