"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "UI Design", level: 90 },
  { name: "UX Design", level: 85 },
  { name: "Branding", level: 80 },
  { name: "Typography", level: 85 },
  { name: "Motion Design", level: 75 },
];

export const Skills = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here's an overview of my technical skills and areas of expertise in
          design and development.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};