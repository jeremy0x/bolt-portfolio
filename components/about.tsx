"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Designer portrait"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground">
            I'm a passionate designer with over 5 years of experience in creating
            beautiful and functional digital experiences. My approach combines
            creativity with user-centered design principles to deliver impactful
            solutions.
          </p>
          <p className="text-muted-foreground">
            Throughout my career, I've had the opportunity to work with various
            clients across different industries, helping them achieve their goals
            through thoughtful design and innovation.
          </p>
          <motion.button
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};