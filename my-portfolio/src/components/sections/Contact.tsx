import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import {
  getGmailComposeLink,
  getWhatsAppLink,
} from "../../services/contactService";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 bg-white text-center text-gray-800"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-10">
        Feel free to reach out via email or connect with me on social media.
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href={getGmailComposeLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition"
        >
          <MdEmail className="text-lg" />
          Send Email
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-lg" />
          WhatsApp Me
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-3xl text-black mt-10">
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
};

export default Contact;
