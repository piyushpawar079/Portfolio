"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const showMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 6, projects.length));
  };

  return (
    <section id="projects" className="py-20 scroll-mt-16 bg-muted/30">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one demonstrates different skills and 
            technologies I've worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-12 flex justify-center">
            <Button onClick={showMoreProjects} size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects