"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Star } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    id: "2", 
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Real-time weather tracking with interactive maps and forecasting features",
    image: "https://images.unsplash.com/photo-1592210452989-2e0a858c6571?w=600&h=400&fit=crop&auto=format",
    tech: ["React", "API Integration", "Charts.js", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics and engagement tracking",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    tech: ["Vue.js", "D3.js", "Node.js", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  },
  {
    id: "5",
    title: "Video Streaming Platform",
    description: "Live streaming platform with chat and video-on-demand features",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop&auto=format",
    tech: ["React", "WebRTC", "Node.js", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  },
  {
    id: "6",
    title: "AI Content Generator",
    description: "AI-powered content generation tool with multiple templates and customization",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false
  }
];

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  console.log('ProjectsModal rendered, isOpen:', isOpen);
  
  if (!isOpen) return null;

  return (
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
              className="pointer-events-auto max-w-6xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="bg-background rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold">All Projects</h2>
                    <button
                      onClick={onClose}
                      className="w-10 h-10 rounded-full bg-card border border-black/5 dark:border-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-foreground/60">
                    Explore my complete portfolio of projects and experiments
                  </p>
                </div>
                
                {/* Projects Grid */}
                <div className="p-8 overflow-y-auto max-h-[60vh]">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                      <div
                        key={project.id}
                        className="group rounded-2xl bg-card border border-black/5 dark:border-white/5 overflow-hidden hover:shadow-lg transition-all"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          {project.featured && (
                            <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                              Featured
                            </div>
                          )}
                        </div>
                        
                        {/* Project Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>
                          
                          {/* Links */}
                          <div className="flex gap-2">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 bg-card border border-black/5 dark:border-white/5 rounded-lg text-sm font-medium hover:bg-accent transition-colors flex items-center justify-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
