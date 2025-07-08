import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../../services/contactService";
import ContactForm from "./ContactForm";

const Contact = () => (
  <section
    id="contact"
    className="py-20 px-6 sm:px-10 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 text-brown-900 text-center"
  >
    <h2 className="text-3xl font-extrabold text-amber-900 mb-4">Contact Me</h2>
    <p className="mb-10 text-brown-800">
      Feel free to send a message using the form or reach out via WhatsApp.
    </p>

    <div className="flex flex-col lg:flex-row justify-center items-start gap-10 max-w-4xl mx-auto">
      <div className="w-full max-w-md mx-auto">
        <ContactForm />
      </div>

      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-lg transition w-full max-w-xs mx-auto lg:mx-0"
      >
        <FaWhatsapp className="text-2xl" />
        WhatsApp Me
      </a>
    </div>

    <div className="flex justify-center gap-8 text-3xl text-amber-800 mt-16">
      {[
        {
          href: "https://github.com/ofekshp",
          icon: FaGithub,
          label: "GitHub",
        },
        {
          href: "https://www.linkedin.com/in/ofek-shpirer/",
          icon: FaLinkedin,
          label: "LinkedIn",
        },
      ].map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative transition-transform hover:scale-110"
        >
          <Icon />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-amber-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {label}
          </span>
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
