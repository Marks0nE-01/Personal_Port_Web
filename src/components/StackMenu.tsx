"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  Cloud,
  Server,
  Cpu
} from "lucide-react";

const stacks = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    description: "Modern web development technologies",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    experienceLevel: "Beginner",
    yearsExperience: "0.5 Years",
    projectsCompleted: "2"
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    description: "Server-side development and APIs",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&auto=format",
    technologies: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs"],
    experienceLevel: "Beginner",
    yearsExperience: "0.5 Years",
    projectsCompleted: "3"
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    description: "Data management and storage solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
    technologies: ["PostgreSQL", "MongoDB", "Firebase", "MySQL"],
    experienceLevel: "Beginner",
    yearsExperience: "0.5 Years",
    projectsCompleted: "2"
  },
  {
    id: "design",
    name: "Design",
    icon: Palette,
    color: "from-rose-500 to-orange-500",
    description: "UI/UX design and prototyping",
    image: "https://images.unsplash.com/photo-1559028006-44a35f9a9c4d?w=400&h=300&fit=crop&auto=format",
    technologies: ["Figma", "Adobe Designer", "UI/UX", "Prototyping"],
    experienceLevel: "Beginner",
    yearsExperience: "0.5 Years",
    projectsCompleted: "2"
  },
  
  {
    id: "cloud",
    name: "Cloud",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
    description: "Cloud services and deployment",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&auto=format",
    technologies: ["AWS", "Vercel", "Docker", "CI/CD"],
    experienceLevel: "Beginner",
    yearsExperience: "0.5 Years",
    projectsCompleted: "1"
  },
  {
    id: "devops",
    name: "DevOps",
    icon: Cpu,
    color: "from-amber-500 to-yellow-500",
    description: "Development operations and automation",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&auto=format",
    technologies: ["Git", "GitHub Actions", "Docker", "Kubernetes"],
    experienceLevel: "Beginner",
    yearsExperience: "0.5 Years",
    projectsCompleted: "1"
  },
  
];

interface StackMenuProps {
  onStackSelect: (stack: typeof stacks[0]) => void;
}

export default function StackMenu({ onStackSelect }: StackMenuProps) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Explore my technical expertise across different domains of modern software development
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stacks.map((stack, index) => (
          <motion.div
            key={stack.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.01, duration: 0.3 }}
            onClick={() => onStackSelect(stack)}
            className="cursor-pointer group"
          >
            <div className="relative p-6 rounded-2xl bg-card border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center mb-4 mx-auto`}>
                <stack.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-center mb-2">{stack.name}</h3>
              <p className="text-sm text-foreground/60 text-center line-clamp-2">
                {stack.description}
              </p>
              
              <div className="mt-4 flex justify-center">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export { stacks };
