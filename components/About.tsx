"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white w-full min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Strategic Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-sm uppercase text-gray-500 tracking-wider font-semibold">
            About Me
          </h2>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
            Building intelligent systems that scale with purpose, clarity, and impact.
          </h3>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-gray-900">
              Venkata Kailash
            </span>
            , an AI-focused full-stack engineer currently pursuing my Master’s
            in Data Science. My work integrates machine learning, system
            architecture, and product-driven thinking to deliver intelligent,
            scalable software solutions.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            From LLM integrations to real-time data pipelines, I’ve built
            systems that automate operations, enhance decision-making, and
            elevate user experience. My philosophy: technology should be
            strategic, adaptive, and human-centered.
          </p>

          {/* Quote block */}
          <div className="border-l-4 pl-4 text-gray-600 border-blue-500 italic text-sm sm:text-base">
            “I don’t just build features — I craft scalable systems that solve problems elegantly.”
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-semibold text-gray-900 mt-6 mb-3">
              Key Competencies:
            </h4>
            <div className="flex flex-wrap gap-2 text-sm font-mono text-blue-700">
              {[
                "AI/ML Systems",
                "Python · TensorFlow",
                "Full-Stack Engineering",
                "LLM Integration",
                "Data Architecture",
                "Product Thinking",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Image with styled border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div className="absolute top-6 left-6 w-full h-full bg-black border-2 border-[#4C6EF5] rounded-lg z-0 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 ease-out"></div>
            <Image
              src="/kailash.jpg"
              alt="Venkata Kailash"
              width={350}
              height={350}
              className="relative z-10 rounded-lg grayscale-0 hover:grayscale transition duration-300 shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
