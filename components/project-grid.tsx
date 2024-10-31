"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "./project-card";

const projects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Web Design",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Mobile App",
    category: "Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Branding", "UI/UX", "Development", "Photography"];

export const ProjectGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};