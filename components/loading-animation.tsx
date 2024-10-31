"use client";

import { motion } from "framer-motion";

export const LoadingAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => {
        document.body.style.overflow = "visible";
      }}
      className="loading-animation"
    >
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
};