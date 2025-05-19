"use client";
import { motion } from "motion/react";

export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
    >
      <main className="main-container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </main>
    </motion.div>
  );
}
