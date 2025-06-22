"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI-powered Resume Parser",
    description:
      "A deep learning pipeline that extracts structured data from unstructured resumes. Integrated into a real-time recruiter dashboard using NLP + React.",
    tech: ["Python", "spaCy", "React", "MongoDB"],
    github: "https://github.com/yourname/resume-parser",
    demo: "https://resumedemo.vercel.app",
    image: "/resume-parser.png",
  },
  {
    title: "Stock Trend Forecasting Tool",
    description:
      "Built a time-series prediction platform using LSTM + trading indicators. Helps users visualize and act on stock data patterns.",
    tech: ["TensorFlow", "Flask", "Next.js", "Chart.js"],
    github: "https://github.com/yourname/stock-trend-ai",
    demo: "https://stocktrendai.vercel.app",
    image: "/stock-forecast.png",
  },
  {
    title: "Portfolio Site Generator (LLM-powered)",
    description:
      "A GPT-powered tool that auto-generates personal websites based on user input. Built with LangChain and Tailwind.",
    tech: ["LangChain", "Next.js", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/yourname/portfolio-gen",
    demo: "https://portfoliogenai.vercel.app",
    image: "/portfolio-gen.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f9fafb] text-gray-900 px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-sm uppercase tracking-widest text-[#4C6EF5] font-medium">
            Selected Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Things I’ve Built
          </h3>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            A collection of purposeful tools and scalable systems built with AI, ML, and full-stack precision.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-10 items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full h-64 relative rounded-xl overflow-hidden shadow-md border border-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 w-full space-y-4">
                <p className="text-xs uppercase text-[#2F9E44] font-semibold">
                  Featured Project
                </p>
                <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-xs text-[#364FC7] font-mono">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 text-gray-600 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                  >
                    <FiGithub size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
