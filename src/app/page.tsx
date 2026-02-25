"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StackMenu from "@/components/StackMenu";
import StackModal from "@/components/StackModal";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingProjectsModal from "@/components/FloatingProjectsModal";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { stacks } from "@/components/StackMenu";

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

  const [selectedStack, setSelectedStack] = useState<typeof stacks[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  const handleStackSelect = (stack: typeof stacks[0]) => {
    setSelectedStack(stack);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStack(null), 300);
  };

  return (
    <main className="min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <About />
      <StackMenu onStackSelect={handleStackSelect} />
      <Projects onOpenProjectsModal={() => setIsProjectsModalOpen(true)} />
      <Contact />
      
      <StackModal 
        stack={selectedStack}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
      <FloatingProjectsModal 
        isOpen={isProjectsModalOpen} 
        onClose={() => setIsProjectsModalOpen(false)} 
      />
    </main>
  );
}
