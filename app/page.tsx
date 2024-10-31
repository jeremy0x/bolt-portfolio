"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProjectGrid } from "@/components/project-grid";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { LoadingAnimation } from "@/components/loading-animation";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main ref={containerRef} className="relative">
      <LoadingAnimation />
      <div className="grain" />
      
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="h-screen flex items-center justify-center relative"
      >
        <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold"
          >
            Creative Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            Crafting digital experiences that inspire and engage
          </motion.p>
        </div>
      </motion.section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <ProjectGrid />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <About />
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </main>
  );
}