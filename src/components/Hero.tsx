"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero component displaying the landing introduction.
 * Features animated background shapes, a playful entrance animation,
 * and a typing effect for the main headline.
 */
export default function Hero() {
  const text = "HI, I'm Mark";
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background playful elements - slow scaling and rotating blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl w-full space-y-8 text-center">
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
          A designer & developer building minimal, functional, and delightful web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-foreground text-background rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              View Work <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-8 py-4 rounded-full font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 md:left-20 w-12 h-12 border-2 border-accent/20 rounded-xl rotate-12 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 md:right-20 w-10 h-10 border-2 border-secondary/20 rounded-full hidden md:block"
      />
    </section>
  );
}
