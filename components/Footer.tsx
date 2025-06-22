"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 px-6 py-10 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright + Signature */}
        <div className="text-sm text-gray-600 font-mono tracking-tight">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800">Venkata Kailash</span>. Built with{" "}
          <span className="text-pink-500">♥</span> using{" "}
          <span className="font-semibold text-gray-700">Next.js</span> &{" "}
          <span className="font-semibold text-gray-700">Tailwind CSS</span>.
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-5">
          <a
            href="https://github.com/vkailash2002"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/venkata-kailash-083684328/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:venkatakailash.cr@gmail.com"
            aria-label="Email"
            className="text-gray-600 hover:text-rose-600 transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
