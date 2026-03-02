"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, Github, Star } from "lucide-react";
import { useState } from "react";
import ProjectsModal from "./ProjectsModal";

const featuredProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
    tech: ["React", "", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "2", 
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Real-time weather tracking with interactive maps",
    image: "https://images.unsplash.com/photo-1592210452989-2e0a858c6571?w=400&h=250&fit=crop&auto=format",
    tech: ["React", "API Integration", "Charts.js"],
    github: "https://github.com",
    live: "https://example.com"
  }
];

interface StackModalProps {
  stack: {
    id: string;
    name: string;
    icon: any;
    color: string;
    description: string;
    image: string;
    technologies: string[];
    experienceLevel: string;
    yearsExperience: string;
    projectsCompleted: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StackModal({ stack, isOpen, onClose }: StackModalProps) {
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  if (!stack) return null;

  console.log('StackModal rendered, isProjectsModalOpen:', isProjectsModalOpen);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="bg-background rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
                {/* Header without image */}
                <div className="relative p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-black hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  {/* Title */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center`}>
                      <stack.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold">{stack.name}</h2>
                      <p className="text-foreground/80 text-lg max-w-2xl mt-2">{stack.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-16rem)] p-8">
                  <div className="space-y-8">
                    {/* Technologies Section */}
                    <div>
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Technologies & Tools
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {stack.technologies.map((tech, index) => (
                          <div
                            key={tech}
                            className="p-4 rounded-xl bg-card border border-black/5 dark:border-white/5"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stack.color}`} />
                              <span className="font-medium">{tech}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    
                    {/* Experience Level */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                        <div className="text-3xl font-bold text-primary mb-2">{stack.experienceLevel}</div>
                        <div className="text-sm text-foreground/60">Proficiency Level</div>
                      </div>
                      
                      <div className="p-6 rounded-2xl bg-card border border-black/5 dark:border-white/5">
                        <div className="text-3xl font-bold mb-2">{stack.yearsExperience}</div>
                        <div className="text-sm text-foreground/60">Hands-on Experience</div>
                      </div>
                      
                      <div className="p-6 rounded-2xl bg-card border border-black/5 dark:border-white/5">
                        <div className="text-3xl font-bold mb-2">{stack.projectsCompleted}</div>
                        <div className="text-sm text-foreground/60">Projects Completed</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      
                      
                      <button
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl bg-card border border-black/5 dark:border-white/5 font-medium hover:bg-accent transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
    
    <ProjectsModal 
      isOpen={isProjectsModalOpen}
      onClose={() => setIsProjectsModalOpen(false)}
    />
    </>
  );
}
