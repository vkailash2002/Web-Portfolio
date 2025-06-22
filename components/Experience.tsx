"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Google",
    location: "Hyderabad, India",
    duration: "May 2023 – Aug 2023",
    logo: "/google.png",
    impact: [
      "Reduced API latency by 35% in an internal ML pipeline used across teams.",
      "Designed and deployed scalable infrastructure to process 5M+ records/day.",
      "Authored detailed design specs reviewed by staff-level engineers.",
    ],
    tech: ["Golang", "gRPC", "Kubernetes", "BigQuery"],
  },
  {
    role: "Machine Learning Intern",
    company: "Apple",
    location: "Bangalore, India",
    duration: "Jan 2024 – Apr 2024",
    logo: "/apple.png",
    impact: [
      "Built on-device ML models optimizing iOS text prediction performance.",
      "Improved model inference speed by 22% with quantization techniques.",
      "Collaborated with cross-functional teams to test and deploy ML APIs.",
    ],
    tech: ["Swift", "CoreML", "TensorFlow Lite", "Python"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-28 px-6 text-gray-900 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
            Experience
          </h2>
          <h3 className="text-4xl font-extrabold text-gray-900">
            Professional Timeline
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mt-3 text-base">
            From building scalable systems to deploying AI models — a journey through innovation at the world’s top tech firms.
          </p>
          
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-100 hidden md:block" />

          {/* Cards */}
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-20 flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow z-10 hidden md:block" />
 
                {/* Card */}
                <div
                  className={`bg-[#1e1e24] bg-opacity-90 backdrop-blur-md shadow-xl hover:shadow-2xl border border-gray-200 p-6 rounded-xl w-full md:w-[46%] relative transition duration-300 ease-in-out ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Logo */}
                  <div className="absolute -top-6 left-6 w-14 h-14 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center overflow-hidden">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>

                  <h4 className="text-xl text-white font-bold mt-6">{exp.role}</h4>
                  <p className="text-sm text-white font-medium mt-1">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-xs text-white/60 mb-4">{exp.duration}</p>

                  <ul className="list-disc text-teal-400 font-mono pl-5 text-sm space-y-1">
                    {exp.impact.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4 text-xs text-blue-700 font-mono">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 border border-blue-200 px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 text-[7rem] text-blue-100 pointer-events-none select-none hidden md:block"
      >
        →
      </motion.div>
    </section>
  );
}
