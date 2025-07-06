import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-16 px-8 bg-white text-center">
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    <p className="mb-6">
      Feel free to reach out via email or connect with me on social media.
    </p>
    <div className="flex justify-center space-x-6 text-3xl">
      <a
        href="https://github.com/ofekshp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ofek-shpirer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  </section>
);

export default Contact;
