"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5,
      }}
    >
      <div className="w-full h-full bg-white rounded-full" />
    </motion.div>
  );
};