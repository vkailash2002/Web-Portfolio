"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 z-50  transition-colors duration-300  ">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl  font-bold tracking-tight text-black">
          VK
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-black hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Desktop Right Side: Resume + Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-sm  text-sm font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Resume
          </a>
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-md px-6 py-4 flex flex-col items-center space-y-4 transition-all duration-300">
          {navLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-600 border border-blue-600 px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
// This code defines a responsive Navbar component with links, a resume button, and a theme toggle.