"use client";

import ProjectsGrid from "./ProjectsGrid";

interface ProjectsProps {
  onOpenProjectsModal: () => void;
}

/**
 * Projects section displaying a grid of work samples.
 * Each project card features a hover effect that reveals GitHub and Live links.
 */
export default function Projects({ onOpenProjectsModal }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <ProjectsGrid onOpenProjectsModal={onOpenProjectsModal} />
    </section>
  );
}
