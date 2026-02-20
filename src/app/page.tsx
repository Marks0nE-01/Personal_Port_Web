"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Main application page component.
 * Uses Framer Motion's useScroll and useSpring to create a smooth, 
 * interactive scroll progress bar at the top of the viewport.
 */
export default function Home() {
  const { scrollYProgress } = useScroll();
  // Create a spring-animated scale value based on scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
