"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="project-card cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
            >
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm mt-2">{project.category}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.category}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video mt-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};