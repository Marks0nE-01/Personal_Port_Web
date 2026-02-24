"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ProjectsGrid from "./ProjectsGrid";

interface FloatingProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FloatingProjectsModal({ isOpen, onClose }: FloatingProjectsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.3 
            }}
            className="fixed inset-4 md:inset-8 lg:inset-12 bg-background rounded-3xl shadow-2xl z-50 overflow-hidden border border-black/5 dark:border-white/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">My Projects</h2>
                <p className="text-foreground/60 mt-1">A collection of my work and experiments</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(100vh-120px)] p-6">
              <ProjectsGrid 
                showHeader={false} 
                showViewAllButton={false}
                animationDelay={0}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
