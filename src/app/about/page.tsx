"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ opacity: 1 }}
      >
        hi
      </motion.h1>
    </div>
  );
}
