"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, Clock, MapPin } from "lucide-react";

const availability = [
  { icon: Clock, label: "Available for hire", status: true },
  { icon: MapPin, label: "Remote & Local", status: true }
];

/**
 * Contact section featuring availability status and social media links.
 * Replaces traditional form with more engaging content.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's build <br />
            <span className="text-primary italic">something</span> cool.
          </h2>
          <p className="text-xl text-foreground/60 max-w-md">
            I'm passionate about creating exceptional digital experiences. Let's collaborate on your next project!
          </p>
        </div>

        <div className="flex-1 space-y-8">
          {/* Availability Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 bg-foreground/5 p-8 rounded-3xl border border-foreground/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold">Availability</h3>
            <div className="space-y-3">
              {availability.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                  <div className={`w-3 h-3 rounded-full ml-auto ${
                    item.status ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                </div>
              ))}
            </div>
            <motion.a
              href="mailto:your-email@example.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-4 bg-primary text-white rounded-xl font-bold text-center hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 bg-foreground/5 p-8 rounded-3xl border border-foreground/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold">Connect</h3>
            <p className="text-foreground/60">Find me on social media</p>
            <div className="flex gap-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-4 rounded-2xl bg-foreground/10 hover:bg-foreground/20 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-foreground/10 text-center text-foreground/40 text-sm">
        <p>© {new Date().getFullYear()} - Mark</p>
      </footer>
    </section>
  );
}
