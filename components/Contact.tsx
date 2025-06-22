"use client";

import { motion } from "framer-motion";
import { FiMail, FiSend, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-sm uppercase text-gray-500 tracking-wider font-semibold">
            Get in Touch
          </h2>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
            Let’s build something meaningful together.
          </h3>

          <p className="text-base text-gray-600 leading-relaxed">
            Whether you're interested in collaboration, hiring, or just want to
            chat tech — drop me a message and I’ll get back to you within 24 hours.
          </p>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <FiMail className="text-blue-600" />
              <a href="mailto:kailash@example.com" className="hover:underline">
                kailash@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-blue-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-blue-600" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted!");
          }}
        >
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
          >
            Send Message
            <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
