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

    // Name: English or Hebrew only, no numbers or special characters, max 25 chars
    if (!/^[A-Za-z\u0590-\u05FF\s]{1,25}$/.test(name)) {
      newErrors.user =
        "Name must be only English or Hebrew letters (max 25 characters).";
    }

    // Email: Valid format, English letters + numbers, max 25
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email) ||
      email.length > 25
    ) {
      newErrors.email = "Enter a valid email (max 25 characters).";
    }

    // Message: 1–100 characters
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
    setStatus(null); // clear status on change
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
      className="max-w-xl mx-auto space-y-4 text-left"
    >
      {/* Name */}
      <div>
        <input
          type="text"
          name="user"
          placeholder="Your Name"
          value={formData.user}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        {errors.user && (
          <p className="text-red-600 text-sm mt-1">{errors.user}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded h-32 resize-none"
          required
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
      >
        Send Message
      </button>

      {/* Status Message */}
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
