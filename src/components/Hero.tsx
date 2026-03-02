"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import FloatingProjectsModal from "./FloatingProjectsModal";

/**
 * Hero component displaying the landing introduction.
 * Features animated background shapes, a playful entrance animation,
 * and a typing effect for the main headline.
 */
export default function Hero() {
  const text = "HI, I'm Mark";
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      <div className="max-w-4xl w-full space-y-8 text-center">
        {/* Animated image above the text */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-background shadow-lg"
        >
          <motion.img
            src="/favicon.ico"
            alt="Profile"
            className="w-full h-full object-cover"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1,
                  ease: "easeIn"
                }}
                className={char === "M" || char === "a" || char === "r" || char === "k" ? "playful-underline italic" : ""}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="inline-block w-[4px] h-[60px] md:h-[80px] bg-primary ml-2 align-middle"
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto"
        >
        developer & operator building software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => setIsProjectsModalOpen(true)}
            className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <a href="#contact" className="px-8 py-4 rounded-full font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors inline-block">
            Contact Me
          </a>
        </motion.div>
      </div>

      
      {/* Floating Projects Modal */}
      <FloatingProjectsModal 
        isOpen={isProjectsModalOpen} 
        onClose={() => setIsProjectsModalOpen(false)} 
      />
    </section>
  );
}
