"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * ThemeToggle component that switches between light and dark modes.
 * Features a playful Framer Motion rotation and scale animation 
 * when the icon changes.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-2 w-10 h-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme === "dark" ? "dark" : "light"}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5 text-yellow-400" />
          ) : (
            <Sun className="w-5 h-5 text-orange-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
