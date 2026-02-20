"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Sparkles, Terminal } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Code2, items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"], color: "bg-blue-500" },
  { name: "Design", icon: Palette, items: ["Figma", "UI/UX", "Brand Identity", "Prototyping"], color: "bg-rose-500" },
  { name: "Creative", icon: Sparkles, items: ["Three.js", "Animations", "SVG Art", "Interactive UX"], color: "bg-amber-500" },
  { name: "Tools", icon: Terminal, items: ["Git", "Vercel", "Node.js", "PostgreSQL"], color: "bg-emerald-500" },
];

/**
 * About component containing a bio and a skills grid.
 * Uses Framer Motion's whileInView to trigger entrance animations 
 * as the user scrolls down to this section.
 */
export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-foreground/60 leading-relaxed">
              I'm a self-taught developer with a passion for building <span className="text-primary font-medium italic">beautiful</span> and <span className="text-secondary font-medium italic">functional</span> digital products. 
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              My journey started with a curiosity for how things work on the web, which evolved into a professional career focused on creating delightful user experiences. I believe that good design is invisible, and great code is readable.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 rounded-3xl bg-card border border-black/5 dark:border-white/5 shadow-sm">
              <span className="block text-2xl font-bold">3+</span>
              <span className="text-sm text-foreground/40 uppercase tracking-wider font-bold">Years Experience</span>
            </div>
            <div className="px-6 py-4 rounded-3xl bg-card border border-black/5 dark:border-white/5 shadow-sm">
              <span className="block text-2xl font-bold">20+</span>
              <span className="text-sm text-foreground/40 uppercase tracking-wider font-bold">Projects Done</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-3xl bg-card border border-black/5 dark:border-white/5 shadow-sm group"
            >
              <div className={`w-12 h-12 rounded-2xl ${skill.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <skill.icon className={`w-6 h-6 text-foreground`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-foreground/60 flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${skill.color}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
