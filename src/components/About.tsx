"use client";

import { motion } from "framer-motion";

/**
 * About component containing a bio.
 * Uses Framer Motion's whileInView to trigger entrance animations 
 * as the user scrolls down to this section.
 */
export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          
          <p className="text-lg text-foreground/60 leading-relaxed">
            Recent IT Graduate and aspiring Software Developer with a passion for building robust applications. Skilled in software testing and development, I am looking for a fast-paced environment where I can grow my technical expertise and contribute to impactful software projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <div className="px-6 py-4 rounded-3xl bg-card border border-black/5 dark:border-white/5 shadow-sm">
            <span className="block text-2xl font-bold">0.5</span>
            <span className="text-sm text-foreground/40 uppercase tracking-wider font-bold">Years Experience</span>
          </div>
          <div className="px-6 py-4 rounded-3xl bg-card border border-black/5 dark:border-white/5 shadow-sm">
            <span className="block text-2xl font-bold">3</span>
            <span className="text-sm text-foreground/40 uppercase tracking-wider font-bold">Projects Done</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
