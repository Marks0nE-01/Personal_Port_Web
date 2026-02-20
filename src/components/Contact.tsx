"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, Send } from "lucide-react";

/**
 * Contact section featuring a call-to-action and a contact form.
 * The layout uses a responsive flexbox that stacks on mobile and 
 * splits into two columns on larger screens.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's build <br />
            <span className="text-primary italic">something</span> cool.
          </h2>
          <p className="text-xl text-background/60 max-w-md">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-4 rounded-2xl bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-background/5 p-8 rounded-3xl border border-background/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-background/60">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background/5 border border-background/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-background/60">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background/5 border border-background/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-background/60">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-background/5 border border-background/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.98]">
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-background/10 text-center text-background/40 text-sm">
        <p>© {new Date().getFullYear()} - Designed & Built with ❤️</p>
      </footer>
    </section>
  );
}
