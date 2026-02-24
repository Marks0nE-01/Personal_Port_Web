"use client";

import ProjectsGrid from "./ProjectsGrid";

/**
 * Projects section displaying a grid of work samples.
 * Each project card features a hover effect that reveals GitHub and Live links.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <ProjectsGrid />
    </section>
  );
}
