import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../../services/contactService";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-8 bg-white text-gray-800 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-10 text-gray-600">
        Feel free to send a message using the form or reach out via WhatsApp.
      </p>

      {/* Contact Form + WhatsApp Side by Side */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-4xl mx-auto">
        <div className="w-full max-w-md mx-auto">
          <ContactForm />
        </div>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium text-lg px-6 py-3 rounded-full shadow-md transition w-full max-w-xs mx-auto lg:mx-0"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp Me
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-3xl text-black mt-16">
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
