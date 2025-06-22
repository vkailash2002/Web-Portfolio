"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/resume.pdf", download: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90  backdrop-blur-md shadow-sm" : "bg-white "}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - More professional with hover effect */}
        <a 
          href="#"
          className="text-2xl font-bold tracking-tighter text-black dark:text-white group"
          onClick={() => setMenuOpen(false)}
        >
          <span className=" text-black group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            VK
          </span>
          <span className="text-blue-600 dark:text-blue-400">.</span>
        </a>

        {/* Desktop Links - More subtle hover effect */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium  hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
            >
              {name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>



        {/* Mobile Menu Button - More visible */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            className="text-gray-700 dark:text-gray-300 focus:outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Better styling and animation */}
      <div className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"}`}>
        <div className="px-6 flex flex-col space-y-4">
          {navLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300 mt-2"
          >
             Resume
          </a>
        </div>
      </div>
    </header>
  );
}