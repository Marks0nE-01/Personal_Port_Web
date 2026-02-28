"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];


/**
 * Floating Navigation Bar component.
 * Features a dynamic hover effect using Framer Motion's layoutId
 * to move a background pill shape between menu items.
 */
export default function Navbar() {
  // Track which navigation item is currently hovered to show the background pill
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full border border-black/5 dark:border-white/5 shadow-sm"
      >
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleSmoothScroll(e, item.href)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap cursor-pointer"
          >
            {item.name}
            {hoveredIndex === index && (
              <motion.div
                layoutId="nav-hover"
                className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </a>
        ))}
        <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />
        <ThemeToggle />
      </motion.div>
    </nav>
  );
}
