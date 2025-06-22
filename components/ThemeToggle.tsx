"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="relative w-14 h-8 flex items-center rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center shadow-md
        ${isDark ? "translate-x-6 bg-black text-yellow-300" : "translate-x-0 bg-white text-gray-900"}`}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
    </button>
  );
}
