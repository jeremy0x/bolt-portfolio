"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.a>
        
        <div className="flex items-center space-x-8">
          <motion.a
            href="#work"
            className="hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
          >
            Work
          </motion.a>
          <motion.a
            href="#about"
            className="hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
          >
            About
          </motion.a>
          <motion.a
            href="#contact"
            className="hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.a>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};