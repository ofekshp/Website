import { useState } from "react";
import { sendEmail } from "../../services/emailService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    text: string;
    success: boolean;
  } | null>(null);

  const [errors, setErrors] = useState({
    user: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = { user: "", email: "", message: "" };
    const name = formData.user.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!/^[A-Za-z\u0590-\u05FF\s]{1,25}$/.test(name)) {
      newErrors.user =
        "Name must be only English or Hebrew letters (max 25 characters).";
    }

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) ||
      email.length > 25
    ) {
      newErrors.email = "Enter a valid email (max 25 characters).";
    }

    if (message.length === 0 || message.length > 100) {
      newErrors.message = "Message must be between 1–100 characters.";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((e) => e !== "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const noLeadingSpace = value.replace(/^\s+/, "");

    if (name === "user" && noLeadingSpace.length > 25) return;
    if (name === "email" && noLeadingSpace.length > 25) return;
    if (name === "message" && noLeadingSpace.length > 100) return;

    setFormData({ ...formData, [name]: noLeadingSpace });
    setStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await sendEmail({
        name: formData.user.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      setStatus({ text: "Message sent!", success: true });
      setFormData({ user: "", email: "", message: "" });
      setErrors({ user: "", email: "", message: "" });
    } catch {
      setStatus({
        text: "Failed to send message. Try again later.",
        success: false,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4 text-left bg-white p-6 rounded-2xl shadow-lg border border-amber-200"
    >
      {["user", "email", "message"].map((field, idx) => (
        <div key={idx}>
          {field !== "message" ? (
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={
                field === "user"
                  ? "Your Name"
                  : field === "email"
                  ? "Your Email"
                  : ""
              }
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 text-brown-900"
              required
            />
          ) : (
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-amber-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 text-brown-900"
              required
            />
          )}
          {errors[field as keyof typeof errors] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field as keyof typeof errors]}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:from-amber-700 hover:to-yellow-600 transition duration-300"
      >
        Send Message
      </button>

      {status && (
        <p
          className={`text-sm mt-2 ${
            status.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.text}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
