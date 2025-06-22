"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Animation configs
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.8,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Headline sentence
const sentence =
  " I build intelligent systems that learn, scale, and deliver value.";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-neutral-900 flex items-center justify-center px-6 py-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="max-w-4xl w-full text-center space-y-8"
      >
        {/* Identity Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 text-base sm:text-lg tracking-normal font-medium text-gray-600"
        >
          <span role="img" aria-label="wave" className="text-xl animate-wave">
            👋
          </span>
          <span>
            Hello, I’m{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-900 font-semibold border-b-2 border-blue-600 pb-0.5"
            >
              Venkata Kailash
            </motion.span>
          </span>
        </motion.div>

        {/* Roles */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="text-base sm:text-lg font-medium text-gray-600 tracking-normal text-center"
        >
          <span className="inline-block px-2 border-r border-gray-300">
            AI Engineer
          </span>
          <span className="inline-block px-2 border-r border-gray-300">
            Data Scientist
          </span>
          <span className="inline-block px-2">Full-Stack Developer</span>
        </motion.p>

        {/* Vision Title - Enhanced + Animated */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight"
        >
          {sentence.split(" ").map((wordStr, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-2">
              {wordStr}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-700 font-medium"
        >
          Bridging AI, engineering, and product thinking to solve meaningful challenges at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 pt-6"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-white bg-gray-900 hover:bg-gray-800 transition font-medium"
          >
            See My Work
            <FiArrowRight className="text-lg" />
          </a>
          <a
            href="mailto:kailash@example.com"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-gray-900 border border-gray-900 hover:bg-gray-100 transition font-medium"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
