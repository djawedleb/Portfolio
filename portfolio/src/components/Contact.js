'use client'
import 'tailwindcss/tailwind.css';
import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    emailjs.send(
      'service_py2f941', // Service ID
      'template_87gsqxz', // Template ID
      formData,
      'hCGLw3PeabCqPoVRk' // Public Key
    )
    .then((result) => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, (error) => {
      setStatus("Failed to send message. Please try again later.");
    });
  };

  return (
    <div className="bg-[#E0F7FA] py-24 sm:py-1"> {/* Light blue background */}
      {/* Success Toast Popup */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded shadow-lg flex items-center gap-2 animate-fade-in">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          <span>Message sent successfully!</span>
        </div>
      )}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center py-12 border-t border-gray-300">
          <h2 id='contact' className="text-3xl font-bold tracking-tight text-gray-900">Contact Me</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            I'd love to hear from you! Please fill out the form below.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-12 max-w-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Your Message"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0288D1]"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-[#0288D1] px-4 py-2 text-white hover:bg-[#0277BD] transition duration-200"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
