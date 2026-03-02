"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export const projects = [
  {
    title: "Personal Portfolio",
    description: "Nontapat ngajuer personal portfolio website.",
    category: "Web Development",
    image: "https://cdn.oneesports.co.th/cdn-data/sites/3/2024/09/Screenshot-2024-09-18-152623-1-1024x545.jpg",
    link: "https://www.nontapat.page/",
    github: "https://github.com/Marks0nE-01/Personal_Port_Web",
    color: "bg-blue-50 dark:bg-blue-900/10"
  }
  

];

interface ProjectsGridProps {
  showHeader?: boolean;
  showViewAllButton?: boolean;
  animationDelay?: number;
  onOpenProjectsModal?: () => void;
}

export default function ProjectsGrid({ 
  showHeader = true, 
  showViewAllButton = true,
  animationDelay = 0,
  onOpenProjectsModal
}: ProjectsGridProps) {
  return (
    <div className="space-y-8">
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold" >Project </h2><h2 className="text-4xl md:text-5xl font-bold  text-[#FF0000]" >(under construction)</h2>
            <p className="text-lg text-foreground/60 max-w-md">
              A collection of projects 
            </p>
          </div>
          {showViewAllButton && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenProjectsModal}
              className="px-6 py-3 rounded-full border border-black/10 dark:border-white/10 font-medium"
            >
              View all projects
            </motion.button>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: animationDelay + index * 0.1 }}
            className={`group rounded-3xl overflow-hidden p-6 ${project.color} border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-all`}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative bg-white dark:bg-black/20">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.github} className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.link} className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground/40">{project.category}</span>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-foreground/60 line-clamp-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
